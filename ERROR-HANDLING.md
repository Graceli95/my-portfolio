# Error Handling Guide

Comprehensive error handling system for the Grace Li Portfolio.

---

## 🎯 Overview

The portfolio includes a multi-layered error handling system that provides:

- ✅ **Global error boundaries** for catching React errors
- ✅ **Network monitoring** for connectivity issues
- ✅ **Form validation** with detailed error messages
- ✅ **Error logging** for debugging and monitoring
- ✅ **User-friendly fallbacks** for graceful degradation
- ✅ **Recovery mechanisms** to help users continue

---

## 🛡️ Error Handling Layers

### Layer 1: Global Error Boundary

**File**: `app/error.tsx`

Catches all unhandled errors at the application level.

**Features**:
- Error ID generation for tracking
- Stack trace display (development mode)
- "Try Again" functionality
- "Go Home" fallback option
- Error logging to console/service

**Usage**: Automatic - wraps entire app routes

### Layer 2: Component Error Boundaries

**File**: `components/ErrorBoundary.tsx`

Catches errors in specific component trees.

**Features**:
- Reusable wrapper component
- Custom fallback UI support
- Context-specific error messages
- Error recovery without full page reload

**Usage**:
```tsx
import ErrorBoundary from '@/components/ErrorBoundary';

<ErrorBoundary context="Project Gallery" fallback={<CustomFallback />}>
  <ProjectGallery />
</ErrorBoundary>
```

### Layer 3: Network Monitoring

**Files**: 
- `hooks/useNetworkStatus.ts`
- `components/NetworkStatusBanner.tsx`

Monitors internet connectivity and alerts users.

**Features**:
- Real-time connection status
- Offline/online notifications
- Banner at top of page
- Auto-dismiss after connection restore

**Usage**: Automatic - included in root layout

### Layer 4: Form Error Handling

**File**: `app/contact/page.tsx`

Comprehensive form validation and submission error handling.

**Features**:
- Field-level validation
- Network connectivity check
- Timeout handling (30 seconds)
- Specific error messages
- Email fallback option
- Retry mechanism

**Error Types Handled**:
- Missing/invalid fields
- Network errors
- Timeout errors
- EmailJS configuration errors
- Unknown errors

---

## 🔧 Error Logger Utility

**File**: `lib/errorLogger.ts`

Centralized logging system for all errors.

### Methods

#### `errorLogger.log(error, context?)`
Log an error with optional context:
```ts
errorLogger.log(new Error('Failed to load'), 'ProjectCard');
```

#### `errorLogger.warn(message, context?)`
Log a warning (less severe):
```ts
errorLogger.warn('API slow response', 'ContactForm');
```

#### `errorLogger.info(message, context?)`
Log informational message:
```ts
errorLogger.info('Form submitted successfully', 'ContactForm');
```

#### `errorLogger.getLogs()`
Retrieve all logged errors:
```ts
const allErrors = errorLogger.getLogs();
```

#### `errorLogger.clearLogs()`
Clear error log history:
```ts
errorLogger.clearLogs();
```

### Helper Functions

#### `handleAsyncError()`
Wrapper for async operations:
```ts
const data = await handleAsyncError(
  () => fetchData(),
  'Failed to fetch data',
  'HomePage'
);
```

#### `tryCatch()`
Wrapper for synchronous operations:
```ts
const result = tryCatch(
  () => JSON.parse(data),
  {},
  'DataParsing'
);
```

---

## 📱 Network Status Monitoring

### Hook: `useNetworkStatus()`

```ts
import { useNetworkStatus } from '@/hooks/useNetworkStatus';

function MyComponent() {
  const { isOnline, wasOffline, connectionType } = useNetworkStatus();
  
  if (!isOnline) {
    return <OfflineMessage />;
  }
  
  return <OnlineContent />;
}
```

### Properties

- `isOnline` (boolean): Current connection status
- `wasOffline` (boolean): Was offline and recently came back
- `connectionType` (string): Connection type (4g, 3g, wifi, etc.)

