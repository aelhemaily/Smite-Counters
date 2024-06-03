document.addEventListener("DOMContentLoaded", function(event) {
    const playStyles = [
        {
            name: "Gods with a burst damage ultimate",
            image: "images/burst.png",
            counters: ["Aegis Amulet", "Gods with leaps"],
            externalLink: "../../categs/no-toggle/no-toggle.html?category=burstult",
            newTab: false
        },
        {
            name: "Gods with a global ultimate",
            image: "images/global.png",
            counters: ["Teleport Fragment", "Gods with a global ultimate"],
            externalLink: "../../categs/no-toggle/no-toggle.html?category=globalult",
            newTab: false
        },
        {
            name: "Gods with an execute",
            image: "images/exe.png",
            counters: ["Gods with leaps", "Aegis Amulet"],
            externalLink: "../../categs/no-toggle/no-toggle.html?category=execute",
            newTab: false
        },
        {
            name: "Gods with a shield",
            image: "images/shield.png",
            counters: ["Shiva", "Erosion"],
            externalLink: "../../categs/no-toggle/no-toggle.html?category=shield",
            newTab: false
        },
        {
            name: "Gods with Auto Attack",
            image: "images/autoattack.png",
            counters: ["Gods with attack speed reduction", "Midgardian Mail", "Bewitched Dagger"],
            externalLink: "../../categs/no-toggle/no-toggle.html?category=autoattack",
            newTab: false
        },
        {
            name: "Gods with built-in attack speed",
            image: "images/attackspeed.png",
            counters: ["Gods with attack speed reduction", "Midgardian Mail", "Bewitched Dagger"],
            externalLink: "../../categs/yes-toggle/yes-toggle.html?category=attackspeed",
            newTab: false
        },
        {
            name: "Gods with cripples",
            image: "images/cripple.png",
            counters: ["Gods with CC immunity", "Purification Beads"],
            externalLink: "../../categs/yes-toggle/yes-toggle.html?category=cripples",
            newTab: false
        },
        {
            name: "Gods with DoT",
            image: "images/dot.png",
            counters: ["Aegis Amulet", "Gods with healing"],
            externalLink: "../../categs/yes-toggle/yes-toggle.html?category=dot",
            newTab: false
        },
        {
            name: "Gods with displacement",
            image: "images/displacement.png",
            counters: ["Jormungandr", "Purification Beads"],
            externalLink: "../../categs/yes-toggle/yes-toggle.html?category=displacement",
            newTab: false
        },
        {
            name: "Gods with healing",
            image: "images/healinggods.png",
            counters: ["Gods with built-in antiheal", "Gods with a burst damage ultimate"],
            externalLink: "../../categs/yes-toggle/yes-toggle.html?category=healing",
            newTab: false
        },
        {
            name: "Gods with knockups",
            image: "images/knockup.png",
            counters: ["Gods with knockup immunity", "Gods with CC immunity"],
            externalLink: "../../categs/yes-toggle/yes-toggle.html?category=knockups",
            newTab: false
        },
        {
            name: "Gods with leaps",
            image: "images/leap.png",
            counters: ["Awilix", "Gods with cripples"],
            externalLink: "../../categs/yes-toggle/yes-toggle.html?category=leaps",
            newTab: false
        },
        {
            name: "Gods with stealth",
            image: "images/stealth.png",
            counters: ["Heimdallr", "Gods with DoT", "Mystical Mail"],
            externalLink: "../../categs/no-toggle/no-toggle.html?category=stealth",
            newTab: false
        },
        {
            name: "Gods with walls",
            image: "images/wall.png",
            counters: ["Gods with leaps", "Phantom Shell"],
            externalLink: "../../categs/yes-toggle/yes-toggle.html?category=walls",
            newTab: false
        }
    ];
    
    const items = [
        {
            name: "Aegis Amulet",
            image: "images/aegis.png",
            externalLink: "https://smite.fandom.com/wiki/Aegis_Amulet",
            newTab: true
        },
        {
            name: "Awilix",
            image: "images/awilix.png",
            externalLink: "../../gods/godtemplate/godtemplate.html?awilix",
            newTab: false
        },
        {
            name: "Midgardian Mail",
            image: "images/midgardian.png",
            externalLink: "https://smite.fandom.com/wiki/Midgardian_Mail",
            newTab: true
        },
        {
            name: "Mystical Mail",
            image: "images/mystical.png",
            externalLink: "https://smite.fandom.com/wiki/Mystical_Mail",
            newTab: true
        },
        {
            name: "Bewitched Dagger",
            image: "images/dagger.png",
            externalLink: "https://smite.fandom.com/wiki/Bewitched_Dagger",
            newTab: true
        },
        {
            name: "Erosion",
            image: "images/erosion.png",
            externalLink: "https://smite.fandom.com/wiki/Erosion",
            newTab: true
        },
        {
            name: "Gods with attack speed reduction",
            image: "images/reduction.png",
            externalLink: "../../categs/no-toggle/no-toggle.html?category=speedreduction",
            newTab: false
        },
        {
            name: "Gods with built-in antiheal",
            image: "images/antiheal.png",
            externalLink: "../../categs/yes-toggle/yes-toggle.html?category=antiheal",
            newTab: false
        },
        {
            name: "Gods with CC immunity",
            image: "images/ccimmunity.png",
            externalLink: "../../categs/yes-toggle/yes-toggle.html?category=ccimmunity",
            newTab: false
        },
        {
            name: "Gods with knockup immunity",
            image: "images/knockimm.png",
            externalLink: "../../categs/yes-toggle/yes-toggle.html?category=knockupimmunity",
            newTab: false
        },
        {
            name: "Heimdallr",
            image: "images/heimdallr.png",
            externalLink: "../../gods/godtemplate/godtemplate.html?heimdallr",
            newTab: false
        },
        {
            name: "Jormungandr",
            image: "images/jormungandr.png",
            externalLink: "../../gods/godtemplate/godtemplate.html?jormungandr",
            newTab: false
        },
        {
            name: "Phantom Shell",
            image: "images/shell.png",
            externalLink: "https://smite.fandom.com/wiki/Phantom_Shell",
            newTab: true
        },
        {
            name: "Purification Beads",
            image: "images/beads.png",
            externalLink: "https://smite.fandom.com/wiki/Purification_Beads",
            newTab: true
        },
        {
            name: "Teleport Fragment",
            image: "images/teleport.png",
            externalLink: "https://smite.fandom.com/wiki/Teleport_Fragment",
            newTab: true
        },
        {
            name: "Shiva",
            image: "images/shiva.png",
            externalLink: "../../gods/godtemplate/godtemplate.html?shiva",
            newTab: false
        }
    ];
    

    const godList = document.getElementById('god-list');

    // Function to display playstyles, their icons, and counters
    function displayPlayStyles() {
        // Clear previous list
        godList.innerHTML = '';

        // Display playstyles, their icons, and counters
        playStyles.forEach((playStyle, index) => {
            const playStyleElement = document.createElement('div');
            playStyleElement.classList.add('god'); // Apply the same CSS class as for gods

            // Adding playstyle image
            const playStyleImage = document.createElement('img');
            playStyleImage.src = playStyle.image;
            playStyleImage.alt = playStyle.name;
            playStyleImage.title = playStyle.name;

            // Adding click event to the image to redirect to the corresponding HTML page
            playStyleImage.addEventListener('click', function() {
                if (playStyle.newTab) {
                    window.open(playStyle.externalLink, '_blank');
                } else {
                    window.location.href = playStyle.externalLink;
                }
            });

            playStyleElement.appendChild(playStyleImage);

            // Adding playstyle name
            const playStyleName = document.createElement('a');
            playStyleName.textContent = playStyle.name;
            playStyleName.href = playStyle.externalLink;
            if (playStyle.newTab) {
                playStyleName.target = '_blank';
            }
            playStyleElement.appendChild(playStyleName);

            // Adding counters
            if (playStyle.counters && playStyle.counters.length > 0) {
                const countersText = document.createElement('span');
                countersText.textContent = "COUNTERED BY";
                playStyleElement.appendChild(countersText);

                playStyle.counters.forEach(counter => {
                    const counterItem = items.find(item => item.name === counter);
                    const counterPlayStyle = playStyles.find(style => style.name === counter);
                    
                    if (counterItem) {
                        const counterImage = document.createElement('img');
                        counterImage.src = counterItem.image;
                        counterImage.alt = counterItem.name;
                        counterImage.title = counterItem.name;
                        counterImage.addEventListener('click', function() {
                            if (counterItem.newTab) {
                                window.open(counterItem.externalLink, '_blank');
                            } else {
                                window.location.href = counterItem.externalLink;
                            }
                        });
                        playStyleElement.appendChild(counterImage);

                        const counterName = document.createElement('a');
                        counterName.textContent = counterItem.name;
                        counterName.href = counterItem.externalLink;
                        if (counterItem.newTab) {
                            counterName.target = '_blank';
                        }
                        playStyleElement.appendChild(counterName);
                    } else if (counterPlayStyle) {
                        const counterImage = document.createElement('img');
                        counterImage.src = counterPlayStyle.image;
                        counterImage.alt = counterPlayStyle.name;
                        counterImage.title = counterPlayStyle.name;
                        counterImage.addEventListener('click', function() {
                            if (counterPlayStyle.newTab) {
                                window.open(counterPlayStyle.externalLink, '_blank');
                            } else {
                                window.location.href = counterPlayStyle.externalLink;
                            }
                        });
                        playStyleElement.appendChild(counterImage);

                        const counterName = document.createElement('a');
                        counterName.textContent = counterPlayStyle.name;
                        counterName.href = counterPlayStyle.externalLink;
                        if (counterPlayStyle.newTab) {
                            counterName.target = '_blank';
                        }
                        playStyleElement.appendChild(counterName);
                    }
                });
            }

            godList.appendChild(playStyleElement);

            // Slide-in animation
            setTimeout(function() {
                playStyleElement.style.opacity = 1;
                playStyleElement.style.transform = 'translateY(0)';
            }, 100 * index);
        });
    }

    // Initial call to display playstyles, their icons, and counters
    displayPlayStyles();
});

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('hamburger-icon').addEventListener('click', function() {
        var sidebar = document.getElementById('sidebar');
        sidebar.classList.toggle('visible');
    });
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


