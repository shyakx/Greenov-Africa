# Configure Namecheap Domain for Vercel - Step by Step

## Current Status
- ✅ Domain purchased on Namecheap: `greenovafrica.com`
- ✅ Domain added to Vercel
- ⏳ DNS configuration needed in Namecheap

## Step-by-Step: Update Nameservers in Namecheap

### Step 1: Log in to Namecheap
1. Go to https://www.namecheap.com
2. Click **Sign In** (top right)
3. Enter your credentials

### Step 2: Access Domain Management
1. After logging in, click **Account** → **Domain List** (or go directly to https://ap.www.namecheap.com/domains/list/)
2. Find your domain `greenovafrica.com` in the list
3. Click the **Manage** button next to your domain

### Step 3: Update Nameservers
1. On the domain management page, scroll down to find the **Nameservers** section
2. You'll see it currently set to "Namecheap BasicDNS" (default)
3. Click the dropdown and select **Custom DNS**
4. You'll see two input fields for nameservers
5. Enter the Vercel nameservers:
   - **Nameserver 1:** `ns1.vercel-dns.com`
   - **Nameserver 2:** `ns2.vercel-dns.com`
6. Click the **✓** (checkmark) button to save

### Step 4: Wait for Changes to Apply
- Namecheap will show a confirmation message
- Changes usually apply within a few minutes
- Can take up to 24-48 hours (but usually 1-2 hours)

### Step 5: Verify in Vercel
1. Go back to your Vercel dashboard
2. Navigate to: **Settings** → **Domains**
3. Click the **Refresh** button next to your domain
4. The status should change from "Invalid Configuration" to "Valid Configuration"
5. This may take a few minutes to update

---

## Alternative: Using DNS Records (If Nameservers Don't Work)

If you prefer to keep Namecheap's nameservers and use DNS records instead:

### For Root Domain (`greenovafrica.com`):
1. In Namecheap domain management, go to **Advanced DNS** tab
2. In the **Host Records** section, add:
   - **Type:** `A Record`
   - **Host:** `@`
   - **Value:** `216.198.79.1`
   - **TTL:** Automatic (or 30 min)
   - Click **Save**

### For WWW Subdomain (`www.greenovafrica.com`):
1. In the same **Advanced DNS** tab
2. Add another record:
   - **Type:** `CNAME Record`
   - **Host:** `www`
   - **Value:** `065b4baf5e428aaa.vercel-dns-017.com.` (copy from Vercel)
   - **TTL:** Automatic (or 30 min)
   - Click **Save**

---

## Recommended Approach: Use Vercel Nameservers

**Why use Vercel nameservers?**
- ✅ Easier to manage
- ✅ Automatic DNS management
- ✅ Better performance
- ✅ Easier to add more domains later

**Steps:**
1. In Namecheap: Change to Custom DNS with Vercel nameservers
2. Wait 1-2 hours for propagation
3. Vercel will automatically configure everything

---

## Check DNS Propagation

After updating nameservers, check if they've propagated:

1. Visit: https://www.whatsmydns.net
2. Select **NS** (Nameservers) from the dropdown
3. Enter your domain: `greenovafrica.com`
4. Click **Search**
5. Check if nameservers show `ns1.vercel-dns.com` and `ns2.vercel-dns.com` globally

---

## Timeline

- **Nameserver Update:** Immediate in Namecheap
- **DNS Propagation:** 1-2 hours (can take up to 48 hours)
- **Vercel Verification:** Usually within 1 hour after DNS propagates
- **SSL Certificate:** Automatic after domain is verified (usually within minutes)

---

## Troubleshooting

### Still Showing "Invalid Configuration" After 2 Hours?
1. **Double-check nameservers in Namecheap:**
   - Make sure you saved the changes
   - Verify they're exactly: `ns1.vercel-dns.com` and `ns2.vercel-dns.com`
   - No typos or extra spaces

2. **Check DNS propagation:**
   - Use https://www.whatsmydns.net
   - If nameservers haven't propagated globally, wait longer

3. **Refresh in Vercel:**
   - Click the **Refresh** button in Vercel dashboard
   - Sometimes it needs a manual refresh

4. **Clear browser cache:**
   - Try incognito/private browsing mode
   - Or clear your browser cache

### Domain Not Resolving?
- Wait longer (up to 48 hours for full global propagation)
- Check from different networks/devices
- Verify nameservers are correct

---

## What Happens Next?

Once DNS is configured correctly:

1. ✅ Vercel will show "Valid Configuration"
2. ✅ Your site will be accessible at `https://greenovafrica.com`
3. ✅ SSL certificate will be automatically provisioned
4. ✅ `www.greenovafrica.com` will automatically redirect to `greenovafrica.com` (or vice versa, depending on your Vercel settings)

---

## Quick Checklist

- [ ] Logged into Namecheap
- [ ] Found domain in Domain List
- [ ] Clicked "Manage" on domain
- [ ] Changed nameservers to Custom DNS
- [ ] Entered `ns1.vercel-dns.com` and `ns2.vercel-dns.com`
- [ ] Saved changes (clicked checkmark)
- [ ] Waited 1-2 hours
- [ ] Checked DNS propagation at whatsmydns.net
- [ ] Refreshed in Vercel dashboard
- [ ] Status changed to "Valid Configuration"
- [ ] Site accessible at https://greenovafrica.com

---

## Need Help?

If you encounter any issues:
- Namecheap Support: https://www.namecheap.com/support/
- Vercel Support: https://vercel.com/support
- Check Vercel docs: https://vercel.com/docs/concepts/projects/domains

