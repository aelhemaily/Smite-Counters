

const gods = [
    { name: "anubis", priority: "very high", image: "../../images/anubis.png" },
    { name: "aphrodite", priority: "very high", image: "../../images/aphrodite.png" },
    { name: "artio", priority: "very high", image: "../../images/artio.png" },
    { name: "baron samedi", priority: "very high", image: "../../images/baronsamedi.png" },
    { name: "chang'e", priority: "very high", image: "../../images/change.png" },
    { name: "eset", priority: "very high", image: "../../images/eset.png" },
    { name: "guan yu", priority: "very high", image: "../../images/guanyu.png" },
    { name: "hades", priority: "very high", image: "../../images/hades.png" },
    { name: "hel", priority: "very high", image: "../../images/hel.png" },
    { name: "horus", priority: "very high", image: "../../images/horus.png" },
    { name: "ix chel", priority: "very high", image: "../../images/ixchel.png" },
    { name: "ra", priority: "very high", image: "../../images/ra.png" },
    { name: "set", priority: "very high", image: "../../images/set.png" },
    { name: "sylvanus", priority: "very high", image: "../../images/sylvanus.png" },
    { name: "terra", priority: "very high", image: "../../images/terra.png" },
    { name: "vamana", priority: "very high", image: "../../images/vamana.png" },
    { name: "yemoja", priority: "very high", image: "../../images/yemoja.png" },
    { name: "camazotz", priority: "high", image: "../../images/camazotz.png" },
    { name: "chaac", priority: "high", image: "../../images/chaac.png" },
    { name: "cthulhu", priority: "high", image: "../../images/cthulhu.png" },
    { name: "erlang shen", priority: "high", image: "../../images/erlangshen.png" },
    { name: "freya", priority: "high", image: "../../images/freya.png" },
    { name: "hercules", priority: "high", image: "../../images/hercules.png" },
    { name: "kali", priority: "high", image: "../../images/kali.png" },
    { name: "pele", priority: "high", image: "../../images/pele.png" },
    { name: "shiva", priority: "high", image: "../../images/shiva.png" },
    { name: "surtr", priority: "high", image: "../../images/surtr.png" },
    { name: "zhong kui", priority: "high", image: "../../images/zhongkui.png" },
    { name: "thanatos", priority: "high", image: "../../images/thanatos.png" },
    { name: "achilles", priority: "medium", image: "../../images/achilles.png" },
    { name: "ah puch", priority: "medium", image: "../../images/ahpuch.png" },
    { name: "amaterasu", priority: "medium", image: "../../images/amaterasu.png" },
    { name: "ao kuang", priority: "medium", image: "../../images/aokuang.png" },
    { name: "arachne", priority: "medium", image: "../../images/arachne.png" },
    { name: "ares", priority: "medium", image: "../../images/ares.png" },
    { name: "bacchus", priority: "medium", image: "../../images/bacchus.png" },
    { name: "bellona", priority: "medium", image: "../../images/bellona.png" },
    { name: "cernunnos", priority: "medium", image: "../../images/cernunnos.png" },
    { name: "chiron", priority: "medium", image: "../../images/chiron.png" },
    { name: "cu chulainn", priority: "medium", image: "../../images/cuchulainn.png" },
    { name: "cupid", priority: "medium", image: "../../images/cupid.png" },
    { name: "gilgamish", priority: "medium", image: "../../images/gilgamesh.png" },
    { name: "martichoras", priority: "medium", image: "../../images/martichoras.png" },
    { name: "ne zha", priority: "medium", image: "../../images/nezha.png" },
    { name: "neith", priority: "medium", image: "../../images/neith.png" },
    { name: "olorun", priority: "medium", image: "../../images/olorun.png" },
    { name: "persephone", priority: "medium", image: "../../images/persephone.png" },
    { name: "sol", priority: "medium", image: "../../images/sol.png" },
    { name: "sun wukong", priority: "medium", image: "../../images/sunwukong.png" },
    { name: "tiamat", priority: "medium", image: "../../images/tiamat.png" },
    { name: "tyr", priority: "medium", image: "../../images/tyr.png" },
    { name: "ullr", priority: "medium", image: "../../images/ullr.png" },
    { name: "xing tian", priority: "medium", image: "../../images/xingtian.png" },
    { name: "ah muzen cab", priority: "low", image: "../../images/ahmuzencab.png" },
    { name: "baba yaga", priority: "low", image: "../../images/babayaga.png" },
    { name: "bakasura", priority: "low", image: "../../images/bakasura.png" },
    { name: "bastet", priority: "low", image: "../../images/bastet.png" },
    { name: "cerberus", priority: "low", image: "../../images/cerberus.png" },
    { name: "danzaburou", priority: "low", image: "../../images/danzaburou.png" },
    { name: "fafnir", priority: "low", image: "../../images/fafnir.png" },
    { name: "fenrir", priority: "low", image: "../../images/fenrir.png" },
    { name: "mulan", priority: "low", image: "../../images/mulan.png" },
    { name: "nemesis", priority: "low", image: "../../images/nemesis.png" },
    { name: "ravana", priority: "low", image: "../../images/ravana.png" },
    { name: "sobek", priority: "low", image: "../../images/sobek.png" },
    { name: "tsukuyomi", priority: "low", image: "../../images/tsukuyomi.png" },
    { name: "agni", priority: "very low", image: "../../images/agni.png" },
    { name: "anhur", priority: "very low", image: "../../images/anhur.png" },
    { name: "apollo", priority: "very low", image: "../../images/apollo.png" },
    { name: "artemis", priority: "very low", image: "../../images/artemis.png" },
    { name: "athena", priority: "very low", image: "../../images/athena.png" },
    { name: "atlas", priority: "very low", image: "../../images/atlas.png" },
    { name: "awilix", priority: "very low", image: "../../images/awilix.png" },
    { name: "bake kujira", priority: "very low", image: "../../images/bakekujira.png" },
    { name: "cabrakan", priority: "very low", image: "../../images/cabrakan.png" },
    { name: "charon", priority: "very low", image: "../../images/charon.png" },
    { name: "charybdis", priority: "very low", image: "../../images/charybdis.png" },
    { name: "chernobog", priority: "very low", image: "../../images/chernobog.png" },
    { name: "chronos", priority: "very low", image: "../../images/chronos.png" },
    { name: "cliodhna", priority: "very low", image: "../../images/cliodhna.png" },
    { name: "da ji", priority: "very low", image: "../../images/daji.png" },
    { name: "discordia", priority: "very low", image: "../../images/discordia.png" },
    { name: "ganesha", priority: "very low", image: "../../images/ganesha.png" },
    { name: "geb", priority: "very low", image: "../../images/geb.png" },
    { name: "hachiman", priority: "very low", image: "../../images/hachiman.png" },
    { name: "he bo", priority: "very low", image: "../../images/hebo.png" },
    { name: "heimdallr", priority: "very low", image: "../../images/heimdallr.png" },
    { name: "hera", priority: "very low", image: "../../images/hera.png" },
    { name: "hou yi", priority: "very low", image: "../../images/houyi.png" },
    { name: "hun batz", priority: "very low", image: "../../images/hunbatz.png" },
    { name: "ishtar", priority: "very low", image: "../../images/ishtar.png" },
    { name: "izanami", priority: "very low", image: "../../images/izanami.png" },
    { name: "janus", priority: "very low", image: "../../images/janus.png" },
    { name: "jing wei", priority: "very low", image: "../../images/jingwei.png" },
    { name: "jormungandr", priority: "very low", image: "../../images/jormungandr.png" },
    { name: "khepri", priority: "very low", image: "../../images/khepri.png" },
    { name: "king arthur", priority: "very low", image: "../../images/kingarthur.png" },
    { name: "kukulkan", priority: "very low", image: "../../images/kukulkan.png" },
    { name: "kumbhakarna", priority: "very low", image: "../../images/Kumbhakarna.png" },
    { name: "kuzenbo", priority: "very low", image: "../../images/kuzenbo.png" },
    { name: "lancelot", priority: "very low", image: "../../images/lancelot.png" },
    { name: "loki", priority: "very low", image: "../../images/loki.png" },
    { name: "maman brigitte", priority: "very low", image: "../../images/mamanbrigitte.png" },
    { name: "maui", priority: "very low", image: "../../images/maui.png" },
    { name: "medusa", priority: "very low", image: "../../images/medusa.png" },
    { name: "mercury", priority: "very low", image: "../../images/mercury.png" },
    { name: "merlin", priority: "very low", image: "../../images/merlin.png" },
    { name: "morgan le fay", priority: "very low", image: "../../images/morganlefay.png" },
    { name: "nike", priority: "very low", image: "../../images/nike.png" },
    { name: "nox", priority: "very low", image: "../../images/nox.png" },
    { name: "nu wa", priority: "very low", image: "../../images/nuwa.png" },
    { name: "nut", priority: "very low", image: "../../images/nut.png" },
    { name: "odin", priority: "very low", image: "../../images/odin.png" },
    { name: "osiris", priority: "very low", image: "../../images/osiris.png" },
    { name: "poseidon", priority: "very low", image: "../../images/poseidon.png" },
    { name: "raijin", priority: "very low", image: "../../images/raijin.png" },
    { name: "rama", priority: "very low", image: "../../images/rama.png" },
    { name: "ratatoskr", priority: "very low", image: "../../images/ratatoskr.png" },
    { name: "scylla", priority: "very low", image: "../../images/scylla.png" },
    { name: "serqet", priority: "very low", image: "../../images/serqet.png" },
    { name: "skadi", priority: "very low", image: "../../images/skadi.png" },
    { name: "susano", priority: "very low", image: "../../images/susano.png" },
    { name: "the morrigan", priority: "very low", image: "../../images/themorrigan.png" },
    { name: "thor", priority: "very low", image: "../../images/thor.png" },
    { name: "thoth", priority: "very low", image: "../../images/thoth.png" },
    { name: "vulcan", priority: "very low", image: "../../images/vulcan.png" },
    { name: "xbalanque", priority: "very low", image: "../../images/xbalanque.png" },
    { name: "ymir", priority: "very low", image: "../../images/ymir.png" },
    { name: "yu huang", priority: "very low", image: "../../images/yuhuang.png" },
    { name: "zeus", priority: "very low", image: "../../images/zeus.png" }
];

