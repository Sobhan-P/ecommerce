import express from "express";
import {
  addProduct,
  changeStock,
  productByID,
  productList,
} from "../controllers/productController.js";
import authSeller from "../middleware/authSeller.js";
import { upload } from "../configs/multer.js";

const productRoutes = express.Router();

productRoutes.post("/add", upload.array(["images"]), authSeller, addProduct);
productRoutes.get("/list", productList);
productRoutes.get("/id", productByID);
productRoutes.post("/stock", authSeller, changeStock);

export default productRoutes;
