# Namecheap DNS Configuration - Current Step

## You're Currently In: Advanced DNS Section

You have two options. **Option 1 (Nameservers) is recommended** as it's easier and Vercel manages everything automatically.

---

## ✅ OPTION 1: Use Vercel Nameservers (RECOMMENDED)

### Step 1: Go to Nameservers Section
1. In Namecheap, look for a tab or link that says **"Nameservers"** or **"Domain"**
2. It should be in the same domain management area, usually as a tab at the top
3. Click on **"Nameservers"** (not "Advanced DNS")

### Step 2: Change to Custom DNS
1. You'll see it's currently set to "Namecheap BasicDNS"
2. Change the dropdown to **"Custom DNS"**
3. You'll see two input fields

### Step 3: Enter Vercel Nameservers
Enter these exactly:
- **Nameserver 1:** `ns1.vercel-dns.com`
- **Nameserver 2:** `ns2.vercel-dns.com`

### Step 4: Save
- Click the checkmark (✓) or "Save" button
- Wait 1-2 hours for propagation

**That's it!** Vercel will automatically handle all DNS records.

---

## ⚙️ OPTION 2: Use DNS Records (Keep Namecheap Nameservers)

If you prefer to keep Namecheap nameservers, follow these steps in the Advanced DNS section:

### Step 1: Delete Existing Records
1. Find the **trash can icon** (🗑️) next to each existing record
2. Delete these records:
   - ❌ CNAME Record: `www` → `parkingpage.namecheap.com.`
   - ❌ URL Redirect Record: `@` → `http://www.greenovafrica.c...`

### Step 2: Add New DNS Records

Click the **"+ ADD NEW RECORD"** button and add these:

#### Record 1: A Record for Root Domain
- **Type:** Select `A Record`
- **Host:** Enter `@`
- **Value:** Enter `216.198.79.1` (from Vercel)
- **TTL:** Select `30 min` or `Automatic`
- Click **Save** (or the checkmark)

#### Record 2: CNAME Record for WWW
- **Type:** Select `CNAME Record`
- **Host:** Enter `www`
- **Value:** Enter `065b4baf5e428aaa.vercel-dns-017.com.` (copy from Vercel - include the dot at the end)
- **TTL:** Select `30 min` or `Automatic`
- Click **Save** (or the checkmark)

### Step 3: Verify Records
You should now have:
- ✅ A Record: `@` → `216.198.79.1`
- ✅ CNAME Record: `www` → `065b4baf5e428aaa.vercel-dns-017.com.`

### Step 4: Wait for Propagation
- Wait 1-2 hours
- Go back to Vercel and click "Refresh"

---

## 🎯 Which Option Should You Choose?

**Choose Option 1 (Nameservers) if:**
- ✅ You want the easiest setup
- ✅ You want Vercel to manage DNS automatically
- ✅ You don't need other DNS records

**Choose Option 2 (DNS Records) if:**
- ✅ You want to keep Namecheap nameservers
- ✅ You need to add other custom DNS records
- ✅ You prefer manual control

---

## 📍 How to Find Nameservers Section in Namecheap

If you can't find the Nameservers section:

1. **Look for tabs at the top** of the domain management page:
   - "Domain" or "Nameservers"
   - "Advanced DNS" (where you are now)
   - "Email Forwarding"
   - etc.

2. **Or look in the left sidebar** for "Nameservers"

3. **Or go back to Domain List:**
   - Click "Domain List" in the top navigation
   - Click "Manage" on your domain again
   - Look for "Nameservers" as the first option

---

## ⏱️ After Configuration

1. **Wait 1-2 hours** for DNS propagation
2. **Go to Vercel Dashboard:**
   - Settings → Domains
   - Click **"Refresh"** button next to your domain
3. **Status should change** from "Invalid Configuration" to "Valid Configuration"
4. **Your site will be live** at `https://greenovafrica.com`

---

## 🔍 Check DNS Propagation

Visit: https://www.whatsmydns.net
- Select **NS** (for nameservers) or **A** (for A record)
- Enter: `greenovafrica.com`
- Check if it shows Vercel's values globally

---

## ❓ Need Help?

If you're stuck:
- **Can't find Nameservers section?** Try going back to Domain List and clicking Manage again
- **Records not saving?** Make sure you click the checkmark or Save button
- **Still showing Invalid?** Wait longer (up to 48 hours) and refresh in Vercel

