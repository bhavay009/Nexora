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

    try {
        // Send email via Resend
        const emailResult = await sendContactEmail(name, email, message);

        if (!emailResult.success) {
            console.error('Email sending failed:', emailResult.error);
            return res.status(500).json({ error: 'Failed to send message. Please try again.' });
        }

        res.status(201).json({
            message: 'Message received! We\'ll get back to you soon.',
            emailSent: true
        });
    } catch (error) {
        console.error('Contact Submission Error:', error);
        res.status(500).json({ error: 'Server error processing submission' });
    }
};

// Optional: Get submissions (if you later add a database)
exports.getSubmissions = async (req, res) => {
    res.json({ message: 'Database storage not configured. Emails are sent directly.' });
};
