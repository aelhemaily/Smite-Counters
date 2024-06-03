document.addEventListener("DOMContentLoaded", function(event) {
    const playStyles = [
        {
            title: "Notable Counters",
            description: "This shows notable counters, meaning picks that are strong into this god and/or counter him in one or more ways. There may be more gods, these are the notable ones.",
            items: [
                { name: "Odin", image: "images/odin.png", path: "../../gods/godtemplate/godtemplate.html?Odin", description: "With no leaps or teleports, Achilles is locked in Odin cage. The antiheal of Odin's cage also counters Achilles' sustain." },
                { name: "Cabrakan", image: "images/cabrakan.png", path: "../../gods/cabrakan/cabrakan.html", description: "With no leaps or teleports, Achilles is locked in Cabrakan ult. Being trapped in ult or tremors might force achilles ult which Cabrakan can block." },
                { name: "Thanatos", image: "images/thanatos.png", path: "../../gods/thanatos/thanatos.html", description: "Achilles is a solid tank with decent sustain. He thrives on being unkillable and diving your backline. Grouping up and using thanatos execute can be an answer to that playstyle." },
            ]
        },
        {
            title: "Counter Items",
            description: "This shows items that are helpful in countering one more aspects of this god.",
            items: [
                { name: "Aegis Amulet", image: "images/aegis.png", path: "https://smite.fandom.com/wiki/Aegis_Amulet", external: true, description: "Achilles can only execute you when you are at 35% of your hp or lower. Aegis the achilles ultimate to avoid being executed, a classic move." },
                { name: "Cloak of Meditation", image: "images/cloakmed.png", path: "https://smite.fandom.com/wiki/Cloak_of_Meditation", external: true, description: "Achilles can only execute you when you are at 35% of your hp or lower. Cloak of meditation heals can bait achilles ult by healing you and taking you out of execute range." }
            ]
        },
        {
            title: "Counter Playstyles",
            description: "Description for Counter Playstyles",
            items: [
                { name: "Gods with leaps", image: "images/leap.png", path: "../../categs/godswithleaps/godswithleaps.html", description: "This is Gods with leaps' description." },
                { name: "Gods with walls", image: "images/wall.png", path: "../../categs/godswithwalls/godswithwalls.html", description: "This is Gods with walls' description." }
            ]
        },
        {
            title: "Antiheal Priority",
            description: "Description for Antiheal Priority",
            items: [
                { name: "Medium", image: "images/healinggods.png", path: "../../menu/antihealpage/antihealpage.html", description: "This is Medium's description." },
            ]
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

            // Adding playstyle title
            if (playStyle.title) {
                const title = document.createElement('div');
                title.classList.add('playstyle-title');
                title.textContent = playStyle.title;
                title.title = playStyle.description; // Tooltip for column title
                playStyleElement.appendChild(title);
            }

            playStyle.items.forEach((item, itemIndex) => {
                // Create tooltip container
                const tooltipContainer = document.createElement('div');
                tooltipContainer.classList.add('tooltip');

                // Adding playstyle image
                const playStyleImage = document.createElement('img');
                playStyleImage.src = item.image;
                playStyleImage.alt = item.name;
                playStyleImage.title = item.name;
                playStyleImage.classList.add('playstyle-image');

                // Adding tooltip text
                const tooltipText = document.createElement('span');
                tooltipText.classList.add('tooltiptext');
                tooltipText.textContent = item.description;

                tooltipContainer.appendChild(playStyleImage);
                tooltipContainer.appendChild(tooltipText);

                // Adding click event to the image to redirect to the corresponding HTML page
                playStyleImage.addEventListener('click', function() {
                    if (item.external) {
                        window.open(item.path, '_blank');
                    } else {
                        window.location.href = item.path;
                    }
                });

                // Adding mouseover event to the playstyle image
                playStyleImage.addEventListener('mouseover', function() {
                    tooltipText.style.visibility = 'visible';
                });
                playStyleImage.addEventListener('mouseout', function() {
                    tooltipText.style.visibility = 'hidden';
                });

                // Adding playstyle name
                const playStyleName = document.createElement('a');
                playStyleName.classList.add('undertext');
                playStyleName.textContent = item.name;
                playStyleName.href = item.path;
                if (item.external) {
                    playStyleName.setAttribute('target', '_blank');
                }
                playStyleName.addEventListener('mouseover', function() {
                    tooltipText.style.visibility = 'visible';
                });
                playStyleName.addEventListener('mouseout', function() {
                    tooltipText.style.visibility = 'hidden';
                });

                playStyleElement.appendChild(tooltipContainer);
                playStyleElement.appendChild(playStyleName);
            });

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
