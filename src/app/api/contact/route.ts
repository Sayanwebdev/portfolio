import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

// Create HTML email template
function createEmailHTML(name: string, email: string, subject: string, message: string): string {
  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Contact Form Submission</title>
</head>
<body style="margin: 0; padding: 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f9fafb;">
  <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="background-color: #f9fafb;">
    <tr>
      <td style="padding: 40px 20px;">
        <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="600" style="margin: 0 auto; max-width: 600px;">
          
          <!-- Header -->
          <tr>
            <td style="background: linear-gradient(135deg, #9333ea 0%, #ec4899 100%); border-radius: 16px 16px 0 0; padding: 32px; text-align: center;">
              <h1 style="color: #ffffff; font-size: 28px; font-weight: bold; margin: 0; letter-spacing: -0.5px;">
                New Contact Form Submission
              </h1>
              <p style="color: rgba(255, 255, 255, 0.9); font-size: 16px; margin: 12px 0 0;">
                You have received a new message from your portfolio
              </p>
            </td>
          </tr>

          <!-- Content -->
          <tr>
            <td style="background-color: #ffffff; border-radius: 0 0 16px 16px; padding: 32px; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);">
              
              <!-- Contact Details Section -->
              <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                <tr>
                  <td>
                    <h2 style="color: #1f2937; font-size: 18px; font-weight: 600; margin: 0 0 16px; padding-bottom: 8px; border-bottom: 2px solid #e5e7eb;">
                      Contact Details
                    </h2>
                  </td>
                </tr>
              </table>

              <!-- Contact Info Table -->
              <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="margin-bottom: 24px;">
                <tr>
                  <td style="padding: 12px 0; color: #6b7280; font-size: 14px; font-weight: 500; width: 100px;">
                    Name:
                  </td>
                  <td style="padding: 12px 0; color: #1f2937; font-size: 14px;">
                    ${name}
                  </td>
                </tr>
                <tr>
                  <td style="padding: 12px 0; color: #6b7280; font-size: 14px; font-weight: 500;">
                    Email:
                  </td>
                  <td style="padding: 12px 0;">
                    <a href="mailto:${email}" style="color: #9333ea; font-size: 14px; text-decoration: none;">
                      ${email}
                    </a>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 12px 0; color: #6b7280; font-size: 14px; font-weight: 500;">
                    Subject:
                  </td>
                  <td style="padding: 12px 0; color: #1f2937; font-size: 14px;">
                    ${subject}
                  </td>
                </tr>
              </table>

              <!-- Message Section -->
              <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                <tr>
                  <td>
                    <h2 style="color: #1f2937; font-size: 18px; font-weight: 600; margin: 0 0 16px; padding-bottom: 8px; border-bottom: 2px solid #e5e7eb;">
                      Message
                    </h2>
                  </td>
                </tr>
                <tr>
                  <td style="background-color: #f9fafb; border-radius: 12px; padding: 20px; border: 1px solid #e5e7eb;">
                    <p style="color: #374151; font-size: 14px; line-height: 1.7; margin: 0; white-space: pre-wrap;">
                      ${message}
                    </p>
                  </td>
                </tr>
              </table>

              <!-- Reply Button -->
              <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                <tr>
                  <td style="padding-top: 32px; text-align: center;">
                    <a href="mailto:${email}?subject=Re: ${subject}" style="display: inline-block; background: linear-gradient(135deg, #9333ea 0%, #ec4899 100%); color: #ffffff; padding: 14px 32px; border-radius: 8px; text-decoration: none; font-size: 14px; font-weight: 600; box-shadow: 0 4px 6px -1px rgba(147, 51, 234, 0.4);">
                      Reply to ${name}
                    </a>
                  </td>
                </tr>
              </table>

            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="text-align: center; padding-top: 24px;">
              <p style="color: #9ca3af; font-size: 12px; margin: 0;">
                This email was sent from your portfolio contact form.
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `;
}

// Create confirmation email template for the sender
function createConfirmationEmailHTML(name: string): string {
  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Message Received - Thank You!</title>
</head>
<body style="margin: 0; padding: 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f9fafb;">
  <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="background-color: #f9fafb;">
    <tr>
      <td style="padding: 40px 20px;">
        <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="600" style="margin: 0 auto; max-width: 600px;">
          
          <!-- Header -->
          <tr>
            <td style="background: linear-gradient(135deg, #9333ea 0%, #ec4899 100%); border-radius: 16px 16px 0 0; padding: 32px; text-align: center;">
              <h1 style="color: #ffffff; font-size: 28px; font-weight: bold; margin: 0; letter-spacing: -0.5px;">
                Thank You for Reaching Out!
              </h1>
              <p style="color: rgba(255, 255, 255, 0.9); font-size: 16px; margin: 12px 0 0;">
                Your message has been successfully received
              </p>
            </td>
          </tr>

          <!-- Content -->
          <tr>
            <td style="background-color: #ffffff; border-radius: 0 0 16px 16px; padding: 32px; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);">
              
              <p style="color: #1f2937; font-size: 16px; line-height: 1.7; margin: 0 0 20px;">
                Hi ${name},
              </p>

              <p style="color: #374151; font-size: 15px; line-height: 1.7; margin: 0 0 20px;">
                Thank you for contacting me through my portfolio! I've received your message and will get back to you as soon as possible.
              </p>

              <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="margin: 24px 0;">
                <tr>
                  <td style="background: linear-gradient(135deg, rgba(147, 51, 234, 0.1) 0%, rgba(236, 72, 153, 0.1) 100%); border-left: 4px solid #9333ea; border-radius: 8px; padding: 20px;">
                    <p style="color: #374151; font-size: 14px; line-height: 1.6; margin: 0;">
                      <strong style="color: #1f2937;">💡 What happens next?</strong><br>
                      I typically respond within 24-48 hours. If your inquiry is urgent, feel free to reach out through my other contact channels.
                    </p>
                  </td>
                </tr>
              </table>

              <p style="color: #374151; font-size: 15px; line-height: 1.7; margin: 0 0 20px;">
                I appreciate your interest and look forward to connecting with you!
              </p>

              <p style="color: #374151; font-size: 15px; line-height: 1.7; margin: 0;">
                Best regards,<br>
                <strong style="color: #1f2937;">Sayan</strong>
              </p>

            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="text-align: center; padding-top: 24px;">
              <p style="color: #9ca3af; font-size: 12px; margin: 0;">
                This is an automated confirmation email from the portfolio contact form.
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `;
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    // Validation
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email address" },
        { status: 400 }
      );
    }

    // Create Nodemailer transporter with Gmail
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    // Send email to yourself (notification)
    const notificationEmail = await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.GMAIL_USER}>`,
      to: process.env.GMAIL_USER, // Sends to your own email
      replyTo: email,
      subject: `Portfolio Contact: ${subject}`,
      html: createEmailHTML(name, email, subject, message),
    });

    // Send confirmation email to the sender
    await transporter.sendMail({
      from: `"Sayan's Portfolio" <${process.env.GMAIL_USER}>`,
      to: email,
      subject: "Thank you for contacting me!",
      html: createConfirmationEmailHTML(name),
    });

    console.log("Emails sent:", notificationEmail.messageId);

    return NextResponse.json(
      { message: "Email sent successfully", id: notificationEmail.messageId },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}
