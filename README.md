# OmniStore High-Converting Storefront Template
> Engineered as the reference storefront implementation for the **OmniStore Platform Architecture**, incorporating every winning pattern audited from high-volume footwear stores like `shoediversity.store`.

---

## 🚀 Key Conversion Features Included

1. **Sliding Announcement Ticker:**
   - Multi-message cycling promotional bar with manual arrow navigation.
2. **Client-Side Predictive Search (Sub-10ms):**
   - Instant search modal with live query matching, category preview, and keyboard shortcut (`Ctrl+K`).
3. **Faceted Filter & Sort Suite:**
   - Live filtering by Category (*Sneakers, Running, Sandals, Slides*), EU Shoe Size (*39 to 45*), Max Price range slider, and In-Stock availability.
   - Sort by *Featured*, *Price Low-High*, *Price High-Low*, and *Highest Discount*.
4. **Slide-Out Reactive Mini-Cart Drawer:**
   - In-drawer line items with size tags, quantity steppers, and remove triggers.
   - **In-Drawer Voucher Applicator:** Enter code `VIBE10` for an instant 10% discount.
   - Free shipping progress bar (Free shipping unlock threshold at Tk 3,000).
5. **Persistent Sticky Add-to-Cart Bar:**
   - Scroll-activated bottom bar preserving product image, title, selected EU size, and direct purchase CTA.
6. **Product Detail Modal (PDP View):**
   - High-res photography, dynamic SKU generation (`SD-AJ1-CHI-42`), real-time low stock indicator, and size conversion link.
7. **Universal Shoe Size Conversion Guide:**
   - Embedded conversion matrix (EU, US Men, UK, Foot Length in CM, and Inches).
8. **Expedited Cash-on-Delivery (COD) 1-Page Checkout:**
   - Full checkout modal with automated courier shipping calculation (Tk 70 Dhaka / Tk 130 Outside Dhaka), order summary, and real-time tracking code generation.

---

## 📂 Project Structure

```
omnistore-storefront/
├── index.html     # Semantic single-page HTML5 storefront layout
├── style.css      # Custom animations, scrollbars, and sticky bar transitions
├── app.js         # Reactive state management (Cart, Filters, Search, COD Engine)
└── README.md      # Documentation and Next.js component migration mapping
```

---

## ⚡ How to Preview Immediately

Double-click `index.html` or run this command in PowerShell:

```powershell
Start-Process "C:\Users\SBL\.gemini\antigravity\scratch\omnistore-storefront\index.html"
```
