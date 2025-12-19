import Address from "../models/Address.js";

export const addAddress = async (req, res) => {
  try {
    const { userId, address } = req.body;
    await Address.create({ ...address, userId });
    res.json({
      success: true,
      msg: "Address added succefully",
    });
  } catch (error) {
    res.json({
      success: false,
      msg: error.message,
    });
  }
};

export const getAddress = async (req, res) => {
  try {
    const { userId } = req.body;
    const addressess = await Address.find({ userId });
    res.json({
      success: true,
      addressess,
    });
  } catch (error) {
    console.log(error.message);

    res.json({
      success: false,
      msg: error.message,
    });
  }
};
