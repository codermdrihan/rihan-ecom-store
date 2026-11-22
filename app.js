// RIHAN ECOM STORE — Multi-Category Storefront Engine (app.js)

// Reliable Fallback SVG Placeholder generator in case of network issues
const PLACEHOLDER_IMG = "data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22700%22%20height%3D%22600%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22%23111827%22%2F%3E%3Ctext%20x%3D%2250%25%22%20y%3D%2250%25%22%20fill%3D%22%2300F0FF%22%20font-family%3D%22sans-serif%22%20font-size%3D%2224%22%20font-weight%3D%22bold%22%20text-anchor%3D%22middle%22%20dy%3D%22.3em%22%3ERIHAN%20ECOM%20STORE%3C%2Ftext%3E%3C%2Fsvg%3E";

// 1. COMPREHENSIVE MULTI-CATEGORY PRODUCT CATALOG
const PRODUCTS = [
    // --- ELECTRONICS & GADGETS ---
    {
        id: "prod-elec-1",
        title: "AcousticPro ANC Wireless Headphones",
        category: "Electronics",
        price: 2899,
        comparePrice: 4999,
        discount: 42,
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=700&q=80",
        variants: ["Matte Black", "Space Silver", "Midnight Blue"],
        variantType: "Color",
        inStock: true,
        stockCount: 4,
        skuPrefix: "RE-AUD-ANC",
        desc: "Active Noise Cancellation with 40mm neodymium acoustic drivers. 38-hour battery playback, ultra-plush memory foam earcups, and dual beamforming mics."
    },
    {
        id: "prod-elec-2",
        title: "CyberPulse Ultra Smartwatch v3",
        category: "Electronics",
        price: 2499,
        comparePrice: 4200,
        discount: 40,
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=700&q=80",
        variants: ["Titanium Black", "Silver Milanese", "Ocean Orange"],
        variantType: "Strap",
        inStock: true,
        stockCount: 5,
        skuPrefix: "RE-WAT-PUL",
        desc: "1.96-inch Always-On AMOLED Retina display with aerospace-grade aluminum casing. Continuous SpO2, heart-rate tracking, GPS route tracking, and 5ATM water resistance."
    },
    {
        id: "prod-elec-3",
        title: "NeoPods Pro True Wireless Earbuds",
        category: "Electronics",
        price: 1599,
        comparePrice: 2999,
        discount: 47,
        image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=700&q=80",
        variants: ["Glossy White", "Stealth Black"],
        variantType: "Color",
        inStock: true,
        stockCount: 8,
        skuPrefix: "RE-POD-PRO",
        desc: "Low-latency Bluetooth 5.4 with ENC dual-mic environmental noise reduction. Wireless charging case with fast USB-C top-up providing 32 hours total playback."
    },
    {
        id: "prod-elec-4",
        title: "VibeType RGB Mechanical Keyboard (Hot-Swap)",
        category: "Electronics",
        price: 3200,
        comparePrice: 5500,
        discount: 42,
        image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=700&q=80",
        variants: ["Linear Red Switch", "Tactile Brown Switch", "Clicky Blue Switch"],
        variantType: "Switch",
        inStock: true,
        stockCount: 3,
        skuPrefix: "RE-KEY-RGB",
        desc: "75% compact mechanical board with custom PBT dye-sub keycaps, sound-dampening silicone gaskets, and south-facing per-key ARGB illumination."
    },

    // --- STREETWEAR & APPAREL ---
    {
        id: "prod-app-1",
        title: "Cyberpunk Heavyweight Oversized Hoodie",
        category: "Streetwear",
        price: 1999,
        comparePrice: 3499,
        discount: 43,
        image: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=700&q=80",
        variants: ["M", "L", "XL", "XXL"],
        variantType: "Size",
        inStock: true,
        stockCount: 6,
        skuPrefix: "RE-HOD-OVR",
        desc: "Crafted from 480 GSM French terry cotton with structured dropped shoulders, double-layered hood, and subtle screen-printed cyber aesthetics."
    },
    {
        id: "prod-app-2",
        title: "Stealth Tactical Windbreaker Bomber Jacket",
        category: "Streetwear",
        price: 2799,
        comparePrice: 4800,
        discount: 42,
        image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=700&q=80",
        variants: ["M", "L", "XL"],
        variantType: "Size",
        inStock: true,
        stockCount: 3,
        skuPrefix: "RE-JKT-BMB",
        desc: "Waterproof ripstop nylon shell with thermal quilted satin lining. Heavy-duty matte black zippers with utility sleeve cargo pockets."
    },
    {
        id: "prod-app-3",
        title: "Minimalist Heavy Cotton Graphic Tee",
        category: "Streetwear",
        price: 999,
        comparePrice: 1799,
        discount: 44,
        image: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=700&q=80",
        variants: ["S", "M", "L", "XL"],
        variantType: "Size",
        inStock: true,
        stockCount: 12,
        skuPrefix: "RE-TEE-MIN",
        desc: "240 GSM pre-shrunk combed organic cotton. Boxy modern streetwear fit with ribbed crew collar and reinforced double-needle hem."
    },

    // --- FOOTWEAR & SNEAKERS ---
    {
        id: "prod-foot-1",
        title: "Air Jordan 1 Retro Low OG 'Chicago'",
        category: "Footwear",
        price: 1899,
        comparePrice: 3599,
        discount: 47,
        image: "https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&w=700&q=80",
        variants: ["EU 40", "EU 41", "EU 42", "EU 43", "EU 44"],
        variantType: "Shoe Size",
        inStock: true,
        stockCount: 3,
        skuPrefix: "RE-AJ1-CHI",
        desc: "The classic Peter Moore design in an OG low silhouette. Premium tumbled leather with iconic red, white, and black color blocking."
    },
    {
        id: "prod-foot-2",
        title: "Adidas Originals Samba Classic 'Cloud White'",
        category: "Footwear",
        price: 1699,
        comparePrice: 3299,
        discount: 48,
        image: "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?auto=format&fit=crop&w=700&q=80",
        variants: ["EU 39", "EU 40", "EU 41", "EU 42", "EU 43"],
        variantType: "Shoe Size",
        inStock: true,
        stockCount: 5,
        skuPrefix: "RE-SAMBA-WHT",
        desc: "Soft leather upper with suede T-toe overlay and iconic gum rubber cupsole. Streetwear's most celebrated everyday staple."
    },
    {
        id: "prod-foot-3",
        title: "Nike Dunk Low Retro 'Panda'",
        category: "Footwear",
        price: 1799,
        comparePrice: 3499,
        discount: 49,
        image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=700&q=80",
        variants: ["EU 40", "EU 41", "EU 42", "EU 43", "EU 44"],
        variantType: "Shoe Size",
        inStock: true,
        stockCount: 4,
        skuPrefix: "RE-DNK-PND",
        desc: "The high-contrast black and white colorway that conquered sneaker culture. Crisp leather panels and padded low-cut collar."
    },

    // --- ACCESSORIES & GEAR ---
    {
        id: "prod-acc-1",
        title: "AeroShield Polarized Aviator Sunglasses",
        category: "Accessories",
        price: 1199,
        comparePrice: 2200,
        discount: 45,
        image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=700&q=80",
        variants: ["Gunmetal / Smoke", "Gold / Amber", "Matte Black / Mirrored"],
        variantType: "Color",
        inStock: true,
        stockCount: 9,
        skuPrefix: "RE-SUN-POL",
        desc: "UV400 triacetate cellulose polarized lenses housed in ultra-light titanium alloy frames. Glare-free optical clarity with silicone nose pads."
    },
    {
        id: "prod-acc-2",
        title: "UrbanTech Waterproof Commuter Backpack (25L)",
        category: "Accessories",
        price: 2199,
        comparePrice: 3800,
        discount: 42,
        image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=700&q=80",
        variants: ["Stealth Charcoal", "Olive Drab"],
        variantType: "Color",
        inStock: true,
        stockCount: 5,
        skuPrefix: "RE-BAG-URB",
        desc: "Weatherproof 900D Oxford fabric with dedicated padded compartment for 16-inch laptops. Ergonomic breathable back padding with luggage strap."
    }
];

