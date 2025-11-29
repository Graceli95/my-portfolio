# 🧪 Error Handling Testing Guide

Step-by-step guide to test all error handling features in your portfolio.

---

## 🚀 Quick Start

```bash
# Start the development server
npm run dev

# Open http://localhost:3000
```

---

## Test 1: Network Status Banner

### Test Offline Mode

1. **Open the portfolio** in your browser
2. **Open DevTools** (F12 or Cmd+Option+I)
3. **Go to Network tab**
4. **Change to "Offline"** (dropdown at top)
5. **Observe**: Red banner appears at top saying "No internet connection"

### Test Online Mode

1. **Change back to "Online"** in Network tab
2. **Observe**: Green banner appears saying "Connection restored!"
3. **Wait 5 seconds** or click "Dismiss"
4. **Banner disappears automatically**

✅ **Expected Behavior**:
- Red banner when offline
- Green banner when back online
- Auto-dismiss after 5 seconds
- Smooth slide animations

---

## Test 2: Contact Form - Network Error

### Simulate No Connection

1. **Go to Contact page** (/contact)
2. **Open DevTools** → Network tab
3. **Set to "Offline"**
4. **Fill out the contact form**:
   - Name: Test User
   - Email: test@example.com
   - Message: Testing network error
5. **Click "Send Message"**

✅ **Expected Behavior**:
- Orange warning box appears
- WiFi-off icon shown
- Message: "No internet connection"
- Shows "Dismiss" button
- Form doesn't actually send

---

## Test 3: Contact Form - Timeout Error

### Simulate Slow Connection

1. **Go to Contact page**
2. **Open DevTools** → Network tab
3. **Set to "Slow 3G"** or **"Offline"** then quickly back to **"Online"**
4. **Fill out and submit form**
5. **Wait 30 seconds**

✅ **Expected Behavior**:
- Shows loading spinner
- After 30 seconds: timeout error appears
- Red error box with timeout message
- Provides direct email link fallback

---

## Test 4: Contact Form - Missing EmailJS Config

### Test Configuration Error

1. **Temporarily remove EmailJS credentials**:
   - Open `.env.local`
   - Comment out or remove the variables
   - Save file
   
2. **Restart dev server**:
   ```bash
   npm run dev
   ```

3. **Fill out and submit form**

✅ **Expected Behavior**:
- Red error box appears
- Message: "Email service not configured"
- Shows direct email link
- Error logged to console

**Don't forget to restore your EmailJS credentials after testing!**

---

## Test 5: Contact Form - Validation Errors

### Test Empty Fields

1. **Go to Contact page**
2. **Click "Send Message"** without filling anything

✅ **Expected Behavior**:
- Red borders on all fields
- Error messages under each field:
  - "Name is required"
  - "Email is required"
  - "Message is required"

### Test Invalid Email

1. **Fill in**:
   - Name: Test
   - Email: notanemail
   - Message: Test message
2. **Click submit**

✅ **Expected Behavior**:
- Red border on email field
- Error: "Please enter a valid email address"

### Test Short Message

1. **Fill in**:
   - Name: Test
   - Email: test@test.com
   - Message: Short (< 10 characters)
2. **Click submit**

✅ **Expected Behavior**:
- Red border on message field
- Error: "Message must be at least 10 characters"

---

## Test 6: Contact Form - Success

### Test Successful Submission

1. **Ensure EmailJS is configured**
2. **Ensure you're online**
3. **Fill out form correctly**:
   - Name: Your Name
   - Email: your@email.com
   - Message: Testing successful submission!
4. **Click "Send Message"**

✅ **Expected Behavior**:
- Loading spinner shows
- Green success box appears
- Check mark icon
- Message: "Thank you! I'll get back to you soon"
- Form fields clear
- Success message auto-dismisses after 7 seconds

---

## Test 7: Global Error Boundary

### Trigger Component Error

1. **Temporarily add error to a component**:
   
   Open `app/page.tsx` and add at the top of the component:
   ```tsx
   if (typeof window !== 'undefined') {
     throw new Error('Test error for error boundary');
   }
   ```

2. **Reload the page**

✅ **Expected Behavior**:
- Full-page error screen appears
- Error icon (triangle with exclamation)
- Message: "Oops! Something went wrong"
- "Try Again" button
- "Go Home" button
- Error ID shown at bottom
- In dev mode: "Show Error Details" link

3. **Click "Try Again"**
   - Page reloads
   - Error might persist (expected)

4. **Click "Go Home"**
   - Navigates to home page
   - Site works normally

**Remember to remove the test error after testing!**

---

## Test 8: 404 Page

### Test Not Found

1. **Navigate to non-existent page**:
   ```
   http://localhost:3000/this-page-doesnt-exist
   ```

✅ **Expected Behavior**:
- Large "404" display
- Message: "Page Not Found"
- "Go Home" button
- "Contact Me" button
- Quick links to main pages

2. **Click quick links**
   - All should work
   - Navigate to respective pages

---

## Test 9: Error Logger

### View Logged Errors

1. **Open browser console**
2. **Trigger some errors** (any of the tests above)
3. **In console, type**:
   ```js
   errorLogger.getLogs()
   ```

✅ **Expected Behavior**:
- Array of logged errors shown
- Each error has:
  - message
  - timestamp
  - context
  - stack trace
  - userAgent
  - url

