import type { Metadata } from "next";
import SimpleHeader from "app/components/simpleHeader";
import Providers from "app/providers";



export const metadata: Metadata = {
  title: "ВашДІм",
  description: "Надійний рієлтор у вашому місті. Допоможу купити, продати чи орендувати нерухомість швидко й безпечно.",
  icons: {
    icon: '/home.svg',  // або .svg, якщо є
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <SimpleHeader />
      <Providers>{children}</Providers>
    </>
  );
}
