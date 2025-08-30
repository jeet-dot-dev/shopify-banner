# Vercel Deployment Checklist

## ✅ Fixed Issues

### 1. Prisma Client Generation
- ✅ Added `prisma generate` to build scripts
- ✅ Added `postinstall` script to run `prisma generate` after dependencies
- ✅ Created `vercel.json` with proper build configuration
- ✅ Updated `package.json` scripts to include Prisma generation

### 2. Database Configuration
- ✅ Updated Prisma schema to use PostgreSQL
- ✅ Database URL configured for production PostgreSQL database
- ✅ Environment variables properly set in `.env`

### 3. Build Configuration
- ✅ `vercel.json` includes Prisma files in serverless functions
- ✅ Build command includes database migration deployment
- ✅ Environment variables configured for Vercel

## 🚀 Deployment Steps

### 1. Commit and Push Changes
```bash
git add .
git commit -m "Fix Vercel deployment: Add Prisma generation and PostgreSQL support"
git push origin main
```

### 2. Vercel Environment Variables
Make sure these are set in your Vercel dashboard:

**Required:**
- `DATABASE_URL` - Your PostgreSQL connection string
- `SHOPIFY_API_KEY` - Your Shopify app's API key
- `SHOPIFY_API_SECRET` - Your Shopify app's API secret
- `SHOPIFY_APP_SESSION_SECRET` - 32-character session encryption key
- `SHOPIFY_SCOPES` - App permissions (e.g., "write_products")
- `SHOPIFY_APP_URL` - Your Vercel deployment URL

**Optional:**
- `SHOPIFY_BANNER_ID` - Your banner extension ID

### 3. Deploy to Vercel
1. Connect your repository to Vercel
2. Ensure environment variables are set
3. Deploy!

## 🔧 Files Modified

1. **vercel.json** - New deployment configuration
2. **package.json** - Updated build scripts
3. **prisma/schema.prisma** - Changed from SQLite to PostgreSQL
4. **.env.example** - Template for environment variables
5. **app/routes/app.banners.tsx** - Added banner management page
6. **app/routes/app.tsx** - Added navigation to banner setup

## 🐛 Troubleshooting

### If you still get Prisma errors:
1. Check that `DATABASE_URL` is set correctly in Vercel
2. Ensure the PostgreSQL database is accessible
3. Try redeploying after clearing Vercel's build cache

### If build fails:
1. Check the build logs in Vercel dashboard
2. Ensure all environment variables are set
3. Verify the PostgreSQL connection string is correct

### Local development:
- Update your local `.env` file with `DATABASE_URL="file:./dev.sqlite"` for local SQLite
- For production testing locally, use the PostgreSQL URL

## 📝 Next Steps
1. Test the deployment
2. Verify the banner extension works in Shopify theme
3. Monitor for any runtime errors
