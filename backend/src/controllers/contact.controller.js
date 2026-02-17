const { validationResult } = require('express-validator');
const { sendContactEmail } = require('../services/email.service');

exports.submitContact = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { name, email, message } = req.body;

    // Validate required fields
    if (!name || !email || !message) {
        return res.status(400).json({ error: 'Name, email, and message are required' });
    }

    // Respond immediately — don't make the user wait for the email to send
    res.status(202).json({
        message: 'Message received! We\'ll get back to you soon.',
        emailSent: true
    });

    // Fire-and-forget: send email in the background
    sendContactEmail(name, email, message)
        .then((result) => {
            if (!result.success) {
                console.error('Background email sending failed:', result.error);
            }
        })
        .catch((error) => {
            console.error('Background email error:', error);
        });
};

// Optional: Get submissions (if you later add a database)
exports.getSubmissions = async (req, res) => {
    res.json({ message: 'Database storage not configured. Emails are sent directly.' });
};
