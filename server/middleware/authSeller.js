import jwt from "jsonwebtoken";
import "dotenv/config";

const authSeller = async (req, res, next) => {
  const { sellerToken } = req.cookies;

  if (!sellerToken) {
    return res.json({
      success: false,
      msg: "Not Authorised",
    });
  }

  try {
    const decodeToken = jwt.verify(sellerToken, process.env.JWT_SECRET);
    if (decodeToken.email === process.env.SELLER_EMAIL) {
      next();
    }
  } catch (error) {
    return res.json({
      success: false,
      msg: "Not Authorised",
    });
  }
};

export default authSeller;
