function isEmployee(req, res, next) {
    const { roles } = req.body;
    if (!roles || !roles.includes('employee')) {
        return res.status(403).json({ message: 'Access denied. Employee role required.' });
    }
    next();
}
module.exports = isEmployee;
