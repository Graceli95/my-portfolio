'use client';

import { useNetworkStatus } from '@/hooks/useNetworkStatus';
import { WifiOff, Wifi } from 'lucide-react';
import { useEffect, useState } from 'react';

/**
 * NetworkStatusBanner Component
 * Displays a banner when network connection is lost or restored
 */
export default function NetworkStatusBanner() {
  const { isOnline, wasOffline } = useNetworkStatus();
  const [showBanner, setShowBanner] = useState(false);
  const [bannerType, setBannerType] = useState<'offline' | 'online'>('offline');

  useEffect(() => {
    if (!isOnline) {
      // Show offline banner immediately
      setBannerType('offline');
      setShowBanner(true);
    } else if (wasOffline && isOnline) {
      // Show online banner temporarily when connection is restored
      setBannerType('online');
      setShowBanner(true);
      
      // Hide after 5 seconds
      const timer = setTimeout(() => {
        setShowBanner(false);
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [isOnline, wasOffline]);

  if (!showBanner) {
    return null;
  }

  return (
    <div
      className={`fixed top-16 left-0 right-0 z-40 transform transition-transform duration-300 ${
        showBanner ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      {bannerType === 'offline' ? (
        // Offline Banner
        <div className="bg-red-600 dark:bg-red-700 text-white px-4 py-3 shadow-lg">
          <div className="container mx-auto flex items-center justify-center gap-3">
            <WifiOff className="w-5 h-5 flex-shrink-0" />
            <p className="text-sm font-medium">
              No internet connection. Some features may not work.
            </p>
          </div>
        </div>
      ) : (
        // Online Banner
        <div className="bg-green-600 dark:bg-green-700 text-white px-4 py-3 shadow-lg">
          <div className="container mx-auto flex items-center justify-center gap-3">
            <Wifi className="w-5 h-5 flex-shrink-0" />
            <p className="text-sm font-medium">
              Connection restored!
            </p>
            <button
              onClick={() => setShowBanner(false)}
              className="ml-4 text-sm underline hover:no-underline"
            >
              Dismiss
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

