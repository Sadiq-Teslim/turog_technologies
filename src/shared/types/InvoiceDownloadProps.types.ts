export interface InvoiceDownloadProps {
    name: string;
    downloadFn: (id: string) => void;
}