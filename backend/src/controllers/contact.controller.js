const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const { validationResult } = require('express-validator');

exports.submitContact = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { name, email, type, budget, message } = req.body;

    try {
        const submission = await prisma.contactSubmission.create({
            data: {
                name,
                email,
                type,
                budget,
                message,
            },
        });

        res.status(201).json({ message: 'Submission received', id: submission.id });
    } catch (error) {
        console.error('Contact Submission Error:', error);
        res.status(500).json({ error: 'Server error processing submission' });
    }
};

exports.getSubmissions = async (req, res) => {
    try {
        const submissions = await prisma.contactSubmission.findMany({
            orderBy: { createdAt: 'desc' }
        });
        res.json(submissions);
    } catch (error) {
        res.status(500).json({ error: 'Server error fetching submissions' });
    }
};
