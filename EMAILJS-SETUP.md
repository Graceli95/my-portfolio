# EmailJS Setup Guide

This guide will help you set up EmailJS to enable real email sending from the contact form.

## Step 1: Create EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account (allows 200 emails/month)
3. Verify your email address

## Step 2: Add Email Service

1. In the EmailJS dashboard, go to **Email Services**
2. Click **Add New Service**
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions for your provider
5. **Copy the Service ID** (you'll need this later)

### Recommended: Gmail Setup
- Click on Gmail
- Click "Connect Account"
- Authorize EmailJS to send emails on your behalf
- Service ID will be generated (e.g., `service_abc1234`)

## Step 3: Create Email Template

1. Go to **Email Templates** in the dashboard
2. Click **Create New Template**
3. Use this template configuration:

### Template Settings
- **Template Name**: Contact Form
- **Template ID**: Copy this for later (e.g., `template_xyz5678`)

### Template Content
```
Subject: New Contact Form Submission from {{from_name}}

From: {{from_name}}
Email: {{from_email}}
Date: {{submission_date}}

Message:
{{message}}

---
This email was sent from your portfolio contact form.
```

### Template Variables
The form will send these variables:
- `from_name` - Name entered in the form
- `from_email` - Email address entered
- `message` - Message content
- `submission_date` - Automatically added timestamp

4. Set the **To Email** to your email: `graceli9095@gmail.com`
5. Click **Save**

## Step 4: Get Your Public Key

1. Go to **Account** → **General**
2. Find your **Public Key** (also called User ID)
3. Copy it (e.g., `abc123XYZ456`)

## Step 5: Configure Environment Variables

Create a file named `.env.local` in the project root with:

```bash
# EmailJS Configuration
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_abc1234
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_xyz5678
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=abc123XYZ456
```

**Important Notes:**
- Replace the example values with your actual EmailJS credentials
- The `.env.local` file is already in `.gitignore` - your keys are safe
- All variables must start with `NEXT_PUBLIC_` to be accessible in the browser
- Never commit this file to Git

## Step 6: Restart Development Server

After adding the `.env.local` file:

```bash
npm run dev
```

The contact form will now send real emails!

## Testing

1. Navigate to `http://localhost:3000/contact`
2. Fill out the form with test data
3. Submit the form
4. Check `graceli9095@gmail.com` for the email
5. Verify the email contains:
   - Sender's name
   - Sender's email
   - Message content
   - Date/time

## Troubleshooting

### Email not sending?

1. **Check browser console** for errors
2. **Verify environment variables** are loaded:
   - Open browser console
   - Type: `console.log(process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID)`
   - Should show your service ID (not "undefined")

3. **Restart dev server** after adding `.env.local`

4. **Check EmailJS dashboard** for:
   - Service is connected
   - Template is saved
   - Email quota not exceeded (200/month on free tier)

5. **Verify email service** is properly authenticated

### Common Issues

**Error: "Service ID is required"**
- Environment variable not loaded
- Restart dev server

**Error: "Template not found"**
- Check template ID matches exactly
- Template might not be saved

**Error: "Failed to send email"**
- Email service not connected
- Check EmailJS dashboard for service status

**Emails going to spam**
- Check email provider settings
- Add your domain to SPF/DKIM (advanced)

## Security Notes

✅ **Safe:**
- Public Key (User ID) - Safe to expose in browser
- Service ID - Safe to expose
- Template ID - Safe to expose

❌ **Keep Secret:**
- Never use EmailJS Private Key in frontend code
- `.env.local` is gitignored by default

## Email Quota

**Free Tier:**
- 200 emails/month
- 2 email services
- 2 email templates

**If you exceed quota:**
- Upgrade to paid plan ($7/month for 1000 emails)
- Or use alternative service (SendGrid, Resend)

## Alternative: Production Setup

For production, you can also use:
1. **Vercel Environment Variables**
   - Go to Vercel project settings
   - Add environment variables
   - Redeploy

2. **SendGrid** (more scalable)
3. **Resend** (modern alternative)

## Support

- EmailJS Documentation: https://www.emailjs.com/docs/
- EmailJS Support: https://www.emailjs.com/support/
- Portfolio Issues: Contact developer

---

## Quick Start Checklist

- [ ] Create EmailJS account
- [ ] Add email service (Gmail recommended)
- [ ] Create email template
- [ ] Copy Service ID, Template ID, and Public Key
- [ ] Create `.env.local` file with credentials
- [ ] Restart dev server (`npm run dev`)
- [ ] Test contact form
- [ ] Verify email received at graceli9095@gmail.com

Once completed, your contact form will send real emails! 🎉

