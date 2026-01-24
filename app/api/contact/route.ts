import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { name, company, phone, email, message } = await req.json();

    // Basic validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, message: "Missing required fields" },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER, // Admin Gmail
        pass: process.env.GMAIL_PASS, // App password
      },
    });

    /* =========================================================
       1️⃣ ADMIN NOTIFICATION EMAIL
    ========================================================= */
    await transporter.sendMail({
      from: `"Event Core Contact" <${process.env.GMAIL_USER}>`,
      to: process.env.GMAIL_USER,
      replyTo: email,
      subject: `📩 New Contact Message from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; background:#f4f4f4;">
          <div style="max-width:600px; margin:auto; background:#fff; border-radius:8px; overflow:hidden; box-shadow:0 4px 12px rgba(0,0,0,.1);">

            <div style="background:#D19537; padding:16px; text-align:center; color:#fff; font-size:20px; font-weight:bold;">
              New Contact Message
            </div>

            <div style="padding:24px; color:#333;">
              <p>You’ve received a new inquiry via the <b>Contact Us</b> form.</p>

              <table style="width:100%; border-collapse:collapse; margin-top:12px;">
                <tr><td style="padding:8px; border:1px solid #ddd; font-weight:bold;">Name</td><td style="padding:8px; border:1px solid #ddd;">${name}</td></tr>
                <tr><td style="padding:8px; border:1px solid #ddd; font-weight:bold;">Company</td><td style="padding:8px; border:1px solid #ddd;">${company || "-"}</td></tr>
                <tr><td style="padding:8px; border:1px solid #ddd; font-weight:bold;">Phone</td><td style="padding:8px; border:1px solid #ddd;">${phone || "-"}</td></tr>
                <tr><td style="padding:8px; border:1px solid #ddd; font-weight:bold;">Email</td><td style="padding:8px; border:1px solid #ddd;">${email}</td></tr>
              </table>

              <div style="margin-top:20px; padding:16px; background:#fdf5eb; border-left:4px solid #D19537;">
                <b>Message:</b><br/>
                ${message}
              </div>
            </div>

            <div style="background:#f4f4f4; padding:12px; text-align:center; font-size:12px; color:#777;">
              © ${new Date().getFullYear()} Event Core — Admin Notification
            </div>
          </div>
        </div>
      `,
    });

    /* =========================================================
       2️⃣ USER CONFIRMATION EMAIL
    ========================================================= */
    await transporter.sendMail({
      from: `"Event Core Support" <${process.env.GMAIL_USER}>`,
      to: email,
      subject: "✅ We've received your message – Event Core",
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; background:#f4f4f4;">
          <div style="max-width:600px; margin:auto; background:#fff; border-radius:8px; overflow:hidden; box-shadow:0 4px 12px rgba(0,0,0,.1);">

            <div style="background:#D19537; padding:18px; text-align:center; color:#fff; font-size:22px; font-weight:bold;">
              Thank You for Contacting Event Core
            </div>

            <div style="padding:24px; color:#333;">
              <p>Hi <b>${name}</b>,</p>

              <p>
                Thank you for reaching out to <b>Event Core</b>.
                We’ve successfully received your message and our team will contact you as soon as possible.
              </p>

              <p><b>Your submitted details:</b></p>

              <table style="width:100%; border-collapse:collapse;">
                <tr><td style="padding:8px; border:1px solid #ddd; font-weight:bold;">Name</td><td style="padding:8px; border:1px solid #ddd;">${name}</td></tr>
                <tr><td style="padding:8px; border:1px solid #ddd; font-weight:bold;">Company</td><td style="padding:8px; border:1px solid #ddd;">${company || "-"}</td></tr>
                <tr><td style="padding:8px; border:1px solid #ddd; font-weight:bold;">Phone</td><td style="padding:8px; border:1px solid #ddd;">${phone || "-"}</td></tr>
                <tr><td style="padding:8px; border:1px solid #ddd; font-weight:bold;">Email</td><td style="padding:8px; border:1px solid #ddd;">${email}</td></tr>
              </table>

              <div style="margin-top:20px; padding:16px; background:#fdf5eb; border-left:4px solid #D19537;">
                <b>Your Message:</b><br/>
                ${message}
              </div>

              <p style="margin-top:20px;">
                Best regards,<br/>
                <b>Event Core Support Team</b>
              </p>
            </div>

            <div style="background:#f4f4f4; padding:12px; text-align:center; font-size:12px; color:#777;">
              © ${new Date().getFullYear()} Event Core. All rights reserved.
            </div>
          </div>
        </div>
      `,
    });

    return NextResponse.json({
      success: true,
      message: "Emails sent successfully",
    });
  } catch (error) {
    console.error("Contact email error:", error);
    return NextResponse.json(
      { success: false, message: "Failed to send message" },
      { status: 500 }
    );
  }
}


// import { NextResponse } from "next/server";
// import nodemailer from "nodemailer";

// export async function POST(req: Request) {
//   try {
//     const { name, company, phone, email, message } = await req.json();

//     const transporter = nodemailer.createTransport({
//       service: "gmail",
//       auth: {
//         user: process.env.GMAIL_USER, // your gmail
//         pass: process.env.GMAIL_PASS, // your app password
//       },
//     });

//     await transporter.sendMail({
//       from: `"Event Core Contact" <${process.env.GMAIL_USER}>`,
//       to: process.env.GMAIL_USER,
//       replyTo: email, // ✅ allows you to reply directly to the sender
//       subject: `📩 New Contact Message from ${name}`,
//       html: `
//         <div style="font-family: Arial, sans-serif; padding: 20px; background-color: #f4f4f4;">
//           <div style="max-width: 600px; margin: auto; background: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.1);">
            
//             <!-- Header -->
//             <div style="background-color: #D19537; padding: 16px; text-align: center; color: #fff; font-size: 20px; font-weight: bold;">
//               ✨ New Contact Message
//             </div>
            
//             <!-- Body -->
//             <div style="padding: 24px; color: #333;">
//               <p style="font-size: 16px; margin-bottom: 12px;">
//                 You have received a new inquiry from the <b>Contact Us</b> form.
//               </p>

//               <table style="width: 100%; border-collapse: collapse; margin-top: 12px;">
//                 <tr>
//                   <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold; background:#fafafa;">Name</td>
//                   <td style="padding: 8px; border: 1px solid #ddd;">${name}</td>
//                 </tr>
//                 <tr>
//                   <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold; background:#fafafa;">Company</td>
//                   <td style="padding: 8px; border: 1px solid #ddd;">${company}</td>
//                 </tr>
//                 <tr>
//                   <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold; background:#fafafa;">Phone</td>
//                   <td style="padding: 8px; border: 1px solid #ddd;">${phone}</td>
//                 </tr>
//                 <tr>
//                   <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold; background:#fafafa;">Email</td>
//                   <td style="padding: 8px; border: 1px solid #ddd;">${email}</td>
//                 </tr>
//               </table>

//               <div style="margin-top: 20px; padding: 16px; border-left: 4px solid #D19537; background: #fdf5eb; border-radius: 4px;">
//                 <p style="margin: 0; font-size: 15px; line-height: 1.6;">
//                   <b>Message:</b><br/>
//                   ${message}
//                 </p>
//               </div>
//             </div>

//             <!-- Footer -->
//             <div style="background: #f4f4f4; padding: 12px; text-align: center; font-size: 12px; color: #777;">
//               © ${new Date().getFullYear()} Event Core — Contact Form Notification
//             </div>

//           </div>
//         </div>
//       `,
//     });

//     return NextResponse.json({
//       success: true,
//       message: "Email sent successfully",
//     });
//   } catch (err) {
//     console.error("Error sending email:", err);
//     return NextResponse.json(
//       { success: false, message: "Failed to send email" },
//       { status: 500 }
//     );
//   }
// }
