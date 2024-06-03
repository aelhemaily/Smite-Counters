const gods = [
    { name: "Achilles", displayName: "Achilles", category: "warrior", image: "images/achilles.png", path: "gods/godtemplate/godtemplate.html?achilles" },
    { name: "Agni", displayName: "Agni", category: "mage", image: "images/agni.png", path: "gods/godtemplate/godtemplate.html?agni" },
    { name: "Ah Muzen Cab", displayName: "Ah Muzen Cab", category: "hunter", image: "images/ahmuzencab.png", alternativeNames: ["ahmuzencab", "amc"], path: "gods/godtemplate/godtemplate.html?ah_muzen_cab" },
    { name: "Ah Puch", displayName: "Ah Puch", category: "mage", image: "images/ahpuch.png", path: "gods/godtemplate/godtemplate.html?ah_puch" },
    { name: "Amaterasu", displayName: "Amaterasu", category: "warrior",  image: "images/amaterasu.png", path: "gods/godtemplate/godtemplate.html?amaterasu" },
    { name: "Anhur", displayName: "Anhur", category: "hunter", image: "images/anhur.png", path: "gods/godtemplate/godtemplate.html?anhur" },
    { name: "Anubis", displayName: "Anubis", category: "mage", image: "images/anubis.png", path: "gods/godtemplate/godtemplate.html?anubis" },
    { name: "Ao Kuang", displayName: "Ao Kuang", category: "mage", image: "images/aokuang.png", path: "gods/godtemplate/godtemplate.html?ao_kuang" },
    { name: "Aphrodite", displayName: "Aphrodite", category: "mage", image: "images/aphrodite.png", path: "gods/godtemplate/godtemplate.html?aphrodite" },
    { name: "Apollo", displayName: "Apollo", category: "hunter", image: "images/apollo.png", path: "gods/godtemplate/godtemplate.html?apollo" },
    { name: "Arachne", displayName: "Arachne", category: "assassin", image: "images/arachne.png", path: "gods/godtemplate/godtemplate.html?arachne" },
    { name: "Ares", displayName: "Ares", category: "guardian", image: "images/ares.png", path: "gods/godtemplate/godtemplate.html?ares" },
    { name: "Artemis", displayName: "Artemis", category: "hunter", image: "images/artemis.png", path: "gods/godtemplate/godtemplate.html?artemis" },
    { name: "Artio", displayName: "Artio", category: "guardian", image: "images/artio.png", path: "gods/godtemplate/godtemplate.html?artio" },
    { name: "Athena", displayName: "Athena", category: "guardian", image: "images/athena.png", path: "gods/godtemplate/godtemplate.html?athena" },
    { name: "Atlas", displayName: "Atlas", category: "guardian", image: "images/atlas.png", path: "gods/godtemplate/godtemplate.html?atlas" },
    { name: "Awilix", displayName: "Awilix", category: "assassin", image: "images/awilix.png", path: "gods/godtemplate/godtemplate.html?awilix" },
    { name: "Baba Yaga", displayName: "Baba Yaga", category: "mage", image: "images/babayaga.png", path: "gods/godtemplate/godtemplate.html?baba_yaga" },
    { name: "Bacchus", displayName: "Bacchus", category: "guardian", image: "images/bacchus.png", path: "gods/godtemplate/godtemplate.html?bacchus" },
    { name: "Bakasura", displayName: "Bakasura", category: "assassin", image: "images/bakasura.png", path: "gods/godtemplate/godtemplate.html?bakasura" },
    { name: "Bake Kujira", displayName: "Bake Kujira", category: "guardian", image: "images/bakekujira.png", path: "gods/godtemplate/godtemplate.html?bake_kujira" },
    { name: "Baron Samedi", displayName: "Baron Samedi", category: "mage", image: "images/baronsamedi.png", path: "gods/godtemplate/godtemplate.html?baron_samedi" },
    { name: "Bastet", displayName: "Bastet", category: "assassin", image: "images/bastet.png", path: "gods/godtemplate/godtemplate.html?bastet" },
    { name: "Bellona", displayName: "Bellona", category: "warrior", image: "images/bellona.png", path: "gods/godtemplate/godtemplate.html?bellona" },
    { name: "Cabrakan", displayName: "Cabrakan", category: "guardian", image: "images/cabrakan.png", path: "gods/godtemplate/godtemplate.html?cabrakan" },
    { name: "Camazotz", displayName: "Camazotz", category: "assassin", image: "images/camazotz.png", path: "gods/godtemplate/godtemplate.html?camazotz" },
    { name: "Cerberus", displayName: "Cerberus", category: "guardian", image: "images/cerberus.png", path: "gods/godtemplate/godtemplate.html?cerberus" },
    { name: "Cernunnos", displayName: "Cernunnos", category: "hunter", image: "images/cernunnos.png", path: "gods/godtemplate/godtemplate.html?cernunnos" },
    { name: "Chaac", displayName: "Chaac", category: "warrior", image: "images/chaac.png", path: "gods/godtemplate/godtemplate.html?chaac" },
    { name: "Chang'e", displayName: "Chang'e", category: "mage", image: "images/change.png", path: "gods/godtemplate/godtemplate.html?change" },
    { name: "Charon", displayName: "Charon", category: "guardian", image: "images/charon.png", path: "gods/godtemplate/godtemplate.html?charon" },
    { name: "Charybdis", displayName: "Charybdis", category: "hunter", image: "images/charybdis.png", path: "gods/godtemplate/godtemplate.html?charybdis" },
    { name: "Chernobog", displayName: "Chernobog", category: "hunter", image: "images/chernobog.png", path: "gods/godtemplate/godtemplate.html?chernobog" },
    { name: "Chiron", displayName: "Chiron", category: "hunter", image: "images/chiron.png", path: "gods/godtemplate/godtemplate.html?chiron" },
    { name: "Chronos", displayName: "Chronos", category: "mage", image: "images/chronos.png", path: "gods/godtemplate/godtemplate.html?chronos" },
    { name: "Cliodhna", displayName: "Cliodhna", category: "assassin", image: "images/cliodhna.png", alternativeNames: ["Cleena", "Cleana"], path: "gods/godtemplate/godtemplate.html?cliodhna" },
    { name: "Cthulhu", displayName: "Cthulhu", category: "guardian", image: "images/cthulhu.png", path: "gods/godtemplate/godtemplate.html?cthulhu" },
    { name: "Cu Chulainn", displayName: "Cu Chulainn", category: "warrior", image: "images/cuchulainn.png", path: "gods/godtemplate/godtemplate.html?cu_chulainn" },
    { name: "Cupid", displayName: "Cupid", category: "hunter", image: "images/cupid.png", path: "gods/godtemplate/godtemplate.html?cupid" },
    { name: "Da Ji", displayName: "Da Ji", category: "assassin", image: "images/daji.png", path: "gods/godtemplate/godtemplate.html?da_ji" },
    { name: "Danzaburou", displayName: "Danzaburou", category: "hunter", image: "images/danzaburou.png", path: "gods/godtemplate/godtemplate.html?danzaburou" },
    { name: "Discordia", displayName: "Discordia", category: "mage", image: "images/discordia.png", path: "gods/godtemplate/godtemplate.html?discordia" },
    { name: "Erlang Shen", displayName: "Erlang Shen", category: "warrior", image: "images/erlangshen.png", path: "gods/godtemplate/godtemplate.html?erlang_shen" },
    { name: "Eset", displayName: "Eset", category: "mage", image: "images/eset.png", path: "gods/godtemplate/godtemplate.html?eset" },
    { name: "Fafnir", displayName: "Fafnir", category: "guardian", image: "images/fafnir.png", path: "gods/godtemplate/godtemplate.html?fafnir" },
    { name: "Fenrir", displayName: "Fenrir", category: "assassin", image: "images/fenrir.png", path: "gods/godtemplate/godtemplate.html?fenrir" },
    { name: "Freya", displayName: "Freya", category: "mage", image: "images/freya.png", path: "gods/godtemplate/godtemplate.html?freya" },
    { name: "Ganesha", displayName: "Ganesha", category: "guardian", image: "images/ganesha.png", path: "gods/godtemplate/godtemplate.html?ganesha" },
    { name: "Geb", displayName: "Geb", category: "guardian", image: "images/geb.png", path: "gods/godtemplate/godtemplate.html?geb" },
    { name: "Gilgamesh", displayName: "Gilgamesh", category: "warrior", image: "images/gilgamesh.png", path: "gods/godtemplate/godtemplate.html?gilgamesh" },
    { name: "Guan Yu", displayName: "Guan Yu", category: "warrior", image: "images/guanyu.png", path: "gods/godtemplate/godtemplate.html?guan_yu" },
    { name: "Hachiman", displayName: "Hachiman", category: "hunter", image: "images/hachiman.png", path: "gods/godtemplate/godtemplate.html?hachiman" },
    { name: "Hades", displayName: "Hades", category: "mage", image: "images/hades.png", path: "gods/godtemplate/godtemplate.html?hades" },
    { name: "He bo", displayName: "He bo", category: "mage", image: "images/hebo.png", path: "gods/godtemplate/godtemplate.html?he_bo" },
    { name: "Heimdallr", displayName: "Heimdallr", category: "hunter", image: "images/heimdallr.png", path: "gods/godtemplate/godtemplate.html?heimdallr" },
    { name: "Hel", displayName: "Hel", category: "mage", image: "images/hel.png", path: "gods/godtemplate/godtemplate.html?hel" },
    { name: "Hera", displayName: "Hera", category: "mage", image: "images/hera.png", path: "gods/godtemplate/godtemplate.html?hera" },
    { name: "Hercules", displayName: "Hercules", category: "warrior", image: "images/hercules.png", path: "gods/godtemplate/godtemplate.html?hercules" },
    { name: "Horus", displayName: "Horus", category: "warrior", image: "images/horus.png", path: "gods/godtemplate/godtemplate.html?horus" },
    { name: "Hou Yi", displayName: "Hou Yi", category: "hunter", image: "images/houyi.png", path: "gods/godtemplate/godtemplate.html?hou_yi" },
    { name: "Hun Batz", displayName: "Hun Batz", category: "assassin", image: "images/hunbatz.png", path: "gods/godtemplate/godtemplate.html?hun_batz" },
    { name: "Ishtar", displayName: "Ishtar", category: "hunter", image: "images/ishtar.png", path: "gods/godtemplate/godtemplate.html?ishtar" },
    { name: "Ix Chel", displayName: "Ix Chel", category: "mage", image: "images/ixchel.png", path: "gods/godtemplate/godtemplate.html?ix_chel" },
    { name: "Izanami", displayName: "Izanami", category: "hunter", image: "images/izanami.png", path: "gods/godtemplate/godtemplate.html?izanami" },
    { name: "Janus", displayName: "Janus", category: "mage", image: "images/janus.png", path: "gods/godtemplate/godtemplate.html?janus" },
    { name: "Jing Wei", displayName: "Jing Wei", category: "hunter", image: "images/jingwei.png", path: "gods/godtemplate/godtemplate.html?jing_wei" },
    { name: "Jormungandr", displayName: "Jormungandr", category: "guardian", image: "images/jormungandr.png", path: "gods/godtemplate/godtemplate.html?jormungandr" },
    { name: "Kali", displayName: "Kali", category: "assassin", image: "images/kali.png", path: "gods/godtemplate/godtemplate.html?kali" },
    { name: "Khepri", displayName: "Khepri", category: "guardian", image: "images/khepri.png", path: "gods/godtemplate/godtemplate.html?khepri" },
    { name: "King Arthur", displayName: "King Arthur", category: "warrior", image: "images/kingarthur.png", path: "gods/godtemplate/godtemplate.html?king_arthur" },
    { name: "Kukulkan", displayName: "Kukulkan", category: "mage", image: "images/kukulkan.png", path: "gods/godtemplate/godtemplate.html?kukulkan" },
    { name: "Kumbhakarna", displayName: "Kumbhakarna", category: "guardian", image: "images/kumbhakarna.png", path: "gods/godtemplate/godtemplate.html?kumbhakarna" },
    { name: "Kuzenbo", displayName: "Kuzenbo", category: "guardian", image: "images/kuzenbo.png", path: "gods/godtemplate/godtemplate.html?kuzenbo" },
    { name: "Lancelot", displayName: "Lancelot", category: "assassin", image: "images/lancelot.png", path: "gods/godtemplate/godtemplate.html?lancelot" },
    { name: "Loki", displayName: "Loki", category: "assassin", image: "images/loki.png", path: "gods/godtemplate/godtemplate.html?loki" },
    { name: "Maman Brigitte", displayName: "Maman Brigitte", category: "mage", image: "images/mamanbrigitte.png", path: "gods/godtemplate/godtemplate.html?maman_brigitte" },
    { name: "Martichoras", displayName: "Martichoras", category: "hunter", image: "images/martichoras.png", path: "gods/godtemplate/godtemplate.html?martichoras" },
    { name: "Maui", displayName: "Maui", category: "Guardian", image: "images/maui.png", path: "gods/godtemplate/godtemplate.html?maui" },
    { name: "Medusa", displayName: "Medusa", category: "hunter", image: "images/medusa.png", path: "gods/godtemplate/godtemplate.html?medusa" },
    { name: "Mercury", displayName: "Mercury", category: "assassin", image: "images/mercury.png", path: "gods/godtemplate/godtemplate.html?mercury" },
    { name: "Merlin", displayName: "Merlin", category: "mage", image: "images/merlin.png", path: "gods/godtemplate/godtemplate.html?merlin" },
    { name: "Morgan Le Fay", displayName: "Morgan Le Fay", category: "mage", image: "images/morganlefay.png", path: "gods/godtemplate/godtemplate.html?morgan_le_fay" },
    { name: "Mulan", displayName: "Mulan", category: "warrior", image: "images/mulan.png", path: "gods/godtemplate/godtemplate.html?mulan" },
    { name: "Ne Zha", displayName: "Ne Zha", category: "assassin", image: "images/nezha.png", path: "gods/godtemplate/godtemplate.html?ne_zha" },
    { name: "Neith", displayName: "Neith", category: "hunter", image: "images/neith.png", path: "gods/godtemplate/godtemplate.html?neith" },
    { name: "Nemesis", displayName: "Nemesis", category: "assassin", image: "images/nemesis.png", path: "gods/godtemplate/godtemplate.html?nemesis" },
    { name: "Nike", displayName: "Nike", category: "warrior", image: "images/nike.png", path: "gods/godtemplate/godtemplate.html?nike" },
    { name: "Nox", displayName: "Nox", category: "mage", image: "images/nox.png", path: "gods/godtemplate/godtemplate.html?nox" },
    { name: "Nut", displayName: "Nut", category: "hunter", image: "images/nut.png", path: "gods/godtemplate/godtemplate.html?nut" },
    { name: "Nu Wa", displayName: "Nu Wa", category: "mage", image: "images/nuwa.png", path: "gods/godtemplate/godtemplate.html?nu_wa" },
    { name: "Odin", displayName: "Odin", category: "warrior", image: "images/odin.png", path: "gods/godtemplate/godtemplate.html?odin" },
    { name: "Olorun", displayName: "Olorun", category: "mage", image: "images/olorun.png", path: "gods/godtemplate/godtemplate.html?olorun" },
    { name: "Osiris", displayName: "Osiris", category: "warrior", image: "images/osiris.png", path: "gods/godtemplate/godtemplate.html?osiris" },
    { name: "Pele", displayName: "Pele", category: "assassin", image: "images/pele.png", path: "gods/godtemplate/godtemplate.html?pele" },
    { name: "Persephone", displayName: "Persephone", category: "mage", image: "images/persephone.png", path: "gods/godtemplate/godtemplate.html?persephone" },
    { name: "Poseidon", displayName: "Poseidon", category: "mage", image: "images/poseidon.png", path: "gods/godtemplate/godtemplate.html?poseidon" },
    { name: "Ra", displayName: "Ra", category: "mage", image: "images/ra.png", path: "gods/godtemplate/godtemplate.html?ra" },
    { name: "Raijin", displayName: "Raijin", category: "mage", image: "images/raijin.png", path: "gods/godtemplate/godtemplate.html?raijin" },
    { name: "Rama", displayName: "Rama", category: "hunter", image: "images/rama.png", path: "gods/godtemplate/godtemplate.html?rama" },
    { name: "Ratatoskr", displayName: "Ratatoskr", category: "assassin", image: "images/ratatoskr.png", path: "gods/godtemplate/godtemplate.html?ratatoskr" },
    { name: "Ravana", displayName: "Ravana", category: "assassin", image: "images/ravana.png", path: "gods/godtemplate/godtemplate.html?ravana" },
    { name: "Scylla", displayName: "Scylla", category: "mage", image: "images/scylla.png", path: "gods/godtemplate/godtemplate.html?scylla" },
    { name: "Serqet", displayName: "Serqet", category: "assassin", image: "images/serqet.png", path: "gods/godtemplate/godtemplate.html?serqet" },
    { name: "Set", displayName: "Set", category: "assassin", image: "images/set.png", path: "gods/godtemplate/godtemplate.html?set" },
    { name: "Shiva", displayName: "Shiva", category: "warrior", image: "images/shiva.png", path: "gods/godtemplate/godtemplate.html?shiva" },
    { name: "Skadi", displayName: "Skadi", category: "hunter", image: "images/skadi.png", path: "gods/godtemplate/godtemplate.html?skadi" },
    { name: "Sobek", displayName: "Sobek", category: "guardian", image: "images/sobek.png", path: "gods/godtemplate/godtemplate.html?sobek" },
    { name: "Sol", displayName: "Sol", category: "mage", image: "images/sol.png", path: "gods/godtemplate/godtemplate.html?sol" },
    { name: "Sun Wukong", displayName: "Sun Wukong", category: "warrior", image: "images/sunwukong.png", path: "gods/godtemplate/godtemplate.html?sun_wukong" },
    { name: "Surtr", displayName: "surtr", category: "warrior", image: "images/surtr.png", path: "gods/godtemplate/godtemplate.html?surtr" },
    { name: "Susano", displayName: "Susano", category: "assassin", image: "images/susano.png", path: "gods/godtemplate/godtemplate.html?susano" },
    { name: "Sylvanus", displayName: "Sylvanus", category: "guardian", image: "images/sylvanus.png", path: "gods/godtemplate/godtemplate.html?sylvanus" },
    { name: "Terra", displayName: "Terra", category: "guardian", image: "images/terra.png", path: "gods/godtemplate/godtemplate.html?terra" },
    { name: "Thanatos", displayName: "Thanatos", category: "assassin", image: "images/thanatos.png", path: "gods/godtemplate/godtemplate.html?thanatos" },
    { name: "The Morrigan", displayName: "The Morrigan", category: "mage", image: "images/themorrigan.png", path: "gods/godtemplate/godtemplate.html?the_morrigan" },
    { name: "Thor", displayName: "Thor", category: "assassin", image: "images/thor.png", path: "gods/godtemplate/godtemplate.html?thor" },
    { name: "Thoth", displayName: "Thoth", category: "mage", image: "images/thoth.png", path: "gods/godtemplate/godtemplate.html?thoth" },
    { name: "Tiamat", displayName: "Tiamat", category: "mage", image: "images/tiamat.png", path: "gods/godtemplate/godtemplate.html?tiamat" },
    { name: "Tsukuyomi", displayName: "Tsukuyomi", category: "assassin", image: "images/tsukuyomi.png", path: "gods/godtemplate/godtemplate.html?tsukuyomi" },
    { name: "Tyr", displayName: "Tyr", category: "warrior", image: "images/tyr.png", path: "gods/godtemplate/godtemplate.html?tyr" },
    { name: "Ullr", displayName: "Ullr", category: "hunter", image: "images/ullr.png", path: "gods/godtemplate/godtemplate.html?ullr" },
    { name: "Vamana", displayName: "Vamana", category: "warrior", image: "images/vamana.png", path: "gods/godtemplate/godtemplate.html?vamana" },
    { name: "Vulcan", displayName: "Vulcan", category: "mage", image: "images/vulcan.png", path: "gods/godtemplate/godtemplate.html?vulcan" },
    { name: "Xbalanque", displayName: "Xbalanque", category: "hunter", image: "images/xbalanque.png", path: "gods/godtemplate/godtemplate.html?xbalanque" },
    { name: "Xing Tian", displayName: "Xing Tian", category: "guardian", image: "images/xingtian.png", path: "gods/godtemplate/godtemplate.html?xing_tian" },
    { name: "Yemoja", displayName: "Yemoja", category: "guardian", image: "images/yemoja.png", path: "gods/godtemplate/godtemplate.html?yemoja" },
    { name: "Ymir", displayName: "Ymir", category: "guardian", image: "images/ymir.png", path: "gods/godtemplate/godtemplate.html?ymir" },
    { name: "Yu Huang", displayName: "Yu Huang", category: "Mage", image: "images/yuhuang.png", path: "gods/godtemplate/godtemplate.html?yu_huang" },
    { name: "Zeus", displayName: "Zeus", category: "mage", image: "images/zeus.png", path: "gods/godtemplate/godtemplate.html?zeus" },
    { name: "Zhong Kui", displayName: "Zhong Kui", category: "mage", image: "images/zhongkui.png", path: "gods/godtemplate/godtemplate.html?zhong_kui" }
];

