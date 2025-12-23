# Namecheap Domain Setup for Greenov Africa

## Step 1: Purchase Domain on Namecheap

### 1.1 Visit Namecheap
- Go to https://www.namecheap.com
- Create an account or log in

### 1.2 Search for Domain
- In the search bar, type: `greenovafrica.com` (or your preferred domain)
- Click **Search**
- Review available options:
  - `.com` - Most popular (~$13-15/year)
  - `.co.rw` - Rwanda-specific (~$20-30/year)
  - `.org` - Alternative option

### 1.3 Add to Cart
- Click **Add to Cart** next to your chosen domain
- Review cart and click **Checkout**

### 1.4 Complete Purchase
- Enter/verify contact information
- Choose registration period (1 year minimum recommended)
- Review privacy protection (usually free with Namecheap)
- Complete payment

---

## Step 2: Configure Domain in Namecheap

### 2.1 Access Domain List
1. Log in to Namecheap
2. Go to **Account** → **Domain List**
3. Find your domain and click **Manage**

### 2.2 Set Up DNS (You'll do this after connecting to Vercel)
- We'll configure DNS after adding the domain to Vercel
- Keep this tab open for later

---

## Step 3: Add Domain to Vercel

### 3.1 Go to Vercel Dashboard
1. Visit https://vercel.com/dashboard
2. Log in to your account
3. Select your **Greenov-Africa** project

### 3.2 Add Custom Domain
1. Click on your project
2. Go to **Settings** tab
3. Click **Domains** in the left sidebar
4. Click **Add Domain** button
5. Enter your domain: `greenovafrica.com`
6. Click **Add**

### 3.3 Vercel Will Show DNS Configuration
Vercel will display one of two options:

**Option A: Nameservers (Recommended)**
- Vercel will show you nameservers like:
  - `ns1.vercel-dns.com`
  - `ns2.vercel-dns.com`

**Option B: DNS Records**
- Vercel will show DNS records to add (A record or CNAME)

---

## Step 4: Configure DNS in Namecheap

### 4.1 If Using Nameservers (Recommended - Easiest)

1. **In Namecheap:**
   - Go to **Domain List** → Click **Manage** on your domain
   - Scroll to **Nameservers** section
   - Select **Custom DNS** (not "Namecheap BasicDNS")
   - Enter the nameservers provided by Vercel:
     ```
     ns1.vercel-dns.com
     ns2.vercel-dns.com
     ```
   - Click the **✓** checkmark to save
   - Wait for confirmation

2. **In Vercel:**
   - Vercel will automatically detect the nameserver change
   - Domain status will show "Configuring" then "Valid Configuration"

### 4.2 If Using DNS Records (Alternative)

1. **In Namecheap:**
   - Go to **Domain List** → Click **Manage** on your domain
   - Go to **Advanced DNS** tab
   - Remove any existing A records or CNAME records for the root domain
   - Add the DNS records provided by Vercel:
     - Usually an **A Record** pointing to an IP address
     - Or a **CNAME Record** pointing to `cname.vercel-dns.com`
   - Click **Save All Changes**

2. **In Vercel:**
   - Vercel will verify the DNS records
   - Status will update to "Valid Configuration"

---

## Step 5: Wait for DNS Propagation

### 5.1 Check Propagation Status
- DNS changes can take 1-48 hours (usually 1-2 hours)
- Check status at: https://www.whatsmydns.net
- Enter your domain and check if it points to Vercel

### 5.2 Verify in Vercel
- Go back to Vercel Dashboard → Your Project → Settings → Domains
- Status should change from "Configuring" to "Valid Configuration"
- SSL certificate will be automatically provisioned

---

## Step 6: Verify Your Site is Live

### 6.1 Test Your Domain
- After DNS propagation, visit: `https://greenovafrica.com`
- Your site should load with SSL (HTTPS)
- If it doesn't work, wait a bit longer and try again

### 6.2 Check SSL Certificate
- Vercel automatically provides free SSL certificates
- Your site should show a padlock icon in the browser
- Certificate is valid and automatically renews

---

## Troubleshooting

### Domain Not Connecting After 2 Hours?
1. **Double-check DNS settings in Namecheap**
   - Verify nameservers or DNS records are correct
   - Make sure you saved changes

2. **Clear browser cache**
   - Try incognito/private browsing mode
   - Or clear browser cache

3. **Check DNS propagation**
   - Use https://www.whatsmydns.net
   - Check from different locations

4. **Verify in Vercel**
   - Check domain status in Vercel dashboard
   - Look for any error messages

### SSL Certificate Not Working?
- Wait 24-48 hours after DNS propagation
- Vercel automatically provisions SSL
- Check Vercel dashboard for SSL status

### Still Having Issues?
- Namecheap Support: https://www.namecheap.com/support/
- Vercel Support: https://vercel.com/support
- Vercel Docs: https://vercel.com/docs/concepts/projects/domains

---

## Quick Checklist

- [ ] Domain purchased on Namecheap
- [ ] Domain added to Vercel project
- [ ] DNS configured in Namecheap (nameservers or DNS records)
- [ ] DNS propagated (checked with whatsmydns.net)
- [ ] Domain shows "Valid Configuration" in Vercel
- [ ] Site accessible via https://yourdomain.com
- [ ] SSL certificate active (padlock icon in browser)

---

## Additional Namecheap Features (Optional)

### Email Forwarding
- Namecheap offers email forwarding (e.g., info@greenovafrica.com)
- Go to **Domain List** → **Manage** → **Email Forwarding**
- Set up forwarding to your existing email

### Privacy Protection
- Usually included free with Namecheap
- Protects your personal information in WHOIS database
- Already enabled by default

---

## Estimated Timeline

- **Domain Purchase**: 5-10 minutes
- **DNS Configuration**: 5 minutes
- **DNS Propagation**: 1-2 hours (can take up to 48 hours)
- **SSL Certificate**: Automatic after DNS propagation
- **Total**: Usually 2-3 hours from purchase to live site

---

## Cost Breakdown

- **Domain (.com)**: ~$13-15/year
- **Privacy Protection**: FREE (included)
- **Vercel Hosting**: FREE (Hobby plan)
- **SSL Certificate**: FREE (included with Vercel)
- **Total First Year**: ~$13-15

---

## Need Help?

If you get stuck at any step, let me know and I can help you troubleshoot!

