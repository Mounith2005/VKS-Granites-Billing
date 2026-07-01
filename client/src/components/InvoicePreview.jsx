import { forwardRef } from "react";
import company from "../data/company";

const InvoicePreview = forwardRef(({ data }, ref) => {
  return (
    <div
      ref={ref}
      className="bg-white border border-black p-6 text-sm w-[210mm] min-h-[297mm] mx-auto"
    >
      {/* Header */}
      {/* ================= HEADER ================= */}

<div className="border-2 border-blue-900">

  {/* Top Strip */}

  <div className="flex justify-between px-3 py-1 text-sm font-semibold">

    <div>
      GSTIN No. {company.gstin}
    </div>

    <div className="font-bold text-xl">
      TAX INVOICE
    </div>

    <div className="text-right">
      <div>{company.phone}</div>
      <div>{company.phone2}</div>
    </div>

  </div>

  {/* Company */}

  <div className="flex items-center border-t border-blue-900 py-3">

    <div className="w-35 flex justify-center">

      <img
        src={company.logo}
        alt="logo"
        className="w-50 "
      />

    </div>

    <div className="flex-1 text-center">

      <h1 className="text-5xl font-bold text-blue-900 tracking-wide">

        VKS GRANITES

      </h1>

      <p className="font-semibold mt-2">

        3/6, Moolakadu,
        Masakalipatti (PO)

      </p>

      <p className="font-semibold">

        Rasipuram - 637401,
        Tamil Nadu

      </p>

    </div>

  </div>

</div>

      {/* Receiver */}

      {/* ================= RECEIVER & CONSIGNEE ================= */}

<div className="grid grid-cols-2 border-l-2 border-r-2 border-b-2 border-blue-900">

  {/* Receiver */}

  <div className="border-r-2 border-blue-900">

    <div className="bg-blue-900 text-white text-center font-bold py-1">
      Details of Receiver Billed To
    </div>

    <table className="w-full text-sm">

      <tbody>

        <tr className="border-b">
          <td className="p-2 font-semibold w-40">
            Reverse Charge (Y/N)
          </td>
          <td className="p-2">No</td>
        </tr>

        <tr className="border-b">
          <td className="p-2 font-semibold">
            Invoice No :
          </td>
          <td className="p-2">
            {data.invoiceNo}
          </td>
        </tr>

        <tr className="border-b">
          <td className="p-2 font-semibold">
            Invoice Date :
          </td>
          <td className="p-2">
            {data.invoiceDate}
          </td>
        </tr>

        <tr className="border-b">
          <td className="p-2 font-semibold">
            State   :
          </td>

          <td className="p-2 flex justify-between">

            <span>{data.state}</span>

            <span>
              Code {data.stateCode}
            </span>

          </td>

        </tr>

        <tr className="border-b">
          <td className="p-2 font-semibold">
            Name  :
          </td>

          <td className="p-2">
            {data.customerName}
          </td>

        </tr>

        <tr className="border-b align-top">

          <td className="p-2 font-semibold">
            Address   :
          </td>

          <td className="p-2 whitespace-pre-line">
            {data.customerAddress}
          </td>

        </tr>

        <tr className="border-b">

          <td className="p-2 font-semibold">
            GSTIN   :
          </td>

          <td className="p-2">
            {data.customerGSTIN || "-"}
          </td>

        </tr>

        <tr>

          <td className="p-2 font-semibold">
            State   :
          </td>

          <td className="p-2 flex justify-between">

            <span>{data.state}</span>

            <span>
  <span className="font-bold">Code:</span> {data.stateCode}
</span>

          </td>

        </tr>

      </tbody>

    </table>

  </div>

  {/* Consignee */}

  <div>

    <div className="bg-blue-900 text-white text-center font-bold py-1">
      Details of Consignee Shipped To
    </div>

    <table className="w-full text-sm">

      <tbody>

        <tr className="border-b">

          <td className="p-2 font-semibold w-40">
            Transport Mode  :
          </td>

          <td className="p-2">
            {data.transportMode}
          </td>

        </tr>

        <tr className="border-b">

          <td className="p-2 font-semibold">
            Vehicle Number  :
          </td>

          <td className="p-2">
            {data.vehicleNumber}
          </td>

        </tr>

        <tr className="border-b">

          <td className="p-2 font-semibold">
            Date of Supply  :
          </td>

          <td className="p-2">
            {data.dateOfSupply}
          </td>

        </tr>

        <tr className="border-b">

          <td className="p-2 font-semibold">
            Place of Supply  :
          </td>

          <td className="p-2">
            {data.placeOfSupply}
          </td>

        </tr>

        <tr className="border-b">

          <td className="p-2 font-semibold">
            Name  :
          </td>

          <td className="p-2">
            Same as Given
          </td>

        </tr>

        <tr className="border-b">

          <td className="p-2 font-semibold">
            Address :
          </td>

          <td className="p-2">
            Same as Given
          </td>

        </tr>

        <tr className="border-b">

          <td className="p-2 font-semibold">
            GSTIN  :
          </td>

          <td className="p-2">
            {data.customerGSTIN || "-"}
          </td>

        </tr>

        <tr>

          <td className="p-2 font-semibold">
            State     :
          </td>

          <td className="p-2 flex justify-between">

            <span>{data.state}</span>

            <span>
  <span className="font-bold">Code:</span> {data.stateCode}
</span>

          </td>

        </tr>

      </tbody>

    </table>

  </div>

</div>

      {/* Product */}

      {/* ================= PRODUCT DETAILS ================= */}

<div className="border-l-2 border-r-2 border-b-2 border-blue-900">

  <table className="w-full border-collapse text-sm">

    <thead>

      <tr className="bg-blue-900 text-white">

        <th className="border border-blue-900 p-2 w-12">
          Sl.No
        </th>

        <th className="border border-blue-900 p-2">
          Name of Product / Service
        </th>

        <th className="border border-blue-900 p-2 w-24">
          HSN Code
        </th>

        <th className="border border-blue-900 p-2 w-28">
          Rate / Cu.ft
        </th>

        <th className="border border-blue-900 p-2 w-24">
          Cu.ft
        </th>

        <th className="border border-blue-900 p-2 w-36">
          Amount (₹)
        </th>

      </tr>

    </thead>

    <tbody>

      <tr>

        <td className="border p-2 w-12 h-25 text-center">
          1
        </td>

        <td className="border p-2">
          {company.product}
        </td>

        <td className="border p-2 text-center">
          {company.hsn}
        </td>

        <td className="border p-2 text-right">
          ₹ {Number(data.rate).toFixed(2)}
        </td>

        <td className="border p-2 text-right">
          {Number(data.cuFeet).toFixed(2)}
        </td>

        <td className="border p-2 text-right font-semibold">
          ₹ {Number(data.amount).toFixed(2)}
        </td>

      </tr>

      {/* Empty rows for invoice appearance */}

      

    </tbody>

  </table>

</div>

      {/* GST */}

      {/* ===================== TOTALS ===================== */}

<div className="grid grid-cols-2 border-l-2 border-r-2 border-b-2 border-blue-900">

  {/* Amount in Words */}

  <div className="border-r-2 border-blue-900 p-3">

    <p className="font-semibold">
      Amount Chargeable (in words)
    </p>

    <div className="mt-2 border p-2 min-h-[70px]">
      <b>{data.amountWords}</b>
    </div>

    <div className="mt-5">

      <p className="font-semibold mb-2">
        Bank Details
      </p>

      <table className="w-full text-sm">

        <tbody>

          <tr>
            <td className="py-1 font-semibold">
              Bank Name
            </td>

            <td>{company.bank.name}</td>
          </tr>

          <tr>
            <td className="py-1 font-semibold">
              A/C No
            </td>

            <td>{company.bank.account}</td>
          </tr>

          <tr>
            <td className="py-1 font-semibold">
              IFSC
            </td>

            <td>{company.bank.ifsc}</td>
          </tr>

          <tr>
            <td className="py-1 font-semibold">
              Branch
            </td>

            <td>{company.bank.branch}</td>
          </tr>

        </tbody>

      </table>

    </div>

    <div className="mt-5 text-xs leading-6">

      <b>Terms of Sales</b>

      <p>
        Goods Once Sold Cannot be taken back or Exchanged.        Subject to Salem Jurisdiction.
      </p>

    </div>

  </div>

  {/* Totals */}

  <div>

    <table className="w-full text-sm">

      <tbody>

        <tr>

          <td className="border p-2 font-semibold">
            Taxable Value
          </td>

          <td className="border p-2 text-right">
            ₹ {Number(data.amount).toFixed(2)}
          </td>

        </tr>

        <tr>

          <td className="border p-2">
            CGST (0%)
          </td>

          <td className="border p-2 text-right">
            ₹ 0.00
          </td>

        </tr>

        <tr>

          <td className="border p-2">
            SGST (0%)
          </td>

          <td className="border p-2 text-right">
            ₹ 0.00
          </td>

        </tr>

        <tr>

          <td className="border p-2">
            IGST ({data.igst}%)
          </td>

          <td className="border p-2 text-right">
            ₹ {Number(data.taxAmount).toFixed(2)}
          </td>

        </tr>

        <tr className="bg-gray-100">

          <td className="border p-2 font-bold">
            Grand Total
          </td>

          <td className="border p-2 text-right font-bold">
            ₹ {Number(data.grandTotal).toFixed(2)}
          </td>

        </tr>

      </tbody>

    </table>

    <div className="mt-8 text-center text-xs leading-5">
      <p>
        Certified that the particulars
        given above are true and correct.
      </p>
      

      <p className="font-semibold">
  For <span className="font-bold text-xl text-blue-900">VKS GRANITES</span>
</p>

      <div className="h-20"></div>

      <p className="font-semibold">
        Authorised Signatory
      </p>

    </div>

  </div>

</div>
    </div>
  );
});

InvoicePreview.displayName = "InvoicePreview";

export default InvoicePreview;