---

## 🎨 Error UI Components

### Global Error Page

**Location**: Shown when unhandled errors occur

**Features**:
- Large error icon
- Clear error message
- "Try Again" button
- "Go Home" link
- Error ID for reference
- Stack trace (development)

### 404 Not Found Page

**Location**: `app/not-found.tsx`

**Features**:
- Large "404" display
- Helpful message
- Quick navigation links
- Suggestions for common pages

### Network Status Banner

**Features**:
- Appears at top of page
- Red for offline
- Green for connection restored
- Auto-dismiss after 5 seconds (online)
- Persists when offline

---

## ⚠️ Common Error Scenarios

### 1. Contact Form Submission Fails

**Causes**:
- No internet connection
- EmailJS not configured
- Request timeout
- Server error

**Handling**:
- Check network status first
- Validate EmailJS credentials
- Set 30-second timeout
- Show specific error message
- Provide email fallback

**User Experience**:
- Clear error message
- Direct email link
- Option to retry
- Auto-dismiss after 10 seconds

### 2. Component Rendering Error

**Causes**:
- Runtime JavaScript error
- Missing data/props
- State management issue

**Handling**:
- ErrorBoundary catches error
- Log to errorLogger
- Show fallback UI
- Provide "Try Again" option

**User Experience**:
- Component-specific fallback
- Rest of page works normally
- Can retry without reload

### 3. Network Connection Lost

**Causes**:
- WiFi disconnected
- Mobile data lost
- Server unreachable

**Handling**:
- useNetworkStatus detects
- NetworkStatusBanner shows
- Forms prevent submission
- Retry when reconnected

**User Experience**:
- Immediate notification
- Banner at top of page
- Clear instructions
- Auto-update when restored

### 4. Page Load Error

**Causes**:
- Build error
- Route doesn't exist
- Server error

**Handling**:
- Global error.tsx catches
- Log error with ID
- Show full-page error
- Provide navigation options

**User Experience**:
- Clear error page
- Easy navigation home
- Error ID for support
- Option to retry

---

## 🔍 Error Logging & Monitoring

### Development Mode

Errors are logged to browser console with:
- 🔴 Errors (red)
- ⚠️ Warnings (yellow)
- ℹ️ Info (blue)

### Production Mode

Errors are:
- Logged to console (minimal)
- Stored in memory (last 50)
- Ready for external service integration

### External Services (Optional)

You can integrate with:

#### Sentry
```ts
// In lib/errorLogger.ts
import * as Sentry from '@sentry/nextjs';

private sendToExternalService(errorLog: ErrorLog): void {
  Sentry.captureException(new Error(errorLog.message), {
    extra: errorLog
  });
}
```

#### Custom API Endpoint
```ts
private sendToExternalService(errorLog: ErrorLog): void {
  fetch('/api/log-error', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(errorLog)
  });
}
```

---

## 🧪 Testing Error Handling

### Test Network Errors

1. **Offline Mode**:
   - Open DevTools → Network tab
   - Change to "Offline"
   - Try submitting contact form
   - Should see network error banner

2. **Slow Connection**:
   - DevTools → Network → Slow 3G
   - Submit contact form
   - Should timeout after 30 seconds

### Test Component Errors

1. **Trigger Error**:
   ```tsx
   // Temporarily add to a component
   if (someCondition) {
     throw new Error('Test error');
   }
   ```

2. **Verify**:
   - Error boundary catches it
   - Fallback UI shows
   - Error logged
   - "Try Again" works

### Test Form Validation

1. **Empty Fields**:
   - Leave name/email/message empty
   - Click submit
   - Should show validation errors

2. **Invalid Email**:
   - Enter invalid email
   - Should show email validation error

3. **Short Message**:
   - Enter < 10 characters
   - Should show minimum length error

---

## 📊 Error Metrics

### Tracked Information

