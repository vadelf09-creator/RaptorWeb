import type { Metadata } from "next";
import { Bebas_Neue, DM_Sans, DM_Mono } from "next/font/google";
import "./globals.css";

const bebasNeue = Bebas_Neue({
  variable: "--font-bebas",
  subsets: ["latin"],
  weight: ["400"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

const dmMono = DM_Mono({
  variable: "--font-dm-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Raptor Carwash | Lavadero & Detailing Profesional",
  description:
    "Lavado y detailing profesional en La Rioja. Resultados impecables para auto, camioneta, moto o utilitario. Servicio a domicilio disponible.",
  keywords:
    "carwash, lavadero, detailing, La Rioja, auto, camioneta, moto, lavado a domicilio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="scroll-smooth">
      <body
        className={`${bebasNeue.variable} ${dmSans.variable} ${dmMono.variable} font-body bg-[#080E12] text-[#F5EFD8] antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
