import mongoose from "mongoose";

const invoiceSchema = new mongoose.Schema(
  {
    invoiceNo: {
      type: String,
      required: true,
      unique: true,
    },

    invoiceDate: {
      type: String,
      required: true,
    },

    customerName: String,
    customerAddress: String,
    customerGSTIN: String,
    state: String,
    stateCode: String,

    transportMode: String,
    vehicleNumber: String,
    dateOfSupply: String,
    placeOfSupply: String,

    product: String,
    hsnCode: String,

    rate: Number,
    cuFeet: Number,

    amount: Number,

    igst: Number,
    taxAmount: Number,

    grandTotal: Number,

    amountWords: String,
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Invoice", invoiceSchema);