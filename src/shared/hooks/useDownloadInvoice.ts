import React from "react";
import { InvoiceDownloadProps } from "../types/InvoiceDownloadProps.types";

/* Download Invoice -> Fetch Invoice from Server and use LIbrary to download pdf.*/
export const useDownloadInvoice = (): InvoiceDownloadProps => {
  const name = "Download Invoice"; //TODO: Implement translation
  const downloadFn = () => alert(name);
  return { name, downloadFn };
};