// Create an object to map priorities to row indices
const priorityMap = {
    "very high": 0,
    "high": 1,
    "medium": 2,
    "low": 3,
    "very low": 4
};

// Sort the gods array by priority
gods.sort((a, b) => priorityMap[a.priority] - priorityMap[b.priority]);

// Determine the number of columns (must be 10)
const columnCount = 10;

// Calculate the number of gods per column
const godsPerColumn = Math.ceil(gods.length / columnCount);

// Loop through each column
for (let colIndex = 1; colIndex < columnCount; colIndex++) {
    const columnStartIndex = (colIndex - 1) * godsPerColumn;
    const columnEndIndex = Math.min((colIndex - 1) * godsPerColumn + godsPerColumn, gods.length);
    const columnGods = gods.slice(columnStartIndex, columnEndIndex);

    // Loop through each god in the current column
    for (let godIndex = 0; godIndex < columnGods.length; godIndex++) {
        const god = columnGods[godIndex];
        const row = document.getElementById(antihealTable.rows[priorityMap[god.priority]].id)
        const cell = document.createElement("td");
        const div = document.createElement("div");
        const img = document.createElement("img");
        const name = document.createElement("a");

        div.classList.add("god-container");
        img.src = god.image;
        img.alt = god.name;
        img.classList.add("god-icon");
        img.addEventListener("click", function() {
            window.location.href = `../../gods/${god.name.replace(/ /g, "_").toLowerCase()}/${god.name.replace(/ /g, "_").toLowerCase()}.html`;
        });
        name.textContent = god.name.replace(/\b\w/g, l => l.toUpperCase());
        name.href = `../../gods/${god.name.replace(/ /g, "_").toLowerCase()}/${god.name.replace(/ /g, "_").toLowerCase()}.html`;
        name.classList.add("god-name");
        name.addEventListener("click", function() {
            window.location.href = `../../gods/${god.name.replace(/ /g, "_").toLowerCase()}/${god.name.replace(/ /g, "_").toLowerCase()}.html`;
        });

        div.appendChild(img);
        div.appendChild(name);
        cell.appendChild(div);
        row.appendChild(cell);

        
    }
    
}

document.getElementById('hamburger-icon').addEventListener('click', function() {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('visible');
});


document.addEventListener('DOMContentLoaded', function() {
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
});