// 2. GLOBAL STATE
let state = {
    products: PRODUCTS,
    filters: {
        category: "All",
        maxPrice: 6000,
        stockOnly: false
    },
    sortBy: "featured",
    cart: [],
    discountCode: null,
    discountPercent: 0,
    activePdpProduct: PRODUCTS[0],
    activePdpVariant: PRODUCTS[0].variants[0]
};

// 3. ANNOUNCEMENT TICKER CYCLING
const TICKER_MESSAGES = [
    "⚡ RIHAN ECOM STORE MEGA LAUNCH: UP TO 50% OFF ELECTRONICS, STREETWEAR & FOOTWEAR!",
    "🚚 FREE CASH ON DELIVERY SHIPPING ACROSS BANGLADESH ON ORDERS OVER TK 3,000!",
    "🔥 AUDIO, SMARTWATCHES & SNEAKERS IN STOCK &bull; 7-DAY REPLACEMENT GUARANTEE!",
    "🛡️ UTTARA EXPERIENCE HUB & SERVICE CENTER OPEN 10 AM – 10 PM DAILY!"
];
let tickerIndex = 0;
function rotateTicker(direction = 1) {
    tickerIndex = (tickerIndex + direction + TICKER_MESSAGES.length) % TICKER_MESSAGES.length;
    const tickerContent = document.getElementById('ticker-content');
    if (tickerContent) {
        tickerContent.innerHTML = `<span class="w-2 h-2 rounded-full bg-accent-orange animate-ping"></span><span>${TICKER_MESSAGES[tickerIndex]}</span>`;
    }
}
setInterval(() => rotateTicker(1), 4500);

