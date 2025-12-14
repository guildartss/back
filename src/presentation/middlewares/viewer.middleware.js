function isViewer(req, res, next) {
    const { role } = req.body;
    if (!roles || !roles.includes('viewer')) {
        return res.status(403).json({ message: 'Access denied. Viewer role required.' });
    }
    next();
}
module.exports = isViewer;