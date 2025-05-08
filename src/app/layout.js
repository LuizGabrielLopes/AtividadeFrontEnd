import "./globals.css";

export const metadata = {
  title: "My Exam Mockup",
  description: "Projeto pra mostrar tudo que eu sei",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <head>
        <link
          rel="preload"
          href="/path/to/font.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/path/to/icons.svg"
          as="image"
          type="image/svg+xml"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
