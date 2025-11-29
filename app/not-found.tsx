import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-900 px-4">
      <div className="max-w-md w-full text-center">
        {/* 404 Number */}
        <div className="mb-6">
          <h1 className="text-9xl font-bold bg-gradient-to-r from-primary-600 via-primary-500 to-secondary-500 dark:from-primary-400 dark:via-primary-300 dark:to-secondary-400 bg-clip-text text-transparent">
            404
          </h1>
        </div>

        {/* Error Message */}
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          Page Not Found
        </h2>
        
        <p className="text-gray-600 dark:text-gray-400 mb-8">
          Sorry, we couldn't find the page you're looking for. It might have been moved or deleted.
        </p>

        {/* Navigation Links */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="px-6 py-3 bg-gradient-to-r from-primary-600 to-secondary-600 text-white font-semibold rounded-lg hover:from-primary-700 hover:to-secondary-700 transform hover:-translate-y-0.5 transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            Go Home
          </Link>
          
          <Link
            href="/contact"
            className="px-6 py-3 border-2 border-primary-500 text-primary-600 dark:text-primary-400 font-semibold rounded-lg hover:bg-primary-50 dark:hover:bg-primary-900/20 transform hover:-translate-y-0.5 transition-all duration-200"
          >
            Contact Me
          </Link>
        </div>

        {/* Quick Links */}
        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800">
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
            You might be looking for:
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link
              href="/about"
              className="text-sm text-primary-600 dark:text-primary-400 hover:underline"
            >
              About
            </Link>
            <span className="text-gray-400">•</span>
            <Link
              href="/projects"
              className="text-sm text-primary-600 dark:text-primary-400 hover:underline"
            >
              Projects
            </Link>
            <span className="text-gray-400">•</span>
            <Link
              href="/faq"
              className="text-sm text-primary-600 dark:text-primary-400 hover:underline"
            >
              FAQ
            </Link>
            <span className="text-gray-400">•</span>
            <Link
              href="/events"
              className="text-sm text-primary-600 dark:text-primary-400 hover:underline"
            >
              Events
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

