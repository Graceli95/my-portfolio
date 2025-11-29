'use client';

import { useState, useEffect } from 'react';
import { errorLogger } from '@/lib/errorLogger';

export interface NetworkStatus {
  isOnline: boolean;
  wasOffline: boolean;
  connectionType?: string;
}

/**
 * Hook to monitor network connectivity status
 * @returns Network status object
 */
export function useNetworkStatus(): NetworkStatus {
  const [isOnline, setIsOnline] = useState(true);
  const [wasOffline, setWasOffline] = useState(false);

  useEffect(() => {
    // Check initial status
    setIsOnline(navigator.onLine);

    const handleOnline = () => {
      errorLogger.info('Network connection restored', 'useNetworkStatus');
      setIsOnline(true);
      setWasOffline(false);
    };

    const handleOffline = () => {
      errorLogger.warn('Network connection lost', 'useNetworkStatus');
      setIsOnline(false);
      setWasOffline(true);
    };

    // Add event listeners
    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    // Cleanup
    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  return {
    isOnline,
    wasOffline,
    connectionType: (navigator as any).connection?.effectiveType,
  };
}

