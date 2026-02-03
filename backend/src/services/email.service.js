const { Resend } = require('resend');

// Resend client - initialized lazily
let resend = null;

function getResendClient() {
    if (!resend && process.env.RESEND_API_KEY) {
        resend = new Resend(process.env.RESEND_API_KEY);
    }
    return resend;
}

/**
 * Send contact form email to site owner
 * @param {string} name - Sender's name
 * @param {string} email - Sender's email (used as reply-to)
 * @param {string} message - Message content
 * @returns {Promise<{success: boolean, error?: string}>}
 */
async function sendContactEmail(name, email, message) {
    // Validate API key exists
    const client = getResendClient();
    if (!client) {
        console.error('RESEND_API_KEY is not set');
        return { success: false, error: 'Email service not configured' };
    }

    const htmlContent = `
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background-color: #f5f5f5;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color: #f5f5f5; padding: 40px 20px;">
        <tr>
            <td align="center">
                <table role="presentation" width="100%" style="max-width: 600px; background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
                    <!-- Header -->
                    <tr>
                        <td style="background-color: #221f20; padding: 32px 40px; text-align: center;">
                            <h1 style="margin: 0; color: #f5f2ef; font-size: 24px; font-weight: 700; letter-spacing: 2px;">NEXORA</h1>
                        </td>
                    </tr>
                    
                    <!-- Content -->
                    <tr>
                        <td style="padding: 40px;">
                            <h2 style="margin: 0 0 24px 0; color: #221f20; font-size: 20px; font-weight: 600;">New Contact Form Submission</h2>
                            
                            <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                                <tr>
                                    <td style="padding: 16px 0; border-bottom: 1px solid #e5e5e5;">
                                        <p style="margin: 0 0 4px 0; color: #6b6b6b; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">Name</p>
                                        <p style="margin: 0; color: #221f20; font-size: 16px; font-weight: 500;">${escapeHtml(name)}</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td style="padding: 16px 0; border-bottom: 1px solid #e5e5e5;">
                                        <p style="margin: 0 0 4px 0; color: #6b6b6b; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">Email</p>
                                        <p style="margin: 0; color: #221f20; font-size: 16px;">
                                            <a href="mailto:${escapeHtml(email)}" style="color: #221f20; text-decoration: none;">${escapeHtml(email)}</a>
                                        </p>
                                    </td>
                                </tr>
                                <tr>
                                    <td style="padding: 16px 0;">
                                        <p style="margin: 0 0 8px 0; color: #6b6b6b; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">Message</p>
                                        <p style="margin: 0; color: #221f20; font-size: 16px; line-height: 1.6; white-space: pre-wrap;">${escapeHtml(message)}</p>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                    
                    <!-- Footer -->
                    <tr>
                        <td style="background-color: #f9f9f9; padding: 24px 40px; text-align: center; border-top: 1px solid #e5e5e5;">
                            <p style="margin: 0; color: #6b6b6b; font-size: 13px;">
                                This message was sent from the Nexora website contact form.
                            </p>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
    </table>
</body>
</html>
    `.trim();

    try {
        const { data, error } = await client.emails.send({
            from: 'Nexora Website <onboarding@resend.dev>',
            to: ['nexora.buildweb@gmail.com'],
            replyTo: email,
            subject: `New contact message from Nexora website`,
            html: htmlContent,
        });

        if (error) {
            console.error('Resend error:', error);
            return { success: false, error: error.message };
        }

        console.log('Email sent successfully:', data?.id);
        return { success: true, id: data?.id };
    } catch (err) {
        console.error('Email send error:', err);
        return { success: false, error: err.message };
    }
}

/**
 * Escape HTML special characters to prevent XSS
 */
function escapeHtml(text) {
    const map = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#039;'
    };
    return String(text).replace(/[&<>"']/g, char => map[char]);
}

module.exports = { sendContactEmail };
