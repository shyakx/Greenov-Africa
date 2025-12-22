# EmailJS Setup Guide

This guide will help you set up EmailJS to receive contact form submissions directly to greenovafrica@gmail.com.

## Step 1: Create EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account (allows 200 emails/month)
3. Verify your email address

## Step 2: Create an Email Service

1. In your EmailJS dashboard, go to **Email Services**
2. Click **Add New Service**
3. Choose **Gmail** (or your preferred email provider)
4. Connect your Gmail account (greenovafrica@gmail.com)
5. Note down your **Service ID** (e.g., `service_xxxxxxx`)

## Step 3: Create an Email Template

1. Go to **Email Templates** in your dashboard
2. Click **Create New Template**
3. Use the following template:

**Template Name:** Contact Form

**Subject:** Contact Form Message from {{from_name}}

**Content (Plain Text Version):**
```
You have received a new message from your website contact form.

Name: {{from_name}}
Email: {{from_email}}
Phone: {{phone}}

Message:
{{message}}

---
This email was sent from the GREENOV LTD website contact form.
```

**Content (HTML Version):**
Copy and paste this HTML into the EmailJS template editor:

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <style>
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
      line-height: 1.6;
      color: #333333;
      max-width: 600px;
      margin: 0 auto;
      padding: 20px;
      background-color: #f5f5f5;
    }
    .container {
      background-color: #ffffff;
      border-radius: 10px;
      padding: 30px;
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    }
    .header {
      background: linear-gradient(135deg, #16a34a 0%, #22c55e 100%);
      color: #ffffff;
      padding: 20px;
      border-radius: 10px 10px 0 0;
      margin: -30px -30px 30px -30px;
      text-align: center;
    }
    .header h1 {
      margin: 0;
      font-size: 24px;
      font-weight: 700;
    }
    .info-section {
      margin-bottom: 20px;
      padding: 15px;
      background-color: #f8f9fa;
      border-left: 4px solid #22c55e;
      border-radius: 5px;
    }
    .info-label {
      font-weight: 600;
      color: #16a34a;
      display: inline-block;
      min-width: 80px;
      margin-bottom: 5px;
    }
    .info-value {
      color: #333333;
      margin-bottom: 10px;
    }
    .message-section {
      margin-top: 25px;
      padding: 20px;
      background-color: #f8f9fa;
      border-radius: 5px;
      border: 1px solid #e5e7eb;
    }
    .message-label {
      font-weight: 600;
      color: #16a34a;
      margin-bottom: 10px;
      display: block;
    }
    .message-content {
      color: #333333;
      white-space: pre-wrap;
      line-height: 1.8;
    }
    .footer {
      margin-top: 30px;
      padding-top: 20px;
      border-top: 1px solid #e5e7eb;
      text-align: center;
      color: #6b7280;
      font-size: 12px;
    }
    .footer p {
      margin: 5px 0;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>New Contact Form Message</h1>
    </div>
    
    <p style="color: #6b7280; margin-bottom: 25px;">You have received a new message from your GREENOV LTD website contact form.</p>
    
    <div class="info-section">
      <div>
        <span class="info-label">Name:</span>
        <span class="info-value">{{from_name}}</span>
      </div>
      <div>
        <span class="info-label">Email:</span>
        <span class="info-value"><a href="mailto:{{from_email}}" style="color: #16a34a; text-decoration: none;">{{from_email}}</a></span>
      </div>
      <div>
        <span class="info-label">Phone:</span>
        <span class="info-value">{{phone}}</span>
      </div>
    </div>
    
    <div class="message-section">
      <span class="message-label">Message:</span>
      <div class="message-content">{{message}}</div>
    </div>
    
    <div class="footer">
      <p>This email was sent from the GREENOV LTD website contact form.</p>
      <p>Please reply directly to {{from_email}} to respond to this inquiry.</p>
    </div>
  </div>
</body>
</html>
```

4. Note down your **Template ID** (e.g., `template_xxxxxxx`)

## Step 4: Get Your Public Key

1. Go to **Account** → **General**
2. Find your **Public Key** (e.g., `xxxxxxxxxxxxx`)
3. Copy this key

## Step 5: Update the Contact Form

1. Open `src/pages/Contacts.jsx`
2. Find these lines (around line 30-32):
```javascript
const serviceID = 'YOUR_SERVICE_ID' // Replace with your EmailJS service ID
const templateID = 'YOUR_TEMPLATE_ID' // Replace with your EmailJS template ID
const publicKey = 'YOUR_PUBLIC_KEY' // Replace with your EmailJS public key
```

3. Replace the placeholders with your actual values:
   - `YOUR_SERVICE_ID` → Your Service ID from Step 2
   - `YOUR_TEMPLATE_ID` → Your Template ID from Step 3
   - `YOUR_PUBLIC_KEY` → Your Public Key from Step 4

## Step 6: Test the Form

1. Start your development server: `npm run dev`
2. Navigate to the Contact page
3. Fill out and submit the form
4. Check your email (greenovafrica@gmail.com) for the message

## Troubleshooting

- **Emails not sending?** Check the browser console for errors
- **Service ID/Template ID not found?** Make sure you copied them correctly from EmailJS dashboard
- **Rate limit exceeded?** Free plan allows 200 emails/month. Consider upgrading if needed

## Security Note

The Public Key is safe to use in frontend code. EmailJS handles the email sending securely on their servers.