const godList = document.getElementById('god-list');
const searchInput = document.getElementById('search');
const sortBySelect = document.getElementById('sort-by');
const returnToTopButton = document.getElementById('return-to-top');

// Function to filter and display gods based on search term and selected category
function filterGods() {
    const searchTerm = searchInput.value.toLowerCase();
    const selectedCategory = sortBySelect.value.toLowerCase();
    const filteredGods = gods.filter(god => {
        if (selectedCategory === 'all' || god.category === selectedCategory) {
            return god.name.toLowerCase().includes(searchTerm);
        }
        return false;
    });

    // Clear previous list
    godList.innerHTML = '';

    // Display filtered gods
    filteredGods.forEach(god => {
        const godElement = document.createElement('div');
        godElement.classList.add('god');
        const godLink = document.createElement('a');
        godLink.href = `${god.path}`;
        const godImage = document.createElement('img');
        godImage.src = god.image;
        godImage.alt = god.name;
        godLink.appendChild(godImage);
        const godName = document.createElement('span');
        godName.textContent = god.displayName;
        godLink.appendChild(godName);
        godElement.appendChild(godLink);
        godList.appendChild(godElement);
    });
}



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



// Listen for input changes in the search bar and select menu
searchInput.addEventListener('input', filterGods);
sortBySelect.addEventListener('change', filterGods);

// Initial call to filter gods to show all gods initially
filterGods();


document.getElementById('hamburger-icon').addEventListener('click', function() {
    var sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('visible');
});

