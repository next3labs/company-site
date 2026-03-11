# NEXT3LABS Website Redesign Plan
## 2026 Modern Professional Design

### Design Philosophy
- Clean, modern aesthetic with generous white space
- Professional color scheme emphasizing trust and innovation
- Mobile-first responsive design
- Fast loading with minimal JavaScript
- Clear visual hierarchy and CTAs

### Color Palette (Updated)
- Primary: #1a365d (Deep Navy - trust, professionalism)
- Secondary: #2563eb (Electric Blue - innovation, technology)
- Accent: #06b6d4 (Cyan - AI, modern, fresh)
- Success: #10b981 (Green - growth, positive outcomes)
- Background: #ffffff (White - clean, spacious)
- Surface: #f8fafc (Light gray - subtle sections)
- Text Primary: #1e293b (Slate dark)
- Text Secondary: #64748b (Slate medium)

### Typography
- Headings: Inter or system-ui font stack
- Body: -apple-system, BlinkMacSystemFont with 1.7 line-height
- Hero: 3.5rem (56px) with tight letter-spacing
- Section headings: 2.5rem (40px)
- Body: 1.125rem (18px) for readability

### Key Sections

#### 1. Hero Section
**Headline:** "Singapore's AI-Ready IT Partner"
**Subheadline:** "Prepare your business for the AI era. From server rescue to AI readiness assessments — we help Singapore companies leverage technology for growth."
**CTA:** "Get AI Readiness Assessment" + "View Services"
**Visual:** Abstract tech/AI visual or clean gradient

#### 2. Trust Bar
- Budget 2026 AI initiatives badge
- $50K tax deduction mention
- "Supporting Singapore's National AI Strategy"

#### 3. Services Grid (4 core services)
1. **AI Readiness Assessment** (NEW - Featured)
   - Icon: 🤖
   - "Prepare your business for AI adoption"
   - Budget 2026 aligned, tax benefits guidance
   
2. **Server Rescue & DevOps**
   - Icon: 🚑
   - "Emergency support and infrastructure automation"
   
3. **Custom Software Development**
   - Icon: 💻
   - "Bespoke applications and API development"
   
4. **Cloud & Infrastructure**
   - Icon: ☁️
   - "Scalable, secure cloud architecture"

#### 4. AI Focus Section (NEW)
**Headline:** "Budget 2026: Powering Singapore's AI Future"
**Content:**
- PM Wong's $150M AI investment
- $50K tax deduction for AI adoption
- National AI Strategy alignment
- How NEXT3LABS helps businesses qualify

#### 5. Why Choose Us
- Singapore-based, local expertise
- Budget 2026 knowledgeable
- Fast response times
- Transparent pricing

#### 6. Case Studies (placeholder for now)
- "AI Readiness Assessment for Financial Services Firm"
- "Server Rescue for E-commerce Platform"
- "Custom CRM for Real Estate Agency"

#### 7. Contact/CTA Section
**Headline:** "Ready to Go AI-Ready?"
**Subheadline:** "Let's discuss how your business can benefit from Budget 2026 incentives"
**CTAs:** Email, WhatsApp, Schedule Call

### New Pages to Create
1. `/ai-readiness/` - AI Readiness Assessment service page
2. `/server-rescue/` - Detailed server rescue page
3. `/devops/` - DevOps and infrastructure page
4. `/custom-software/` - Custom development page

### Technical Updates
1. Update CSS variables for new color scheme
2. Add smooth scroll behavior
3. Implement intersection observer for fade-in animations
4. Optimize images (WebP/AVIF)
5. Add structured data for services
6. Update meta descriptions for SEO

### Navigation Updates
- Home
- Services (dropdown)
  - AI Readiness
  - Server Rescue
  - DevOps
  - Custom Software
- About
- Contact

### File Structure
```
src/
  _data/
    services.json (updated)
    site.json (updated year)
  _includes/
    layouts/base.njk (updated)
    header.njk (updated nav)
  pages/
    index.njk (redesigned)
    services.njk (updated)
    ai-readiness.njk (new)
    server-rescue.njk (new)
    devops.njk (new)
    custom-software.njk (new)
  assets/css/
    style.css (major updates)
```