document.getElementById('ticker-prev')?.addEventListener('click', () => rotateTicker(-1));
document.getElementById('ticker-next')?.addEventListener('click', () => rotateTicker(1));

// 4. CATALOG FILTER & SORT LOGIC
function getFilteredProducts() {
    return state.products.filter(p => {
        // Category
        if (state.filters.category !== "All" && p.category !== state.filters.category) {
            return false;
        }
        // Max Price
        if (p.price > state.filters.maxPrice) {
            return false;
        }
        // In-stock only
        if (state.filters.stockOnly && !p.inStock) {
            return false;
        }
        return true;
    }).sort((a, b) => {
        if (state.sortBy === 'price-asc') return a.price - b.price;
        if (state.sortBy === 'price-desc') return b.price - a.price;
        if (state.sortBy === 'discount') return b.discount - a.discount;
        return 0; // featured default
    });
}

function renderProductGrid() {
    const grid = document.getElementById('product-grid');
    const emptyState = document.getElementById('empty-state');
    const countDisplay = document.getElementById('product-count-display');
    const catLabel = document.getElementById('current-category-label');
    const filtered = getFilteredProducts();

    if (countDisplay) countDisplay.textContent = filtered.length;
    if (catLabel) catLabel.textContent = state.filters.category === "All" ? "All Products" : state.filters.category;

    if (filtered.length === 0) {
        grid.innerHTML = '';
        emptyState?.classList.remove('hidden');
        return;
    }

    emptyState?.classList.add('hidden');
    grid.innerHTML = filtered.map(prod => `
        <div class="product-card bg-white rounded-3xl border border-slate-200 overflow-hidden flex flex-col justify-between group shadow-sm">
            <div class="relative overflow-hidden bg-slate-100 cursor-pointer" onclick="openPdpModal('${prod.id}')">
                <img src="${prod.image}" alt="${prod.title}" onerror="this.onerror=null; this.src='${PLACEHOLDER_IMG}';" class="w-full h-60 object-cover group-hover:scale-105 transition-transform duration-500">
                <div class="absolute top-3 left-3 flex flex-col gap-1.5">
                    <span class="px-2.5 py-1 rounded-full bg-rose-500 text-white font-bold text-[10px] uppercase tracking-wider">
                        ${prod.discount}% OFF
                    </span>
                    ${!prod.inStock ? `
                        <span class="px-2.5 py-1 rounded-full bg-slate-800 text-white font-bold text-[10px] uppercase">
                            Out of Stock
                        </span>
                    ` : prod.stockCount <= 3 ? `
                        <span class="px-2.5 py-1 rounded-full bg-amber-500 text-white font-bold text-[10px] uppercase">
                            Only ${prod.stockCount} Left
                        </span>
                    ` : ''}
                </div>
            </div>

            <div class="p-5 flex-1 flex flex-col justify-between">
                <div>
                    <span class="text-[11px] font-mono font-bold text-brand-600 uppercase tracking-wider">${prod.category}</span>
                    <h4 class="font-display font-bold text-dark-900 text-base mt-1 mb-2 group-hover:text-brand-600 transition-colors line-clamp-1 cursor-pointer" onclick="openPdpModal('${prod.id}')">
                        ${prod.title}
                    </h4>

                    <!-- Price -->
                    <div class="flex items-baseline gap-2 mb-3">
                        <span class="font-display font-extrabold text-lg text-dark-900">Tk ${prod.price.toLocaleString()}</span>
                        <span class="text-xs text-slate-400 line-through font-mono">Tk ${prod.comparePrice.toLocaleString()}</span>
                    </div>

                    <!-- Variant Badges -->
                    <div class="flex items-center gap-1.5 flex-wrap mb-4">
                        <span class="text-[10px] text-slate-400 font-mono">${prod.variantType}:</span>
                        ${prod.variants.slice(0, 3).map(v => `
                            <span class="px-2 py-0.5 rounded bg-slate-100 text-[10px] font-mono text-slate-700 font-medium">${v}</span>
                        `).join('')}
                        ${prod.variants.length > 3 ? `<span class="text-[10px] text-slate-400 font-mono">+${prod.variants.length - 3}</span>` : ''}
                    </div>
                </div>

                <div class="pt-3 border-t border-slate-100 flex items-center gap-2">
                    <button onclick="openPdpModal('${prod.id}')" class="flex-1 py-2.5 rounded-xl border border-slate-200 hover:border-brand-500 hover:bg-brand-50 text-slate-700 font-bold text-xs transition-colors flex items-center justify-center gap-1">
                        <i data-lucide="eye" class="w-3.5 h-3.5"></i> Details
                    </button>
                    <button onclick="quickAddToCart('${prod.id}')" ${!prod.inStock ? 'disabled' : ''} class="px-4 py-2.5 rounded-xl bg-dark-900 hover:bg-brand-600 disabled:opacity-40 text-white font-bold text-xs transition-colors flex items-center gap-1.5 shadow-sm">
                        <i data-lucide="shopping-bag" class="w-3.5 h-3.5"></i> Add
                    </button>
                </div>
            </div>
        </div>
    `).join('');

    lucide.createIcons();
}

