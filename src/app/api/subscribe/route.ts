import { NextRequest, NextResponse } from "next/server";

// Email validation regex
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: NextRequest) {
  try {
    // Check for MailerLite API key and group ID
    const apiKey = process.env.MAILERLITE_API_KEY;
    const groupId = process.env.MAILERLITE_WAITLIST_GROUP_ID;

    if (!apiKey) {
      console.error(
        "Missing MAILERLITE_API_KEY environment variable. Please ensure MAILERLITE_API_KEY is set in your .env.local file."
      );
      return NextResponse.json(
        { error: "Server configuration error" },
        { status: 500 }
      );
    }

    if (!groupId) {
      console.error(
        "Missing MAILERLITE_WAITLIST_GROUP_ID environment variable. Please ensure MAILERLITE_WAITLIST_GROUP_ID is set in your .env.local file."
      );
      return NextResponse.json(
        { error: "Server configuration error" },
        { status: 500 }
      );
    }

    const body = await request.json();
    const { email, utmCampaign, userAgent } = body;

    // Validate email
    if (!email || typeof email !== "string") {
      return NextResponse.json(
        { error: "Email is required" },
        { status: 400 }
      );
    }

    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    // Prepare subscriber data for MailerLite
    const subscriberData: {
      email: string;
      groups?: string[];
      fields?: Record<string, string>;
    } = {
      email: email.toLowerCase().trim(),
      groups: [groupId], // Add subscriber to Waitlist group
    };

    // Add custom fields if available
    const fields: Record<string, string> = {};
    if (utmCampaign) {
      fields.utm_campaign = utmCampaign;
    }
    if (userAgent) {
      fields.user_agent = userAgent;
    }
    if (Object.keys(fields).length > 0) {
      subscriberData.fields = fields;
    }

    // Send to MailerLite API
    const response = await fetch(
      "https://connect.mailerlite.com/api/subscribers",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiKey}`,
          Accept: "application/json",
        },
        body: JSON.stringify(subscriberData),
      }
    );

    const responseData = await response.json();

    // Handle duplicate email (MailerLite returns 200 for existing subscribers)
    if (response.ok) {
      return NextResponse.json({ success: true }, { status: 201 });
    }

    // MailerLite returns 422 for validation errors (including duplicates in some cases)
    if (response.status === 422) {
      // Check if it's a duplicate email error
      if (
        responseData.message &&
        responseData.message.toLowerCase().includes("already")
      ) {
        return NextResponse.json(
          { error: "This email is already on the waitlist" },
          { status: 409 }
        );
      }
      return NextResponse.json(
        { error: "Invalid email address" },
        { status: 400 }
      );
    }

    // Handle other errors
    console.error("MailerLite API error:", responseData);
    return NextResponse.json(
      { error: "Failed to join waitlist. Please try again." },
      { status: 500 }
    );
  } catch (err) {
    console.error("Subscribe API error:", err);
    return NextResponse.json(
      { error: "An unexpected error occurred" },
      { status: 500 }
    );
  }
}
