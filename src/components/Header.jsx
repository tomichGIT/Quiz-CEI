
import Link from 'next/link'

const Header = () => {
    return ( 
        <header className="bg-blue-600 text-white p-4">
          <nav className="container mx-auto flex justify-between items-center">
            <Link href="/" className="text-2xl font-bold">Quiz App CEI</Link>
            <ul className="flex space-x-4">
              <li><Link href="/users" className="hover:underline">Usuarios</Link></li>
              <li><Link href="/tasks" className="hover:underline">Tareas</Link></li>
              <li><Link href="/quiz/programacion" className="hover:underline">Quiz</Link></li>
              <li><Link href="/ranking" className="hover:underline">Ranking</Link></li>
            </ul>
          </nav>
        </header>
     );
}
 
export default Header;