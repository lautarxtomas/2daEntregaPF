const isAdmin = (req, res, next) => {
  try {
    const role = req.headers.rol;
    if (role == 'admin') {
      next();
      return;
    }
    return res
      .status(403)
      .json({
        error: 403,
        message: `Access Denied – You don’t have permission to access ${req.baseUrl}`,
      });
  } catch (error) {
    return res.status(500).send({ message: error });
  }
};

module.exports = isAdmin;