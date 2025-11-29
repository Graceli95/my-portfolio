'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { errorLogger } from '@/lib/errorLogger';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const [showDetails, setShowDetails] = useState(false);
  const [errorId] = useState(() => Math.random().toString(36).substring(7));

  useEffect(() => {
    // Log the error to our error logger
    errorLogger.log(error, `Global Error Boundary - ID: ${errorId}`);
  }, [error, errorId]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-900 px-4">
      <div className="max-w-md w-full text-center">
        {/* Error Icon */}
        <div className="mb-6">
          <div className="w-20 h-20 mx-auto bg-red-100 dark:bg-red-900/20 rounded-full flex items-center justify-center">
            <svg
              className="w-10 h-10 text-red-600 dark:text-red-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
              />
            </svg>
          </div>
        </div>

        {/* Error Message */}
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          Oops! Something went wrong
        </h1>
        
        <p className="text-gray-600 dark:text-gray-400 mb-8">
          We apologize for the inconvenience. An unexpected error has occurred.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={reset}
            className="px-6 py-3 bg-gradient-to-r from-primary-600 to-secondary-600 text-white font-semibold rounded-lg hover:from-primary-700 hover:to-secondary-700 transform hover:-translate-y-0.5 transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            Try Again
          </button>
          
          <Link
            href="/"
            className="px-6 py-3 border-2 border-primary-500 text-primary-600 dark:text-primary-400 font-semibold rounded-lg hover:bg-primary-50 dark:hover:bg-primary-900/20 transform hover:-translate-y-0.5 transition-all duration-200"
          >
            Go Home
          </Link>
        </div>

        {/* Error ID for reference */}
        <p className="mt-6 text-xs text-gray-500 dark:text-gray-600">
          Error ID: <code className="font-mono">{errorId}</code>
        </p>

        {/* Error Details Toggle */}
        {(process.env.NODE_ENV === 'development' || showDetails) && error.message && (
          <div className="mt-8 w-full max-w-2xl">
            <button
              onClick={() => setShowDetails(!showDetails)}
              className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 underline mb-2"
            >
              {showDetails ? 'Hide' : 'Show'} Error Details
            </button>
            
            {showDetails && (
              <div className="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg text-left overflow-auto max-h-64">
                <p className="text-xs font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  Error Message:
                </p>
                <p className="text-xs font-mono text-red-600 dark:text-red-400 break-all mb-4">
                  {error.message}
                </p>
                
                {error.stack && (
                  <>
                    <p className="text-xs font-semibold text-gray-700 dark:text-gray-300 mb-2">
                      Stack Trace:
                    </p>
                    <pre className="text-xs font-mono text-gray-600 dark:text-gray-400 whitespace-pre-wrap break-all">
                      {error.stack}
                    </pre>
                  </>
                )}
                
                {error.digest && (
                  <p className="text-xs text-gray-500 dark:text-gray-600 mt-4">
                    Digest: {error.digest}
                  </p>
                )}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