Each error log includes:
- Error message
- Stack trace
- Timestamp
- User agent
- Current URL
- Context/component
- Error ID

### Viewing Logs

In browser console:
```js
// Get all logged errors
errorLogger.getLogs()

// Clear logs
errorLogger.clearLogs()
```

---

## 🚀 Best Practices

### 1. Always Provide Context

```ts
// Good
errorLogger.log(error, 'ProjectCard - Image loading failed');

// Bad
errorLogger.log(error);
```

### 2. Use Appropriate Log Levels

```ts
// Error - for actual errors
errorLogger.log(error, context);

// Warning - for potential issues
errorLogger.warn('Slow API response', context);

// Info - for informational events
errorLogger.info('Form submitted', context);
```

### 3. Wrap Risky Operations

```ts
// Async operations
const data = await handleAsyncError(
  () => riskyAsyncOperation(),
  'Operation failed',
  'ComponentName'
);

// Sync operations
const result = tryCatch(
  () => JSON.parse(untrustedData),
  defaultValue,
  'DataParsing'
);
```

### 4. Provide User-Friendly Messages

```ts
// Good
"Unable to send message. Please check your connection and try again."

// Bad
"Error: ECONNREFUSED 127.0.0.1:3000"
```

### 5. Always Offer Recovery

- "Try Again" buttons
- Alternative contact methods
- Navigation to working pages
- Clear next steps

---

## 🔒 Security Considerations

### Don't Expose Sensitive Information

```ts
// Bad - exposes API keys
setErrorMessage(error.message); // "Invalid API key: sk_live_xxx"

// Good - generic message
setErrorMessage("Service configuration error. Please contact support.");
```

### Sanitize Error Messages

```ts
// Remove sensitive data before logging
const sanitizedError = {
  ...error,
  message: error.message.replace(/api_key=[^&]*/g, 'api_key=[REDACTED]')
};
errorLogger.log(sanitizedError, context);
```

### Use Error IDs

Instead of showing full error details to users, provide an error ID:
```ts
const errorId = generateErrorId();
errorLogger.log(error, `Error ID: ${errorId}`);
setErrorMessage(`An error occurred. Reference ID: ${errorId}`);
```

---

## 📚 API Reference

### ErrorBoundary Component

```tsx
<ErrorBoundary
  context="ComponentName"       // Optional: context for logging
  fallback={<CustomUI />}       // Optional: custom fallback
  showError={true}              // Optional: show error details
>
  <YourComponent />
</ErrorBoundary>
```

### useNetworkStatus Hook

```tsx
const {
  isOnline,        // boolean: current online status
  wasOffline,      // boolean: was offline, now online
  connectionType   // string: connection type
} = useNetworkStatus();
```

### errorLogger Utility

```ts
errorLogger.log(error, context?)      // Log error
errorLogger.warn(message, context?)   // Log warning
errorLogger.info(message, context?)   // Log info
errorLogger.getLogs()                 // Get all logs
errorLogger.clearLogs()               // Clear logs
```

---

## ✅ Checklist: Error Handling Coverage

- [x] Global error boundary (app-level)
- [x] Component error boundaries
- [x] Network status monitoring
- [x] Network error banner
- [x] Form validation
- [x] Form submission errors
- [x] Timeout handling
- [x] Error logging utility
- [x] User-friendly error messages
- [x] Recovery mechanisms
- [x] 404 page
- [x] Error IDs for tracking
- [x] Development vs production modes
- [x] Stack trace display (dev)
- [ ] External error service (optional)
- [ ] Error analytics (optional)

---

## 🎯 Summary

Your portfolio now has **enterprise-grade error handling** that:

✅ Catches all types of errors gracefully
✅ Provides clear, actionable messages to users
✅ Logs errors for debugging and monitoring
✅ Monitors network connectivity
✅ Offers recovery options
✅ Maintains great UX even when things go wrong

**Your users will never see a blank screen or cryptic error message!**

---

*Built with resilience and user experience in mind* 🛡️

