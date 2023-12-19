import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    template: `%s | Mustafa Ekrem KENTER`,
    default: "Blog",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="py-24 sm:py-32">{children}</div>;
}
