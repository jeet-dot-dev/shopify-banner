# Environment Variables for Vercel Deployment

## Copy these EXACT values to Vercel Environment Variables:

### DATABASE_URL
```
[REPLACE WITH YOUR ACTUAL DATABASE URL - Check your .env file or database provider]
```

### SHOPIFY_API_KEY
```
[REPLACE WITH YOUR ACTUAL SHOPIFY API KEY - Check your .env file]
```

### SHOPIFY_API_SECRET
```
[CHECK YOUR .env FILE - Replace with actual value from your .env file]
```

### SHOPIFY_SCOPES
```
write_products
```

### SHOPIFY_APP_SESSION_SECRET
```
[REPLACE WITH YOUR ACTUAL SESSION SECRET - Check your .env file]
```

### SHOPIFY_APP_URL
```
[UPDATE AFTER DEPLOYMENT - Replace with your actual Vercel URL]
```

## Steps for Vercel GUI Deployment:

1. **Commit and Push to GitHub:**
   ```bash
   git add .
   git commit -m "Configure for Vercel deployment with PostgreSQL"
   git push origin main
   ```

2. **Go to Vercel Dashboard:**
   - Visit https://vercel.com/dashboard
   - Click "New Project"
   - Import your GitHub repository

3. **Add Environment Variables:**
   - In project settings, add all variables above
   - Don't forget to update SHOPIFY_APP_URL after deployment

4. **Deploy:**
   - Click Deploy
   - Wait for build to complete

5. **Update Shopify App Settings:**
   - Copy your Vercel URL (e.g., https://shopify-banner-xyz.vercel.app)
   - Update SHOPIFY_APP_URL environment variable in Vercel
   - Update shopify.app.toml with new URLs
   - Update Shopify Partner Dashboard app settings

6. **Run Database Migration:**
   ```bash
   npx prisma migrate deploy
   ```

## Ready for Deployment! 🚀

Your app is now configured for Vercel deployment via GUI.
