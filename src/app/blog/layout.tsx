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
  return <div className="py-8 sm:py-12">{children}</div>;
}
