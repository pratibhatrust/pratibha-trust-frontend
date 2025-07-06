import type { Metadata } from "next";
import "./globals.css";
import { montserrat, poppins } from "./fonts";

export const metadata: Metadata = {
  title: "Pratibha Secure Trust",
  description: "PRATIBHA SECURE TRUST is a non-governmental Organization established under the Trust Registration Act XXI of 1860 vide registration no is 559 of 2016 with the objective to cater to the needs of the Down-trodden of the society. The head quarter of the society is located in Delhi, Address - 1180 Janta Flats GTB Enclave Near Roopa Dairy Delhi-110093. The Trust is also registered with the GNCT DELHI (Govt Of India).",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
     <body className={`${montserrat.variable} ${poppins.variable} font-poppins`}>
        {children}
      </body>
    </html>
  );
}
