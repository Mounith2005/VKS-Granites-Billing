import express from "express";
import {
  getNextInvoiceNumber,
  saveInvoice,
  deleteInvoice,
  getInvoices,
  getInvoice,
} from "../controllers/invoiceController.js";

const router = express.Router();

router.get("/next-number", getNextInvoiceNumber);

router.post("/", saveInvoice);

router.get("/", getInvoices);

router.get("/:id", getInvoice);

router.delete("/:id", deleteInvoice);

export default router;