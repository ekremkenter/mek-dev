import { Calculator } from "./_components/calculator";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kilo Hesaplama Aracı",
  description: "",
  openGraph: {
    title: "Kilo Hesaplama Aracı",
    description: "",
  },
  twitter: {
    title: "Kilo Hesaplama Aracı",
    description: "",
  },
};

export default function CalculatePage() {
  return <Calculator />;
}
