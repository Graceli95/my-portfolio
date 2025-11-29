'use client';

import React, { Component, ReactNode } from 'react';
import { AlertTriangle } from 'lucide-react';
import { errorLogger } from '@/lib/errorLogger';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
  context?: string;
  showError?: boolean;
}

interface State {
  hasError: boolean;
  error?: Error;
  errorId?: string;
}

/**
 * ErrorBoundary Component
 * Catches JavaScript errors anywhere in the child component tree
 */
class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    return {
      hasError: true,
      error,
      errorId: Math.random().toString(36).substring(7),
    };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    const { context = 'ErrorBoundary' } = this.props;
    
    // Log error with context and component stack
    errorLogger.log(
      error,
      `${context} - Component: ${errorInfo.componentStack?.split('\n')[1]?.trim() || 'Unknown'}`
    );

    // Log to console in development
    if (process.env.NODE_ENV === 'development') {
      console.error('Error caught by ErrorBoundary:', error, errorInfo);
    }
  }

  handleReset = () => {
    this.setState({ hasError: false, error: undefined, errorId: undefined });
  };

  render() {
    if (this.state.hasError) {
      // Use custom fallback if provided
      if (this.props.fallback) {
        return this.props.fallback;
      }

      // Default fallback UI
      return (
        <div className="flex items-center justify-center p-8 bg-red-50 dark:bg-red-900/10 rounded-lg border border-red-200 dark:border-red-800">
          <div className="text-center max-w-md">
            <div className="flex justify-center mb-4">
              <div className="bg-red-100 dark:bg-red-900/20 rounded-full p-3">
                <AlertTriangle className="w-8 h-8 text-red-600 dark:text-red-400" />
              </div>
            </div>
            
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              Something went wrong
            </h3>
            
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
              {this.props.context
                ? `An error occurred in ${this.props.context}`
                : 'An error occurred while loading this section'}
            </p>

            <button
              onClick={this.handleReset}
              className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors text-sm font-medium"
            >
              Try Again
            </button>

            {/* Show error details in development or if showError is true */}
            {(process.env.NODE_ENV === 'development' || this.props.showError) && this.state.error && (
              <div className="mt-4 p-3 bg-gray-100 dark:bg-gray-800 rounded text-left">
                <p className="text-xs font-mono text-red-600 dark:text-red-400 break-all">
                  {this.state.error.message}
                </p>
                {this.state.errorId && (
                  <p className="text-xs text-gray-500 dark:text-gray-600 mt-2">
                    Error ID: {this.state.errorId}
                  </p>
                )}
              </div>
            )}
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;

