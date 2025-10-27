# 🚀 FB Ads Creative Generator - Rufat Abilov Edition

Professional Facebook Ads creative generator with expert positioning, Spanish content generation, and full compliance with Spain & Facebook Ads policies.

## ✨ Features

- 🎯 **Rufat Abilov Expert Mode** - Toggle for authentic expert positioning
- 🌐 **English Interface / Spanish Content** - User-friendly UI with target market content
- 🛡️ **Compliance Built-in** - Automatic disclaimers for Spain (CNMV) and Facebook Ads
- 📝 **9 Creative Types** - Hooks, posts, video scripts, CTAs, and more
- 🎨 **6 Tone Options** - From aggressive to educational
- 📊 **History Management** - Save and reuse last 10 generations
- ⚡ **Powered by Claude AI** - Latest Claude Sonnet 4 model

## 🚀 Deploy to Vercel

### Option 1: One-Click Deploy (Recommended)

1. Click this button:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/fb-ads-generator)

2. Add your `ANTHROPIC_API_KEY` in the environment variables
3. Deploy!

### Option 2: Manual Deploy

#### Step 1: Get Anthropic API Key

1. Go to [console.anthropic.com](https://console.anthropic.com/)
2. Sign up or log in
3. Navigate to "API Keys"
4. Create a new key
5. Copy it (you'll need it for Vercel)

#### Step 2: Fork/Clone Repository

```bash
# Clone this repository
git clone https://github.com/yourusername/fb-ads-generator.git
cd fb-ads-generator

# Install dependencies
npm install
```

#### Step 3: Test Locally

```bash
# Create .env.local file
cp .env.example .env.local

# Add your API key to .env.local
# ANTHROPIC_API_KEY=your_actual_key_here

# Run development server
npm run dev

# Open http://localhost:3000
```

#### Step 4: Deploy to Vercel

1. **Install Vercel CLI (optional)**
   ```bash
   npm i -g vercel
   ```

2. **Deploy via Vercel Dashboard (Easy)**
   - Go to [vercel.com](https://vercel.com)
   - Click "Add New" → "Project"
   - Import your Git repository
   - Add environment variable:
     - Name: `ANTHROPIC_API_KEY`
     - Value: `your_api_key_here`
   - Click "Deploy"

3. **Or Deploy via CLI**
   ```bash
   vercel

   # Follow prompts
   # Add environment variable when asked
   ```

## ⚙️ Environment Variables

Add these to your Vercel project:

| Variable | Description | Required |
|----------|-------------|----------|
| `ANTHROPIC_API_KEY` | Your Anthropic API key | ✅ Yes |

**To add in Vercel:**
1. Go to your project dashboard
2. Settings → Environment Variables
3. Add `ANTHROPIC_API_KEY` with your key
4. Redeploy if needed

## 📖 How to Use

### 1. Enable Rufat Mode (Optional)
- Check the box "Creative about Rufat Abilov"
- Uses real expert achievements and stories
- Authentic contrarian positioning

### 2. Configure Parameters
- **Project/Expert**: Select trading project
- **Creative Type**: Hook, Full Post, Video Script, etc.
- **Tone**: Aggressive, Educational, Contrarian, etc.
- **Target Audience**: Describe your audience

### 3. Generate
- Click "Generate Creative"
- Wait 5-15 seconds
- Review compliance warnings
- Copy or download result

### 4. Use Your Creative
- Copy to Facebook Ads Manager
- Verify disclaimers are present
- Test with small budget (€5-10/day)
- Scale winners

## 🛡️ Compliance

All generated content includes:

✅ Spanish Financial Law (CNMV) disclaimers  
✅ Risk warnings for investments  
✅ Crypto volatility warnings  
✅ Facebook Ads policy compliance  
✅ Ethical marketing standards  

**Required Disclaimer:**
```
⚠️ Las inversiones conllevan riesgos. 
Los rendimientos pasados no garantizan resultados futuros.
```

## 🎯 Rufat Abilov Profile

**Expert Achievements:**
- Top-14 Bybit WSOT (60,000+ participants)
- $1.7M earned in 2 years from crypto
- 200 investors in closed club
- Students achieve 5-10x returns
- Public track record verified

**Powerful Stories:**
- 400V electric shock survival
- Football rejection → Gibraltar contract
- Lost $100K → recovery & system
- All-in BTC $15K → $1M portfolio

## 📊 Success Metrics

**Target KPIs for Spain Market:**
- CTR: > 2%
- CPM: < €10
- CPC: < €1
- Conversion: > 3%

## 🔧 Development

```bash
# Install dependencies
npm install

# Run dev server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## 📁 Project Structure

```
fb-ads-generator-app/
├── app/
│   ├── api/
│   │   └── generate/
│   │       └── route.ts        # API endpoint for Claude
│   ├── page.tsx                # Main application
│   ├── layout.tsx              # Root layout
│   └── globals.css             # Global styles
├── public/                     # Static assets
├── .env.example                # Environment variables template
├── .gitignore                  # Git ignore file
├── package.json                # Dependencies
├── tsconfig.json               # TypeScript config
├── tailwind.config.js          # Tailwind config
├── next.config.js              # Next.js config
└── README.md                   # This file
```

## 🐛 Troubleshooting

### App not generating content

**Problem:** "API key not configured" error

**Solution:**
1. Check Vercel environment variables
2. Ensure `ANTHROPIC_API_KEY` is set
3. Redeploy after adding variable

### Slow generation

**Problem:** Takes 20+ seconds

**Solution:**
- Normal for complex requests (video scripts)
- First request may be slower (cold start)
- Check your Anthropic API rate limits

### Compliance warnings showing

**Problem:** Red warning about missing disclaimer

**Solution:**
- This is intentional
- Add suggested disclaimer manually
- Or regenerate with different parameters

## 📄 License

This project is private and proprietary.

## 🤝 Support

For issues or questions:
1. Check Vercel deployment logs
2. Verify API key is correct
3. Test locally first with `npm run dev`

## 🎉 Credits

- **Built with:** Next.js 14, React 18, Tailwind CSS
- **AI Powered by:** Anthropic Claude Sonnet 4
- **Deployed on:** Vercel
- **Version:** 2.0.0 - Rufat Abilov Edition

---

**Ready to create high-converting Spanish Facebook Ads!** 🚀