// 5. CART ENGINE & LOGIC
function openCartDrawer() {
    const drawer = document.getElementById('cart-drawer');
    const overlay = document.getElementById('cart-drawer-overlay');
    drawer?.classList.remove('translate-x-full');
    overlay?.classList.remove('opacity-0', 'pointer-events-none');
    document.body.classList.add('drawer-open');
}

function closeCartDrawer() {
    const drawer = document.getElementById('cart-drawer');
    const overlay = document.getElementById('cart-drawer-overlay');
    drawer?.classList.add('translate-x-full');
    overlay?.classList.add('opacity-0', 'pointer-events-none');
    document.body.classList.remove('drawer-open');
}

function updateCartUI() {
    const container = document.getElementById('cart-items-container');
    const badge = document.getElementById('cart-badge-count');
    const drawerCount = document.getElementById('drawer-item-count');
    const subtotalEl = document.getElementById('cart-subtotal');
    const totalEl = document.getElementById('cart-total');
    const discountRow = document.getElementById('discount-row');
    const discountEl = document.getElementById('cart-discount');
    const freeShippingBar = document.getElementById('free-shipping-bar');
    const freeShippingText = document.getElementById('free-shipping-text');

    const totalItems = state.cart.reduce((sum, item) => sum + item.qty, 0);
    if (badge) badge.textContent = totalItems;
    if (drawerCount) drawerCount.textContent = totalItems;

    if (state.cart.length === 0) {
        container.innerHTML = `
            <div class="text-center py-12 text-slate-400">
                <i data-lucide="shopping-bag" class="w-12 h-12 mx-auto mb-3 opacity-40"></i>
                <p class="font-bold text-slate-700 text-sm">Your cart is empty</p>
                <p class="text-xs text-slate-400 mt-1">Explore Rihan Ecom Store products to start shopping!</p>
            </div>
        `;
        if (subtotalEl) subtotalEl.textContent = 'Tk 0';
        if (totalEl) totalEl.textContent = 'Tk 0';
        if (freeShippingBar) freeShippingBar.style.width = '0%';
        if (freeShippingText) freeShippingText.textContent = 'Add Tk 3,000 for FREE Delivery!';
        lucide.createIcons();
        return;
    }

    // Render items
    container.innerHTML = state.cart.map((item, idx) => `
        <div class="flex items-center gap-3 p-3 rounded-2xl border border-slate-200 bg-white shadow-sm">
            <img src="${item.image}" alt="${item.title}" onerror="this.onerror=null; this.src='${PLACEHOLDER_IMG}';" class="w-16 h-16 rounded-xl object-cover">
            <div class="flex-1">
                <h5 class="font-bold text-xs text-dark-900 line-clamp-1">${item.title}</h5>
                <div class="text-[11px] font-mono text-slate-400 mt-0.5">Option: <span class="font-bold text-slate-700">${item.variant}</span></div>
                <div class="font-bold text-xs text-dark-900 mt-1">Tk ${item.price.toLocaleString()}</div>
            </div>
            <div class="flex flex-col items-end gap-2">
                <button onclick="removeCartItem(${idx})" class="text-slate-400 hover:text-rose-500 transition-colors p-1" title="Remove">
                    <i data-lucide="trash-2" class="w-3.5 h-3.5"></i>
                </button>
                <div class="flex items-center border border-slate-200 rounded-lg overflow-hidden">
                    <button onclick="adjustCartQty(${idx}, -1)" class="px-2 py-0.5 text-xs text-slate-600 hover:bg-slate-100">-</button>
                    <span class="px-2 py-0.5 text-xs font-mono font-bold">${item.qty}</span>
                    <button onclick="adjustCartQty(${idx}, 1)" class="px-2 py-0.5 text-xs text-slate-600 hover:bg-slate-100">+</button>
                </div>
            </div>
        </div>
    `).join('');

    // Totals
    const subtotal = state.cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
    let discount = 0;
    if (state.discountPercent > 0) {
        discount = Math.round(subtotal * (state.discountPercent / 100));
        discountRow?.classList.remove('hidden');
        if (discountEl) discountEl.textContent = `-Tk ${discount.toLocaleString()}`;
    } else {
        discountRow?.classList.add('hidden');
    }

    const shipping = 70; // standard inside Dhaka
    const grandTotal = Math.max(0, subtotal - discount + shipping);

    if (subtotalEl) subtotalEl.textContent = `Tk ${subtotal.toLocaleString()}`;
    if (totalEl) totalEl.textContent = `Tk ${grandTotal.toLocaleString()}`;

    // Free shipping threshold (3000 BDT)
    const threshold = 3000;
    const progress = Math.min(100, Math.round((subtotal / threshold) * 100));
    if (freeShippingBar) freeShippingBar.style.width = `${progress}%`;
    if (freeShippingText) {
        if (subtotal >= threshold) {
            freeShippingText.innerHTML = `🎉 You qualify for <strong class="text-emerald-600">FREE Delivery!</strong>`;
        } else {
            freeShippingText.textContent = `Add Tk ${(threshold - subtotal).toLocaleString()} for FREE Delivery!`;
        }
    }

    lucide.createIcons();
}

