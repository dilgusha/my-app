import Link from 'next/link';

export default function Header() {
  return (
    <header className="border-b">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-semibold">
          StartupHub
        </Link>
        <nav>
          <ul className="flex space-x-4 items-center">
            <li>
              <Link href="/" className="text-gray-600 hover:text-gray-900">
                Home
              </Link>
            </li>
            <li>
              <Link href="/projects" className="text-gray-600 hover:text-gray-900">
                Browse Projects
              </Link>
            </li>
            <li>
              <Link href="/login" className="text-gray-600 hover:text-gray-900">
                Login
              </Link>
            </li>
            <li>
              <Link
                href="/post-startup"
                className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-100 hover:border-gray-400"
              >
                Post Your Startup
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