### Clear Logs

```js
errorLogger.clearLogs()
```

✅ **Expected Behavior**:
- Logs array is empty

### Manual Logging

```js
// Log an error
errorLogger.log(new Error('Test error'), 'Console Test');

// Log a warning
errorLogger.warn('Test warning', 'Console Test');

// Log info
errorLogger.info('Test info', 'Console Test');
```

✅ **Expected Behavior**:
- Messages appear in console
- Colored appropriately (red, yellow, blue)
- Context included

---

## Test 10: Component Error Boundary (Advanced)

### Create Test Component with Error

1. **Create a test component** that throws an error
2. **Wrap it with ErrorBoundary**:
   ```tsx
   import ErrorBoundary from '@/components/ErrorBoundary';
   
   function BuggyComponent() {
     throw new Error('Component error!');
     return <div>This won't render</div>;
   }
   
   <ErrorBoundary context="Test Component">
     <BuggyComponent />
   </ErrorBoundary>
   ```

✅ **Expected Behavior**:
- Only the boundary shows error
- Rest of page still works
- Can click "Try Again"
- Error logged with context

---

## Test 11: Dark Mode Error UIs

### Test All Errors in Dark Mode

1. **Toggle dark mode** (moon icon in header)
2. **Repeat all error tests above**

✅ **Expected Behavior**:
- All error messages visible in dark mode
- Good contrast
- Colors adjust appropriately
- Icons visible

---

## Test 12: Mobile Error Handling

### Test on Mobile Viewport

1. **Open DevTools** (F12)
2. **Toggle Device Toolbar** (Cmd+Shift+M)
3. **Select iPhone or Android device**
4. **Test all error scenarios**

✅ **Expected Behavior**:
- Error messages readable on mobile
- Buttons easy to tap
- Banner doesn't cover content
- Error UIs responsive

---

## Test 13: Production Build

### Test in Production Mode

1. **Build for production**:
   ```bash
   npm run build
   npm start
   ```

2. **Open** http://localhost:3000

3. **Test all error scenarios**

✅ **Expected Behavior**:
- Errors still caught
- Error messages user-friendly (no stack traces by default)
- Error IDs still generated
- Logging still works
- Professional error pages

---

## 📊 Testing Checklist

Copy this checklist and mark off as you test:

### Network Errors
- [ ] Offline banner appears
- [ ] Online banner appears and dismisses
- [ ] Form blocks submission when offline
- [ ] Network error in contact form

### Contact Form
- [ ] Empty field validation
- [ ] Invalid email validation
- [ ] Message length validation
- [ ] Network error handling
- [ ] Timeout error handling
- [ ] Configuration error handling
- [ ] Successful submission
- [ ] Success message dismisses
- [ ] Form clears after success

### Error Boundaries
- [ ] Global error page works
- [ ] "Try Again" button works
- [ ] "Go Home" navigation works
- [ ] Error ID generated
- [ ] Stack trace in dev mode
- [ ] Component error boundary works

### 404 Page
- [ ] Shows for invalid URLs
- [ ] "Go Home" works
- [ ] "Contact Me" works
- [ ] Quick links work

### Error Logger
- [ ] Errors logged to console
- [ ] Can retrieve logs
- [ ] Can clear logs
- [ ] Manual logging works
- [ ] Context included

### Dark Mode
- [ ] All errors visible in dark mode
- [ ] Colors appropriate
- [ ] Icons visible

### Mobile
- [ ] Errors readable on mobile
- [ ] Touch targets work
- [ ] Responsive layouts

### Production
- [ ] Errors caught in production build
- [ ] No stack traces shown to users
- [ ] Professional error messages

---

## 🐛 Common Issues & Solutions

### Issue: Network banner doesn't show

**Solution**: Check browser console for errors. Network API might not be supported.

### Issue: Form doesn't show errors

**Solution**: Check `.env.local` file exists and has EmailJS credentials.

### Issue: Error boundary doesn't catch

**Solution**: Make sure error is thrown during render, not in event handler.

### Issue: Offline mode doesn't trigger

**Solution**: Use DevTools Network tab. Browser's offline mode is more reliable.

---

## 📝 Notes for Testing

1. **Always test in both light and dark mode**
2. **Test on multiple browsers** (Chrome, Firefox, Safari)
3. **Test on real mobile device** if possible
4. **Check console for logged errors**
5. **Verify error IDs are unique**
6. **Test with DevTools open** to see network requests

---

## ✅ Success Criteria

Your error handling is working correctly if:

✅ All tests pass
✅ No console errors (except intentional test errors)
✅ Error messages are clear and helpful
✅ Users always have a way to recover
✅ Dark mode works for all error UIs
✅ Mobile experience is good
✅ Production build handles errors gracefully

---

## 🎉 Testing Complete!

Once you've completed all tests, you can confidently say your portfolio has **enterprise-grade error handling**!

Your users will never see:
- ❌ Blank screens
- ❌ Cryptic error messages
- ❌ Broken functionality with no recovery

They will always see:
- ✅ Professional error pages
- ✅ Clear, helpful messages
- ✅ Ways to recover or contact you
- ✅ Working features even if one part fails

---

**Happy Testing! 🧪**

*Remember: The best error handling is invisible until it's needed!*