function addToCart(productId, variant = null, qty = 1) {
    const product = PRODUCTS.find(p => p.id === productId);
    if (!product || !product.inStock) return;

    const chosenVariant = variant || product.variants[0];
    const existingIndex = state.cart.findIndex(i => i.id === productId && i.variant === chosenVariant);
    if (existingIndex > -1) {
        state.cart[existingIndex].qty += qty;
    } else {
        state.cart.push({
            id: product.id,
            title: product.title,
            price: product.price,
            image: product.image,
            variant: chosenVariant,
            qty: qty
        });
    }

    updateCartUI();
    openCartDrawer();
}

function quickAddToCart(productId) {
    const prod = PRODUCTS.find(p => p.id === productId);
    if (prod && prod.variants.length > 0) {
        addToCart(productId, prod.variants[0], 1);
    }
}

function adjustCartQty(index, delta) {
    if (state.cart[index]) {
        state.cart[index].qty += delta;
        if (state.cart[index].qty <= 0) {
            state.cart.splice(index, 1);
        }
        updateCartUI();
    }
}

function removeCartItem(index) {
    if (state.cart[index]) {
        state.cart.splice(index, 1);
        updateCartUI();
    }
}

// 6. PDP MODAL & STICKY BUY BAR
function openPdpModal(productId) {
    const prod = PRODUCTS.find(p => p.id === productId);
    if (!prod) return;

    state.activePdpProduct = prod;
    state.activePdpVariant = prod.variants[0];

    const mainImg = document.getElementById('pdp-main-img');
    mainImg.src = prod.image;
    mainImg.onerror = () => { mainImg.src = PLACEHOLDER_IMG; };

    document.getElementById('pdp-category').textContent = prod.category;
    document.getElementById('pdp-title').textContent = prod.title;
    document.getElementById('pdp-sale-price').textContent = `Tk ${prod.price.toLocaleString()}`;
    document.getElementById('pdp-regular-price').textContent = `Tk ${prod.comparePrice.toLocaleString()}`;
    document.getElementById('pdp-savings').textContent = `Save Tk ${(prod.comparePrice - prod.price).toLocaleString()} (${prod.discount}%)`;
    document.getElementById('pdp-desc').textContent = prod.desc;
    document.getElementById('pdp-badge').textContent = `${prod.discount}% OFF`;
    document.getElementById('pdp-variant-label').textContent = `Select ${prod.variantType}`;

    // Low stock warning
    const stockIndicator = document.getElementById('pdp-stock-indicator');
    if (!prod.inStock) {
        stockIndicator.textContent = "Sold Out: Currently awaiting factory restock.";
    } else if (prod.stockCount <= 3) {
        stockIndicator.textContent = `🔥 Low Stock: Only ${prod.stockCount} units remaining in stock!`;
    } else {
        stockIndicator.textContent = `⚡ Ready for fast dispatch from Rihan Fulfillment Center.`;
    }

    // Variant Selector Buttons
    const variantContainer = document.getElementById('pdp-size-options');
    variantContainer.innerHTML = prod.variants.map(v => `
        <button class="pdp-size-btn px-4 py-2 rounded-xl border border-slate-200 text-xs font-bold font-mono ${v === state.activePdpVariant ? 'active' : ''}" onclick="selectPdpVariant('${v}')">
            ${v}
        </button>
    `).join('');

    updatePdpSku();

    // Show modal
    const overlay = document.getElementById('pdp-modal-overlay');
    overlay?.classList.remove('opacity-0', 'pointer-events-none');
    document.body.classList.add('modal-open');

    // Update Sticky Bar preview
    updateStickyBar(prod, state.activePdpVariant);
}

