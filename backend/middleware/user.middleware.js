
const validateRegister = (req, res, next) => {
  const { name, email, password } = req.body;
  if (name && email && password) {
   
  
    // Name validation
    if (!name || !/^[a-zA-Z\s]+$/.test(name)) {
      return res.status(400).json({ error: true, message: "Name is required and must contain only letters" });
    }
    // Email validation
    if (!/\S+@\S+\.\S+/.test(email)) {
      return res.status(400).json({ error: true, message: "Invalid email format" });
    }
    // Password validation
    if (!password || password.length < 8 || !/[A-Z]/.test(password) || !/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
      return res.status(400).json({ error: true, message: "Password must be at least 8 characters long, contain at least one uppercase letter, and one special character" });
    }
    next();
  } else {
    return res
      .status(400)
      .json({ error: true, message: "name, email, password required" });
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
