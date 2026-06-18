const menuData = {
    "Veg Starters": [
        { name: "Veg Manchurian", price: "75/120" },
        { name: "Paneer Manchurian", price: "135/225" },
        { name: "Paneer Chilli", price: "135/225", chef: true },
        { name: "Veg Manchow Soup", price: "90" }
    ],
    "Non-Veg Starters": [
        { name: "Chicken Lolipop", price: "210/330", chef: true },
        { name: "Chicken Chilli", price: "165/240" },
        { name: "Hot Garlic Chicken Dry", price: "270" }
    ],
    "Indian Mancorse": [
        { name: "Chicken Butter Masala", price: "210/345", chef: true },
        { name: "Paneer Butter Masala", price: "180/255" },
        { name: "Egg Masala", price: "105/150" }
    ],
    "Noodles & Rice": [
        { name: "Paneer Chilli Garlic Noodles", price: "105/150" },
        { name: "Chicken Szechwan Fried Rice", price: "105/165" },
        { name: "Desi Dhuaah Dam Chicken Biryani", price: "150", chef: true }
    ]
};

const menuGrid = document.getElementById('menu-grid');
const menuTabs = document.getElementById('menu-tabs');

function renderMenu(category) {
    menuGrid.innerHTML = '';
    menuData[category].forEach(item => {
        const card = document.createElement('div');
        card.className = 'menu-item-card flex justify-between items-center py-4';
        card.innerHTML = `
            <div>
                <h4 class="text-lg font-serif tracking-wide flex items-center gap-2">
                    ${item.name}
                    ${item.chef ? '<span class="text-[10px] text-black bg-gold px-2 py-0.5 rounded-full">MUST TRY</span>' : ''}
                </h4>
            </div>
            <div class="text-gold font-bold">₹${item.price}</div>
        `;
        menuGrid.appendChild(card);
    });
}

// Initialize Tabs
Object.keys(menuData).forEach((cat, index) => {
    const btn = document.createElement('button');
    btn.className = `px-6 py-2 border border-gold/30 text-gold font-serif text-sm tracking-widest hover:bg-gold/10 transition-all ${index === 0 ? 'tab-active' : ''}`;
    btn.innerText = cat.toUpperCase();
    btn.onclick = () => {
        document.querySelectorAll('#menu-tabs button').forEach(b => b.classList.remove('tab-active'));
        btn.classList.add('tab-active');
        renderMenu(cat);
    };
    menuTabs.appendChild(btn);
});

// Initial Render
renderMenu("Veg Starters");
