export const greetUser = (req, res) => {
    const name = req.query.name || 'Guest';

    res.json({
        message: `Hello, ${name}! welcome to our API!`,
        success: true,
    });
};