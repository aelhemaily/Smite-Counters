const godCategories = {
    burstult: {
        title: "Gods with a Burst Damage Ultimate",
        customText: {
            title: "Gods with a Burst Damage Ultimate",
            sitet: "Gods with a Burst Damage Ultimate"
        },
        godlistArray: [
            "agni", "eset", "he bo", "janus", "kukulkan", "poseidon", "ra", "scylla", "thoth", "vulcan", "ymir", "yu huang"
        ]
    },
   
    globalult: {
        title: "Gods with a Global Ultimate",
        customText: {
            title: "Gods with a Global Ultimate",
            sitet: "Gods with a Global Ultimate"
        },
        godlistArray: [
            "apollo", "athena", "charon", "chernobog", "horus", "janus", "jormungandr", "nu wa", "nut", "rama", "surtr", "thanatos", "thor" 
        ]
    },

    execute: {
        title: "Gods with an Execute",
        customText: {
            title: "Gods with an Execute",
            sitet: "Gods with an Execute"
        },
        godlistArray: [
            "achilles", "ao kuang", "thanatos" 
        ]
    },

    shield: {
        title: "Gods with a Shield",
        customText: {
            title: "Gods with a Shield",
            sitet: "Gods with a Shield"
        },
        godlistArray: [
            "charon", "cu chulainn","eset", "geb", "hera", "khepri", 
            "lancelot", "nemesis", "nike", "odin", "ravana", "tiamat", "vamana", "yemoja"
        ]
    },

    speedreduction: {
        title: "Gods with Attack Speed Reduction",
        customText: {
            title: "Gods with Attack Speed Reduction",
            sitet: "Gods with Attack Speed Reduction"
        },
        godlistArray: [
            "chaac", "kumbhakarna", "neith", "osiris", "sun wukong", "vamana"
        ]
    },

    autoattack: {
        title: "Gods with Auto Attack",
        customText: {
            title: "Gods with Auto Attack",
            sitet: "Gods with Auto Attack"
        },
        godlistArray: [
            "amaterasu", "anhur", "ao kuang", "apollo", "arachne", "artemis", "bakasura", "bake kujira",
            "bellona", "cernunnos", "charybdis", "chernobog", "chronos",
            "cupid", "danzaburou", "erlang shen", "freya", "gilgamesh", "hachiman",
            "ishtar", "izanami", "jing wei", "kali", "mercury", "nemesis", "nut",
            "olorun", "osiris", "rama", "sol" 
        ]
    },


    stealth: {
        title: "Gods with Stealth",
        customText: {
            title: "Gods with Stealth",
            sitet: "Gods with Stealth"
        },
        godlistArray: [
            "ao kuang", "cliodhna", "discordia", "izanami", "jormungandr", "loki", "martichoras", "nu wa", "serqet", "the morrigan" 
        ]
    },

};

const godList = document.getElementById('god-list');
const sitet = document.getElementById('sitet');

function createGodElement(god) {
    const godElement = document.createElement('div');
    godElement.classList.add('god');
    
    const godLink = document.createElement('a');
    godLink.href = `gods/${god.toLowerCase().replace(/ /g, "_")}/${god.toLowerCase().replace(/ /g, "_")}.html`;
    
    const godImage = document.createElement('img');
    godImage.src = `../../images/${god.replace(/ /g, "")}.png`;
    godImage.alt = god;
    
    const godName = document.createElement('span');
    godName.textContent = god.charAt(0).toUpperCase() + god.slice(1);

    godLink.appendChild(godImage);
    godLink.appendChild(godName);
    godElement.appendChild(godLink);
    
    return godElement;
}

function renderGods(godsToRender) {
    godList.innerHTML = '';
    godsToRender.forEach(god => {
        const godElement = createGodElement(god);
        godList.appendChild(godElement);
    });
}

function getCategoryFromURL() {
    const params = new URLSearchParams(window.location.search);
    return params.get('category') || 'leaps';
}

function initPage() {
    const category = getCategoryFromURL();
    const godlistArray = godCategories[category].godlistArray || [];
    renderGods(godlistArray);
    sitet.textContent = godCategories[category].customText.sitet || godCategories[category].title;
    document.title = godCategories[category].customText.title || godCategories[category].title;
}

document.addEventListener('DOMContentLoaded', function() {
    initPage();

    document.getElementById('hamburger-icon').addEventListener('click', function() {
        const sidebar = document.getElementById('sidebar');
        sidebar.classList.toggle('visible');
    });
});

const returnToTopButton = document.getElementById('return-to-top');

// Function to scroll to the top of the page
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Show or hide the "return to top" button based on scroll position
window.addEventListener('scroll', function() {
    const scrollTop = window.pageYOffset;
    const windowHeight = window.innerHeight;
    const bodyHeight = document.body.offsetHeight;

    if (scrollTop > 5 && scrollTop + windowHeight < bodyHeight - 5) {
        returnToTopButton.classList.remove('hidden');
    } else {
        returnToTopButton.classList.add('hidden');
    }
});

// Scroll to the top when the button is clicked
returnToTopButton.addEventListener('click', scrollToTop);