function closePdpModal() {
    const overlay = document.getElementById('pdp-modal-overlay');
    overlay?.classList.add('opacity-0', 'pointer-events-none');
    document.body.classList.remove('modal-open');
}

function selectPdpVariant(variant) {
    state.activePdpVariant = variant;
    document.querySelectorAll('.pdp-size-btn').forEach(btn => {
        if (btn.textContent.trim() === variant) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
    updatePdpSku();
    updateStickyBar(state.activePdpProduct, variant);
}

function updatePdpSku() {
    const skuDisplay = document.getElementById('pdp-sku-display');
    if (skuDisplay && state.activePdpProduct) {
        skuDisplay.textContent = `${state.activePdpProduct.skuPrefix}-${state.activePdpVariant.replace(/\s+/g, '')}`;
    }
}

function updateStickyBar(prod, variant) {
    const stickyImg = document.getElementById('sticky-thumb');
    stickyImg.src = prod.image;
    stickyImg.onerror = () => { stickyImg.src = PLACEHOLDER_IMG; };

    document.getElementById('sticky-title').textContent = prod.title;
    document.getElementById('sticky-price').textContent = `Tk ${prod.price.toLocaleString()}`;
    document.getElementById('sticky-selected-size').textContent = variant;
}

// Sticky bar scroll trigger
window.addEventListener('scroll', () => {
    const stickyBar = document.getElementById('sticky-buy-bar');
    if (window.scrollY > 450) {
        stickyBar?.classList.add('visible');
    } else {
        stickyBar?.classList.remove('visible');
    }
});

// 7. PREDICTIVE SEARCH
function handlePredictiveSearch(queryRaw) {
    const q = queryRaw.trim().toLowerCase();
    const list = document.getElementById('search-results-list');
    if (!q) {
        list.innerHTML = `<div class="text-xs text-slate-400 py-6 text-center">Start typing to search Rihan Ecom Store...</div>`;
        return;
    }

    const matches = PRODUCTS.filter(p => 
        p.title.toLowerCase().includes(q) || 
        p.category.toLowerCase().includes(q) ||
        p.variants.some(v => v.toLowerCase().includes(q))
    );

    if (matches.length === 0) {
        list.innerHTML = `<div class="text-xs text-slate-400 py-6 text-center">No products found matching "${q}".</div>`;
        return;
    }

    list.innerHTML = matches.map(m => `
        <div class="flex items-center gap-3 p-2.5 rounded-xl hover:bg-slate-50 cursor-pointer transition-colors" onclick="closeSearchModal(); openPdpModal('${m.id}')">
            <img src="${m.image}" alt="${m.title}" onerror="this.onerror=null; this.src='${PLACEHOLDER_IMG}';" class="w-12 h-12 rounded-lg object-cover">
            <div class="flex-1">
                <h6 class="font-bold text-xs text-dark-900">${m.title}</h6>
                <div class="text-[10px] font-mono text-slate-400">${m.category} &bull; ${m.variants.join(', ')}</div>
            </div>
            <div class="font-bold text-xs text-brand-600 font-mono">Tk ${m.price.toLocaleString()}</div>
        </div>
    `).join('');
}

function openSearchModal() {
    const overlay = document.getElementById('search-modal-overlay');
    overlay?.classList.remove('opacity-0', 'pointer-events-none');
    document.getElementById('predictive-search-input')?.focus();
}

function closeSearchModal() {
    const overlay = document.getElementById('search-modal-overlay');
    overlay?.classList.add('opacity-0', 'pointer-events-none');
}

// 8. COD EXPEDITED CHECKOUT
function openCodCheckout() {
    if (state.cart.length === 0) {
        alert("Your cart is empty! Add products first.");
        return;
    }
    closeCartDrawer();
    const overlay = document.getElementById('cod-checkout-overlay');
    overlay?.classList.remove('opacity-0', 'pointer-events-none');

    // Update summary
    const subtotal = state.cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
    const discount = state.discountPercent > 0 ? Math.round(subtotal * (state.discountPercent / 100)) : 0;
    const shipping = parseInt(document.getElementById('checkout-city').value, 10);
    const grandTotal = subtotal - discount + shipping;

    document.getElementById('cod-items-sum').textContent = `Tk ${(subtotal - discount).toLocaleString()}`;
    document.getElementById('cod-shipping-sum').textContent = `Tk ${shipping}`;
    document.getElementById('cod-payable-sum').textContent = `Tk ${grandTotal.toLocaleString()}`;
}

function closeCodCheckout() {
    document.getElementById('cod-checkout-overlay')?.classList.add('opacity-0', 'pointer-events-none');
}

// 9. ATTACH EVENT LISTENERS ON DOM LOAD
document.addEventListener('DOMContentLoaded', () => {
    // Initial Render
    renderProductGrid();
    updateCartUI();
    updateStickyBar(PRODUCTS[0], PRODUCTS[0].variants[0]);

    // Cart Toggles
    document.getElementById('open-cart-btn')?.addEventListener('click', openCartDrawer);
    document.getElementById('close-cart-btn')?.addEventListener('click', closeCartDrawer);
    document.getElementById('cart-drawer-overlay')?.addEventListener('click', closeCartDrawer);

    // Search Toggles
    document.getElementById('open-search-btn')?.addEventListener('click', openSearchModal);
    document.getElementById('close-search-btn')?.addEventListener('click', closeSearchModal);
    document.getElementById('search-modal-overlay')?.addEventListener('click', (e) => {
        if (e.target.id === 'search-modal-overlay') closeSearchModal();
    });
    document.getElementById('predictive-search-input')?.addEventListener('input', (e) => {
        handlePredictiveSearch(e.target.value);
    });

    // Keyboard shortcut (Ctrl+K or Cmd+K)
    window.addEventListener('keydown', (e) => {
        if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
            e.preventDefault();
            openSearchModal();
        }
        if (e.key === 'Escape') {
            closeSearchModal();
            closePdpModal();
            closeCartDrawer();
            closeCodCheckout();
        }
    });

    // PDP Modal Toggles
    document.getElementById('close-pdp-btn')?.addEventListener('click', closePdpModal);
    document.getElementById('pdp-modal-overlay')?.addEventListener('click', (e) => {
        if (e.target.id === 'pdp-modal-overlay') closePdpModal();
    });

    document.getElementById('pdp-add-cart-btn')?.addEventListener('click', () => {
        if (state.activePdpProduct) {
            addToCart(state.activePdpProduct.id, state.activePdpVariant, 1);
            closePdpModal();
        }
    });

    document.getElementById('pdp-buy-now-btn')?.addEventListener('click', () => {
        if (state.activePdpProduct) {
            addToCart(state.activePdpProduct.id, state.activePdpVariant, 1);
            closePdpModal();
            openCodCheckout();
        }
    });

    document.getElementById('sticky-add-btn')?.addEventListener('click', () => {
        if (state.activePdpProduct) {
            addToCart(state.activePdpProduct.id, state.activePdpVariant, 1);
        }
    });

    // Category Filter Radio Buttons
    document.querySelectorAll('input[name="cat-filter"]').forEach(radio => {
        radio.addEventListener('change', (e) => {
            state.filters.category = e.target.value;
            renderProductGrid();
        });
    });

    // Header Category Nav Links
    document.querySelectorAll('[data-filter-cat]').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const cat = link.getAttribute('data-filter-cat');
            state.filters.category = cat;
            const targetRadio = document.querySelector(`input[name="cat-filter"][value="${cat}"]`);
            if (targetRadio) targetRadio.checked = true;
            renderProductGrid();
            document.getElementById('catalog')?.scrollIntoView({ behavior: 'smooth' });
        });
    });

    // Quick Category Strip Pills
    document.querySelectorAll('.cat-pill-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const cat = btn.getAttribute('data-cat');
            state.filters.category = cat;
            const targetRadio = document.querySelector(`input[name="cat-filter"][value="${cat}"]`);
            if (targetRadio) targetRadio.checked = true;
            renderProductGrid();
            document.getElementById('catalog')?.scrollIntoView({ behavior: 'smooth' });
        });
    });

    // Max Price Slider
    const priceSlider = document.getElementById('price-slider');
    const priceLabel = document.getElementById('price-slider-label');
    priceSlider?.addEventListener('input', (e) => {
        state.filters.maxPrice = parseInt(e.target.value, 10);
        if (priceLabel) priceLabel.textContent = `Tk ${state.filters.maxPrice.toLocaleString()}`;
        renderProductGrid();
    });

    // Stock Only Checkbox
    document.getElementById('stock-only-toggle')?.addEventListener('change', (e) => {
        state.filters.stockOnly = e.target.checked;
        renderProductGrid();
    });

    // Sorting Dropdown
    document.getElementById('sort-select')?.addEventListener('change', (e) => {
        state.sortBy = e.target.value;
        renderProductGrid();
    });

    // Reset Filters
    function resetAllFilters() {
        state.filters.category = "All";
        state.filters.maxPrice = 6000;
        state.filters.stockOnly = false;
        state.sortBy = "featured";

        const allRadio = document.querySelector('input[name="cat-filter"][value="All"]');
        if (allRadio) allRadio.checked = true;

        if (priceSlider) priceSlider.value = 6000;
        if (priceLabel) priceLabel.textContent = "Tk 6,000";

        const stockToggle = document.getElementById('stock-only-toggle');
        if (stockToggle) stockToggle.checked = false;

        renderProductGrid();
    }
    document.getElementById('reset-filters-btn')?.addEventListener('click', resetAllFilters);
    document.getElementById('empty-reset-btn')?.addEventListener('click', resetAllFilters);

    // In-Drawer Discount Code ('RIHAN10' or 'VIBE10')
    document.getElementById('apply-discount-btn')?.addEventListener('click', () => {
        const input = document.getElementById('discount-input');
        const badge = document.getElementById('discount-badge');
        const val = input?.value.trim().toUpperCase();
        if (val === 'RIHAN10' || val === 'VIBE10') {
            state.discountPercent = 10;
            badge?.classList.remove('hidden');
            updateCartUI();
        } else {
            alert("Invalid voucher code. Try 'RIHAN10' for 10% off!");
        }
    });

    document.getElementById('remove-discount-btn')?.addEventListener('click', () => {
        state.discountPercent = 0;
        document.getElementById('discount-badge')?.classList.add('hidden');
        const input = document.getElementById('discount-input');
        if (input) input.value = '';
        updateCartUI();
    });

    // COD Checkout Toggles
    document.getElementById('proceed-cod-btn')?.addEventListener('click', openCodCheckout);
    document.getElementById('close-cod-btn')?.addEventListener('click', closeCodCheckout);
    document.getElementById('cod-checkout-overlay')?.addEventListener('click', (e) => {
        if (e.target.id === 'cod-checkout-overlay') closeCodCheckout();
    });

    // Dynamic Shipping City Selector
    document.getElementById('checkout-city')?.addEventListener('change', (e) => {
        const shipping = parseInt(e.target.value, 10);
        const subtotal = state.cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
        const discount = state.discountPercent > 0 ? Math.round(subtotal * (state.discountPercent / 100)) : 0;
        const grandTotal = subtotal - discount + shipping;

        document.getElementById('cod-shipping-sum').textContent = `Tk ${shipping}`;
        document.getElementById('cod-payable-sum').textContent = `Tk ${grandTotal.toLocaleString()}`;
    });

    // COD Order Form Submission
    document.getElementById('cod-form')?.addEventListener('submit', (e) => {
        e.preventDefault();
        const randomTracking = `RE-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`;
        document.getElementById('generated-tracking-code').textContent = randomTracking;
        document.getElementById('cod-form').classList.add('hidden');
        document.getElementById('cod-success-box').classList.remove('hidden');
        // Clear cart
        state.cart = [];
        updateCartUI();
    });

    document.getElementById('finish-order-btn')?.addEventListener('click', () => {
        closeCodCheckout();
        document.getElementById('cod-form').classList.remove('hidden');
        document.getElementById('cod-success-box').classList.add('hidden');
        document.getElementById('cod-form').reset();
    });
});
