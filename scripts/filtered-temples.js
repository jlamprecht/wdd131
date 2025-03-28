document.getElementById("currentyear").innerHTML = (new Date().getFullYear());

document.getElementById("lastModified").innerHTML = document.lastModified;

const menu = document.getElementById("menu");
const nav = document.querySelector("nav");

menu.addEventListener("click", () => {
    menu.classList.toggle("show");
    nav.classList.toggle("show");
});

const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName: "Mount Timpanogos Utah Temple",
        location: "American Fork, Utah, United States",
        dedicated: "1996, September, 13",
        area: 107240,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/mount-timpanogos-utah-temple/mount-timpanogos-utah-temple-36979-main.jpg"
    },
    {
        templeName: "Chicago Illinois Temple",
        location: "Glenview, Illinois, United States",
        dedicated: "1985, August, 9",
        area: 37062,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/chicago-illinois-temple/chicago-illinois-temple-58403-main.jpg"
    },
    {
        templeName: "Manila Philippines Temple",
        location: "Quezon City, Philippines",
        dedicated: "1984, September, 25",
        area: 26683,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/_temp/029-Manila-Philippines-Temple.jpg"
    },
];

function getTempleYear(temple) {
    return parseInt(temple.dedicated);
}

function isOld(temple) {
    return getTempleYear(temple) < 1900;
}

function isNew(temple) {
    return getTempleYear(temple) > 2000;
}

function isLarge(temple) {
    return temple.area > 90000;
}

function isSmall(temple) {
    return temple.area < 10000;
}

function includeAll() {
    return true;
}

function appendTextContent(parentElement, newElementType, textContent) {
    const element = document.createElement(newElementType);
    parentElement.appendChild(element);
    element.textContent = textContent;
}

const templesHeadingElement = document.getElementById("heading");
const templesSectionElement = document.getElementById("temples");
function renderTemples(heading, filterFunction) {
    templesHeadingElement.textContent = heading;

    let fragment = document.createDocumentFragment();
    temples.filter(filterFunction).forEach(temple => {
        const card = document.createElement("div");
        card.classList.add('card')
        fragment.appendChild(card);

        appendTextContent(card, "h3", temple.templeName);
        appendTextContent(card, "p", `Location: ${temple.dedicated}`);
        appendTextContent(card, "p", `Dedicated: ${temple.location}`);
        appendTextContent(card, "p", `Size: ${temple.area} sq ft`);

        const flexSpacer = document.createElement('div');
        card.appendChild(flexSpacer);
        flexSpacer.classList.add('spacer')

        const img = document.createElement("img");
        card.appendChild(img);
        img.setAttribute("src", temple.imageUrl);
        img.setAttribute("alt", temple.templeName);
        img.setAttribute("loading", "lazy");
    });
    templesSectionElement.replaceChildren(fragment);
}

function addTempleFilterClickListener(elementId, heading, filterFunction) {
    document.getElementById(elementId).addEventListener("click", (event) => {
        renderTemples(heading, filterFunction);
        event.preventDefault();
    });
}

addTempleFilterClickListener("home", "Home", includeAll);
addTempleFilterClickListener("old", "Old", isOld);
addTempleFilterClickListener("new", "New", isNew);
addTempleFilterClickListener("large", "Large", isLarge);
addTempleFilterClickListener("small", "Small", isSmall);

renderTemples("Home", includeAll);
