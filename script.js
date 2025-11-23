// Template List
const templates = [
    {name: "Cleaning V1", url: "https://demosites.royal-elementor-addons.com/cleaning-v1/?ref=rea-plugin-backend-templates"},
    {name: "Developer Portfolio", url: "https://demosites.royal-elementor-addons.com/developer-portfolio-v1/?ref=rea-plugin-backend-template"},
    {name: "Shop WooShop V2", url: "https://demosites.royal-elementor-addons.com/shop-wooshop-v2/?ref=rea-plugin-backend-templates"},
    {name: "Landing Page Digital Product", url: "https://demosites.royal-elementor-addons.com/landing-page-digital-product-v1/?ref=rea-plugin-backend-templates"},
    {name: "Financial Services", url: "https://demosites.royal-elementor-addons.com/financial-services-v1/?ref=rea-plugin-backend-templates"},
    {name: "One Page V2", url: "https://demosites.royal-elementor-addons.com/one-page-v2/?ref=rea-plugin-backend-templates"},
    {name: "Car Repair", url: "https://demosites.royal-elementor-addons.com/car-repair-v1/?ref=rea-plugin-backend-templates"},
    {name: "Fitness Gym", url: "https://demosites.royal-elementor-addons.com/fitness-gym-v1/?ref=rea-plugin-backend-templates"},
    {name: "Investment Platform", url: "https://demosites.royal-elementor-addons.com/landing-page-investment-platform-v1/?ref=rea-plugin-backend-templates"},
    {name: "Online Course", url: "https://demosites.royal-elementor-addons.com/online-course-v1/?ref=rea-plugin-backend-templates"},
    {name: "Dental V1", url: "https://demosites.royal-elementor-addons.com/dental-v1/?ref=rea-plugin-backend-templates"},
    {name: "Lawyer V1", url: "https://demosites.royal-elementor-addons.com/lawyer-v1/?ref=rea-plugin-backend-templates"},
    {name: "Restaurant V1", url: "https://demosites.royal-elementor-addons.com/restaurant-v1/?ref=rea-plugin-backend-templates"},
];

const container = document.getElementById("templateGrid");

templates.forEach(t => {
    const card = document.createElement("div");
    card.className = "card";

    const preview = `https://image.thum.io/get/width/600/crop/800/${t.url}`;

    card.innerHTML = `
        <img src="${preview}">
        <h3>${t.name}</h3>
        <button onclick="copyLink('${t.url}')">Copy Link</button>
    `;

    container.appendChild(card);
});

function copyLink(link) {
    navigator.clipboard.writeText(link);
    alert("Template link copied!");
}

// SEARCH
document.getElementById("searchInput").addEventListener("input", function () {
    const term = this.value.toLowerCase();
    const cards = document.querySelectorAll(".card");

    cards.forEach(card => {
        const title = card.querySelector("h3").textContent.toLowerCase();
        card.style.display = title.includes(term) ? "" : "none";
    });
});
