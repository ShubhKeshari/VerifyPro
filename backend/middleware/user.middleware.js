const validateRegister = (req, res, next) => {
  const { name, email, password } = req.body;
  if (name && email && password) {
    next();
  } else {
    return res
      .status(400)
      .json({ error: true, message: "name, email, password" });
  }
};

const validateLogin = (req, res, next) => {
  const { email, password } = req.body;
  if (email && password) {
    next();
  } else {
    return res.status(400).json({
      error: true,
      message: "email and password required",
    });
  }
};

module.exports = {
  validateRegister,
  validateLogin,
};
