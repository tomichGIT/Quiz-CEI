// app/layout.js
import './globals.css'
import Header from '@/components/Header'

export const metadata = {
  title: 'Quiz App CEI',
  description: 'Aplicación de quiz para estudiantes de CEI',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className="flex flex-col min-h-screen">
        <Header />

        <main className="flex-grow container mx-auto px-4 py-8">
          {children}
        </main>

        <footer className="bg-gray-200 p-4 text-center">
          <p>&copy; 2024 Quiz App CEI. Todos los derechos reservados.</p>
        </footer>
      </body>
    </html>
  )
}