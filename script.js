const content = {
  en: {
    eyebrow: "100% Fresh and Hygienic",
    brandName: "RUDRAA-CHAT-CENTER-KAMERI",
    title: "RUDRAA-CHAT-CENTER-KAMERI",
    tagline: "The Taste of Hygiene",
    chaat: "Chaat and Snacks",
    drinks: "Beverages",
    chefSpecial: "Chef Special",
    freshPress: "Fresh Press",
    contactText: "Contact on WhatsApp",
    bhel: "Bhel",
    panipuri: "Pani Puri",
    dabeli: "Dabeli",
    sevpuri: "Sev Puri",
    dahipuri: "Dahi Puri",
    ragda: "Ragda",
    juice: "Sugarcane Juice",
    bhelDesc: "Crispy mix with chutneys and fresh veggies",
    panipuriDesc: "Tangy water shots with masala filling",
    dabeliDesc: "Spiced potato bun with peanuts and pomegranate",
    sevpuriDesc: "Crunchy puris topped with sev and chutneys",
    dahipuriDesc: "Cool curd topping with sweet and spicy flavor",
    ragdaDesc: "Warm white pea curry with signature spices",
    juiceDesc: "Cold pressed cane juice served chilled"
  },
  mr: {
    eyebrow: "100% ताजे आणि स्वच्छ",
    brandName: "RUDRAA-CHAT-CENTER-KAMERI",
    title: "RUDRAA-CHAT-CENTER-KAMERI",
    tagline: "स्वच्छतेची चव",
    chaat: "चाट आणि स्नॅक्स",
    drinks: "पेय",
    chefSpecial: "शेफ स्पेशल",
    freshPress: "ताजे रस",
    contactText: "व्हॉट्सअॅप वर संपर्क",
    bhel: "भेळ",
    panipuri: "पाणीपुरी",
    dabeli: "दाबेली",
    sevpuri: "शेवपुरी",
    dahipuri: "दहीपुरी",
    ragda: "रगडा",
    juice: "उसाचा रस",
    bhelDesc: "चटण्या आणि भाज्यांसह कुरकुरीत मिक्स",
    panipuriDesc: "मसालेदार सारणासह तिखट-आंबट पाणीपुरी",
    dabeliDesc: "बटाट्याचे मसालेदार बन, शेंगदाणे आणि डाळिंब",
    sevpuriDesc: "चटण्या आणि शेवने सजवलेली कुरकुरीत पुरी",
    dahipuriDesc: "गोड-तिखट चवीसह थंड दही पुरी",
    ragdaDesc: "विशेष मसाल्यांसह गरम पांढऱ्या वाटाण्याची भाजी",
    juiceDesc: "थंडगार ताजा उसाचा रस"
  }
};

function setLang(lang) {
  const langData = content[lang] || content.en;

  document.getElementById("eyebrow").innerText = langData.eyebrow;
  document.getElementById("brand-name").innerText = langData.brandName;
  document.getElementById("title").innerText = langData.title;
  document.getElementById("tagline").innerText = langData.tagline;
  document.getElementById("chaat").innerText = langData.chaat;
  document.getElementById("drinks").innerText = langData.drinks;
  document.getElementById("chef-special").innerText = langData.chefSpecial;
  document.getElementById("fresh-press").innerText = langData.freshPress;
  document.getElementById("contact-text").innerText = langData.contactText;

  document.getElementById("bhel").innerText = langData.bhel;
  document.getElementById("panipuri").innerText = langData.panipuri;
  document.getElementById("dabeli").innerText = langData.dabeli;
  document.getElementById("sevpuri").innerText = langData.sevpuri;
  document.getElementById("dahipuri").innerText = langData.dahipuri;
  document.getElementById("ragda").innerText = langData.ragda;
  document.getElementById("juice").innerText = langData.juice;

  document.getElementById("bhel-desc").innerText = langData.bhelDesc;
  document.getElementById("panipuri-desc").innerText = langData.panipuriDesc;
  document.getElementById("dabeli-desc").innerText = langData.dabeliDesc;
  document.getElementById("sevpuri-desc").innerText = langData.sevpuriDesc;
  document.getElementById("dahipuri-desc").innerText = langData.dahipuriDesc;
  document.getElementById("ragda-desc").innerText = langData.ragdaDesc;
  document.getElementById("juice-desc").innerText = langData.juiceDesc;

  document.getElementById("btn-en").classList.toggle("active", lang === "en");
  document.getElementById("btn-mr").classList.toggle("active", lang === "mr");
}

const imageSearchMap = [
  { id: "img-bhel", query: "Bhel puri" },
  { id: "img-panipuri", query: "Pani puri" },
  { id: "img-dabeli", query: "Dabeli" },
  { id: "img-sevpuri", query: "Sev puri" },
  { id: "img-dahipuri", query: "Dahi puri" },
  { id: "img-ragda", query: "Ragda patties" },
  { id: "img-juice", query: "Sugarcane juice" }
];

const fallbackImageMap = {
  "img-bhel": "https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg?auto=compress&cs=tinysrgb&w=1600",
  "img-panipuri": "https://images.pexels.com/photos/1893555/pexels-photo-1893555.jpeg?auto=compress&cs=tinysrgb&w=1600",
  "img-dabeli": "https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=1600",
  "img-sevpuri": "https://images.pexels.com/photos/1435895/pexels-photo-1435895.jpeg?auto=compress&cs=tinysrgb&w=1600",
  "img-dahipuri": "https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&w=1600",
  "img-ragda": "https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg?auto=compress&cs=tinysrgb&w=1600",
  "img-juice": "https://images.pexels.com/photos/96974/pexels-photo-96974.jpeg?auto=compress&cs=tinysrgb&w=1600"
};

async function fetchWikipediaImage(searchTerm) {
  const url = "https://en.wikipedia.org/w/api.php?action=query&generator=search&gsrsearch="
    + encodeURIComponent(searchTerm)
    + "&gsrlimit=1&prop=pageimages&piprop=thumbnail&pithumbsize=1200&format=json&origin=*";

  const response = await fetch(url);
  if (!response.ok) {
    return null;
  }

  const data = await response.json();
  const pages = data?.query?.pages;
  if (!pages) {
    return null;
  }

  const firstPage = Object.values(pages)[0];
  return firstPage?.thumbnail?.source || null;
}

async function loadMenuImagesFromInternet() {
  const jobs = imageSearchMap.map(async ({ id, query }) => {
    const img = document.getElementById(id);
    if (!img) {
      return;
    }

    try {
      const resultUrl = await fetchWikipediaImage(query);
      if (resultUrl) {
        img.src = resultUrl;
      } else {
        img.src = fallbackImageMap[id];
      }
    } catch (error) {
      img.src = fallbackImageMap[id];
    }

    img.addEventListener("error", () => {
      img.src = fallbackImageMap[id];
    }, { once: true });
  });

  await Promise.all(jobs);
}

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".lang-btn").forEach((button) => {
    button.addEventListener("click", () => {
      setLang(button.dataset.lang);
    });
  });

  setLang("en");
  loadMenuImagesFromInternet();
});
