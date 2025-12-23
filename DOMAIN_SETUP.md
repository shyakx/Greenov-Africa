# Domain Purchase and Vercel Connection Guide

## Step 1: Purchase a Domain

### Recommended Domain Registrars:
1. **Namecheap** (https://www.namecheap.com) - Popular, affordable, good support
2. **Google Domains** (https://domains.google) - Simple interface, reliable
3. **GoDaddy** (https://www.godaddy.com) - Well-known, many options
4. **Cloudflare** (https://www.cloudflare.com/products/registrar/) - No markup, good security

### Domain Name Suggestions:
- `greenovafrica.com`
- `greenov-africa.com`
- `greenovafrica.rw` (Rwanda-specific)
- `greenovafrica.co.rw`

### Steps to Purchase:
1. Visit your chosen registrar
2. Search for your desired domain name
3. Add to cart and complete checkout
4. Complete domain registration (you'll need to provide contact information)

---

## Step 2: Connect Domain to Vercel

### Option A: If Your Project is Already on Vercel

1. **Go to Vercel Dashboard**
   - Visit https://vercel.com/dashboard
   - Log in to your account
   - Select your project (Greenov-Africa)

2. **Add Custom Domain**
   - Click on your project
   - Go to **Settings** → **Domains**
   - Click **Add Domain**
   - Enter your domain (e.g., `greenovafrica.com`)
   - Click **Add**

3. **Configure DNS Records**
   Vercel will show you DNS records to add. You have two options:

   **Option 1: Use Vercel Nameservers (Recommended)**
   - Copy the nameservers provided by Vercel
   - Go to your domain registrar's DNS settings
   - Replace existing nameservers with Vercel's nameservers
   - Wait for propagation (can take up to 48 hours, usually 1-2 hours)

   **Option 2: Add DNS Records Manually**
   - Add an A record pointing to Vercel's IP (Vercel will provide this)
   - Or add a CNAME record pointing to `cname.vercel-dns.com`
   - Wait for DNS propagation

4. **Verify Domain**
   - Vercel will automatically verify your domain
   - Once verified, your site will be accessible via your custom domain
   - SSL certificate will be automatically provisioned (HTTPS)

---

## Step 3: Configure DNS Records (Detailed)

### If Using Namecheap:
1. Log in to Namecheap
2. Go to **Domain List** → Select your domain
3. Click **Manage** → **Advanced DNS**
4. Add the records provided by Vercel

### If Using Google Domains:
1. Log in to Google Domains
2. Click on your domain
3. Go to **DNS** settings
4. Add the records provided by Vercel

### If Using GoDaddy:
1. Log in to GoDaddy
2. Go to **My Products** → **DNS**
3. Add the records provided by Vercel

---

## Step 4: Wait for DNS Propagation

- DNS changes can take 1-48 hours to propagate globally
- Usually takes 1-2 hours
- You can check propagation status at: https://www.whatsmydns.net

---

## Step 5: Verify SSL Certificate

- Vercel automatically provisions SSL certificates via Let's Encrypt
- Once DNS is propagated, SSL will be active
- Your site will be accessible via `https://yourdomain.com`

---

## Troubleshooting

### Domain Not Connecting:
1. Check DNS records are correct
2. Wait longer for propagation
3. Clear your browser cache
4. Try accessing from different network/device

### SSL Certificate Issues:
1. Wait 24-48 hours after DNS propagation
2. Check Vercel dashboard for SSL status
3. Contact Vercel support if issues persist

### Need Help?
- Vercel Documentation: https://vercel.com/docs/concepts/projects/domains
- Vercel Support: https://vercel.com/support

---

## Quick Checklist

- [ ] Domain purchased
- [ ] Domain added to Vercel project
- [ ] DNS records configured
- [ ] DNS propagated (check with whatsmydns.net)
- [ ] SSL certificate active
- [ ] Site accessible via custom domain

---

## Estimated Costs

- **Domain**: $10-15/year (varies by registrar and TLD)
- **Vercel Hosting**: FREE (Hobby plan) for personal projects
- **SSL Certificate**: FREE (included with Vercel)

---

## Next Steps After Domain Setup

1. Update any hardcoded URLs in your code to use the new domain
2. Update social media profiles with new domain
3. Set up email forwarding if needed (e.g., info@greenovafrica.com)
4. Submit sitemap to Google Search Console
5. Set up Google Analytics (if desired)

