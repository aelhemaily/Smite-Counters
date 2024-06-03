document.addEventListener("DOMContentLoaded", function(event) {
    const playStyles = [
        { 
            name: "Gods with a burst damage ultimate", 
            image: "images/burst.png", 
            source: "../../categs/no-toggle/no-toggle.html?category=burstult" 
        },
        { 
            name: "Gods with a global ultimate", 
            image: "images/global.png", 
            source: "../../categs/no-toggle/no-toggle.html?category=globalult" 
        },
        { 
            name: "Gods with an execute", 
            image: "images/exe.png", 
            source: "../../categs/no-toggle/no-toggle.html?category=execute" 
        },
        { 
            name: "Gods with a shield", 
            image: "images/shield.png", 
            source: "../../categs/no-toggle/no-toggle.html?category=shield" 
        },
        { 
            name: "Gods with attack speed reduction", 
            image: "images/reduction.png", 
            source: "../../categs/no-toggle/no-toggle.html?category=speedreduction" 
        },
        { 
            name: "Gods with auto attack", 
            image: "images/autoattack.png", 
            source: "../../categs/no-toggle/no-toggle.html?category=autoattack" 
        },
        { 
            name: "Gods with built-in attack speed", 
            image: "images/attackspeed.png", 
            source: "../../categs/yes-toggle/yes-toggle.html?category=attackspeed" 
        },
        { 
            name: "Gods with built-in antiheal", 
            image: "images/antiheal.png", 
            source: "../../categs/yes-toggle/yes-toggle.html?category=antiheal" 
        },
        { 
            name: "Gods with CC immunity", 
            image: "images/ccimmunity.png", 
            source: "../../categs/yes-toggle/yes-toggle.html?category=ccimmunity" 
        },
        { 
            name: "Gods with cripples", 
            image: "images/cripple.png", 
            source: "../../categs/yes-toggle/yes-toggle.html?category=cripples" 
        },
        { 
            name: "Gods with DoT", 
            image: "images/dot.png", 
            source: "../../categs/yes-toggle/yes-toggle.html?category=dot" 
        },
        { 
            name: "Gods with displacement", 
            image: "images/displacement.png", 
            source: "../../categs/yes-toggle/yes-toggle.html?category=displacement" 
        },
        { 
            name: "Gods with healing", 
            image: "images/healinggods.png", 
            source: "../../categs/yes-toggle/yes-toggle.html?category=healing" 
        },
        { 
            name: "Gods with knockups", 
            image: "images/knockup.png", 
            source: "../../categs/yes-toggle/yes-toggle.html?category=knockups" 
        },
        { 
            name: "Gods with knockup immunity", 
            image: "images/knockimm.png", 
            source: "../../categs/yes-toggle/yes-toggle.html?category=knockupimmunity" 
        },
        { 
            name: "Gods with leaps", 
            image: "images/leap.png", 
            source: "../../categs/yes-toggle/yes-toggle.html?category=leaps" 
        },
        { 
            name: "Gods with stealth", 
            image: "images/stealth.png", 
            source: "../../categs/no-toggle/no-toggle.html?category=stealth" 
        },
        { 
            name: "Gods with walls", 
            image: "images/wall.png", 
            source: "../../categs/yes-toggle/yes-toggle.html?category=walls" 
        }
    ];

    const godList = document.getElementById('god-list');

    // Function to display playstyles and their icons
    function displayPlayStyles() {
        // Clear previous list
        godList.innerHTML = '';

        // Display playstyles and their icons
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
                window.location.href = playStyle.source;
            });

            playStyleElement.appendChild(playStyleImage);

            // Adding playstyle name
            const playStyleName = document.createElement('a');
            playStyleName.textContent = playStyle.name;
            playStyleName.href = playStyle.source;
            playStyleElement.appendChild(playStyleName);

            godList.appendChild(playStyleElement);

            // Slide-in animation
            setTimeout(function() {
                playStyleElement.style.opacity = 1;
                playStyleElement.style.transform = 'translateY(0)';
            }, 100 * index);
        });
    }

    // Initial call to display playstyles and their icons
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

