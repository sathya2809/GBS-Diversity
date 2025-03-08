import sgMail from '@sendgrid/mail';

export const connectMenteeWithMentor = async (req, res) => {
  const { menteeEmail, mentorEmail, menteeName, mentorName } = req.body;

  // Validate required fields
  if (!menteeEmail || !mentorEmail || !menteeName || !mentorName) {
    return res.status(400).json({
      error: 'Please provide menteeEmail, mentorEmail, menteeName, and mentorName.',
    });
  }

  // Hardcoded email template
  const subject = `Connection Request: ${menteeName} wants to connect with you`;
  const text = `Hi ${mentorName},\n\n${menteeName} is eager to connect with you as their mentor. Please find their email below for further communication.\n\nMentee Email: ${menteeEmail}\n\nLooking forward to a great mentoring journey!\n\nBest regards,\nThe Mentorship Team`;
  const html = `
    <p>Hi <strong>${mentorName}</strong>,</p>
    <p><strong>${menteeName}</strong> is eager to connect with you as their mentor. Please find their email below for further communication:</p>
    <p><strong>Mentee Email:</strong> ${menteeEmail}</p>
    <p>Looking forward to a great mentoring journey!</p>
    <p>Best regards,<br>The Mentorship Team</p>
  `;

  const msg = {
    to: mentorEmail,
    from: 'yuvikagupta1104@gmail.com', // Use a verified sender email
    subject: subject,
    text: text,
    html: html,
  };

  try {
    await sgMail.send(msg);
    return res.status(200).json({ message: 'Mentorship connection email sent successfully!' });
  } catch (error) {
     return res.status(200).json({ message: error});
  }
};
