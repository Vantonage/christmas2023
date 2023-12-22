
import { Link } from 'react-router-dom';

export function NavBar() {
  return (
    <nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <h1 className="text-white">Nav</h1>
          </div>
          <div className="flex">
            <Link to="/christmas2023/" className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">
              Home
            </Link>
            <Link to="/christmas2023/about" className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">
              About
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}