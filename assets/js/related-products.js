// Product data
const trProducts = [
  { title: "Stanley Termos", price: "2400.00 TL", image: "/assets/images/stanley.png", link: "product-stanley.html" },
  { title: "T-Shirt", price: "630.00 TL", image: "/assets/images/shirt1.png", link: "product-shirt1.html" },
  { title: "AlbaSpace Tişört", price: "630.00 TL", image: "/assets/images/shirt.png", link: "product-shirt.html" },
  { title: "Hoodie", price: "980.00 TL", image: "/assets/images/hoodie1.png", link: "product-hoodie1.html" },
  { title: "AlbaSpace Pullover Hoodie", price: "980.00 TL", image: "/assets/images/hoodie.png", link: "product-hoodie.html" },
  { title: "Katlaç/Sonsuz Küp", price: "120.00 TL", image: "/assets/images/hat.png", link: "product-hat.html" },
  { title: "AlbaSpace Logo Model", price: "$100.00", image: "/assets/images/albaspacelogo3dmodel.png", link: "product-dragon.html" },
  { title: "AlbaSpace LOGO 3D Model", price: "300.00 TL", image: "/assets/images/albaspacelogo3dmodel.png", link: "product-albaspacelogo.html" },
  { title: "Kitap PDF", price: "160.00 TL", image: "/assets/images/albemanvelara1.jpg", link: "product-albamenvelara1.html" },
  { title: "Kitap", price: "1000.00 TL", image: "/assets/images/albamenvelara.jpg", link: "product-albamenvelara.html" }
];

const enProducts = [
  { title: "Stanley Thermos", price: "2400.00 TL", image: "/assets/images/stanley.png", link: "product-stanley.html" },
  { title: "T-Shirt", price: "630.00 TL", image: "/assets/images/shirt1.png", link: "product-shirt1.html" },
  { title: "AlbaSpace Tişört", price: "630.00 TL", image: "/assets/images/shirt.png", link: "product-shirt.html" },
  { title: "Hoodie", price: "980.00 TL", image: "/assets/images/hoodie1.png", link: "product-hoodie1.html" },
  { title: "AlbaSpace Pullover Hoodie", price: "980.00 TL", image: "/assets/images/hoodie.png", link: "product-hoodie.html" },
  { title: "Katlaç/Sonsuz Küp", price: "120.00 TL", image: "/assets/images/hat.png", link: "product-hat.html" },
  { title: "AlbaSpace LOGO 3D Model", price: "$30.00", image: "/eng/assets/images/albaspace.jpg", link: "product-albaspacelogo.html" },
  { title: "Book PDF", price: "160.00 TL", image: "/assets/images/albemanvelara1.jpg", link: "product-albamenvelara1.html" },
  { title: "Book", price: "1000.00 TL", image: "/assets/images/albamenvelara.jpg", link: "product-albamenvelara.html" }
];

const ruProducts = [
  { title: "Термос Stanley", price: "2400.00 TL", image: "/assets/images/stanley.png", link: "product-stanley.html" },
  { title: "Футболка", price: "630.00 TL", image: "/assets/images/shirt1.png", link: "product-shirt1.html" },
  { title: "Футболка AlbaSpace", price: "630.00 TL", image: "/assets/images/shirt.png", link: "product-shirt.html" },
  { title: "Худи", price: "980.00 TL", image: "/assets/images/hoodie1.png", link: "product-hoodie1.html" },
  { title: "Худи AlbaSpace", price: "980.00 TL", image: "/assets/images/hoodie.png", link: "product-hoodie.html" },
  { title: "Бесконечный куб", price: "120.00 TL", image: "/assets/images/hat.png", link: "product-hat.html" },
  { title: "3D модель AlbaSpace Logo", price: "$100.00", image: "/assets/images/albaspacelogo3dmodel.png", link: "product-dragon.html" },
  { title: "3D модель AlbaSpace LOGO", price: "300.00 TL", image: "/assets/images/albaspacelogo3dmodel.png", link: "product-albaspacelogo.html" },
  { title: "Книга PDF", price: "160.00 TL", image: "/assets/images/albemanvelara1.jpg", link: "product-albamenvelara1.html" },
  { title: "Книга", price: "1000.00 TL", image: "/assets/images/albamenvelara.jpg", link: "product-albamenvelara.html" }
];

document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('related-products-container');
    if (!container) return;

    // Determine language from HTML lang attribute
    const lang = document.documentElement.lang || 'tr';
    let products = trProducts;
    if (lang === 'en') {
        products = enProducts;
    } else if (lang === 'ru') {
        products = ruProducts;
    }
    
    // Determine current page to exclude it
    // Use window.location.pathname
    const currentPath = window.location.pathname.split('/').pop();

    // Filter out current product
    // Note: This simple check assumes links in products array match filenames
    const availableProducts = products.filter(p => p.link !== currentPath);

    // Shuffle and pick 3
    const shuffled = availableProducts.sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0, 3);

    // Generate HTML
    let html = '';
    selected.forEach(p => {
        html += `
        <a href="${p.link}" class="group">
          <div class="relative overflow-hidden rounded-3xl bg-gray-900 mb-4 aspect-square">
            <img src="${p.image}" alt="${p.title}" class="w-full h-full object-cover group-hover:scale-110 transition duration-700">
            <div class="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition"></div>
          </div>
          <h3 class="font-medium text-lg text-white">${p.title}</h3>
          <p class="text-gray-400">${p.price}</p>
        </a>
        `;
    });

    container.innerHTML = html;
});
