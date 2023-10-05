import { Footer } from '@/components/Footer';
import './globals.css';

export const metadata = {
  title: 'Italínea DAZ',
  description: 'Móveis Planejados em Uberlândia',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>
        {children}
        <Footer />
      </body>
    </html>
  )
}
