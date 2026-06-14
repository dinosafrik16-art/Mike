import "./globals.css";

export const metadata = {
  title: "Dimio Verified Planner",
  description: "Verified content topics, images, and Make export for Dimio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="uk">
      <body>{children}</body>
    </html>
  );
}
