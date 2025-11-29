/**
 * Error Logging Utility
 * Centralized error logging for the application
 */

export interface ErrorLog {
  message: string;
  stack?: string;
  context?: string;
  timestamp: string;
  userAgent?: string;
  url?: string;
}

class ErrorLogger {
  private logs: ErrorLog[] = [];
  private maxLogs = 50; // Keep last 50 errors in memory

  /**
   * Log an error with context
   */
  log(error: Error | string, context?: string): void {
    const errorLog: ErrorLog = {
      message: error instanceof Error ? error.message : error,
      stack: error instanceof Error ? error.stack : undefined,
      context,
      timestamp: new Date().toISOString(),
      userAgent: typeof window !== 'undefined' ? window.navigator.userAgent : undefined,
      url: typeof window !== 'undefined' ? window.location.href : undefined,
    };

    // Add to memory (keep last 50)
    this.logs.push(errorLog);
    if (this.logs.length > this.maxLogs) {
      this.logs.shift();
    }

    // Log to console in development
    if (process.env.NODE_ENV === 'development') {
      console.error('🔴 Error logged:', errorLog);
    }

    // In production, you could send to external service:
    // - Sentry
    // - LogRocket
    // - Custom logging endpoint
    if (process.env.NODE_ENV === 'production') {
      // Example: this.sendToExternalService(errorLog);
      console.error('Error:', errorLog.message);
    }
  }

  /**
   * Log a warning (less severe than error)
   */
  warn(message: string, context?: string): void {
    const warningLog = {
      message,
      context,
      timestamp: new Date().toISOString(),
      type: 'warning',
    };

    if (process.env.NODE_ENV === 'development') {
      console.warn('⚠️ Warning:', warningLog);
    }
  }

  /**
   * Log an info message
   */
  info(message: string, context?: string): void {
    if (process.env.NODE_ENV === 'development') {
      console.info('ℹ️ Info:', message, context ? `[${context}]` : '');
    }
  }

  /**
   * Get all logged errors
   */
  getLogs(): ErrorLog[] {
    return [...this.logs];
  }

  /**
   * Clear all logs
   */
  clearLogs(): void {
    this.logs = [];
  }

  /**
   * Send error to external logging service (placeholder)
   */
  private sendToExternalService(errorLog: ErrorLog): void {
    // Placeholder for external logging service
    // Example implementations:
    
    // Sentry:
    // Sentry.captureException(new Error(errorLog.message));
    
    // Custom endpoint:
    // fetch('/api/log-error', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(errorLog)
    // });
  }
}

// Export singleton instance
export const errorLogger = new ErrorLogger();

// Helper function for async error handling
export async function handleAsyncError<T>(
  operation: () => Promise<T>,
  errorMessage: string,
  context?: string
): Promise<T | null> {
  try {
    return await operation();
  } catch (error) {
    errorLogger.log(
      error instanceof Error ? error : new Error(String(error)),
      context || errorMessage
    );
    return null;
  }
}

// Helper function for try-catch blocks
export function tryCatch<T>(
  operation: () => T,
  fallback: T,
  context?: string
): T {
  try {
    return operation();
  } catch (error) {
    errorLogger.log(
      error instanceof Error ? error : new Error(String(error)),
      context
    );
    return fallback;
  }
}

