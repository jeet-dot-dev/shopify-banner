# Shopify Banne## 🧠 What I Built & Why

This project consists of:

- **🚀 ```bash
npm install -g @shopify/cli
shopify login --store jeet-dot-dev
```

### 3. 🚀 Initialize the Shopify App
**Create new app using Remix template**
```bash
shopify app init
# Choose: "Build a Remix app (recommended)"
# App name: jeet-dot-dev-banner-app
cd jeet-dot-dev-banner-app
```

### 4. 🎨 Generate Theme App Extension
**Create the extension that will house our banner**
```bash
shopify app generate extension
# Type to search: "theme"
# Choose: "Theme app extension"
# Name: banner (or promotion-banner)
```

This creates the following structure: template)** - Generated using the official Shopify CLI for robust app infrastructure
- **🎨 Theme App Extension** - A native Shopify extension that renders a customizable banner block 
- **⚙️ Flexible Configuration** - Banner text defaults to **"🎉 Free Shipping on All Orders! 🎉"** but can be easily customized through the Shopify Theme Editor

**Why Theme App Extension?**
I chose a Theme App Extension because it's the most Shopify-native approach to inject UI components into storefronts. This method:
- ✅ Requires no direct theme code modification
- ✅ Maintains compatibility across different themes
- ✅ Provides merchant-friendly customization options
- ✅ Follows Shopify's best practices for app development "🎉 Free Shipping on All Orders! 🎉"

A minimal yet powerful Shopify **app + theme app extension** that seamlessly injects a customizable promotional banner at the very top of any Shopify storefront.

> **📋 Assignment Goal**: Create a Shopify app that automatically adds a visible banner displaying  
> `🎉 Free Shipping on All Orders! 🎉` at the top of the store upon installation.ify Banner App — “🎉 Free Shipping on All Orders! 🎉”

A minimal Shopify **app + theme app extension** that injects a promotional banner at the very top of any Shopify storefront.

> **Assignment goal**: On install, add a visible banner showing  
> `🎉 Free Shipping on All Orders! 🎉` at the top of the store.


---

## 🧠 What I built & why

- A **Shopify App (Remix template)** generated via Shopify CLI.  
- Inside the app, a **Theme App Extension** that renders a banner block you can place in the theme header.  
- The banner text defaults to **“🎉 Free Shipping on All Orders! 🎉”** and can be customized in the Theme Editor.  

I used a Theme App Extension because it’s the simplest, “Shopify-native” way to inject UI into a storefront without editing theme code directly.

---

## 🧱 Tech Stack

| Technology | Purpose |
|------------|---------|
| **Node.js** | Runtime environment |
| **Shopify CLI** | Development tooling and scaffolding |
| **Shopify App (Remix)** | Backend app framework |
| **Theme App Extension** | Frontend storefront integration |
| **Liquid** | Shopify's templating language |
| **HTML/CSS/JavaScript** | Frontend implementation |  

---

## ✅ Prerequisites

Before getting started, ensure you have:

- **Node.js** (v18+ recommended) - [Download here](https://nodejs.org/)
- **Package Manager** - npm (comes with Node.js) or yarn
- **Shopify Partner Account** - [Sign up for free](https://partners.shopify.com/)
- **Shopify Development Store** - Created through your Partner dashboard
- **Shopify CLI** - Install globally with `npm i -g @shopify/cli`

> 💡 **Tip**: Make sure your development store has some products and a published theme for testing.  

---

## 🚀 How I Built It (Step-by-Step)

### 1. 🏪 Setup Shopify Environment
**Create Partner Account & Development Store**
- Navigate to [Shopify Partners](https://partners.shopify.com) and create/login to your account
- Create a **development store** (example: `jeet-dot-dev`)
- Note down your store URL for later use

### 2. 🔧 Install & Configure CLI
**Install Shopify CLI and authenticate**
   ```bash
   npm install -g @shopify/cli
   shopify login --store jeet-dot-dev

## Initialize the app (Remix template)

shopify app init
# Choose: “Build a Remix app (recommended)”
# App name: jeet-dot-dev-banner-app
cd jeet-dot-dev-banner-app

## Generate a Theme App Extension
shopify app generate extension
# Type to search: "theme"
# Choose: "Theme app extension"
# Name: banner (or promotion-banner)

## This creates:

```
extensions/
  banner/
    blocks/          # Liquid template files
    assets/          # CSS, JS, and other assets
    snippets/        # Reusable code snippets
    shopify.extension.toml  # Extension configuration
```

### 5. 💻 Implement Banner Block Code
**Add the promotional banner logic** (detailed implementation in the blocks/ directory)

### 6. 🎯 Deploy & Configure in Theme
**Place the banner in your storefront**

1. **Access Theme Customizer**
   - Go to **Shopify Admin → Online Store → Themes → Customize**

2. **Add Banner Block**
   - In the left panel, navigate to **Header** (or relevant section)
   - Click **Add block** → find **Promotion Banner** (App block)
   - Drag it to the top position → **Save**

3. **Verify Installation**
   - Open your storefront product page
   - Confirm the banner displays: **"🎉 Free Shipping on All Orders! 🎉"** at the top
   - Copy the URL for documentation/testing

> 🎯 **Success!** Your banner should now be visible on all storefront pages.

---

## 📁 Project Structure

```
jeet-dot-dev-banner-app/
├─ app/                         # Remix app (admin UI, optional for this task)
├─ extensions/
│  └─ banner/
│     ├─ blocks/
│     │  └─ promotion_banner.liquid  # Main banner component
│     ├─ assets/
│     │  └─ custom-banner.css       # Banner styling
│     ├─ snippets/                  # Reusable code snippets
│     └─ shopify.extension.toml     # Extension configuration
├─ package.json                     # Dependencies and scripts
├─ .env.example                     # Environment variables template
└─ README.md                        # This file
```

---

## 🚀 Quick Start

1. **Clone and Install**
   ```bash
   git clone <repository-url>
   cd jeet-dot-dev-banner-app
   npm install
   ```

2. **Development**
   ```bash
   shopify app dev
   ```

3. **Deploy**
   ```bash
   shopify app deploy
   ```

---

## 🎨 Customization

The banner is fully customizable through the Shopify Theme Editor:
- **Banner Text** - Change the promotional message
- **Background Color** - Adjust the banner's background
- **Text Color** - Modify text appearance
- **Display Settings** - Control visibility and positioning

---

## 📝 Notes

- This app uses Shopify's Theme App Extension architecture for maximum compatibility
- The banner automatically appears on all storefront pages once configured
- Merchants can easily customize the banner without technical knowledge
- The extension follows Shopify's design and development best practices
