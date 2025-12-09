
import "./globals.css";


export const metadata = {
  title: "MH Emon Portfolio",
  description: "This is my Resume",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link rel="icon" href="/cv.png" />

      <body className="">{children}</body>
    </html>
  );
}
