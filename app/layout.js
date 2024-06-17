import './globals.css';

export const metadata = {
  title: 'Blog',
  description: 'Zapraszamy na naszego bloga',
}

export default function RootLayout({ children }) {
 return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
