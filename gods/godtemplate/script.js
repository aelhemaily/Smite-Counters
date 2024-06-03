

document.addEventListener("DOMContentLoaded", function(event) {
    const Gods = [
       {
        items: [
            {name: "achilles", displayName: "Achilles", backgroundImage: "images/bg-achilles.png",class:"Warrior", roles:"Solo/Jungle", biggestThreats:"Ultimate (execute)", mobility: "Medium",
            playstyles:

            [
                {
                    title: "Notable Counters",
                    description: "This shows notable counters, meaning picks that are strong into Achilles.",
                    items: [
                        { name: "Odin", image: "images/odin.png", path: "../../gods/godtemplate/godtemplate.html?odin" , description: "With no leaps or teleports, Achilles is locked in Odin cage. The antiheal of Odin's cage also counters Achilles' sustain." },
                        { name: "Cabrakan", image: "images/cabrakan.png", path: "../../gods/godtemplate/godtemplate.html?cabrakan", description: "With no leaps or teleports, Achilles is locked in Cabrakan ult. Being trapped in ult or tremors might force achilles ult which Cabrakan can block." },
                        { name: "Thanatos", image: "images/thanatos.png", path: "../../gods/godtemplate/godtemplate.html?thanatos", description: "Achilles is a solid tank with decent sustain. He thrives on being unkillable and diving your backline. Grouping up and using thanatos execute can be an answer to that playstyle." },
                    ]
                },
                {
                    title: "Counter Items",
                    description: "This shows items that are helpful in countering one more aspects of Achilles.",
                    items: [
                        { name: "Aegis Amulet", image: "images/aegis.png", path: "https://smite.fandom.com/wiki/Aegis_Amulet", external: true, description: "Achilles can only execute you when you are at 35% of your hp or lower. Aegis the achilles ultimate to avoid being executed, a classic move." },
                        { name: "Cloak of Meditation", image: "images/cloakmed.png", path: "https://smite.fandom.com/wiki/Cloak_of_Meditation", external: true, description: "Achilles can only execute you when you are at 35% of your hp or lower. Cloak of meditation heals can bait achilles ult by healing you and taking you out of execute range." }
                    ]
                },
                {
                    title: "Counter Playstyles",
                    description: "This shows a playstyle or a specific group of gods that help against Achilles.",
                    items: [
                        { name: "Gods with leaps", image: "images/leap.png", path: "../../categs/yes-toggle/yes-toggle.html?category=leaps", description: "Leaps/self banishes or anything that makes you untargettable can help you avoid an execute." },
                        { name: "Gods with walls", image: "images/wall.png", path: "../../categs/yes-toggle/yes-toggle.html?category=walls", description: "Achilles can only execute you when you are at 35% of your hp or lower. Heals can bait achilles ult by giving you just enough hp to take you out of execute range." }
                    ]
                },
                {
                    title: "Antiheal Priority",
                    description: "This shows how important it is to build antiheal against Achilles.",
                    items: [
                        { name: "Medium", image: "images/healinggods.png", path: "../../menu/antihealpage/antihealpage.html", description: "Achilles second skill makes it so that he heals himself upon successfully damaging enemies with abilities. This makes building antiheal against him a medium priority." },
                    ]
                }
            ] 
          
    
            }, 
            
            {
                name: "agni",
                displayName: "Agni",
                backgroundImage: "images/bg-agni.png",
                class: "Mage",
                roles: "Mid",
                biggestThreats: "Ultimate (bombs)",
                mobility: "High",
                playstyles: [
                    {
                        title: "Notable Counters",
                        description: "This shows notable counters, meaning picks that are strong into Agni.",
                        items: [
                            { name: "Poseidon", image: "images/poseidon.png", path: "../../gods/godtemplate/godtemplate.html?poseidon", description: "Poseidon's burst damage can be a huge threat to Agni, and his whirlpool can cripple Agni, making it difficult for him to escape." },
                            { name: "Scylla", image: "images/scylla.png", path: "../../gods/godtemplate/godtemplate.html?scylla", description: "Scylla's burst damage potential with her ultimate can easily eliminate Agni, especially that Scylla's first ability can prevent Agni's dash." },
                            { name: "Discordia", image: "images/discordia.png", path: "../../gods/godtemplate/godtemplate.html?discordia", description: "Discordia's ability to disrupt Agni's positioning with her abilities can make it difficult for him to land his combos effectively." }
                        ]
                    },
                    {
                        title: "Counter Items",
                        description: "This shows items that are helpful in countering one more aspects of Agni.",
                        items: [
                            { name: "Purification Beads", image: "images/beads.png", path: "https://smite.fandom.com/wiki/Purification_Beads", external: true, description: "Beads can cleanse Agni's stun combos allowing you to escape." },
                            { name: "Aegis Amulet", image: "images/aegis.png", path: "https://smite.fandom.com/wiki/Aegis_Amulet", external: true, description: "Aegis can help you avoid the burst damage from Agni bombs if you are caught in a bad spot." }
                        ]
                    },
                    {
                        title: "Counter Playstyles",
                        description: "This shows a playstyle or a specific group of gods that help against Agni.",
                        items: [
                            { name: "Gods with Walls", image: "images/wall.png", path: "../../categs/yes-toggle/yes-toggle.html?category=walls", description: "Gods with abilities to create walls can block Agni's escape routes, making it easier to secure kills or force him into unfavorable positions." },
                            { name: "Gods with Cripples", image: "images/cripple.png", path: "../../categs/yes-toggle/yes-toggle.html?category=cripples", description: "Gods with abilities that apply cripples can prevent Agni from using his dash, making him an easier target to lock down and kill." }
                        ]
                    },
                    {
                        title: "Antiheal Priority",
                        description: "This shows how important it is to build antiheal against Agni.",
                        items: [
                            { name: "Very Low", image: "images/healinggods.png", path: "../../menu/antihealpage/antihealpage.html", description: "Agni has no self-sustain or healing abilities, making anti-heal less effective against him compared to other gods." }
                        ]
                    }
                ]
            },
            

            {
                name: "ah_muzen_cab",
                displayName: "Ah Muzen Cab",
                backgroundImage: "images/bg-amc.png",
                class: "Hunter",
                roles: "Carry/Mid",
                biggestThreats: "Poke damage + ult",
                mobility: "Very Low",
                
                playstyles: [
                    {
                        title: "Notable Counters",
                        description: "This shows notable counters, meaning picks that are strong into Ah Muzen Cab.",
                        items: [
                            { name: "Ullr", image: "images/ullr.png", path: "../../gods/godtemplate/godtemplate.html?ullr", description: "Ullr's ability to poke from a distance and his burst potential can be a significant threat to Ah Muzen Cab, who lacks mobility to escape Ullr's aggressive plays." },
                            { name: "Agni", image: "images/agni.png", path: "../../gods/godtemplate/godtemplate.html?agni", description: "Agni's poke damage and his ultimate can be challenging for Ah Muzen Cab to deal with, especially considering Ah Muzen Cab's low mobility." },
                            { name: "Cabrakan", image: "images/cabrakan.png", path: "../../gods/godtemplate/godtemplate.html?cabrakan", description: "Cabrakan's ultimate and tremors lock Ah Muzen Cab down easily considering Ah Muzen Cab's low mobility." }
                        ]
                    },
                    {
                        title: "Counter Items",
                        description: "This shows items that are helpful in countering one more aspects of Ah Muzen Cab.",
                        items: [
                            { name: "No obvious counters", image: "images/nocounter.png", path: "", description: "There are no specific items that directly counter Ah Muzen Cab's playstyle or abilities." }
                        ]
                    },
                    {
                        title: "Counter Playstyles",
                        description: "This shows a playstyle or a specific group of gods that help against Ah Muzen Cab.",
                        items: [
                            { name: "Gods with Walls", image: "images/wall.png", path: "../../categs/yes-toggle/yes-toggle.html?category=walls", description: "Gods with abilities to create walls can block Ah Muzen Cab's escape routes, making it easier to secure kills or force him into unfavorable positions." },
                            { name: "Gods with Leaps", image: "images/leap.png", path: "../../categs/yes-toggle/yes-toggle.html?category=leaps", description: "Gods with leaps can easily close the distance to Ah Muzen Cab, who lacks mobility, making him an easier target to lock down and kill." }
                        ]
                    },
                    {
                        title: "Antiheal Priority",
                        description: "This shows how important it is to build antiheal against Ah Muzen Cab.",
                        items: [
                            { name: "Medium Low", image: "images/healinggods.png", path: "../../menu/antihealpage/antihealpage.html", description: "While Ah Muzen Cab has some sustain with his hives, his overall healing potential is not very high, making anti-heal less effective against him compared to other gods." }
                        ]
                    }
                ]
            
            },

            {
    name: "ah_puch",
    displayName: "Ah Puch",
    backgroundImage: "images/bg-ahpuch.png",
    class: "Mage",
    roles: "Mid",
    biggestThreats: "Burst damage + zoning ult",
    mobility: "Very Low",
    playstyles: [
        {
            title: "Notable Counters",
            description: "This shows notable counters, meaning picks that are strong into Ah Puch.",
            items: [
                { name: "Fenrir", image: "images/fenrir.png", path: "../../gods/godtemplate/godtemplate.html?fenrir", description: "Fenrir's dive and his ability to close the distance quickly make him a significant threat to Ah Puch, who lacks mobility to escape Fenrir's aggressive plays. Fenrir's leap can also avoid all Ah Puch damage." },
                { name: "Serqet", image: "images/serqet.png", path: "../../gods/godtemplate/godtemplate.html?serqet", description: "Serqet's high mobility and dive is a big threat to the immobile Ah Puch. Serqet leap can also avoid all Ah Puch damage." },
                { name: "Thoth", image: "images/thoth.png", path: "../../gods/godtemplate/godtemplate.html?thoth", description: "Thoth's long-range poke and burst damage potential can be challenging for Ah Puch to deal with, especially considering his low mobility." }
            ]
        },
        {
            title: "Counter Items",
            description: "This shows items that are helpful in countering one more aspects of Ah Puch.",
            items: [
                { name: "Heavenly Wings", image: "images/heavenlywings.png", path: "https://smite.fandom.com/wiki/Heavenly_Wings", external: true, description: "Heavenly Wings can provide your team with increased movement speed and immunity to slows to take the team out of Ah Puch big zone ultimate." }
            ]
        },
        {
            title: "Counter Playstyles",
            description: "This shows a playstyle or a specific group of gods that help against Ah Puch.",
            items: [
                { name: "Gods with Walls", image: "images/wall.png", path: "../../categs/yes-toggle/yes-toggle.html?category=walls", description: "Gods with abilities to create walls can block Ah Puch's escape routes, making it easier to secure kills or force him into unfavorable positions." },
                { name: "Gods with Leaps", image: "images/leap.png", path: "../../categs/yes-toggle/yes-toggle.html?category=leaps", description: "Gods with leaps can easily close the distance to Ah Puch, who lacks mobility, making him an easier target to lock down and kill." }
            ]
        },
        {
            title: "Antiheal Priority",
            description: "This shows how important it is to build antiheal against Ah Puch.",
            items: [
                { name: "Medium", image: "images/healinggods.png", path: "../../menu/antihealpage/antihealpage.html", description: "Ah Puch relies on his self-healing to sustain in fights, making anti-heal moderately effective against him." }
            ]
        }
    ]
},

{
    name: "amaterasu",
    displayName: "Amaterasu",
    backgroundImage: "images/bg-amaterasu.png",
    class: "Warrior",
    roles: "Solo/Jungle/Support",
    biggestThreats: "Diving + ult (stun)",
    mobility: "Medium/high",
    playstyles: [
        {
            title: "Notable Counters",
            description: "This shows notable counters, meaning picks that are strong into Amaterasu.",
            items: [
                { name: "Bellona", image: "images/bellona.png", path: "../../gods/godtemplate/godtemplate.html?bellona", description: "Bellona's disarm can counter Amaterasu's Autto Attack nature." },
                { name: "Odin", image: "images/odin.png", path: "../../gods/godtemplate/godtemplate.html?odin", description: "Odin's ability to trap Amaterasu inside his ultimate can neutralize her mobility and make her an easier target to focus down during team fights." },
                { name: "Cabrakan", image: "images/cabrakan.png", path: "../../gods/godtemplate/godtemplate.html?cabrakan", description: "Cabrakan's ability to lock down targets with his crowd control and his ultimate wall can make it challenging for Amaterasu to position herself effectively during team fights." }
            ]
        },
        {
            title: "Counter Items",
            description: "This shows items that are helpful in countering one more aspects of Amaterasu.",
            items: [
                { name: "Purification Beads", image: "images/beads.png", path: "https://smite.fandom.com/wiki/Purification_Beads", external: true, description: "Beads can cleanse Amaterasu's (group) stun, allowing you to escape in team fights." },
                { name: "Magi's Cloak", image: "images/magiscloak.png", path: "https://smite.fandom.com/wiki/Magi%27s_Cloak", external: true, description: "Magi's Cloak can cleanse Amaterasu's (group) stun, allowing you to escape in team fights." }
            ]
        },
        {
            title: "Counter Playstyles",
            description: "This shows a playstyle or a specific group of gods that help against Amaterasu.",
            items: [
                { name: "Gods with Walls", image: "images/wall.png", path: "../../categs/yes-toggle/yes-toggle.html?category=walls", description: "Gods with abilities to create walls can block Amaterasu's escape routes or split her team, making it easier to secure kills or force her into unfavorable positions. Amaterasu has no leap." },
                { name: "Gods with Leaps", image: "images/leap.png", path: "../../categs/yes-toggle/yes-toggle.html?category=leaps", description: "Gods with leaps can easily close the distance to Amaterasu, making it harder for her to effectively use her mobility to escape or engage. Gods with leap can just leap out of her ult." },
                { name: "Gods with Built-in Antiheal", image: "images/antiheal.png", path: "../../categs/yes-toggle/yes-toggle.html?category=antiheal", description: "Gods with built-in anti-heal can reduce Amaterasu's self-sustain, making her more vulnerable during extended engagements or team fights." }
            ]
        },
        {
            title: "Antiheal Priority",
            description: "This shows how important it is to build antiheal against Amaterasu.",
            items: [
                { name: "Medium/High", image: "images/healinggods.png", path: "../../menu/antihealpage/antihealpage.html", description: "Amaterasu has moderate to high self-sustain, making anti-heal moderately to highly effective against her." }
            ]
        }
    ]
},

{
    name: "anhur",
    displayName: "Anhur",
    backgroundImage: "images/bg-anhur.png",
    class: "Hunter",
    roles: "Carry/Mid",
    biggestThreats: "Impale + ult",
    mobility: "Mid/High",
    playstyles: [
        {
            title: "Notable Counters",
            description: "This shows notable counters, meaning picks that are strong into Anhur.",
            items: [
                { name: "Awilix", image: "images/awilix.png", path: "../../gods/godtemplate/godtemplate.html?awilix", description: "Awilix's ability to pull Anhur out of his leap with her ultimate can put him in a negative position or be a death sentence." },
                { name: "Loki", image: "images/loki.png", path: "../../gods/godtemplate/godtemplate.html?loki", description: "Loki's burst damage potential and his ability to sneak up on Anhur with his stealth can catch Anhur off guard. Loki's knockup immunity in his 3rd ability counters Anhur's leap knockup." },
                { name: "Artio", image: "images/artio.png", path: "../../gods/godtemplate/godtemplate.html?artio", description: "Artio's cripple and ability to stick to targets can make it difficult for Anhur to position himself safely during team fights, leaving him vulnerable." }
            ]
        },
        {
            title: "Counter Items",
            description: "This shows items that are helpful in countering one more aspects of Anhur.",
            items: [
                { name: "Aegis Amulet", image: "images/aegis.png", path: "https://smite.fandom.com/wiki/Aegis_Amulet", external: true, description: "Aegis can provide you with a brief period of invulnerability, allowing you to survice Anhur's ultimate." }
            ]
        },
        {
            title: "Counter Playstyles",
            description: "This shows a playstyle or a specific group of gods that help against Anhur.",
            items: [
                { name: "Gods with Cripples", image: "images/cripple.png", path: "../../categs/yes-toggle/yes-toggle.html?category=cripples", description: "Gods with abilities that apply cripples prevent Anhur from using his leap, making him an easier target to lock down and kill." }
            ]
        },
        {
            title: "Antiheal Priority",
            description: "This shows how important it is to build antiheal against Anhur.",
            items: [
                { name: "Very Low", image: "images/healinggods.png", path: "../../menu/antihealpage/antihealpage.html", description: "Anhur has no self-sustain or healing abilities, making anti-heal less effective against him compared to other gods." }
            ]
        }
    ]
},
      
{
    name: "anubis",
    displayName: "Anubis",
    backgroundImage: "images/bg-anubis.png",
    class: "Mage",
    roles: "Mid",
    biggestThreats: "Wrap + Ult combo",
    mobility: "Very Low",
    playstyles: [
        {
            title: "Notable Counters",
            description: "This shows notable counters, meaning picks that are strong into Anubis.",
            items: [
                { name: "Ah Puch", image: "images/ahpuch.png", path: "../../gods/godtemplate/godtemplate.html?ah_puch", description: "Ah Puch's high anti-heal is designed to punish gods with high healing potential like Anubis." },
                { name: "Cu Chulainn", image: "images/cuchulainn.png", path: "../../gods/godtemplate/godtemplate.html?cu_chulainn", description: "Cu Chulainn's leap helps him avoid Anubis' stun. It also helps him chase down the immobile Anubis. On top of that, Cu chulainn's spear attack has built-in antiheal." },
                { name: "Cerberus", image: "images/cerberus.png", path: "../../gods/godtemplate/godtemplate.html?cerberus", description: "Cerberus's built-in antiheal from his passive and his chasedown potential is a big threat to the immobile healing Anubis." }
            ]
        },
        {
            title: "Counter Items",
            description: "This shows items that are helpful in countering one more aspects of Anubis.",
            items: [
                { name: "Purification Beads", image: "images/beads.png", path: "https://smite.fandom.com/wiki/Purification_Beads", external: true, description: "Beads can cleanse Anubis's stun, allowing you to escape his wrap + ult combo." },
                { name: "Antiheal Items", image: "images/healinggods.png", path: "../../menu/antihealpage/antihealpage.html", description: "Antiheal items are very effective against Anubis due to his high reliance on lifesteal for sustain. Reducing his healing significantly decreases his survivability in fights." }
            ]
        },
        {
            title: "Counter Playstyles",
            description: "This shows a playstyle or a specific group of gods that help against Anubis.",
            items: [
                { name: "Gods with Leaps", image: "images/leap.png", path: "../../categs/yes-toggle/yes-toggle.html?category=leaps", description: "Gods with leaps can easily close the distance to Anubis, who lacks mobility, making him an easier target to lock down and kill, especially if he misses his stun or if you leap it." },
                { name: "Gods with Built-in Antiheal", image: "images/antihealgods.png", path: "../../categs/yes-toggle/yes-toggle.html?category=antiheal", description: "Gods with abilities that apply antiheal can significantly reduce Anubis's healing from his lifesteal, making him much easier to kill." },
                { name: "Gods with Walls", image: "images/wall.png", path: "../../categs/yes-toggle/yes-toggle.html?category=walls", description: "Gods with abilities to create walls can block the immobile Anubis's escape routes and prevent him from escaping." }
            ]
        },
        {
            title: "Antiheal Priority",
            description: "This shows how important it is to build antiheal against Anubis.",
            items: [
                { name: "Very High", image: "images/healinggods.png", path: "../../menu/antihealpage/antihealpage.html", description: "Anubis relies heavily on lifesteal for sustain, so antiheal is extremely effective against him, significantly reducing his survivability in fights." }
            ]
        }
    ]
},

{
    name: "ao_kuang",
    displayName: "Ao Kuang",
    backgroundImage: "images/bg-aokuang.png",
    class: "Assassin",
    roles: "Jungle",
    biggestThreats: "Burst + Ult (execute)",
    mobility: "Very High",
    playstyles: [
        {
            title: "Notable Counters",
            description: "This shows notable counters, meaning picks that are strong into Ao Kuang.",
            items: [
                { name: "Arachne", image: "images/arachne.png", path: "../../gods/godtemplate/godtemplate.html?arachne", description: "Ao Kuang is a late late game god. Arachne's early game pressure and ability to lock down targets with her webs and stun can make it difficult for Ao Kuang to disengage with his stealth." },
                { name: "Da Ji", image: "images/daji.png", path: "../../gods/godtemplate/godtemplate.html?da_ji", description: "Da Ji's damage over time can make it more difficult for Ao Kuang to disengage via stealth." },
                { name: "Bastet", image: "images/bastet.png", path: "../../gods/godtemplate/godtemplate.html?bastet", description: "Bastet's high mobility and ability to stick to targets can make it difficult for Ao Kuang to escape once he commits to a fight. Bastet's damage over time also can counter Ao Kuang's stealth." }
            ]
        },
        {
            title: "Counter Items",
            description: "This shows items that are helpful in countering one more aspects of Ao Kuang.",
            items: [
                { name: "Purification Beads", image: "images/beads.png", path: "https://smite.fandom.com/wiki/Purification_Beads", external: true, description: "Beads can cleanse you making you avoid the execute from Ao Kuang ultimate." },
                { name: "Mystical Mail", image: "images/mysticalmail.png", path: "https://smite.fandom.com/wiki/Mystical_Mail", external: true, description: "Mystical Mail can take Ao Kuang out of his stealth by dealing constant area damage." }
            ]
        },
        {
            title: "Counter Playstyles",
            description: "This shows a playstyle or a specific group of gods that help against Ao Kuang.",
            items: [
                { name: "Gods with DoT", image: "images/dot.png", path: "../../categs/yes-toggle/yes-toggle.html?category=dot", description: "Gods with damage-over-time abilities can be effective against Ao Kuang, taking him out of his stealth." }
            ]
        },
        {
            title: "Antiheal Priority",
            description: "This shows how important it is to build antiheal against Ao Kuang.",
            items: [
                { name: "Medium/High", image: "images/healinggods.png", path: "../../menu/antihealpage/antihealpage.html", description: "Ao Kuang relies on his lifesteal and sustain to survive in fights, especially when he dives into the enemy backline, so antiheal can significantly reduce his survivability." }
            ]
        }
    ]
},

{
    name: "aphrodite",
    displayName: "Aphrodite",
    backgroundImage: "images/bg-aphrodite.png",
    class: "Mage",
    roles: "Support/Mid/Solo",
    biggestThreats: "Healing + Life-saving Ult",
    mobility: "Very Low",
    playstyles: [
        {
            title: "Notable Counters",
            description: "This shows gods that are considered notable counters to Aphrodite.",
            items: [
                { name: "Ah Puch", image: "images/ahpuch.png", path: "../../gods/godtemplate/godtemplate.html?ah_puch", description: "Ah Puch's burst damage and anti-healing abilities can significantly reduce Aphrodite's healing potential, making it difficult for her to sustain herself and her allies in fights." },
                { name: "Cu Chulainn", image: "images/cuchulainn.png", path: "../../gods/godtemplate/godtemplate.html?cu_chulainn", description: "Cu Chulainn's dive potential and built-in antiheal can disrupt Aphrodite's positioning and make it difficult for her to protect herself and her allies effectively." },
                { name: "Cerberus", image: "images/cerberus.png", path: "../../gods/godtemplate/godtemplate.html?cerberus", description: "Cerberus's anti-healing and crowd control abilities can greatly reduce Aphrodite's healing potential, making it difficult for her to sustain herself and her allies in fights." }
            ]
        },
        {
            title: "Counter Playstyles",
            description: "This shows a playstyle or a specific group of gods that help against Aphrodite.",
            items: [
                { name: "Gods with Built-in Antiheal", image: "images/antihealgods.png", path: "../../categs/yes-toggle/yes-toggle.html?category=antiheal", description: "Gods with abilities that apply antiheal can significantly reduce Aphrodite's healing, making it difficult for her to sustain herself and her allies in fights." },
                { name: "Gods with Walls", image: "images/wall.png", path: "../../categs/yes-toggle/yes-toggle.html?category=walls", description: "Gods with abilities to create walls can block Aphrodite's escape routes and prevent her from reaching her allies or positioning herself effectively in fights." }
            ]
        },
        {
            title: "Counter Items",
            description: "This shows items that are helpful in countering one more aspects of Aphrodite.",
            items: [
                { name: "Purification Beads", image: "images/beads.png", path: "https://smite.fandom.com/wiki/Purification_Beads", external: true, description: "Beads can cleanse Aphrodite's kiss taking you out of a bad situation." },
                { name: "Antiheal Items", image: "images/healinggods.png", path: "../../menu/antihealpage/antihealpage.html", description: "Antiheal items are very effective against Aphrodite due to her reliance on healing. Reducing her healing significantly decreases her survivability and her ability to sustain herself and her allies in fights." }
            ]
        },
        {
            title: "Antiheal Priority",
            description: "This shows how important it is to build antiheal against Aphrodite.",
            items: [
                { name: "Very High", image: "images/healinggods.png", path: "../../menu/antihealpage/antihealpage.html", description: "Aphrodite relies heavily on her healing abilities to sustain herself and her allies in fights, so antiheal is extremely effective against her, significantly reducing her survivability and her effectiveness in team fights." }
            ]
        }
    ]
},

{
    name: "apollo",
    displayName: "Apollo",
    backgroundImage: "images/bg-apollo.png",
    class: "Hunter",
    roles: "Carry/Mid",
    biggestThreats: "Global ult + split-pushing",
    mobility: "Very High",
    playstyles: [
        {
            title: "Notable Counters",
            description: "This shows notable counters, meaning picks that are strong into Apollo.",
            items: [
                { name: "Chernobog", image: "images/chernobog.png", path: "../../gods/godtemplate/godtemplate.html?chernobog", description: "Chernobog's global presence with his ultimate ability can match Apollo's split-pushing potential, making it difficult for Apollo to pressure the map without the risk of being outnumbered or caught out of position." },
                { name: "Athena", image: "images/athena.png", path: "../../gods/godtemplate/godtemplate.html?athena", description: "Athena's global ultimate can match Apollo's split-pushing potential and provide her team with the ability to counter his rotations, making it difficult for Apollo to pressure the map effectively." },
                { name: "Kukulkan", image: "images/kukulkan.png", path: "../../gods/godtemplate/godtemplate.html?kukulkan", description: "Kukulkan's high damage over-time can kill Apollo even while he is up in his ultimate or while he is trying to wind up the ult." }
            ]
        },
        {
            title: "Counter Items",
            description: "This shows items that are helpful in countering one more aspects of Apollo.",
            items: [
                { name: "Bewitched Dagger", image: "images/bewitcheddagger.png", path: "https://smite.fandom.com/wiki/Bewitched_Dagger", external: true, description: "Bewitched Dagger can counter Apollo's built-in attack speed" },
                { name: "Midgardian Mail", image: "images/midgardianmail.png", path: "https://smite.fandom.com/wiki/Midgardian_Mail", external: true, description: "Midgardian Mail can counter Apollo's built-in attack speed." }
            ]
        },
        {
            title: "Counter Playstyles",
            description: "This shows a playstyle or a specific group of gods that help against Apollo.",
            items: [
                { name: "Gods with a Global Ultimate", image: "images/global.png", path: "../../categs/no-toggle/no-toggle.html?category=globalult", description: "Gods with global presence can match Apollo's split-pushing potential and provide their team with the ability to counter his rotations, making it difficult for Apollo to pressure the map effectively." },
                { name: "Gods with DoT", image: "images/dot.png", path: "../../categs/yes-toggle/yes-toggle.html?category=dot", description: "Gods with damage over-time can kill Apollo even while he is up in his ultimate or while he is trying to wind up the ult." }
            ]
        },
        {
            title: "Antiheal Priority",
            description: "This shows how important it is to build antiheal against Apollo.",
            items: [
                { name: "Very Low", image: "images/healinggods.png", path: "../../menu/antihealpage/antihealpage.html", description: "Apollo has no self-sustain or healing abilities, making anti-heal less effective against him compared to other gods." }
            ]
        }
    ]
},

{
    name: "arachne",
    displayName: "Arachne",
    backgroundImage: "images/bg-arachne.png",
    class: "Assassin",
    roles: "Jungle",
    biggestThreats: "CC + 1v1 potential",
    mobility: "High",
    playstyles: [
        {
            title: "Notable Counters",
            description: "This shows notable counters, meaning picks that are strong into Arachne.",
            items: [
                { name: "Odin", image: "images/odin.png", path: "../../gods/godtemplate/godtemplate.html?odin", description: "Odin's ultimate ability can trap Arachne inside, or at the very least force her ultimate defensively." },
                { name: "Cabrakan", image: "images/cabrakan.png", path: "../../gods/godtemplate/godtemplate.html?cabrakan", description: "Cabrakan's ultimate ability can trap Arachne inside, or at the very least force her ultimate defensively." },
                { name: "Hel", image: "images/hel.png", path: "../../gods/godtemplate/godtemplate.html?hel", description: "Hel's cleanse can counter arachne's stun and dive to help her team out of a bad spot." }
            ]
        },
        {
            title: "Counter Playstyles",
            description: "This shows a playstyle or a specific group of gods that help against Arachne.",
            items: [
                { name: "Gods with Walls", image: "images/wall.png", path: "../../categs/yes-toggle/yes-toggle.html?category=walls", description: "Gods with abilities to create walls can block Arachne's escape routes and prevent her from chasing down targets effectively or retreating safely. At the very least they can force her ult defensively." },
                { name: "Gods with Attack Speed Reduction", image: "images/attackspeed.png", path: "../../categs/no-toggle/no-toggle.html?category=speedreduction", description: "Gods with abilities that reduce attack speed can significantly reduce Arachne's damage output and her ability to secure kills in 1v1 fights." }
            ]
        },
        {
            title: "Counter Items",
            description: "This shows items that are helpful in countering one more aspects of Arachne.",
            items: [
                { name: "Bewitched Dagger", image: "images/bewitcheddagger.png", path: "https://smite.fandom.com/wiki/Bewitched_Dagger", external: true, description: "Bewitched Dagger significantly reduces Arachne's attack speed, damage output and her ability to secure kills in 1v1 fights." },
                { name: "Midgardian Mail", image: "images/midgardianmail.png", path: "https://smite.fandom.com/wiki/Midgardian_Mail", external: true, description: "Midgardian Mail reduces Arachne's attack speed, damage output and her ability to secure kills in 1v1 fights." }
            ]
        },
        {
            title: "Antiheal Priority",
            description: "This shows how important it is to build antiheal against Arachne.",
            items: [
                { name: "Medium", image: "images/healinggods.png", path: "../../menu/antihealpage/antihealpage.html", description: "Arachne has some self-sustain with her passive ability, so anti-heal can help reduce her healing and make it easier to burst her down in fights or secure kills." }
            ]
        }
    ]
},

{
    name: "ares",
    displayName: "Ares",
    backgroundImage: "images/bg-ares.png",
    class: "Guardian",
    roles: "Support/Solo",
    biggestThreats: "Displacement ult + cripple",
    mobility: "Very Low",
    playstyles: [
        {
            title: "God Counters",
            description: "This shows gods that are considered counters to Ares.",
            items: [
                { name: "Ravana", image: "images/ravana.png", path: "../../gods/godtemplate/godtemplate.html?ravana", description: "Ravana's CC immunity from his 2 helps him avoid Ares' big displacement ult." },
                { name: "Chang’e", image: "images/change.png", path: "../../gods/godtemplate/godtemplate.html?change", description: "Chang'e's CC immunity from his 2 helps him avoid Ares' big displacement ult." },
                { name: "Hel", image: "images/hel.png", path: "../../gods/godtemplate/godtemplate.html?hel", description: "Hel's group cleanse can help her neutralize Ares' ultimate completely in a team fight." }
            ]
        },
        {
            title: "Counter Items",
            description: "This shows items that are helpful in countering one more aspects of Ares.",
            items: [
                { name: "Purification Beads", image: "images/beads.png", path: "https://smite.fandom.com/wiki/Purification_Beads", external: true, description: "Beads can help you avoid Ares big displacement ult." },
                { name: "Magi’s Cloak", image: "images/magiscloak.png", path: "https://smite.fandom.com/wiki/Magi's_Cloak", external: true, description: "Magi’s Cloak can help you avoid Ares big displacement ult." }
            ]
        },
        {
            title: "Counter Playstyles",
            description: "This shows a playstyle or a specific group of gods that help against Ares.",
            items: [
                { name: "Gods with CC Immunity", image: "images/ccimmunity.png", path: "../../categs/yes-toggle/yes-toggle.html?category=ccimmunity", description: "Gods with crowd control immunity can avoid Ares's ultimate and counter engage, making it difficult for Ares to control them effectively during team fights." },
                { name: "Gods with Walls", image: "images/wall.png", path: "../../categs/yes-toggle/yes-toggle.html?category=walls", description: "With no leaps on Ares, Gods with abilities to create walls can block Arachne's escape routes and prevent him from chasing down targets effectively or retreating safely." }
            ]
        },
        {
            title: "Antiheal Priority",
            description: "This shows how important it is to build antiheal against Ares.",
            items: [
                { name: "Very Low", image: "images/healinggods.png", path: "../../menu/antihealpage/antihealpage.html", description: "Ares does not have significant healing abilities, so antiheal is not as effective against him compared to other gods." }
            ]
        }
    ]
},

{
    name: "artemis",
    displayName: "Artemis",
    backgroundImage: "images/bg-artemis.png",
    class: "Hunter",
    roles: "Carry/Mid",
    biggestThreats: "Shred",
    mobility: "Very Low",
    playstyles: [
        {
            title: "God Counters",
            description: "This shows gods that are considered counters to Artemis.",
            items: [
                { name: "Anhur", image: "images/anhur.png", path: "../../gods/godtemplate/godtemplate.html?anhur", description: "Anhur's CC immunity in his ult can nullify Artemis ult. He can jump her ult, aggress and chase her down." },
                { name: "Odin", image: "images/odin.png", path: "../../gods/godtemplate/godtemplate.html?odin", description: "With no leap or escape, Odin cage ultimate can lock Artemis down and allow enemies to focus her down quickly." },
                { name: "Chaac", image: "images/chaac.png", path: "../../gods/godtemplate/godtemplate.html?chaac", description: "Chaac's built-in attack speed reduction and his chase-down potential can make life harder for Artemis." }
            ]
        },
        {
            title: "Counter Items",
            description: "This shows items that are helpful in countering one more aspects of Artemis.",
            items: [
                { name: "Purification Beads", image: "images/beads.png", path: "https://smite.fandom.com/wiki/Purification_Beads", external: true, description: "Beads can cleanse Artemis's ult group stun allowing you to escape." },
                { name: "Bewitched Dagger", image: "images/bewitched_dagger.png", path: "https://smite.fandom.com/wiki/Bewitched_Dagger", external: true, description: "Bewitched Dagger can counter Artemis' built-in attack speed from her 2." }
            ]
        },
        {
            title: "Counter Playstyles",
            description: "This shows a playstyle or a specific group of gods that help against Artemis.",
            items: [
                { name: "Gods with CC Immunity", image: "images/ccimmunity.png", path: "../../categs/yes-toggle/yes-toggle.html?category=ccimmunity", description: "Gods with crowd control immunity can avoid Artemis's group stun from her ult." },
                { name: "Gods with Leaps", image: "images/leap.png", path: "../../categs/yes-toggle/yes-toggle.html?category=leaps", description: "Gods with leap abilities can go ever her ult or easily close the distance to Artemis, who lacks mobility." },
                { name: "Gods with Walls", image: "images/wall.png", path: "../../categs/yes-toggle/yes-toggle.html?category=walls", description: "With no leaps on Artemis, Gods with abilities to create walls can block Artemis' escape routes." }
            ]
        },
        {
            title: "Antiheal Priority",
            description: "This shows how important it is to build antiheal against Artemis.",
            items: [
                { name: "Very Low", image: "images/healinggods.png", path: "../../menu/antihealpage/antihealpage.html", description: "Artemis does not have significant healing abilities, so antiheal is not as effective against her compared to other gods." }
            ]
        }
    ]
},

{
    name: "artio",
    displayName: "Artio",
    backgroundImage: "images/bg-artio.png",
    class: "Guardian",
    roles: "Support, Solo",
    biggestThreats: "High sustain",
    mobility: "High",
    playstyles: [
        {
            title: "God Counters",
            description: "This shows gods that are considered counters to Artio.",
            items: [
                { name: "Ah Puch", image: "images/ahpuch.png", path: "../../gods/godtemplate/godtemplate.html?ah_puch", description: "Ah Puch's anti-healing abilities can significantly reduce Artio's sustain, making it difficult for her to sustain herself and her allies in fights, especially during team fights or prolonged engagements." },
                { name: "Cerberus", image: "images/cerberus.png", path: "../../gods/godtemplate/godtemplate.html?cerberus", description: "Cerberus's anti-healing and crowd control abilities can greatly reduce Artio's sustain, making it difficult for her to sustain herself and her allies in fights, especially during team fights or prolonged engagements." },
                { name: "Cu Chulainn", image: "images/cuchulainn.png", path: "../../gods/godtemplate/godtemplate.html?cu_chulainn", description: "Cu Chulainn's anti-healing and crowd control can disrupt Artio's positioning and make it difficult for her to protect herself and her allies effectively, reducing her sustain and effectiveness in team fights or prolonged engagements." }
            ]
        },
        {
            title: "Counter Items",
            description: "This shows items that are helpful in countering one more aspects of Artio.",
            items: [
                { name: "Antiheal Items", image: "images/healinggods.png", path: "../../menu/antihealpage/antihealpage.html", description: "Antiheal items are very effective against Artio due to her reliance on healing." }
            ]
        },
        {
            title: "Counter Playstyles",
            description: "This shows a playstyle or a specific group of gods that help against Artio.",
            items: [
                { name: "Gods with Built-in Antiheal", image: "images/antihealgods.png", path: "../../categs/yes-toggle/yes-toggle.html?category=antiheal", description: "Gods with abilities that apply antiheal can significantly reduce Artio's healing, making it difficult for her to sustain herself and her allies in fights, especially during team fights or prolonged engagements." },
                { name: "Gods with Walls", image: "images/wall.png", path: "../../categs/yes-toggle/yes-toggle.html?category=walls", description: "With no leaps on Artio, Gods with abilities to create walls can block Artio from chasing down her enemies or retreating safely." },
            ]
        },
        {
            title: "Antiheal Priority",
            description: "This shows how important it is to build antiheal against Artio.",
            items: [
                { name: "Very High", image: "images/healinggods.png", path: "../../menu/antihealpage/antihealpage.html", description: "Artio relies heavily on her healing abilities to sustain herself and her allies in fights, so antiheal is extremely effective against her, significantly reducing her survivability and her effectiveness in team fights or prolonged engagements." }
            ]
        }
    ]
},

{
    name: "athena",
    displayName: "Athena",
    backgroundImage: "images/bg-athena.png",
    class: "Guardian",
    roles: "Support/Jungle",
    biggestThreats: "Global ultimate",
    mobility: "Very High",
    playstyles: [
        {
            title: "God Counters",
            description: "This shows gods that are considered counters to Athena.",
            items: [
                { name: "Hel", image: "images/hel.png", path: "../../gods/godtemplate/godtemplate.html?hel", description: "Hel's crowd control immunity and cleanse can allow her to avoid Athena's taunt and counter engage." },
                { name: "Geb", image: "images/geb.png", path: "../../gods/godtemplate/godtemplate.html?geb", description: "Geb's shield can neutralize Athena's engage by saving her taunt target." },
                { name: "Chernobog", image: "images/chernobog.png", path: "../../gods/godtemplate/godtemplate.html?chernobog", description: "Chernobog's global presence with his ultimate can match Athena's global presence and provide his team with the ability to counter her rotations, making it difficult for Athena to pressure the map effectively." }
            ]
        },
        {
            title: "Counter Items",
            description: "This shows items that are helpful in countering one more aspects of Athena.",
            items: [
                { name: "Purification Beads", image: "images/beads.png", path: "https://smite.fandom.com/wiki/Purification_Beads", external: true, description: "Beads can cleanse Athena's crowd control effects, allowing allies to escape dangerous situations or avoid being taunted by Athena's ultimate ability, mitigating her engage potential during team fights or ganks." },
                { name: "Magi's Cloak", image: "images/magiscloak.png", path: "https://smite.fandom.com/wiki/Magi's_Cloak", external: true, description: "Magi's Cloak can provide additional crowd control immunity, allowing allies to avoid being taunted by Athena's ultimate ability and counter engage, mitigating her engage potential during team fights or ganks." }
            ]
        },
        {
            title: "Counter Playstyles",
            description: "This shows a playstyle or a specific group of gods that help against Athena.",
            items: [
                { name: "Gods with a Global Ultimate", image: "images/global.png", path: "../../categs/no-toggle/no-toggle.html?category=globalult", description: "Gods with global presence can match Athena's global presence and provide their team with the ability to counter her rotations, making it difficult for Athena to pressure the map effectively." }
            ]
        },
        {
            title: "Antiheal Priority",
            description: "This shows how important it is to build antiheal against Athena.",
            items: [
                { name: "Very Low", image: "images/healinggods.png", path: "../../menu/antihealpage/antihealpage.html", description: "Athena does not have healing abilities, so antiheal is not as effective against her compared to other gods." }
            ]
        }
    ]
},

{
    name: "atlas",
    displayName: "Atlas",
    backgroundImage: "images/bg-atlas.png",
    class: "Guardian",
    roles: "Support",
    biggestThreats: "Displacement",
    mobility: "Medium/High",
    playstyles: [
        {
            title: "God Counters",
            description: "This shows gods that are considered counters to Atlas.",
            items: [
                { name: "Ganesha", image: "images/ganesha.png", path: "../../gods/godtemplate/godtemplate.html?ganesha", description: "Ganesha's silence and dash can prevent Atlas from using his abilities effectively, reducing his crowd control and peel potential for his team, making it difficult for him to protect his allies effectively during team fights." },
                { name: "Ares", image: "images/ares.png", path: "../../gods/godtemplate/godtemplate.html?ares", description: "Ares's crowd control and cripple can prevent Atlas from dashing to engage or retreat effectively." },
                { name: "Anhur", image: "images/anhur.png", path: "../../gods/godtemplate/godtemplate.html?anhur", description: "Anhur's CC immune ult and leap can help him avoid being picked up or CC'd by Atlas." }
            ]
        },
        {
            title: "Counter Items",
            description: "This shows items that are helpful in countering one more aspects of Atlas.",
            items: [
                { name: "Purification Beads", image: "images/beads.png", path: "https://smite.fandom.com/wiki/Purification_Beads", external: true, description: "Beads can cleanse Atlas's crowd control effects, allowing you to escape dangerous situations or avoid being displaced by his 2." }
            ]
        },
        {
            title: "Counter Playstyles",
            description: "This shows a playstyle or a specific group of gods that help against Atlas.",
            items: [
                { name: "Gods with Leaps", image: "images/leap.png", path: "../../categs/yes-toggle/yes-toggle.html?category=leaps", description: "Gods with leap abilities can easily avoid Atlas's displacement abilities and ult, making it difficult for him to control them effectively during fights or ganks." },
                { name: "Gods with CC Immunity", image: "images/ccimmunity.png", path: "../../categs/yes-toggle/yes-toggle.html?category=ccimmunity", description: "Gods with crowd control immunity can easily avoid Atlas's displacement abilities, making it difficult for him to control them effectively during fights or ganks." },
                { name: "Gods with Walls", image: "images/wall.png", path: "../../categs/yes-toggle/yes-toggle.html?category=walls", description: "With no leaps on Atlas, Gods with abilities to create walls can block Atlas's engage or retreat." }
            ]
        },
        {
            title: "Antiheal Priority",
            description: "This shows how important it is to build antiheal against Atlas.",
            items: [
                { name: "Very Low", image: "images/healinggods.png", path: "../../menu/antihealpage/antihealpage.html", description: "Atlas does not have healing abilities, so antiheal is not as effective against him compared to other gods." }
            ]
        }
    ]
},

{
    name: "awilix",
    displayName: "Awilix",
    backgroundImage: "images/bg-awilix.png",
    class: "Assassin",
    roles: "Jungle",
    biggestThreats: "Ultimate",
    mobility: "High",
    playstyles: [
        {
            title: "God Counters",
            description: "This shows gods that are considered counters to Awilix.",
            items: [
                { name: "Arachne", image: "images/arachne.png", path: "../../gods/godtemplate/godtemplate.html?arachne", description: "Arachne's early 1v1 potential and lack of leap can make her harder to deal with for Awilix compared to other junglers." },
                { name: "Ares", image: "images/ares.png", path: "../../gods/godtemplate/godtemplate.html?ares", description: "Ares' cripple via his chains can immobilize Awilix and put her in a dangerous spot." },
                { name: "Khepri", image: "images/khepri.png", path: "../../gods/godtemplate/godtemplate.html?khepri", description: "Khepri's excellent peel and life-saving ultimate can counter Awilix's playstyle if Khepri can react fast enough to her pulls." }
            ]
        },
        {
            title: "Counter Items",
            description: "This shows items that are helpful in countering one more aspects of Awilix.",
            items: [
                { name: "Purification Beads", image: "images/beads.png", path: "https://smite.fandom.com/wiki/Purification_Beads", external: true, description: "Beads can neutralize Awilix's knockup or the pull from her ult." },
                { name: "Magi's Cloak", image: "images/magiscloak.png", path: "https://smite.fandom.com/wiki/Magi's_Cloak", external: true, description: "Magi's Cloak can neutralize Awilix's knockup or the pull from her ult." }
            ]
        },
        {
            title: "Counter Playstyles",
            description: "This shows a playstyle or a specific group of gods that help against Awilix.",
            items: [
                { name: "Gods with Cripples", image: "images/cripple.png", path: "../../categs/yes-toggle/yes-toggle.html?category=cripples", description: "Gods with abilities that apply cripples can prevent Awilix from using her leap, making her an easier target to lock down and kill." },
                { name: "Gods with Knockup Immunity", image: "images/knockupimmune.png", path: "../../categs/yes-toggle/yes-toggle.html?category=knockupimmunity", description: "Gods with knockup immunity are less vulnerable to Awilix's knockup and her ult pulls." }
            ]
        },
        {
            title: "Antiheal Priority",
            description: "This shows how important it is to build antiheal against Awilix.",
            items: [
                { name: "Very Low", image: "images/healinggods.png", path: "../../menu/antihealpage/antihealpage.html", description: "Awilix does not have healing abilities, so antiheal is not as effective against her compared to other gods." }
            ]
        }
    ]
},

{
    name: "baba_yaga",
    displayName: "Baba Yaga",
    backgroundImage: "images/bg-babayaga.png",
    class: "Mage",
    roles: "Mid",
    biggestThreats: "Sustained DMG",
    mobility: "Medium",
    playstyles: [
        {
            title: "God Counters",
            description: "This shows gods that are considered counters to Baba Yaga.",
            items: [
                { name: "Awilix", image: "images/awilix.png", path: "../../gods/godtemplate/godtemplate.html?awilix", description: "Awilix's high burst damage and crowd control can quickly burst down Baba Yaga, especially if she is caught out of position or tries to engage in a fight. More importantly, Awilix ult can pull Baba Yaga out of her leap." },
                { name: "Odin", image: "images/odin.png", path: "../../gods/godtemplate/godtemplate.html?odin", description: "Odin's ability to trap Baba Yaga inside his ultimate can prevent her from using her mobility effectively, making it difficult for her to escape or engage.." },
                { name: "Cabrakan", image: "images/cabrakan.png", path: "../../gods/godtemplate/godtemplate.html?cabrakan", description: "Cabrakan's crowd control and burst damage can quickly burst down Baba Yaga, especially if she is caught out of position or tries to engage in a fight. Additionally, Cabrakan's ability to trap Baba Yaga inside his ultimate can put her in a bad spot." }
            ]
        },
        {
            title: "Counter Items",
            description: "This shows items that are helpful in countering one more aspects of Baba Yaga.",
            items: [
                { name: "Aegis Amulet", image: "images/aegis.png", path: "https://smite.fandom.com/wiki/Aegis_Amulet", external: true, description: "Aegis Amulet can help neutralize Baba Yaga's ult damage." }
            ]
        },
        {
            title: "Counter Playstyles",
            description: "This shows a playstyle or a specific group of gods that help against Baba Yaga.",
            items: [
                { name: "Gods with Leaps", image: "images/leap.png", path: "../../categs/yes-toggle/yes-toggle.html?category=leaps", description: "Gods with leap abilities can easily avoid Baba Yaga's damaging abilities, making it difficult for her to confirm kills or deal sustained damage during fights or ganks." },
                { name: "Gods with Walls", image: "images/wall.png", path: "../../categs/yes-toggle/yes-toggle.html?category=walls", description: "Gods with abilities that create walls can block Baba Yaga's escape routes." }
            ]
        },
        {
            title: "Antiheal Priority",
            description: "This shows how important it is to build antiheal against Baba Yaga.",
            items: [
                { name: "Low", image: "images/healinggods.png", path: "../../menu/antihealpage/antihealpage.html", description: "Baba Yaga does not have significant healing abilities, so antiheal is not as effective against her compared to other gods." }
            ]
        }
    ]
},

{
    name: "bacchus",
    displayName: "Bacchus",
    backgroundImage: "images/bg-bacchus.png",
    class: "Guardian",
    roles: "Support",
    biggestThreats: "CC + high damage",
    mobility: "Medium/High",
    playstyles: [
        {
            title: "God Counters",
            description: "This shows gods that are considered counters to Bacchus.",
            items: [
                { name: "Awilix", image: "images/awilix.png", path: "../../gods/godtemplate/godtemplate.html?awilix", description: "Awilix's can pull Bacchus with her ult out of his leap putting him in a bad spot or preventing his escape." },
                { name: "Ganesha", image: "images/ganesha.png", path: "../../gods/godtemplate/godtemplate.html?ganesha", description: "Ganesha's silence and dash can prevent Bacchus from using his belch." },
                { name: "Ymir", image: "images/ymir.png", path: "../../gods/godtemplate/godtemplate.html?ymir", description: "Ymir's freeze can interrupt Bacchus' belch preventing team stuns." }
            ]
        },
        {
            title: "Counter Items",
            description: "This shows items that are helpful in countering one more aspects of Bacchus.",
            items: [
                { name: "Purification Beads", image: "images/beads.png", path: "https://smite.fandom.com/wiki/Purification_Beads", external: true, description: "Beads can cleanse Bacchus's crowd control effects, considering he has 3 CC abilities (belch, stun and intoxicate ult)." }
            ]
        },
        {
            title: "Counter Playstyles",
            description: "This shows a playstyle or a specific group of gods that help against Bacchus.",
            items: [
                { name: "Gods with CC Immunity", image: "images/ccimmunity.png", path: "../../categs/yes-toggle/yes-toggle.html?category=ccimmunity", description: "Gods with crowd control immunity can easily avoid Bacchus's crowd control abilities, making it difficult for him to control them effectively during fights or ganks." },
                { name: "Gods with Cripples", image: "images/cripple.png", path: "../../categs/yes-toggle/yes-toggle.html?category=cripples", description: "Gods with abilities that apply cripples can prevent Bacchus from using his leap, making him an easier target to lock down and kill, especially during team fights or ganks." }
            ]
        },
        {
            title: "Antiheal Priority",
            description: "This shows how important it is to build antiheal against Bacchus.",
            items: [
                { name: "Medium", image: "images/healinggods.png", path: "../../menu/antihealpage/antihealpage.html", description: "Bacchus has moderate self-sustain, so antiheal can be effective against him, especially during prolonged team fights or skirmishes." }
            ]
        }
    ]
},

{
    name: "bakasura",
    displayName: "Bakasura",
    backgroundImage: "images/bg-bakasura.png",
    class: "Assassin",
    roles: "Jungle",
    biggestThreats: "Ult (cripple + high DMG)",
    mobility: "Medium/High",
    playstyles: [
        {
            title: "God Counters",
            description: "This shows gods that are considered counters to Bakasura.",
            items: [
                { name: "Ares", image: "images/ares.png", path: "../../gods/godtemplate/godtemplate.html?ares", description: "Ares' cripple from his chains can lock down bakasura, making it difficult for him to escape or engage." },
                { name: "Geb", image: "images/geb.png", path: "../../gods/godtemplate/godtemplate.html?geb", description: "Geb's crowd control and ability to peel for his allies can prevent Bakasura from engaging effectively, making it difficult for him to dive onto high-priority targets or escape dangerous situations." },
                { name: "Awilix", image: "images/awilix.png", path: "../../gods/godtemplate/godtemplate.html?awilix", description: "Awilix's can pull Bakasura out of his leap with her ult putting him in a dangerous spot." }
            ]
        },
        {
            title: "Counter Items",
            description: "This shows items that are helpful in countering one more aspects of Bakasura.",
            items: [
                { name: "Purification Beads", image: "images/beads.png", path: "https://smite.fandom.com/wiki/Purification_Beads", external: true, description: "Beads can help you get out of the cripple from Bakasura ult." },
                { name: "Heavenly Wings", image: "images/heavenlywings.png", path: "https://smite.fandom.com/wiki/Heavenly_Wings", external: true, description: "Heavenly Wings can provide your team with increased movement speed to escape Bakasura's ult." }
            ]
        },
        {
            title: "Counter Playstyles",
            description: "This shows a playstyle or a specific group of gods that help against Bakasura.",
            items: [
                { name: "Gods with Cripples", image: "images/cripple.png", path: "../../categs/yes-toggle/yes-toggle.html?category=cripples", description: "Gods with abilities that apply cripples can prevent Bakasura from using his leap, making him an easier target to lock down and kill." }
            ]
        },
        {
            title: "Antiheal Priority",
            description: "This shows how important it is to build antiheal against Bakasura.",
            items: [
                { name: "Medium", image: "images/healinggods.png", path: "../../menu/antihealpage/antihealpage.html", description: "Bakasura has moderate self-sustain, so antiheal can be effective against him, especially during prolonged team fights or skirmishes." }
            ]
        }
    ]
},

{
    name: "bake_kujira",
    displayName: "Bake Kujira",
    backgroundImage: "images/bg-bakekujira.png",
    class: "Guardian",
    roles: "Support/Solo",
    biggestThreats: "Ult (slow)",
    mobility: "Medium",
    playstyles: [
        {
            title: "God Counters",
            description: "This shows gods that are considered counters to Bake Kujira.",
            items: [
                { name: "Ares", image: "images/ares.png", path: "../../gods/godtemplate/godtemplate.html?ares", description: "Ares's cripple from his chains can limit Bake Kujira's mobility, taking away his mobility." },
                { name: "Odin", image: "images/odin.png", path: "../../gods/godtemplate/godtemplate.html?odin", description: "With no leaps on Bake Kujira, Odin can lock him down and facilitate bursting him down with his team." },
                { name: "Ymir", image: "images/ymir.png", path: "../../gods/godtemplate/godtemplate.html?ymir", description: "Ymir's disruptive CC and his wall can help lock down Bake Kujira." }
            ]
        },
        {
            title: "Counter Items",
            description: "This shows items that are helpful in countering one more aspects of Bake Kujira.",
            items: [
                { name: "Heavenly Wings", image: "images/heavenlywings.png", path: "https://smite.fandom.com/wiki/Heavenly_Wings", external: true, description: "Heavenly Wings can help mitigate the massive slow from Bake Kujira's ult. " }
            ]
        },
        {
            title: "Counter Playstyles",
            description: "This shows a playstyle or a specific group of gods that help against Bake Kujira.",
            items: [
                { name: "Gods with Attack Speed Reduction", image: "images/attackspeed.png", path: "../../categs/no-toggle/no-toggle.html?category=speedreduction", description: "Gods with abilities that reduce attack speed can mitigate Bake Kujira's damage output, making it easier to survive his assaults during team fights." },
                { name: "Gods with Walls", image: "images/wall.png", path: "../../categs/yes-toggle/yes-toggle.html?category=walls", description: "Gods with abilities to create walls can block Bake Kujira's escape routes, making it easier to secure kills or force him into unfavorable positions." }
            ]
        },
        {
            title: "Antiheal Priority",
            description: "This shows how important it is to build antiheal against Bake Kujira.",
            items: [
                { name: "Very Low", image: "images/healinggods.png", path: "../../menu/antihealpage/antihealpage.html", description: "Bake Kujira has no self-sustain or healing abilities, making anti-heal less effective against him compared to other gods." }
            ]
        }
    ]
},

{
    name: "baron_samedi",
    displayName: "Baron Samedi",
    backgroundImage: "images/bg-baronsamedi.png",
    class: "Mage",
    roles: "Mid",
    biggestThreats: "CC (Ult + stun)",
    mobility: "Very Low",
    playstyles: [
        {
            title: "God Counters",
            description: "This shows gods that are considered counters to Baron Samedi.",
            items: [
                { name: "Ah Puch", image: "images/ahpuch.png", path: "../../gods/godtemplate/godtemplate.html?ah_puch", description: "Ah Puch's anti-heal and big area ult can lock down and neutralize the immobile baron." },
                { name: "Cu Chulainn", image: "images/cuchulainn.png", path: "../../gods/godtemplate/godtemplate.html?cu_chulainn", description: "Cu Chulainn's dive and built-in antilheal can counter Baron Samedi. Cu Chulainn's leap also can take him out of Baron Samedi's ult range." },
                { name: "Cerberus", image: "images/cerberus.png", path: "../../gods/godtemplate/godtemplate.html?cerberus", description: "Cerberus's crowd control can lock down the immobile baron. His leap can avoid Baron Samedi's ult and his built-in antiheal counters Baron Samedi's heals." }
            ]
        },
        {
            title: "Counter Items",
            description: "This shows items that are helpful in countering one more aspects of Baron Samedi.",
            items: [
                { name: "Purification Beads", image: "images/beads.png", path: "https://smite.fandom.com/wiki/Purification_Beads", external: true, description: "Beads can cleanse Baron Samedi's crowd control effects." },
                { name: "Antiheal", image: "images/healinggods.png", path: "../../menu/antihealpage/antihealpage.html", description: "Antiheal items can reduce Baron Samedi's healing effectiveness, making it more difficult for him to sustain himself during fights or skirmishes." }
            ]
        },
        {
            title: "Counter Playstyles",
            description: "This shows a playstyle or a specific group of gods that help against Baron Samedi.",
            items: [
                { name: "Gods with Leaps", image: "images/leap.png", path: "../../categs/yes-toggle/yes-toggle.html?category=leaps", description: "Gods with leap abilities can easily avoid Baron Samedi's damaging abilities and displacement ult." },
                { name: "Gods with CC Immunity", image: "images/ccimmunity.png", path: "../../categs/yes-toggle/yes-toggle.html?category=ccimmunity", description: "Gods with crowd control immunity can easily avoid Baron Samedi's crowd control abilities and ult." },
                { name: "Gods with Built-in Antiheal", image: "images/antiheal.png", path: "../../categs/yes-toggle/yes-toggle.html?category=antiheal", description: "Gods with abilities that apply antiheal effects can reduce Baron Samedi's healing effectiveness, making it more difficult for him to sustain himself during fights or skirmishes." }
            ]
        },
        {
            title: "Antiheal Priority",
            description: "This shows how important it is to build antiheal against Baron Samedi.",
            items: [
                { name: "Very High", image: "images/healinggods.png", path: "../../menu/antihealpage/antihealpage.html", description: "Baron Samedi relies heavily on his healing abilities to sustain himself during fights or skirmishes, so antiheal is highly effective against him, reducing his overall sustain and survivability." }
            ]
        }
    ]
},

{
    name: "bastet",
    displayName: "Bastet",
    backgroundImage: "images/bg-bastet.png",
    class: "Assassin",
    roles: "Jungle",
    biggestThreats: "Displacement ult",
    mobility: "High",
    playstyles: [
        {
            title: "God Counters",
            description: "This shows gods that are considered counters to Bastet.",
            items: [
                { name: "Ganesha", image: "images/ganesha.png", path: "../../gods/godtemplate/godtemplate.html?ganesha", description: "Ganesha's silence and knockup can prevent Bastet from leaping back after leaping in for poke." },
                { name: "Awilix", image: "images/awilix.png", path: "../../gods/godtemplate/godtemplate.html?awilix", description: "With her ult, Awilix's can pull Bastet out of her leap." },
                { name: "Artio", image: "images/artio.png", path: "../../gods/godtemplate/godtemplate.html?artio", description: "Artio's crowd control and cripple can lock Bastet down especially if she has already leaped once." }
            ]
        },
        {
            title: "Counter Items",
            description: "This shows items that are helpful in countering one more aspects of Bastet.",
            items: [
                { name: "Purification Beads", image: "images/beads.png", path: "https://smite.fandom.com/wiki/Purification_Beads", external: true, description: "Beads can cleanse Bastet's displacement ult." }
            ]
        },
        {
            title: "Counter Playstyles",
            description: "This shows a playstyle or a specific group of gods that help against Bastet.",
            items: [
                { name: "Gods with CC Immunity", image: "images/ccimmunity.png", path: "../../categs/yes-toggle/yes-toggle.html?category=ccimmunity", description: "Gods with crowd control immunity can avoid Bastet's displacement ult." }
            ]
        },
        {
            title: "Antiheal Priority",
            description: "This shows how important it is to build antiheal against Bastet.",
            items: [
                { name: "Medium/Low", image: "images/healinggods.png", path: "../../menu/antihealpage/antihealpage.html", description: "Bastet has some self-sustain, so antiheal can be somewhat effective against her, especially during prolonged team fights or skirmishes." }
            ]
        }
    ]
},

{
    name: "bellona",
    displayName: "Bellona",
    backgroundImage: "images/bg-bellona.png",
    class: "Warrior",
    roles: "Solo/Jungle",
    biggestThreats: "Auto Attack Dive",
    mobility: "Medium",
    playstyles: [
        {
            title: "God Counters",
            description: "This shows gods that are considered counters to Bellona.",
            items: [
                { name: "Hades", image: "images/hades.png", path: "../../gods/godtemplate/godtemplate.html?hades", description: "Hades's crowd control and big circle ult can neutralize Bellona's ult by creating a no-go-zone." },
                { name: "Tyr", image: "images/tyr.png", path: "../../gods/godtemplate/godtemplate.html?tyr", description: "Tyr's crowd control and ability to disrupt Bellona's positioning with his abilities can make it difficult for her to land her combos effectively." },
                { name: "Cabrakan", image: "images/cabrakan.png", path: "../../gods/godtemplate/godtemplate.html?cabrakan", description: "Cabrakan's crowd control and wall ult can lock Bellona down or at the very least force her ultimate defensively." }
            ]
        },
        {
            title: "Counter Items",
            description: "This shows items that are helpful in countering one more aspects of Bellona.",
            items: [
                { name: "Bewitched Dagger", image: "images/bewitcheddagger.png", path: "https://smite.fandom.com/wiki/Bewitched_Dagger", external: true, description: "Bewitched Dagger can reduce Bellona's attack speed and she is auto-attack-based." },
                { name: "Midgardian Mail", image: "images/midgardianmail.png", path: "https://smite.fandom.com/wiki/Midgardian_Mail", external: true, description: "Midgardian Mail can can reduce Bellona's attack speed and she is auto-attack-based." }
            ]
        },
        {
            title: "Counter Playstyles",
            description: "This shows a playstyle or a specific group of gods that help against Bellona.",
            items: [
                { name: "Gods with Leaps", image: "images/leap.png", path: "../../categs/yes-toggle/yes-toggle.html?category=leaps", description: "Gods with leap abilities can easily avoid Bellona's ult group stun. They can also escape her by leaping a wall." },
                { name: "Gods with Walls", image: "images/wall.png", path: "../../categs/yes-toggle/yes-toggle.html?category=walls", description: "Gods with abilities to create walls can block Bellona's escape routes, making it easier to secure kills or force her into unfavorable positions during fights or ganks." }
            ]
        },
        {
            title: "Antiheal Priority",
            description: "This shows how important it is to build antiheal against Bellona.",
            items: [
                { name: "Medium", image: "images/healinggods.png", path: "../../menu/antihealpage/antihealpage.html", description: "Bellona has moderate self-sustain, so antiheal can be effective against her, especially during prolonged team fights or skirmishes." }
            ]
        }
    ]
},

{
    name: "cabrakan",
    displayName: "Cabrakan",
    backgroundImage: "images/bg-cabrakan.png",
    class: "Guardian",
    roles: "Support/Jungle/Solo",
    biggestThreats: "Wall Ult",
    mobility: "Medium/Low",
    playstyles: [
        {
            title: "God Counters",
            description: "This shows gods that are considered counters to Cabrakan.",
            items: [
                { name: "Cerberus", image: "images/cerberus.png", path: "../../gods/godtemplate/godtemplate.html?cerberus", description: "Cerberus's crowd control and high damage output can mess with the stationary Cabrakan using tremors. Cerberus can also leap out of Cabrakan's ult." },
                { name: "Hades", image: "images/hades.png", path: "../../gods/godtemplate/godtemplate.html?hades", description: "Hades's fear can interrupt Cabrakan. Hades can leap out of Cabrakan ult or he can ult on top of it creating a no-go-zone." },
                { name: "Cu Chulainn", image: "images/cuchulainn.png", path: "../../gods/godtemplate/godtemplate.html?cu_chulainn", description: "Cu Chulainn's crowd control can interrupt Cabrakan's tremor. He can also leap out of Cabrakan ult." }
            ]
        },
        {
            title: "Counter Items",
            description: "This shows items that are helpful in countering one more aspects of Cabrakan.",
            items: [
                { name: "Purification Beads", image: "images/beads.png", path: "https://smite.fandom.com/wiki/Purification_Beads", external: true, description: "Beads can cleanse Cabrakan's crowd control effects." },
                { name: "Phantom Shell", image: "images/shell.png", path: "https://smite.fandom.com/wiki/Phantom_Shell", external: true, description: "Phantom Shell can allow you and your team to walk through player-made walls, neutralizing Cabrakan ult." }
            ]
        },
        {
            title: "Counter Playstyles",
            description: "This shows a playstyle or a specific group of gods that help against Cabrakan.",
            items: [
                { name: "Gods with Leaps", image: "images/leap.png", path: "../../categs/yes-toggle/yes-toggle.html?category=leaps", description: "Gods with leap abilities can easily escape Cabrakan's tremors and ult." }
            ]
        },
        {
            title: "Antiheal Priority",
            description: "This shows how important it is to build antiheal against Cabrakan.",
            items: [
                { name: "Very Low", image: "images/healinggods.png", path: "../../menu/antihealpage/antihealpage.html", description: "Cabrakan has no self-sustain or healing abilities, making antiheal less effective against him compared to other gods." }
            ]
        }
    ]
},


{
    name: "camazotz",
    displayName: "Camazotz",
    backgroundImage: "images/bg-camazotz.png",
    class: "Assassin",
    roles: "Jungle/Solo",
    biggestThreats: "Sustain/Dive Potential",
    mobility: "High",
    playstyles: [
        {
            title: "God Counters",
            description: "This shows gods that are considered counters to Camazotz.",
            items: [
                { name: "Ares", image: "images/ares.png", path: "../../gods/godtemplate/godtemplate.html?ares", description: "Ares's cripple from his chains can help lock Camazotz down, or at the very least force his ult." },
                { name: "Cerberus", image: "images/cerberus.png", path: "../../gods/godtemplate/godtemplate.html?cerberus", description: "Cerberus's built-in anti-heal can help counter Camazotz high sustain." },
                { name: "Artio", image: "images/artio.png", path: "../../gods/godtemplate/godtemplate.html?artio", description: "Artio's cripple can help lock Camazotz down, or at the very least force his ult. Artio's high sustain can also match that of Camazotz's." }
            ]
        },
        {
            title: "Counter Items",
            description: "This shows items that are helpful in countering one more aspects of Camazotz.",
            items: [
                { name: "Aegis Amulet", image: "images/aegis.png", path: "https://smite.fandom.com/wiki/Aegis_Amulet", external: true, description: "Aegis can help you immune Camazotz ult or his lingering damage over time." },
                { name: "Antiheal", image: "images/healinggods.png", path: "../../menu/antihealpage/antihealpage.html", description: "Antiheal items can reduce Camazotz's sustain during fights or ganks, reducing his overall effectiveness in prolonged engagements." }
            ]
        },
        {
            title: "Counter Playstyles",
            description: "This shows a playstyle or a specific group of gods that help against Camazotz.",
            items: [
                { name: "Gods with built-in Antiheal", image: "images/antiheal.png", path: "../../categs/yes-toggle/yes-toggle.html?category=antiheal", description: "Gods with built-in antiheal can mitigate Camazotz's sustain during fights or ganks, reducing his overall effectiveness in prolonged engagements." },
                { name: "Gods with Cripples", image: "images/cripple.png", path: "../../categs/yes-toggle/yes-toggle.html?category=cripples", description: "Gods with cripple abilities can prevent Camazotz from using his leap, which might result in a kill or forcing his ult." }
            ]
        },
        {
            title: "Antiheal Priority",
            description: "This shows how important it is to build antiheal against Camazotz.",
            items: [
                { name: "High", image: "images/healinggods.png", path: "../../menu/antihealpage/antihealpage.html", description: "Camazotz relies on his sustain during fights, so antiheal items are highly effective against him, reducing his overall effectiveness in prolonged engagements." }
            ]
        }
    ]
},

{
    name: "cerberus",
    displayName: "Cerberus",
    backgroundImage: "images/bg-cerberus.png",
    class: "Guardian",
    roles: "Solo, Support",
    biggestThreats: "Displacement ult",
    mobility: "Medium",
    playstyles: [
        {
            title: "God Counters",
            description: "This shows gods that are considered counters to Cerberus.",
            items: [
                { name: "Ares", image: "images/ares.png", path: "../../gods/godtemplate/godtemplate.html?ares", description: "Ares's cripple from his chains can help lock down Cerberus. Also, while in his 3 (fire) Ares is knockup immune, which counters Cerberus' displacement ult." },
                { name: "Thor", image: "images/thor.png", path: "../../gods/godtemplate/godtemplate.html?thor", description: "Thor's high mobility can counter Cerberus' chasedown potential. Also, Thor 3 makes him knockup immune which counters Cerberus' ult." },
                { name: "Nox", image: "images/nox.png", path: "../../gods/godtemplate/godtemplate.html?nox", description: "Nox's crowd control and silence severely limit Cerberus' mobility making it easier to lock him down." }
            ]
        },
        {
            title: "Counter Items",
            description: "This shows items that are helpful in countering one more aspects of Cerberus.",
            items: [
                { name: "Purification Beads", image: "images/beads.png", path: "https://smite.fandom.com/wiki/Purification_Beads", external: true, description: "Beads can cleanse Cerberus's CC and big displacement ult." }
            ]
        },
        {
            title: "Counter Playstyles",
            description: "This shows a playstyle or a specific group of gods that help against Cerberus.",
            items: [
                { name: "Gods with Knockup Immunity", image: "images/knockupimmune.png", path: "../../categs/yes-toggle/yes-toggle.html?category=knockupimmunity", description: "Gods with knockup immunity can negate Cerberus's ultimate, avoiding it totally with a well-timed knockup immune ability." },
                { name: "Gods with Leaps", image: "images/leap.png", path: "../../categs/yes-toggle/yes-toggle.html?category=leaps", description: "Gods with leap abilities can avoid Cerberus's crowd control abilities and ult." },
                { name: "Gods with CC Immunity", image: "images/ccimmunity.png", path: "../../categs/yes-toggle/yes-toggle.html?category=ccimmunity", description: "Gods with crowd control immunity can negate Cerberus's crowd control abilities and ult." }
            ]
        },
        {
            title: "Antiheal Priority",
            description: "This shows how important it is to build antiheal against Cerberus.",
            items: [
                { name: "Low", image: "images/healinggods.png", path: "../../menu/antihealpage/antihealpage.html", description: "Cerberus has low self-sustain or healing abilities, making antiheal less effective against him compared to other gods." }
            ]
        }
    ]
},


{
    name: "cernunnos",
    displayName: "Cernunnos",
    backgroundImage: "images/bg-cernunnos.png",
    class: "Hunter",
    roles: "Carry",
    biggestThreats: "Teamfighting ult",
    mobility: "Medium",
    playstyles: [
        {
            title: "God Counters",
            description: "This shows gods that are considered counters to Cernunnos.",
            items: [
                { name: "Odin", image: "images/odin.png", path: "../../gods/godtemplate/godtemplate.html?odin", description: "Odin's crowd control and zoning potential with his ultimate can lock Cernunnos down and anti-heal him." },
                { name: "Anhur", image: "images/anhur.png", path: "../../gods/godtemplate/godtemplate.html?anhur", description: "Anhur's ult can immune Cernunnos' ult. Anhur can also leap all Cernunnos abilities and chase him down effectively." },
                { name: "Ganesha", image: "images/ganesha.png", path: "../../gods/godtemplate/godtemplate.html?ganesha", description: "Ganesha's crowd control and zoning potential with his ultimate can neutralize Cernunnos's teamfighting ult, making it less effective in team fights or engagements." }
            ]
        },
        {
            title: "Counter Items",
            description: "This shows items that are helpful in countering one more aspects of Cernunnos.",
            items: [
                { name: "Purification Beads", image: "images/beads.png", path: "https://smite.fandom.com/wiki/Purification_Beads", external: true, description: "Beads can cleanse you from Cernunnos's big circle CC ult." }
            ]
        },
        {
            title: "Counter Playstyles",
            description: "This shows a playstyle or a specific group of gods that help against Cernunnos.",
            items: [
                { name: "Gods with Leaps", image: "images/leap.png", path: "../../categs/yes-toggle/yes-toggle.html?category=leaps", description: "Gods with leap abilities can avoid Cernunnos's big CC ult" },
                { name: "Gods with CC Immunity", image: "images/ccimmunity.png", path: "../../categs/yes-toggle/yes-toggle.html?category=ccimmunity", description: "Gods with crowd control immunity can negate Cernunnos's crowd control abilities and ult." }
            ]
        },
        {
            title: "Antiheal Priority",
            description: "This shows how important it is to build antiheal against Cernunnos.",
            items: [
                { name: "Medium", image: "images/healinggods.png", path: "../../menu/antihealpage/antihealpage.html", description: "Cernunnos has some self-sustain from his 1, making antiheal moderately effective against him." }
            ]
        }
    ]
},

{
    name: "chaac",
    displayName: "Chaac",
    backgroundImage: "images/bg-chaac.png",
    class: "Warrior",
    roles: "Solo, Jungle",
    biggestThreats: "Strong early game + sustain",
    mobility: "Medium",
    playstyles: [
        {
            title: "God Counters",
            description: "This shows gods that are considered counters to Chaac.",
            items: [
                { name: "Cerberus", image: "images/cerberus.png", path: "../../gods/godtemplate/godtemplate.html?cerberus", description: "Cerberus' built-in anti-heal counters Chaac high sustain playstyle. Also, Cerberus can easily leap out of Chaac ult." },
                { name: "Cu Chulainn", image: "images/cuchulainn.png", path: "../../gods/godtemplate/godtemplate.html?cu_chulainn", description: "Cu Chulainn's crowd control and anti-heal can help counter Chaac." },
                { name: "Odin", image: "images/odin.png", path: "../../gods/godtemplate/godtemplate.html?odin", description: "Odin's cage ult and his anti-heal can help lock Chaac down if he has already used his teleport." }
            ]
        },
        {
            title: "Counter Items",
            description: "This shows items that are helpful in countering one more aspects of Chaac.",
            items: [
                { name: "Antiheal", image: "images/healinggods.png", path: "../../menu/antihealpage/antihealpage.html", description: "Antiheal items can reduce Chaac's high sustain during fights." }
            ]
        },
        {
            title: "Counter Playstyles",
            description: "This shows a playstyle or a specific group of gods that help against Chaac.",
            items: [
                { name: "Gods with built-in Antiheal", image: "images/antiheal.png", path: "../../categs/yes-toggle/yes-toggle.html?category=antiheal", description: "Gods with built-in antiheal can mitigate Chaac's sustain during fights." }
            ]
        },
        {
            title: "Antiheal Priority",
            description: "This shows how important it is to build antiheal against Chaac.",
            items: [
                { name: "Very High", image: "images/healinggods.png", path: "../../menu/antihealpage/antihealpage.html", description: "Chaac relies heavily on his sustain during fights or ganks, so antiheal items are highly effective against him, reducing his overall effectiveness in prolonged engagements." }
            ]
        }
    ]
},

{
    name: "change",
    displayName: "Chang'e",
    backgroundImage: "images/bg-change.png",
    class: "Mage",
    roles: "Mid/Solo",
    biggestThreats: "Multi-man ultimates",
    mobility: "Low",
    playstyles: [
        {
            title: "God Counters",
            description: "This shows gods that are considered counters to Chang'e.",
            items: [
                { name: "Ah Puch", image: "images/ahpuch.png", path: "../../gods/godtemplate/godtemplate.html?ah_puch", description: "Ah Puch's anti-heal and kit is designed to counter healers like Chang'e." },
                { name: "Cerberus", image: "images/cerberus.png", path: "../../gods/godtemplate/godtemplate.html?cerberus", description: "Cerberus' built-in antiheal and consistent dive allows him to run Chang'e down." },
                { name: "Odin", image: "images/odin.png", path: "../../gods/godtemplate/godtemplate.html?odin", description: "Odin's cage ultimate locks Chang'e down and anti-heals her completely while inside." }
            ]
        },
        {
            title: "Counter Items",
            description: "This shows items that are helpful in countering one more aspects of Chang'e.",
            items: [
                { name: "Purification Beads", image: "images/beads.png", path: "https://smite.fandom.com/wiki/Purification_Beads", external: true, description: "Beads can cleanse you from Chang'e's big teamfighting ult stun." },
                { name: "Antiheal", image: "images/healinggods.png", path: "../../menu/antihealpage/antihealpage.html", description: "Antiheal items can reduce Chang'e's sustain during fights or engagements, reducing her overall effectiveness in prolonged engagements." }
            ]
        },
        {
            title: "Counter Playstyles",
            description: "This shows a playstyle or a specific group of gods that help against Chang'e.",
            items: [
                { name: "Gods with Leaps", image: "images/leap.png", path: "../../categs/yes-toggle/yes-toggle.html?category=leaps", description: "Gods with leap abilities can easily avoid Chang'e's abilities and ult." },
                { name: "Gods with built-in Antiheal", image: "images/antiheal.png", path: "../../categs/yes-toggle/yes-toggle.html?category=antiheal", description: "Gods with built-in antiheal can mitigate Chang'e's sustain during fights or engagements, reducing her overall effectiveness in prolonged engagements." }
            ]
        },
        {
            title: "Antiheal Priority",
            description: "This shows how important it is to build antiheal against Chang'e.",
            items: [
                { name: "Very High", image: "images/healinggods.png", path: "../../menu/antihealpage/antihealpage.html", description: "Chang'e relies heavily on her sustain during fights or engagements, so antiheal items are highly effective against her, reducing her overall effectiveness in prolonged engagements." }
            ]
        }
    ]
},

{
    name: "charon",
    displayName: "Charon",
    backgroundImage: "images/bg-charon.png",
    class: "Guardian",
    roles: "Support",
    biggestThreats: "Teamfighting ultimate",
    mobility: "High",
    playstyles: [
        {
            title: "God Counters",
            description: "This shows gods that are considered counters to Charon.",
            items: [
                { name: "Ares", image: "images/ares.png", path: "../../gods/godtemplate/godtemplate.html?ares", description: "Ares's cripple from his chains can help lock-down the highly mobile Charon." },
                { name: "Artio", image: "images/artio.png", path: "../../gods/godtemplate/godtemplate.html?artio", description: "Artio's cripple can help lock-down the highly mobile Charon." },
                { name: "Odin", image: "images/odin.png", path: "../../gods/godtemplate/godtemplate.html?odin", description: "Odin's cage ult helps lock down and focus Charon." }
            ]
        },
        {
            title: "Counter Items",
            description: "This shows items that are helpful in countering one more aspects of Charon.",
            items: [
                { name: "Purification Beads", image: "images/beads.png", path: "https://smite.fandom.com/wiki/Purification_Beads", external: true, description: "Beads can cleanse Charon's ult." },
                { name: "Erosion", image: "images/erosion.png", path: "https://smite.fandom.com/wiki/Erosion", external: true, description: "Erosion can reduce Charon's shield making him less effective." },
                { name: "Qin Sais", image: "images/qin_sais.png", path: "https://smite.fandom.com/wiki/Qin%27s_Sais", external: true, description: "Qin Sais can deal additional damage based on Charon's health. Charon's passive helps him stack to gain max hp." }
            ]
        },
        {
            title: "Counter Playstyles",
            description: "This shows a playstyle or a specific group of gods that help against Charon.",
            items: [
                { name: "Gods with Leaps", image: "images/leap.png", path: "../../categs/yes-toggle/yes-toggle.html?category=leaps", description: "Gods with leap abilities can easily avoid Charon's slow-moving ult in many situations." },
                { name: "Gods with CC Immunity", image: "images/cc_immunity.png", path: "../../categs/yes-toggle/yes-toggle.html?category=ccimmunity", description: "Gods with crowd control immunity can negate Charon's big team CC ult" },
                { name: "Gods with Walls", image: "images/wall.png", path: "../../categs/yes-toggle/yes-toggle.html?category=walls", description: "Gods with wall abilities can block Charon's escape routes or separate him from his teammates, making it easier to focus him down during fights or engagements." }
            ]
        },
        {
            title: "Antiheal Priority",
            description: "This shows how important it is to build antiheal against Charon.",
            items: [
                { name: "Very Low", image: "images/healinggods.png", path: "../../menu/antihealpage/antihealpage.html", description: "Charon's has no healing abilities to warrant prioritizing antiheal against him. Use anti-shield items instead." }
            ]
        }
    ]
},

{
    name: "charybdis",
    displayName: "Charybdis",
    backgroundImage: "images/bg-charybdis.png",
    class: "Hunter",
    roles: "Carry",
    biggestThreats: "Survivability/sustained DMG",
    mobility: "High",
    playstyles: [
        {
            title: "God Counters",
            description: "This shows gods that are considered counters to Charybdis.",
            items: [
                { name: "Odin", image: "images/odin.png", path: "../../gods/godtemplate/godtemplate.html?odin", description: "Odin's cage can lock the elusive Charybdis down." },
                { name: "Cabrakan", image: "images/cabrakan.png", path: "../../gods/godtemplate/godtemplate.html?cabrakan", description: "Cabrakan's ult can force Charybdis into an unfavorable situation or lead to locking her down." },
                { name: "Ymir", image: "images/ymir.png", path: "../../gods/godtemplate/godtemplate.html?ymir", description: "Ymir's crowd control and high burst damage can quickly burst down Charybdis, especially if he catches her with his freeze. His wall can also force her into an unfavorable direction." }
            ]
        },
        {
            title: "Counter Items",
            description: "This shows items that are helpful in countering one more aspects of Charybdis.",
            items: [
                { name: "Purification Beads", image: "images/beads.png", path: "https://smite.fandom.com/wiki/Purification_Beads", external: true, description: "Beads can cleanse Charybdis's ultimate." }
            ]
        },
        {
            title: "Counter Playstyles",
            description: "This shows a playstyle or a specific group of gods that help against Charybdis.",
            items: [
                { name: "Gods with Leaps", image: "images/leap.png", path: "../../categs/yes-toggle/yes-toggle.html?category=leaps", description: "Gods with leap abilities can easily avoid Charybdis's ult." },
                { name: "Gods with Walls", image: "images/wall.png", path: "../../categs/yes-toggle/yes-toggle.html?category=walls", description: "Gods with wall abilities can block Charybdis's escape routes or separate her from her teammates, making it easier to focus her down during fights or engagements." }
            ]
        },
        {
            title: "Antiheal Priority",
            description: "This shows how important it is to build antiheal against Charybdis.",
            items: [
                { name: "Very Low", image: "images/healinggods.png", path: "../../menu/antihealpage/antihealpage.html", description: "Charybdis's has no healing abilities to warrant prioritizing antiheal against her." }
            ]
        }
    ]
},

{
    name: "chernobog",
    displayName: "Chernobog",
    backgroundImage: "images/bg-chernobog.png",
    class: "Hunter",
    roles: "Carry",
    biggestThreats: "Global ult + split pushing",
    mobility: "Very high",
    playstyles: [
        {
            title: "Notable Counters",
            description: "This shows notable counters, meaning picks that are strong into Chernobog.",
            items: [
                { name: "Ares", image: "images/ares.png", path: "../../gods/godtemplate/godtemplate.html?ares", description: "Ares's cripple from his chains can immobilize Chernobog or at the very least force his ult." },
                { name: "Odin", image: "images/odin.png", path: "../../gods/godtemplate/godtemplate.html?odin", description: "Odin's ult can lock Chernobog down or at the very least force his ult" },
                { name: "Athena", image: "images/athena.png", path: "../../gods/godtemplate/godtemplate.html?athena", description: "Athena's global presence with her ultimate can counter Chernobog's split-pushing capabilities, making it less effective in controlling the map." }
            ]
        },
        {
            title: "Counter Items",
            description: "This shows items that are helpful in countering one more aspects of Chernobog.",
            items: [
                { name: "Bewitched Dagger", image: "images/bewitcheddagger.png", path: "https://smite.fandom.com/wiki/Bewitched_Dagger", external: true, description: "Bewitched Dagger can counter Chernobog's built-in attack speed." },
                { name: "Midgardian Mail", image: "images/midgardianmail.png", path: "https://smite.fandom.com/wiki/Midgardian_Mail", external: true, description: "Midgardian Mail can counter Chernobog's built-in attack speed." }
            ]
        },
        {
            title: "Counter Playstyles",
            description: "This shows a playstyle or a specific group of gods that help against Chernobog.",
            items: [
                { name: "Gods with a Global Ultimate", image: "images/global_ult.png", path: "../../categs/no-toggle/no-toggle.html?category=globalult", description: "Gods with global ultimate abilities can counter Chernobog's split-pushing capabilities, making it less effective in controlling the map, and can also provide global presence to match his rotations, reducing his overall effectiveness." },
                { name: "Gods with Walls", image: "images/wall.png", path: "../../categs/yes-toggle/yes-toggle.html?category=walls", description: "Gods with wall abilities can block Chernobog's escape routes or separate him from his teammates, making it easier to focus him down during fights or engagements." }
            ]
        },
        {
            title: "Antiheal Priority",
            description: "This shows how important it is to build antiheal against Chernobog.",
            items: [
                { name: "Very Low", image: "images/healinggods.png", path: "../../menu/antihealpage/antihealpage.html", description: "Chernobog's has no healing abilities to warrant prioritizing antiheal against him." }
            ]
        }
    ]
},

{
    name: "chiron",
    displayName: "Chiron",
    backgroundImage: "images/bg-chiron.png",
    class: "Hunter",
    roles: "Mid/Carry",
    biggestThreats: "Long range confirm",
    mobility: "Medium",
    playstyles: [
        {
            title: "Notable Counters",
            description: "This shows notable counters, meaning picks that are strong into Chiron.",
            items: [
                { name: "Thor", image: "images/thor.png", path: "../../gods/godtemplate/godtemplate.html?thor", description: "With no leaps available to Chiron, thor's wall or ult can catch Chiron's dash and lock him in place." },
                { name: "Odin", image: "images/odin.png", path: "../../gods/godtemplate/godtemplate.html?odin", description: "Odin's ability to trap enemies inside his ultimate can easily lock down Chiron, making it difficult for him to escape or reposition during fights." },
                { name: "Ymir", image: "images/ymir.png", path: "../../gods/godtemplate/godtemplate.html?ymir", description: "Ymir's wall and freeze combo can catch Chiron's dash and/or force him into a dangerous spot." }
            ]
        },
        {
            title: "Counter Items",
            description: "This shows items that are helpful in countering one more aspects of Chiron.",
            items: [
                { name: "Aegis Amulet", image: "images/aegis.png", path: "https://smite.fandom.com/wiki/Aegis_Amulet", external: true, description: "Aegis Amulet can help you aegis either Chiron's ult or his 2 that might be chasing you at low health." }
            ]
        },
        {
            title: "Counter Playstyles",
            description: "This shows a playstyle or a specific group of gods that help against Chiron.",
            items: [
                { name: "Gods with Walls", image: "images/wall.png", path: "../../categs/yes-toggle/yes-toggle.html?category=walls", description: "Gods with abilities to create walls can block Chiron's escape routes, making it easier to secure kills or force him into unfavorable positions." }
            ]
        },
        {
            title: "Antiheal Priority",
            description: "This shows how important it is to build antiheal against Chiron.",
            items: [
                { name: "Medium", image: "images/healinggods.png", path: "../../menu/antihealpage/antihealpage.html", description: "Chiron has some fair sustain in fights. Building anti-heal can reduce his ability to sustain his team." }
            ]
        }
    ]
},
{
    name: "chronos",
    displayName: "Chronos",
    backgroundImage: "images/bg-chronos.png",
    class: "Mage",
    roles: "Carry/Mid",
    biggestThreats: "Shred",
    mobility: "Low",
    playstyles: [
        {
            title: "Notable Counters",
            description: "This shows notable counters, meaning picks that are strong into this Chronos.",
            items: [
                { name: "Odin", image: "images/odin.png", path: "../../gods/godtemplate/godtemplate.html?odin", description: "Odin's ability to zone and lock down enemies inside his ultimate can easily trap Chronos, making it difficult for him to escape or reposition during fights." },
                { name: "Chang'e", image: "images/change.png", path: "../../gods/godtemplate/godtemplate.html?change", description: "Chang'e's ability to burst down Chronos before he can get his ult off can be a strong counter to Chronos' resets." },
                { name: "Anubis", image: "images/anubis.png", path: "../../gods/godtemplate/godtemplate.html?anubis", description: "Anubis's high burst damage potential and crowd control abilities can burst down Chronos, especially if he catches him out of position." }
            ]
        },
        {
            title: "Counter Items",
            description: "This shows items that are helpful in countering one more aspects of Chronos.",
            items: [
                { name: "Purification Beads", image: "images/beads.png", path: "https://smite.fandom.com/wiki/Purification_Beads", external: true, description: "Purification Beads can cleanse Chronos' stun nullifying his combo." },
                { name: "Bewitched Dagger", image: "images/bewitched_dagger.png", path: "https://smite.fandom.com/wiki/Bewitched_Dagger", external: true, description: "Bewitched Dagger can reduce attack speed countering a big part of ADC chronos' gameplay." }
            ]
        },
        {
            title: "Counter Playstyles",
            description: "This shows a playstyle or a specific group of gods that help against Chronos.",
            items: [
                { name: "Gods with a Burst Damage Ultimate", image: "images/burst_ult.png", path: "../../categs/no-toggle/no-toggle.html?category=burstult", description: "Gods with burst damage ultimate abilities can burst down Chronos before he has a chance to react or use his ult to reset his hp or reposition." }
            ]
        },
        {
            title: "Antiheal Priority",
            description: "This shows how important it is to build antiheal against Chronos.",
            items: [
                { name: "Very Low", image: "images/healinggods.png", path: "../../menu/antihealpage/antihealpage.html", description: "Without life-steal items, Chronos does not have healing abilities, so anti-heal is not as effective against him. However, be careful that Chronos players will often itemize into lifesteal." }
            ]
        }
    ]
},
{
    name: "cliodhna",
    displayName: "Cliodhna",
    backgroundImage: "images/bg-cliodhna.png",
    class: "Assassin",
    roles: "Jungle",
    biggestThreats: "Ultimate damage",
    mobility: "High",
    playstyles: [
        {
            title: "Notable Counters",
            description: "This shows notable counters, meaning picks that are strong into Cliodhna.",
            items: [
                { name: "Ares", image: "images/ares.png", path: "../../gods/godtemplate/godtemplate.html?ares", description: "Ares's cripple from his chains are able to lock Cliodhna in place. With no CC immune ult on her, Ares can also ulti her more effectively than other gods." },
                { name: "Nox", image: "images/nox.png", path: "../../gods/godtemplate/godtemplate.html?nox", description: "Nox's silence and lockdown abilities can trap cliodhna and prevent her from engaging or disengaging effectively." },
                { name: "Geb", image: "images/geb.png", path: "../../gods/godtemplate/godtemplate.html?geb", description: "Geb's ability to shield Cliodhna's target or ult her in place make him a good response to Cliodhna's dive." }
            ]
        },
        {
            title: "Counter Items",
            description: "This shows items that are helpful in countering one more aspects of Cliodhna.",
            items: [
                { name: "Aegis Amulet", image: "images/aegis.png", path: "https://smite.fandom.com/wiki/Aegis_Amulet", external: true, description: "Aegis Amulet can help you immune Cliodhna's burst ult area." },
                { name: "Mystical Mail", image: "images/mysticalmail.png", path: "https://smite.fandom.com/wiki/Mystical_Mail", external: true, description: "Mystical Mail's damage aura can reveal Cliodhna in her brief stealth." }
            ]
        },
        {
            title: "Counter Playstyles",
            description: "This shows a playstyle or a specific group of gods that help against Cliodhna.",
            items: [
                { name: "Gods with Leaps", image: "images/leap.png", path: "../../categs/yes-toggle/yes-toggle.html?category=leaps", description: "Gods with leap abilities can easily escape Cliodhna's ultimate ability, making it less effective in team fights or engagements, mitigating her overall effectiveness." },
                { name: "Gods with Walls", image: "images/wall.png", path: "../../categs/yes-toggle/yes-toggle.html?category=walls", description: "Gods with wall abilities can block Cliodhna's escape routes, making it easier to secure kills or force her into unfavorable positions." },
                { name: "Gods with DoT", image: "images/dot.png", path: "../../categs/yes-toggle/yes-toggle.html?category=dot", description: "Gods with damage over time abilities can counter Cliodhna's brief stealth." }
            ]
        },
        {
            title: "Antiheal Priority",
            description: "This shows how important it is to build antiheal against Cliodhna.",
            items: [
                { name: "Very Low", image: "images/healinggods.png", path: "../../menu/antihealpage/antihealpage.html", description: "Cliodhna has no healing abilities or built-in sustain in her kit, making it less effective to built antiheal against her." }
            ]
        }
    ]
},

{
    name: "cthulhu",
    displayName: "Cthulhu",
    backgroundImage: "images/bg-cthulhu.png",
    class: "Guardian",
    roles: "Solo/Support",
    biggestThreats: "Teamfighting ult",
    mobility: "Medium/low",
    playstyles: [
        {
            title: "Notable Counters",
            description: "This shows notable counters, meaning picks that are strong into Cthulhu.",
            items: [
                { name: "Ganesha", image: "images/ganesha.png", path: "../../gods/godtemplate/godtemplate.html?ganesha", description: "Ganesha's silence and dash can block Cthulhu's escape routes. More importantly, his area ult can help counter Cthulhu's massive area ult." },
                { name: "Thanatos", image: "images/thanatos.png", path: "../../gods/godtemplate/godtemplate.html?thanatos", description: "Thanatos's execute can counter the tanky Cthulhu who is mainly stationary in his ult." },
                { name: "Yemoja", image: "images/yemoja.png", path: "../../gods/godtemplate/godtemplate.html?yemoja", description: "Yemoja's massive walls ult can separate the opponent team from Cthulhu, countering his big teamfighting ult." }
            ]
        },
        {
            title: "Counter Items",
            description: "This shows items that are helpful in countering one more aspects of Cthulhu.",
            items: [
                { name: "Antiheal", image: "images/antiheal.png", path: "../../menu/antihealpage/antihealpage.html", description: "Antiheal can reduce Cthulhu's healing and sustain, making him less effective in prolonged fights or engagements, mitigating his overall effectiveness." }
            ]
        },
        {
            title: "Counter Playstyles",
            description: "This shows a playstyle or a specific group of gods that help against Cthulhu.",
            items: [
                { name: "Gods with an Execute", image: "images/execute.png", path: "../../categs/no-toggle/no-toggle.html?category=execute", description: "Gods with execute abilities can instantly kill Cthulhu especially when he is stationary in his ult." },
                { name: "Gods with Leaps", image: "images/leap.png", path: "../../categs/yes-toggle/yes-toggle.html?category=leaps", description: "Gods with leap abilities can escape Cthulhu's chasedown in his ult." },
                { name: "Gods with Walls", image: "images/wall.png", path: "../../categs/yes-toggle/yes-toggle.html?category=walls", description: "Gods with wall abilities can block Cthulhu's escape routes, making it easier to secure kills or force him into unfavorable positions, mitigating his overall effectiveness." }
            ]
        },
        {
            title: "Antiheal Priority",
            description: "This shows how important it is to build antiheal against Cthulhu.",
            items: [
                { name: "Medium/High", image: "images/healinggods.png", path: "../../menu/antihealpage/antihealpage.html", description: "Cthulhu relies on his sustain and healing abilities in his ult to stay in fights. Building anti-heal can significantly reduce his ability to sustain." }
            ]
        }
    ]
},
{
    name: "cu_chulainn",
    displayName: "Cu Chulainn",
    backgroundImage: "images/bg-cuchulainn.png",
    class: "Warrior",
    roles: "Solo",
    biggestThreats: "Strong diver",
    mobility: "Medium/High",
    playstyles: [
        {
            title: "Notable Counters",
            description: "This shows notable counters, meaning picks that are strong into Cu Chulainn.",
            items: [
                { name: "Achilles", image: "images/achilles.png", path: "../../gods/godtemplate/godtemplate.html?achilles", description: "Achilles's stun, sustain and execute can help deal with Cu Chulainn's persistant dive." },
                { name: "Odin", image: "images/odin.png", path: "../../gods/godtemplate/godtemplate.html?odin", description: "Odin's ultimate can trap Cu Chulainn inside, making him an easy target for enemy damage dealers and disrupting his ability to engage or disengage effectively." },
                { name: "Sun Wukong", image: "images/sunwukong.png", path: "../../gods/godtemplate/godtemplate.html?sun_wukong", description: "Sun Wukong's big poke and his high mobility can make it difficult for Cu Chulainn to lock him down or escape from him, making him an unfavorable matchup in lane or team fights." }
            ]
        },
        {
            title: "Counter Items",
            description: "This shows items that are helpful in countering one more aspects of Cu Chulainn.",
            items: [
                { name: "Erosion", image: "images/erosion.png", path: "https://smite.fandom.com/wiki/Erosion", external: true, description: "Erosion can reduce Cu Chulainn's shield, making him less effective in prolonged fights or engagements, mitigating his overall effectiveness." }
            ]
        },
        {
            title: "Counter Playstyles",
            description: "This shows a playstyle or a specific group of gods that help against Cu Chulainn.",
            items: [
                { name: "Gods with an Execute", image: "images/execute.png", path: "../../categs/no-toggle/no-toggle.html?category=execute", description: "Gods with execute abilities can instantly kill Cu Chulainn when his health drops below a certain threshold, putting an end to his persistant dive." },
                { name: "Gods with Walls", image: "images/wall.png", path: "../../categs/yes-toggle/yes-toggle.html?category=walls", description: "Gods with wall abilities can block Cu Chulainn's escape routes, making it easier to secure kills or force him into unfavorable positions, mitigating his overall effectiveness." }
            ]
        },
        {
            title: "Antiheal Priority",
            description: "This shows how important it is to build antiheal against Cu Chulainn.",
            items: [
                { name: "Medium", image: "images/healinggods.png", path: "../../menu/antihealpage/antihealpage.html", description: "Cu Chulainn relies on his sustain and healing abilities to stay in fights. Building anti-heal can reduce his ability to sustain himself, mitigating his overall effectiveness." }
            ]
        }
    ]
},
{
    name: "cupid",
    displayName: "Cupid",
    backgroundImage: "images/bg-cupid.png",
    class: "Hunter",
    roles: "Carry",
    biggestThreats: "Teamfighting ult",
    mobility: "Medium",
    playstyles: [
        {
            title: "Notable Counters",
            description: "This shows notable counters, meaning picks that are strong into Cupid.",
            items: [
                { name: "Anhur", image: "images/anhur.png", path: "../../gods/godtemplate/godtemplate.html?anhur", description: "Anhur's CC immune ult counters cupid big area cripple ult. Anhur's aggressive chasedown can also help him stick to cupid and burst him down." },
                { name: "Poseidon", image: "images/poseidon.png", path: "../../gods/godtemplate/godtemplate.html?poseidon", description: "Poseidon's whirlpool can cripple Cupid, making it difficult for him to escape or reposition during team fights." },
                { name: "Odin", image: "images/odin.png", path: "../../gods/godtemplate/godtemplate.html?odin", description: "Odin's ultimate can trap Cupid inside, making him an easy target for enemy damage dealers and disrupting his ability to engage or disengage effectively, especially during team fights." }
            ]
        },
        {
            title: "Counter Items",
            description: "This shows items that are helpful in countering one more aspects of Cupid.",
            items: [
                { name: "Purification Beads", image: "images/beads.png", path: "https://smite.fandom.com/wiki/Purification_Beads", external: true, description: "Purification Beads can cleanse Cupid's stun or big cripple ult." }
            ]
        },
        {
            title: "Counter Playstyles",
            description: "This shows a playstyle or a specific group of gods that help against Cupid.",
            items: [
                { name: "Gods with CC Immunity", image: "images/cc_immunity.png", path: "../../categs/yes-toggle/yes-toggle.html?category=ccimmunity", description: "Gods with crowd control immunity can cleanse Cupid's crowd control effects, allowing them to escape dangerous situations or avoid being locked down during team fights." }
            ]
        },
        {
            title: "Antiheal Priority",
            description: "This shows how important it is to build antiheal against Cupid.",
            items: [
                { name: "Medium", image: "images/healinggods.png", path: "../../menu/antihealpage/antihealpage.html", description: "Cupid hearts provide some sustain to his team making it sometimes a good idea to build anti-heal against him." }
            ]
        }
    ]
},

{
    name: "da_ji",
    displayName: "Da Ji",
    backgroundImage: "images/bg-da_ji.png",
    class: "Assassin",
    roles: "Jungle",
    biggestThreats: "Displacement ult",
    mobility: "Medium",
    playstyles: [
        {
            title: "Notable Counters",
            description: "This shows notable counters, meaning picks that are strong into Da Ji.",
            items: [
                { name: "Arachne", image: "images/arachne.png", path: "../../gods/godtemplate/godtemplate.html?arachne", description: "Arachne's crowd control abilities and burst damage potential can easily burst down Da Ji, especially if she catches her out of position." },
                { name: "Nemesis", image: "images/nemesis.png", path: "../../gods/godtemplate/godtemplate.html?nemesis", description: "Nemesis's ult and burst damage potential can easily burst down Da Ji, especially if she catches her out of position." },
                { name: "Ravana", image: "images/ravana.png", path: "../../gods/godtemplate/godtemplate.html?ravana", description: "Ravana's on-demand CC immunity from his 2 can easily counter Da Ji ult." }
            ]
        },
        {
            title: "Counter Items",
            description: "This shows items that are helpful in countering one more aspects of Da Ji.",
            items: [
                { name: "Purification Beads", image: "images/beads.png", path: "https://smite.fandom.com/wiki/Purification_Beads", external: true, description: "Purification Beads can cleanse Da Ji's ult." }
            ]
        },
        {
            title: "Counter Playstyles",
            description: "This shows a playstyle or a specific group of gods that help against Da Ji.",
            items: [
                { name: "Gods with CC Immunity", image: "images/cc_immunity.png", path: "../../categs/yes-toggle/yes-toggle.html?category=ccimmunity", description: "Gods with crowd control immunity can cleanse Da Ji's ult." }
            ]
        },
        {
            title: "Antiheal Priority",
            description: "This shows how important it is to build antiheal against Da Ji.",
            items: [
                { name: "Very Low", image: "images/healinggods.png", path: "../../menu/antihealpage/antihealpage.html", description: "Da Ji has no built-in healing abilities, so anti-heal is not as effective against her, mitigating its overall effectiveness." }
            ]
        }
    ]
},
{
    name: "danzaburou",
    displayName: "Danzaburou",
    backgroundImage: "images/bg-danzaburou.png",
    class: "Hunter",
    roles: "Carry",
    biggestThreats: "Ult (rocket)",
    mobility: "High",
    playstyles: [
        {
            title: "Notable Counters",
            description: "This shows notable counters, meaning picks that are strong into Danzaburou.",
            items: [
                { name: "Cliodhna", image: "images/cliodhna.png", path: "../../gods/godtemplate/godtemplate.html?cliodhna", description: "Cliodhna' high burst damage potential and dive can burst down Danzaburou, especially if she catches him out of position." },
                { name: "Charybdis", image: "images/charybdis.png", path: "../../gods/godtemplate/godtemplate.html?charybdis", description: "Charybdis's third ability can easily help her avoid Danza's rocket or immune the stun with her ult." },
                { name: "Sol", image: "images/sol.png", path: "../../gods/godtemplate/godtemplate.html?sol", description: "Sol's 3 can help her avoid Danza's rocket and return the damage with her ult." }
            ]
        },
        {
            title: "Counter Items",
            description: "This shows items that are helpful in countering one more aspects of Danzaburou.",
            items: [
                { name: "Aegis Amulet", image: "images/aegis.png", path: "https://smite.fandom.com/wiki/Aegis_Amulet", external: true, description: "Aegis Amulet can block the damage from Danzaburou's ultimate ability." }
            ]
        },
        {
            title: "Counter Playstyles",
            description: "This shows a playstyle or a specific group of gods that help against Danzaburou.",
            items: [
                { name: "Gods with Walls", image: "images/wall.png", path: "../../categs/yes-toggle/yes-toggle.html?category=walls", description: "Gods with wall abilities can block Danzaburou's escape routes, making it easier to secure kills or force him into unfavorable positions, mitigating his overall effectiveness." }
            ]
        },
        {
            title: "Antiheal Priority",
            description: "This shows how important it is to build antiheal against Danzaburou.",
            items: [
                { name: "Medium/Low", image: "images/healinggods.png", path: "../../menu/antihealpage/antihealpage.html", description: "Danzaburou relies less on healing abilities compared to other gods, so anti-heal is not as effective against him." }
            ]
        }
    ]
},
{
    name: "discordia",
    displayName: "Discordia",
    backgroundImage: "images/bg-discordia.png",
    class: "Mage",
    roles: "Mid",
    biggestThreats: "Disruptive CC",
    mobility: "Low",
    playstyles: [
        {
            title: "Notable Counters",
            description: "This shows notable counters, meaning picks that are strong into Discordia.",
            items: [
                { name: "Hel", image: "images/hel.png", path: "../../gods/godtemplate/godtemplate.html?hel", description: "Hel's group cleanse can counter Discordia's disruptive group CC." },
                { name: "Ravana", image: "images/ravana.png", path: "../../gods/godtemplate/godtemplate.html?ravana", description: "Ravana's crowd control immunity and tankiness can help him dive effectively against Discordia." },
                { name: "Poseidon", image: "images/poseidon.png", path: "../../gods/godtemplate/godtemplate.html?poseidon", description: "Poseidon's cripple and burst damage potential can burst down Discordia, especially if he catches her out of position or without her tiny leap." }
            ]
        },
        {
            title: "Counter Items",
            description: "This shows items that are helpful in countering one more aspects of Discordia.",
            items: [
                { name: "Purification Beads", image: "images/beads.png", path: "https://smite.fandom.com/wiki/Purification_Beads", external: true, description: "Purification Beads can cleanse Discordia's crowd control effects." },
                { name: "Magi's Cloak", image: "images/magis_cloak.png", path: "https://smite.fandom.com/wiki/Magi%27s_Cloak", external: true, description: "Magi's Cloak can cleanse Discordia's crowd control effects." }
            ]
        },
        {
            title: "Counter Playstyles",
            description: "This shows a playstyle or a specific group of gods that help against Discordia.",
            items: [
                { name: "Gods with CC Immunity", image: "images/cc_immunity.png", path: "../../categs/yes-toggle/yes-toggle.html?category=ccimmunity", description: "Gods with crowd control immunity can cleanse Discordia's disruptive crowd control effects." }
            ]
        },
        {
            title: "Antiheal Priority",
            description: "This shows how important it is to build antiheal against Discordia.",
            items: [
                { name: "Very Low", image: "images/healinggods.png", path: "../../menu/antihealpage/antihealpage.html", description: "Discordia has no healing in her abilities, making anti-heal ineffective against her." }
            ]
        }
    ]
},
{
    name: "erlang_shen",
    displayName: "Erlang Shen",
    backgroundImage: "images/bg-erlang_shen.png",
    class: "Warrior",
    roles: "Solo/Jungle",
    biggestThreats: "Group Taunt + Dive",
    mobility: "Medium/high",
    playstyles: [
        {
            title: "Notable Counters",
            description: "This shows notable counters, meaning picks that are strong into Erlang Shen.",
            items: [
                { name: "Ravana", image: "images/ravana.png", path: "../../gods/godtemplate/godtemplate.html?ravana", description: "Ravana's CC immunity can help him avoid Erlang's taun. His tankiness can help match Erlang's sustain in some situations too." },
                { name: "Odin", image: "images/odin.png", path: "../../gods/godtemplate/godtemplate.html?odin", description: "Odin's cage ult can trap Erlang inside making it easier to shut him down." },
                { name: "Cerberus", image: "images/cerberus.png", path: "../../gods/godtemplate/godtemplate.html?cerberus", description: "Cerberus's crowd control abilities and built-in antiheal can help counter Erlang's sustain. Cerberus provides decent chasedown also." }
            ]
        },
        {
            title: "Counter Items",
            description: "This shows items that are helpful in countering one more aspects of Erlang Shen.",
            items: [
                { name: "Antiheal", image: "images/antiheal.png", path: "../../menu/antihealpage/antihealpage.html", external: false, description: "Building anti-heal can reduce Erlang Shen's healing and sustain, making him less effective in prolonged fights or engagements, mitigating his overall effectiveness." },
                { name: "Purification Beads", image: "images/beads.png", path: "https://smite.fandom.com/wiki/Purification_Beads", external: true, description: "Purification Beads can cleanse Erlang Shen's group taunt ult." }
            ]
        },
        {
            title: "Counter Playstyles",
            description: "This shows a playstyle or a specific group of gods that help against Erlang Shen.",
            items: [
                { name: "Gods with Walls", image: "images/wall.png", path: "../../categs/yes-toggle/yes-toggle.html?category=walls", description: "Gods with wall abilities can block Erlang Shen's escape routes, making it easier to secure kills or force him into unfavorable positions, mitigating his overall effectiveness." },
                { name: "Gods with built-in anti-heal", image: "images/healinggods.png", path: "../../categs/yes-toggle/yes-toggle.html?category=antiheal", description: "Gods with built-in anti-heal can reduce Erlang Shen's healing and sustain, making him less effective in prolonged fights or engagements, mitigating his overall effectiveness." }
            ]
        },
        {
            title: "Antiheal Priority",
            description: "This shows how important it is to build antiheal against Erlang Shen.",
            items: [
                { name: "High", image: "images/healinggods.png", path: "../../menu/antihealpage/antihealpage.html", description: "Erlang Shen relies on the healing from his ult to stay in fights. Building anti-heal can significantly reduce his ability to sustain himself, mitigating his overall effectiveness." }
            ]
        }
    ]
},


{
    name: "eset",
    displayName: "Eset",
    backgroundImage: "images/bg-eset.png",
    class: "Mage",
    roles: "Mid/Support",
    biggestThreats: "CC + burst Ult",
    mobility: "Low",
    playstyles: [
        {
            title: "God Counters",
            description: "These gods are effective counters against Eset.",
            items: [
                { name: "Fenrir", image: "images/fenrir.png", path: "../../gods/godtemplate/godtemplate.html?fenrir", description: "Fenrir's high mobility and chasedown can help him dive Eset. He is also able to leap her ult or stun, countering a big part of her kit." },
                { name: "Odin", image: "images/odin.png", path: "../../gods/godtemplate/godtemplate.html?odin", description: "Odin's cage can trap Eset, preventing her from escaping. The anti-heal from the cage also counter Eset's ult heals." },
                { name: "Nox", image: "images/nox.png", path: "../../gods/godtemplate/godtemplate.html?nox", description: "Nox's silence and root can disrupt Eset's combos and prevent her from positioning safely. They can also interrupt Eset's main clearing ability, the 1." }
            ]
        },
        {
            title: "Counter Items",
            description: "These items can help counter Eset.",
            items: [
                { name: "Antiheal", image: "images/antiheal.png", path: "../../menu/antihealpage/antihealpage.html", description: "Building antiheal can reduce Eset's sustain from the ult and make it harder for her to stay in fights." },
                { name: "Purification Beads", image: "images/beads.png", path: "https://smite.fandom.com/wiki/Purification_Beads", external: true, description: "Beads can cleanse Eset's stun or silence." }
            ]
        },
        {
            title: "Counter Playstyles",
            description: "These playstyles or gods are effective against Eset.",
            items: [
                { name: "Gods with Leaps", image: "images/leap.png", path: "../../categs/yes-toggle/yes-toggle.html?category=leaps", description: "Gods with leap abilities can easily escape Eset's burst ult and stun." },
                { name: "Gods with Walls", image: "images/wall.png", path: "../../categs/yes-toggle/yes-toggle.html?category=walls", description: "Gods with abilities to create walls can block Eset's escape routes, making it easier to secure kills or force her into unfavorable positions." }
            ]
        },
        {
            title: "Antiheal Priority",
            description: "This shows how important it is to build antiheal against Eset.",
            items: [
                { name: "Very High", image: "images/healinggods.png", path: "../../menu/antihealpage/antihealpage.html", description: "Eset's ult provides significant team heals, making antiheal very effective against her." }
            ]
        }
    ]
},

{
    name: "fafnir",
    displayName: "Fafnir",
    backgroundImage: "images/bg-fafnir.png",
    class: "Guardian",
    roles: "Support",
    biggestThreats: "Diving ability",
    mobility: "Medium",
    playstyles: [
        {
            title: "God Counters",
            description: "These gods are effective counters against Fafnir.",
            items: [
                { name: "Geb", image: "images/geb.png", path: "../../gods/godtemplate/godtemplate.html?geb", description: "Geb's shield and knockup can disrupt Fafnir's dive attempts and protect his teammates from Fafnir's dive." },
                { name: "Khepri", image: "images/khepri.png", path: "../../gods/godtemplate/godtemplate.html?khepri", description: "Khepri's grab and pull can disrupt Fafnir's dives and prevent him from locking down priority targets." },
                { name: "Nox", image: "images/nox.png", path: "../../gods/godtemplate/godtemplate.html?nox", description: "Nox's silence and root can prevent Fafnir from using his abilities effectively or leaping, reducing his impact in teamfights." }
            ]
        },
        {
            title: "Counter Items",
            description: "These items can help counter Fafnir.",
            items: [
                { name: "Heavenly Wings", image: "images/heavenly_wings.png", path: "https://smite.fandom.com/wiki/Heavenly_Wings", external: true, description: "Heavenly Wings can provide movement speed and immunity to slows, making it easier to escape from Fafnir's crowd control and diving attempts." }
            ]
        },
        {
            title: "Counter Playstyles",
            description: "These playstyles or gods are effective against Fafnir.",
            items: [
                { name: "Gods with Leaps", image: "images/leap.png", path: "../../categs/yes-toggle/yes-toggle.html?category=leaps", description: "Gods with leap abilities can escape from Fafnir's crowd control and diving attempts, making it harder for him to secure kills or initiate teamfights effectively." }
            ]
        },
        {
            title: "Antiheal Priority",
            description: "This shows how important it is to build antiheal against Fafnir.",
            items: [
                { name: "Medium", image: "images/healinggods.png", path: "../../menu/antihealpage/antihealpage.html", description: "Fafnir has some self-sustain on his buff ability, making antiheal useful but not as high priority as against other gods." }
            ]
        }
    ]
},

{
    name: "fenrir",
    displayName: "Fenrir",
    backgroundImage: "images/bg-fenrir.png",
    class: "Assassin",
    roles: "Jungle",
    biggestThreats: "Displacement ult",
    mobility: "High",
    playstyles: [
        {
            title: "God Counters",
            description: "These gods are effective counters against Fenrir.",
            items: [
                { name: "Ares", image: "images/ares.png", path: "../../gods/godtemplate/godtemplate.html?ares", description: "Ares' cripple chains can stop Fenrir from leaping. Ares ult can also force a defensive Fenrir ult, taking away a massive engage tool from the enemy team." },
                { name: "Ravana", image: "images/ravana.png", path: "../../gods/godtemplate/godtemplate.html?ravana", description: "Ravana's immunity to crowd control can counter Fenrir's ultimate." },
                { name: "Chang'e", image: "images/change.png", path: "../../gods/godtemplate/godtemplate.html?change", description: "Chang'e's immunity to crowd control and ability to sustain through Fenrir's damage can make her a difficult target for Fenrir to deal with." }
            ]
        },
        {
            title: "Counter Items",
            description: "These items can help counter Fenrir.",
            items: [
                { name: "Purification Beads", image: "images/beads.png", path: "https://smite.fandom.com/wiki/Purification_Beads", external: true, description: "Beads can cleanse Fenrir's big displacement ult." }
            ]
        },
        {
            title: "Counter Playstyles",
            description: "These playstyles or gods are effective against Fenrir.",
            items: [
                { name: "Gods with CC immunity", image: "images/cc_immunity.png", path: "../../categs/yes-toggle/yes-toggle.html?category=ccimmunity", description: "Gods with crowd control immunity can avoid Fenrir's big displacement ult and turn the tide against him in fights." }
            ]
        },
        {
            title: "Antiheal Priority",
            description: "This shows how important it is to build antiheal against Fenrir.",
            items: [
                { name: "Very Low", image: "images/healinggods.png", path: "../../menu/antihealpage/antihealpage.html", description: "Fenrir has no healing abilities, making antiheal less effective against him compared to other gods." }
            ]
        }
    ]
},

{
    name: "freya",
    displayName: "Freya",
    backgroundImage: "images/bg-freya.png",
    class: "Mage",
    roles: "Carry",
    biggestThreats: "Late game shred",
    mobility: "Low",
    playstyles: [
        {
            title: "God Counters",
            description: "These gods are effective counters against Freya.",
            items: [
                { name: "He Bo", image: "images/hebo.png", path: "../../gods/godtemplate/godtemplate.html?he_bo", description: "He Bo's burst damage and knockup can quickly burst down Freya before she has a chance to deal significant damage." },
                { name: "Chang'e", image: "images/change.png", path: "../../gods/godtemplate/godtemplate.html?change", description: "Chang'e's ability to burst Freya down and shut her down early can help." },
                { name: "Odin", image: "images/odin.png", path: "../../gods/godtemplate/godtemplate.html?odin", description: "Odin's cage can trap Freya, preventing her from escaping or at least forcing her ult. The anti-heal from the cage also counters her built-in sustain" }
            ]
        },
        {
            title: "Counter Items",
            description: "These items can help counter Freya.",
            items: [
                { name: "Bewitched Dagger", image: "images/bewitched_dagger.png", path: "https://smite.fandom.com/wiki/Bewitched_Dagger", external: true, description: "Bewitched Dagger can reduce Freya's attack speed countering a big part of her kit." },
                { name: "Midgardian Mail", image: "images/midgardian_mail.png", path: "https://smite.fandom.com/wiki/Midgardian_Mail", external: true, description: "Midgardian Mail can reduce Freya's attack speed countering a big part of her kit." },
                { name: "Antiheal", image: "images/antiheal.png", path: "../../menu/antihealpage/antihealpage.html", description: "Building antiheal can reduce Freya's sustain and make it harder for her to stay in fights." }
            ]
        },
        {
            title: "Counter Playstyles",
            description: "These playstyles or gods are effective against Freya.",
            items: [
                { name: "Gods with Attack Speed Reduction", image: "images/attackspeed.png", path: "../../categs/no-toggle/no-toggle.html?category=speedreduction", description: "Gods with attack speed reduction can reduce Freya's damage output and sustain during fights, making it harder for her to secure kills or stay in fights." }
            ]
        },
        {
            title: "Antiheal Priority",
            description: "This shows how important it is to build antiheal against Freya.",
            items: [
                { name: "Medium/High", image: "images/healinggods.png", path: "../../menu/antihealpage/antihealpage.html", description: "Freya has decent sustain from her passive, making antiheal quite useful but not as high priority as against other gods." }
            ]
        }
    ]
},

{
    name: "ganesha",
    displayName: "Ganesha",
    backgroundImage: "images/bg-ganesha.png",
    class: "Guardian",
    roles: "Support",
    biggestThreats: "Disruptive CC + teamfighting ult",
    mobility: "Medium/low",
    playstyles: [
        {
            title: "God Counters",
            description: "These gods are effective counters against Ganesha.",
            items: [
                { name: "Kuzenbo", image: "images/kuzenbo.png", path: "../../gods/godtemplate/godtemplate.html?kuzenbo", description: "Kuzenbo's reflect and knockback can disrupt Ganesha's crowd control and push him and his team away during team fights." },
                { name: "Hercules", image: "images/hercules.png", path: "../../gods/godtemplate/godtemplate.html?hercules", description: "Hercules' pull and knockback can disrupt Ganesha's crowd control and prevent him from locking down priority targets during team fights." },
                { name: "Sobek", image: "images/sobek.png", path: "../../gods/godtemplate/godtemplate.html?sobek", description: "Sobek's pull can disrupt Ganesha's crowd control and force him and his team into unfavorable positions during team fights." }
            ]
        },
        {
            title: "Counter Items",
            description: "These items can help counter Ganesha.",
            items: [
                { name: "Heavenly Wings", image: "images/heavenlywings.png", path: "https://smite.fandom.com/wiki/Heavenly_Wings", external: true, description: "Heavenly Wings can provide movement speed and help teams escape Ganesha ult." },
                { name: "Purification Beads", image: "images/beads.png", path: "https://smite.fandom.com/wiki/Purification_Beads", external: true, description: "Beads can cleanse Ganesha's crowd control effects, allowing his targets to escape dangerous situations or avoid being locked down during team fights." }
            ]
        },
        {
            title: "Counter Playstyles",
            description: "These playstyles or gods are effective against Ganesha.",
            items: [
                { name: "Gods with Leaps", image: "images/leap.png", path: "../../categs/yes-toggle/yes-toggle.html?category=leaps", description: "Gods with leap abilities can easily escape from Ganesha's crowd control and ult, making it harder for him to secure kills or initiate team fights effectively." }
            ]
        },
        {
            title: "Antiheal Priority",
            description: "This shows how important it is to build antiheal against Ganesha.",
            items: [
                { name: "Very Low", image: "images/healinggods.png", path: "../../menu/antihealpage/antihealpage.html", description: "Ganesha has no self-sustain, making antiheal less effective against him compared to other gods." }
            ]
        }
    ]
},

{
    name: "geb",
    displayName: "Geb",
    backgroundImage: "images/bg-geb.png",
    class: "Guardian",
    roles: "Support",
    biggestThreats: "Best shield ability",
    mobility: "High",
    playstyles: [
        {
            title: "God Counters",
            description: "These gods are effective counters against Geb.",
            items: [
                { name: "Kuzenbo", image: "images/kuzenbo.png", path: "../../gods/godtemplate/godtemplate.html?kuzenbo", description: "Kuzenbo's displacement can put Geb in dangerous spots and counter him." },
                { name: "Hercules", image: "images/hercules.png", path: "../../gods/godtemplate/godtemplate.html?hercules", description: "Hercules' knockback can disrupt Geb's crowd control and push him and his team away during team fights." },
                { name: "Sobek", image: "images/sobek.png", path: "../../gods/godtemplate/godtemplate.html?sobek", description: "Sobek's pluck can grab Geb out of position, disrupting his crowd control and nullifying his shield ability during team fights." }
            ]
        },
        {
            title: "Counter Items",
            description: "These items can help counter Geb.",
            items: [
                { name: "Erosion", image: "images/erosion.png", path: "https://smite.fandom.com/wiki/Erosion", external: true, description: "Erosion can reduce Geb's shield strength, which is very effective." }
            ]
        },
        {
            title: "Counter Playstyles",
            description: "These playstyles or gods are effective against Geb.",
            items: [
                { name: "Gods with Knockup Immunity", image: "images/knockup_immunity.png", path: "../../categs/yes-toggle/yes-toggle.html?category=knockupimmunity", description: "Gods with knockup immunity can avoid Geb's engage knockup." },
                { name: "Gods with Walls", image: "images/walls.png", path: "../../categs/yes-toggle/yes-toggle.html?category=walls", description: "Gods with walls can block Geb's escape routs considering he has no leaps." }
            ]
        },
        {
            title: "Antiheal Priority",
            description: "This shows how important it is to build antiheal against Geb.",
            items: [
                { name: "Very Low", image: "images/healinggods.png", path: "../../menu/antihealpage/antihealpage.html", description: "Geb has no self-sustain, making antiheal less effective against him compared to other gods." }
            ]
        }
    ]
},

{
    name: "gilgamesh",
    displayName: "Gilgamesh",
    backgroundImage: "images/bg-gilgamesh.png",
    class: "Warrior",
    roles: "Solo/Jungle",
    biggestThreats: "Dropkick",
    mobility: "Medium/High",
    playstyles: [
        {
            title: "God Counters",
            description: "These gods are effective counters against Gilgamesh.",
            items: [
                { name: "Ares", image: "images/ares.png", path: "../../gods/godtemplate/godtemplate.html?ares", description: "Ares' chains can prevent Gilgamesh from using his leap and lock him down during team fights." },
                { name: "Awilix", image: "images/awilix.png", path: "../../gods/godtemplate/godtemplate.html?awilix", description: "Awilix can pull Gilgamesh out of his leap ability, leaving him vulnerable to enemy attacks and crowd control." },
                { name: "Charybdis", image: "images/charybdis.png", path: "../../gods/godtemplate/godtemplate.html?charybdis", description: "Charybdis' whirlpool can disrupt Gilgamesh's dive and prevent him from effectively engaging. Transforming into the whirlpool as Gilgamesh tries to kick is a classic move." }
            ]
        },
        {
            title: "Counter Items",
            description: "This item can help counter Gilgamesh.",
            items: [
                { name: "Heavenly Wings", image: "images/heavenly_wings.png", path: "https://smite.fandom.com/wiki/Heavenly_Wings", external: true, description: "Heavenly Wings can provide a team with the movement speed needed to escape Gilgamesh ult and/or dive." }
            ]
        },
        {
            title: "Counter Playstyles",
            description: "These playstyles or gods are effective against Gilgamesh.",
            items: [
                { name: "Gods with Leaps", image: "images/leap.png", path: "../../categs/yes-toggle/yes-toggle.html?category=leaps", description: "Gods with leaps can easily escape from Gilgamesh's dropkick ability or reposition to avoid his ult during team fights." },
                { name: "Gods with CC immunity", image: "images/cc_immunity.png", path: "../../categs/yes-toggle/yes-toggle.html?category=ccimmunity", description: "Gods with crowd control immunity can avoid Gilgamesh's crowd control effects/kick and prevent him from locking down their teammates during team fights." }
            ]
        },
        {
            title: "Antiheal Priority",
            description: "This shows how important it is to build antiheal against Gilgamesh.",
            items: [
                { name: "Medium", image: "images/healinggods.png", path: "../../menu/antihealpage/antihealpage.html", description: "Gilgamesh has low self-sustain, making antiheal less effective against him compared to other gods. His ult, however, can help his team regen more hp." }
            ]
        }
    ]
},

{
    name: "guan_yu",
    displayName: "Guan Yu",
    backgroundImage: "images/bg-guan_yu.png",
    class: "Warrior",
    roles: "Solo/Support",
    biggestThreats: "Teamfighting ult",
    mobility: "Medium/high",
    playstyles: [
        {
            title: "God Counters",
            description: "These gods are effective counters against Guan Yu.",
            items: [
                { name: "Cerberus", image: "images/cerberus.png", path: "../../gods/godtemplate/godtemplate.html?cerberus", description: "Cerberus' built-in antiheal can counter Guan's big sustain. Also Cerberus can leap out of Guan's ult stun." },
                { name: "Odin", image: "images/odin.png", path: "../../gods/godtemplate/godtemplate.html?odin", description: "Odin's ultimate can trap Guan Yu and his teammates inside, preventing them from escaping or engaging effectively during team fights. Also the anti-heal from the cage counters Guan's team heals." },
                { name: "Ah Puch", image: "images/ahpuch.png", path: "../../gods/godtemplate/godtemplate.html?ah_puch", description: "Ah Puch's anti-healing kit is designed to counter group heal gods like Guan Yu." }
            ]
        },
        {
            title: "Counter Items",
            description: "These items can help counter Guan Yu.",
            items: [
                { name: "Antiheal", image: "images/antiheal.png", path: "../../menu/antihealpage/antihealpage.html", description: "Antiheal items can reduce Guan Yu's self-sustain and teamfighting potential, making it harder for him to engage or disengage effectively during team fights." },
                { name: "Purification Beads", image: "images/beads.png", path: "https://smite.fandom.com/wiki/Purification_Beads", external: true, description: "Purification Beads can cleanse Guan Yu's teamfighting ult stun." }
            ]
        },
        {
            title: "Counter Playstyles",
            description: "These playstyles or gods are effective against Guan Yu.",
            items: [
                { name: "Gods with walls", image: "images/walls.png", path: "../../categs/yes-toggle/yes-toggle.html?category=walls", description: "Gods with walls can prevent Guan Yu from engaging or disengaging effectively during team fights, reducing his teamfighting potential and survivability." },
                { name: "Gods with CC immunity", image: "images/cc_immunity.png", path: "../../categs/yes-toggle/yes-toggle.html?category=ccimmunity", description: "Gods with crowd control immunity can avoid Guan Yu's big teamfighting ult stun." }
            ]
        },
        {
            title: "Antiheal Priority",
            description: "This shows how important it is to build antiheal against.",
            items: [
                { name: "Very High", image: "images/healinggods.png", path: "../../menu/antihealpage/antihealpage.html", description: "Guan Yu has high self-sustain, making antiheal very effective against him compared to other gods." }
            ]
        }
    ]
},

{
    name: "hachiman",
    displayName: "Hachiman",
    backgroundImage: "images/bg-hachiman.png",
    class: "Hunter",
    roles: "Carry",
    biggestThreats: "Poke DMG",
    mobility: "High",
    playstyles: [
        {
            title: "God Counters",
            description: "These gods are effective counters against Hachiman.",
            items: [
                { name: "Poseidon", image: "images/poseidon.png", path: "../../gods/godtemplate/godtemplate.html?poseidon", description: "Poseidon's cripple and high burst potential can shut down Hachiman and his high mobility." },
                { name: "Anhur", image: "images/anhur.png", path: "../../gods/godtemplate/godtemplate.html?anhur", description: "Anhur's crowd control and aggressive plays can counter Hachiman's poke plays." },
                { name: "Hou Yi", image: "images/houyi.png", path: "../../gods/godtemplate/godtemplate.html?hou_yi", description: "Hou Yi's crowd control and area damage abilities can prevent Hachiman from engaging or disengaging effectively during team fights and reduce his poke damage potential." }
            ]
        },
        {
            title: "Counter Items",
            description: "This item can help counter Hachiman.",
            items: [
                { name: "Aegis Amulet", image: "images/aegis_amulet.png", path: "https://smite.fandom.com/wiki/Aegis_Amulet", external: true, description: "Aegis Amulet, while not a massive counter to Hachiman, can immune Hachiman's ult or sustained DMG in a teamfight." }
            ]
        },
        {
            title: "Counter Playstyles",
            description: "These playstyles or gods are effective against Hachiman.",
            items: [
                { name: "Gods with Walls", image: "images/walls.png", path: "../../categs/yes-toggle/yes-toggle.html?category=walls", description: "Gods with walls can prevent Hachiman from engaging or disengaging effectively during team fights and reduce his poke damage potential." }
            ]
        },
        {
            title: "Antiheal Priority",
            description: "This shows how important it is to build antiheal against Hachiman.",
            items: [
                { name: "Very Low", image: "images/healinggods.png", path: "../../menu/antihealpage/antihealpage.html", description: "Hachiman no self-sustain, making antiheal less effective against him compared to other gods." }
            ]
        }
    ]
},

{
    name: "hades",
    displayName: "Hades",
    backgroundImage: "images/bg-hades.png",
    class: "Mage",
    roles: "Solo/Mid",
    biggestThreats: "",
    mobility: "Medium",
    playstyles: [
        {
            title: "God Counters",
            description: "These gods are effective counters against Hades.",
            items: [
                { name: "Odin", image: "images/odin.png", path: "../../gods/godtemplate/godtemplate.html?odin", description: "Odin's ultimate can trap Hades and his teammates inside, preventing them from escaping or healing effectively during team fights and disrupting his teamfighting potential." },
                { name: "Scylla", image: "images/scylla.png", path: "../../gods/godtemplate/godtemplate.html?scylla", description: "Scylla's crowd control and area damage abilities can prevent Hades from engaging or disengaging effectively during team fights and disrupt his teamfighting potential." },
                { name: "Cerberus", image: "images/cerberus.png", path: "../../gods/godtemplate/godtemplate.html?cerberus", description: "Cerberus' built-in antiheal and leap can prevent Hades from healing effectively or locking down Cerberus in his ult." }
            ]
        },
        {
            title: "Counter Items",
            description: "These items can help counter Hades.",
            items: [
                { name: "Purification Beads", image: "images/purification_beads.png", path: "https://smite.fandom.com/wiki/Purification_Beads", external: true, description: "Purification Beads can cleanse you from Hades ult or fear." },
                { name: "Magi's Cloak", image: "images/magis_cloak.png", path: "https://smite.fandom.com/wiki/Magi%27s_Cloak", external: true, description: "Magi's Cloak can cleanse you from Hades ult or fear." },
                { name: "Antiheal", image: "images/antiheal.png", path: "../../menu/antihealpage/antihealpage.html", description: "Antiheal items can reduce Hades' self-sustain, making it harder for him to survive during team fights and reducing his teamfighting potential." }
            ]
        },
        {
            title: "Counter Playstyles",
            description: "These playstyles or gods are effective against Hades.",
            items: [
                { name: "Gods with built-in antiheal", image: "images/antiheal.png", path: "../../categs/yes-toggle/yes-toggle.html?category=antiheal", description: "Gods with built-in antiheal can reduce Hades' self-sustain, making it harder for him to survive during team fights and reducing his teamfighting potential." },
                { name: "Gods with Leaps", image: "images/leap.png", path: "../../categs/yes-toggle/yes-toggle.html?category=leaps", description: "Gods with leaps can easily escape from Hades' crowd control effects, preventing him from locking them down." }
            ]
        },
        {
            title: "Antiheal Priority",
            description: "This shows how important it is to build antiheal against Hades.",
            items: [
                { name: "Very High", image: "images/healinggods.png", path: "../../menu/antihealpage/antihealpage.html", description: "Hades has high self-sustain, making antiheal very effective against him compared to other gods." }
            ]
        }
    ]
},

{
    name: "he_bo",
    displayName: "He Bo",
    backgroundImage: "images/bg-he_bo.png",
    class: "Mage",
    roles: "Jungle/Mid",
    biggestThreats: "Burst ult",
    mobility: "Medium",
    playstyles: [
        {
            title: "God Counters",
            description: "These gods are effective counters against He Bo.",
            items: [
                { name: "Fenrir", image: "images/fenrir.png", path: "../../gods/godtemplate/godtemplate.html?fenrir", description: "Fenrir's brutalize helps him stick to He bo and avoid being knocked up while diving him." },
                { name: "Da Ji", image: "images/daji.png", path: "../../gods/godtemplate/godtemplate.html?da_ji", description: "Da Ji's second ability makes her knockup immune and able to chase down He bo effectively." },
                { name: "Ares", image: "images/ares.png", path: "../../gods/godtemplate/godtemplate.html?ares", description: "Ares' cripple and knockup immunity can help him shut down He bo or force his ult." }
            ]
        },
        {
            title: "Counter Items",
            description: "These items can help counter He Bo.",
            items: [
                { name: "Stone of Gaia", image: "images/stoneofgaia.png", path: "https://smite.fandom.com/wiki/Stone_of_Gaia", external: true, description: "Stone of Gaia can mitigate the knockup effect of He bo's 3." },
                { name: "Beads", image: "images/beads.png", path: "https://smite.fandom.com/wiki/Purification_Beads", external: true, description: "Purification Beads can help you cleanse He bo's knockup." },
                { name: "Aegis Amulet", image: "images/aegis.png", path: "https://smite.fandom.com/wiki/Aegis_Amulet", external: true, description: "Aegis Amulet can help you immune He bo's big burst ult." }
            ]
        },
        {
            title: "Counter Playstyles",
            description: "These playstyles or gods are effective against He Bo.",
            items: [
                { name: "Gods with knockup immunity", image: "images/knockup_immunity.png", path: "../../categs/yes-toggle/yes-toggle.html?category=knockupimmunity", description: "Gods with knockup immunity can easily avoid He Bo's knockup." },
                { name: "Gods with Walls", image: "images/walls.png", path: "../../categs/yes-toggle/yes-toggle.html?category=walls", description: "Gods with walls can prevent He Bo from escaping." }
            ]
        },
        {
            title: "Antiheal Priority",
            description: "This shows how important it is to build antiheal against He Bo.",
            items: [
                { name: "Very Low", image: "images/healinggods.png", path: "../../menu/antihealpage/antihealpage.html", description: "He Bo has no self-sustain, making antiheal less effective against him compared to other gods." }
            ]
        }
    ]
},

{
    name: "heimdallr",
    displayName: "Heimdallr",
    backgroundImage: "images/bg-heimdallr.png",
    class: "Hunter",
    roles: "Carry",
    biggestThreats: "Auto Attack DMG",
    mobility: "Medium/High",
    playstyles: [
        {
            title: "God Counters",
            description: "These gods are effective counters against Heimdallr.",
            items: [
                { name: "Chiron", image: "images/chiron.png", path: "../../gods/godtemplate/godtemplate.html?chiron", description: "Chiron's big poke and mobility can be challenging for Heimdallr to deal with." },
                { name: "Odin", image: "images/odin.png", path: "../../gods/godtemplate/godtemplate.html?odin", description: "Odin's cage can help lock down Heimdallr, especially if his teleport is down." },
                { name: "Cabrakan", image: "images/cabrakan.png", path: "../../gods/godtemplate/godtemplate.html?cabrakan", description: "Cabrakan's crowd control, wall ult and area damage abilities can prevent Heimdallr from engaging or disengaging effectively during team fights." }
            ]
        },
        {
            title: "Counter Items",
            description: "These items can help counter Heimdallr.",
            items: [
                { name: "Purification Beads", image: "images/purification_beads.png", path: "https://smite.fandom.com/wiki/Purification_Beads", external: true, description: "Purification Beads can cleanse Heimdallr ult." }
            ]
        },
        {
            title: "Counter Playstyles",
            description: "These playstyles are effective against Heimdallr.",
            items: [
                { name: "Gods with Knockup Immunity", image: "images/knockup_immunity.png", path: "../../categs/yes-toggle/yes-toggle.html?category=knockupimmunity", description: "Gods with knockup immunity can easily avoid Heimdallr's knockup from his 2." },
                { name: "Gods with Walls", image: "images/walls.png", path: "../../categs/yes-toggle/yes-toggle.html?category=walls", description: "Gods with walls can prevent Heimdallr from engaging or disengaging effectively during team fights, especially if his teleport is down." }
            ]
        },
        {
            title: "Antiheal Priority",
            description: "This shows how important it is to build antiheal against Heimdallr.",
            items: [
                { name: "Very Low", image: "images/healinggods.png", path: "../../menu/antihealpage/antihealpage.html", description: "Heimdallr has no self-sustain, making antiheal less effective against him compared to other gods." }
            ]
        }
    ]
},

{
    name: "hel",
    displayName: "Hel",
    backgroundImage: "images/bg-hel.png",
    class: "Mage",
    roles: "Mid/Support",
    biggestThreats: "Cleanse and sustain",
    mobility: "Very low",
    playstyles: [
        {
            title: "God Counters",
            description: "These gods are effective counters against Hel.",
            items: [
                { name: "Ah Puch", image: "images/ahpuch.png", path: "../../gods/godtemplate/godtemplate.html?ah_puch", description: "Ah Puch's anti-healing kit is designed to counter healing gods like Hel." },
                { name: "Cu Chulainn", image: "images/cuchulainn.png", path: "../../gods/godtemplate/godtemplate.html?cu_chulainn", description: "Cu Chulainn's dive and built-in antiheal can make life more difficult for Hel." },
                { name: "Osiris", image: "images/osiris.png", path: "../../gods/godtemplate/godtemplate.html?osiris", description: "Osiris' anti-healing ult and his dive can counter Hel." }
            ]
        },
        {
            title: "Counter Items",
            description: "These items can help counter Hel.",
            items: [
                { name: "Antiheal", image: "images/antiheal.png", path: "../../menu/antihealpage/antihealpage.html", description: "Antiheal items can reduce Hel's group heals, making it harder for her to survive during team fights and reducing her sustain potential." }
            ]
        },
        {
            title: "Counter Playstyles",
            description: "These playstyles or gods are effective against Hel.",
            items: [
                { name: "Gods with built-in antiheal", image: "images/antiheal.png", path: "../../categs/yes-toggle/yes-toggle.html?category=antiheal", description: "Gods with built-in antiheal can reduce Hel's sustain, making it harder for her to sustain and re-engage." },
                { name: "Gods with Walls", image: "images/walls.png", path: "../../categs/yes-toggle/yes-toggle.html?category=walls", description: "Gods with walls can prevent Hel from escaping." }
            ]
        },
        {
            title: "Antiheal Priority",
            description: "This shows how important it is to build antiheal against Hel.",
            items: [
                { name: "Very High", image: "images/healinggods.png", path: "../../menu/antihealpage/antihealpage.html", description: "Hel has very high group sustain, making antiheal very effective against her compared to other gods." }
            ]
        }
    ]
},

{
    name: "hera",
    displayName: "Hera",
    backgroundImage: "images/bg-hera.png",
    class: "Mage",
    roles: "Mid",
    biggestThreats: "Ult",
    mobility: "Low",
    playstyles: [
        {
            title: "God Counters",
            description: "These gods are effective counters against Hera.",
            items: [
                { name: "Odin", image: "images/odin.png", path: "../../gods/godtemplate/godtemplate.html?odin", description: "Odin's cage can help lock down Hera who has no leap." },
                { name: "Hades", image: "images/hades.png", path: "../../gods/godtemplate/godtemplate.html?hades", description: "Hades' crowd control and area damage abilities can prevent Hera from engaging or disengaging effectively during team fights." },
                { name: "Loki", image: "images/loki.png", path: "../../gods/godtemplate/godtemplate.html?loki", description: "Loki's dive and Hera's lack of mobility can put her in a bad spot." }
            ]
        },
        {
            title: "Counter Items",
            description: "These items can help counter Hera.",
            items: [
                { name: "Erosion", image: "images/erosion.png", path: "https://smite.fandom.com/wiki/Erosion", external: true, description: "Erosion can counter Hera's shield, limiting her survivability." },
                { name: "Purification Beads", image: "images/purification_beads.png", path: "https://smite.fandom.com/wiki/Purification_Beads", external: true, description: "Purification Beads can counter Hera's CC from her 2 or ult knockup." }
            ]
        },
        {
            title: "Counter Playstyles",
            description: "These playstyles or gods are effective against Hera.",
            items: [
                { name: "Gods with Leaps", image: "images/leap.png", path: "../../categs/yes-toggle/yes-toggle.html?category=leaps", description: "Gods with leaps can easily avoid Hera's area damage and crowd control effects, preventing her from locking down their teammates during team fights." },
                { name: "Gods with Walls", image: "images/walls.png", path: "../../categs/yes-toggle/yes-toggle.html?category=walls", description: "Gods with walls can prevent Hera from escaping or positioning safely." }
            ]
        },
        {
            title: "Antiheal Priority",
            description: "This shows how important it is to build antiheal against Hera.",
            items: [
                { name: "Very Low", image: "images/healinggods.png", path: "../../menu/antihealpage/antihealpage.html", description: "Hera has no self-sustain, making antiheal less effective against her compared to other gods." }
            ]
        }
    ]
},

{
    name: "hercules",
    displayName: "Hercules",
    backgroundImage: "images/bg-hercules.png",
    class: "Warrior",
    roles: "Solo/Jungle/Support",
    biggestThreats: "Displacement",
    mobility: "Medium",
    playstyles: [
        {
            title: "God Counters",
            description: "These gods are effective counters against Hercules.",
            items: [
                { name: "Jormungandr", image: "images/jormungandr.png", path: "../../gods/godtemplate/godtemplate.html?jormungandr", description: "Jormungandr's immunity to being displaced make Hercules unable to move him." },
                { name: "Ah Puch", image: "images/ahpuch.png", path: "../../gods/godtemplate/godtemplate.html?ah_puch", description: "Ah Puch's anti-heal can counter Hercules sustain and his big ult can counter Herc's dive." },
                { name: "Odin", image: "images/odin.png", path: "../../gods/godtemplate/godtemplate.html?odin", description: "Odin's cage ult can lock down Hercules and anti-heal him completely while he is inside." }
            ]
        },
        {
            title: "Counter Items",
            description: "These items can help counter Hercules.",
            items: [
                { name: "Antiheal", image: "images/antiheal.png", path: "../../menu/antihealpage/antihealpage.html", description: "Antiheal items can reduce Hercules's self-sustain, making it harder for him to survive during team fights." },
                { name: "Purification Beads", image: "images/purification_beads.png", path: "https://smite.fandom.com/wiki/Purification_Beads", external: true, description: "Purification Beads can cleanse Hercules' displacement skills." }
            ]
        },
        {
            title: "Counter Playstyles",
            description: "These playstyles or gods are effective against Hercules.",
            items: [
                { name: "Gods with built-in antiheal", image: "images/antiheal.png", path: "../../categs/yes-toggle/yes-toggle.html?category=antiheal", description: "Gods with built-in antiheal can reduce Hercules's self-sustain, making it harder for him to survive during team fights and reducing his displacement potential." },
                { name: "Gods with Leaps", image: "images/leap.png", path: "../../categs/yes-toggle/yes-toggle.html?category=leaps", description: "Gods with leaps can avoid Hercules's crowd control abilities and ult." },
                { name: "Gods with Walls", image: "images/walls.png", path: "../../categs/yes-toggle/yes-toggle.html?category=walls", description: "Gods with walls can prevent Hercules from engaging or disengaging effectively during team fights, reducing his displacement potential and survivability." }
            ]
        },
        {
            title: "Antiheal Priority",
            description: "This shows how important it is to build antiheal against Hercules.",
            items: [
                { name: "High", image: "images/healinggods.png", path: "../../menu/antihealpage/antihealpage.html", description: "Hercules has high self-sustain, making antiheal very effective against him compared to other gods." }
            ]
        }
    ]
},

{
    name: "horus",
    displayName: "Horus",
    backgroundImage: "images/bg-horus.png",
    class: "Warrior",
    roles: "Support/Solo",
    biggestThreats: "CC + Global ult",
    mobility: "Very high",
    playstyles: [
        {
            title: "God Counters",
            description: "These gods are effective counters against Horus.",
            items: [
                { name: "Nox", image: "images/nox.png", path: "../../gods/godtemplate/godtemplate.html?nox", description: "Nox's crowd control abilities and silence can prevent Horus from engaging or disengaging effectively during team fights." },
                { name: "Set", image: "images/set.png", path: "../../gods/godtemplate/godtemplate.html?set", description: "Set's passive gives him attack speed stacks when attacking enemies. Set gains double the stacks when the enemy is Horus." },
                { name: "Ah Puch", image: "images/ahpuch.png", path: "../../gods/godtemplate/godtemplate.html?ah_puch", description: "Ah Puch's anti-healing kit is designed to punish healers like Horus." }
            ]
        },
        {
            title: "Counter Items",
            description: "These items can help counter Horus.",
            items: [
                { name: "Antiheal", image: "images/antiheal.png", path: "../../menu/antihealpage/antihealpage.html", description: "Antiheal items can reduce Horus's group sustain, making it harder for him to survive during team fights." }
            ]
        },
        {
            title: "Counter Playstyles",
            description: "These playstyles or gods are effective against Horus.",
            items: [
                { name: "Gods with a Global Ultimate", image: "images/global_ult.png", path: "../../categs/no-toggle/no-toggle.html?category=globalult", description: "Gods with a global ultimate can counter Horus's global ultimate by using their own global ultimate to counter-initiate or to save allies who are caught out of position." },
                { name: "Gods with built-in Antiheal", image: "images/antiheal.png", path: "../../categs/yes-toggle/yes-toggle.html?category=antiheal", description: "Gods with built-in antiheal can reduce Horus's group sustain, making it harder for him to survive during team fights." }
            ]
        },
        {
            title: "Antiheal Priority",
            description: "This shows how important it is to build antiheal against Horus.",
            items: [
                { name: "Very High", image: "images/healinggods.png", path: "../../menu/antihealpage/antihealpage.html", description: "Horus has high self-sustain, making antiheal very effective against him compared to other gods." }
            ]
        }
    ]
},

{
    name: "hou_yi",
    displayName: "Hou Yi",
    backgroundImage: "images/bg-hou-yi.png",
    class: "Hunter",
    roles: "Carry",
    biggestThreats: "Teamfighting ult",
    mobility: "Medium",
    playstyles: [
        {
            title: "God Counters",
            description: "These gods are effective counters against Hou Yi.",
            items: [
                { name: "Awilix", image: "images/awilix.png", path: "../../gods/godtemplate/godtemplate.html?awilix", description: "Awilix's ult can pull Hou yi out of his leap putting him in a dangerous spot." },
                { name: "Ares", image: "images/ares.png", path: "../../gods/godtemplate/godtemplate.html?ares", description: "Ares's cripple can lock down Hou yi. Also, with no CC immune ult, Ares displacement ult can help against Hou yi." },
                { name: "Bellona", image: "images/bellona.png", path: "../../gods/godtemplate/godtemplate.html?bellona", description: "Bellona's crowd control and area damage abilities can prevent Hou Yi from engaging or disengaging effectively during team fights and reduce his ability to use his teamfighting ultimate effectively." }
            ]
        },
        {
            title: "Counter Items",
            description: "These items can help counter Hou Yi.",
            items: [
                { name: "Aegis Amulet", image: "images/aegis_amulet.png", path: "https://smite.fandom.com/wiki/Aegis_Amulet", external: true, description: "Aegis Amulet can help immune his big ult." },
                { name: "Purification Beads", image: "images/purification_beads.png", path: "https://smite.fandom.com/wiki/Purification_Beads", external: true, description: "Purification Beads can cleanse Hou Yi's CC." }
            ]
        },
        {
            title: "Counter Playstyles",
            description: "These playstyles or gods are effective against Hou Yi.",
            items: [
                { name: "Gods with Leaps", image: "images/leaps.png", path: "../../categs/yes-toggle/yes-toggle.html?category=leaps", description: "Gods with leaps can easily avoid Hou Yi's teamfighting ultimate, preventing him from locking them down." },
                { name: "Gods with CC immunity", image: "images/cc_immunity.png", path: "../../categs/yes-toggle/yes-toggle.html?category=ccimmunity", description: "Gods with crowd control immunity can avoid Hou Yi's teamfighting ultimate and CC." }
            ]
        },
        {
            title: "Antiheal Priority",
            description: "This shows how important it is to build antiheal against Hou Yi.",
            items: [
                { name: "Very Low", image: "images/healinggods.png", path: "../../menu/antihealpage/antihealpage.html", description: "Hou Yi has no self-sustain, making antiheal less effective against him compared to other gods." }
            ]
        }
    ]
},

{
    name: "hun_batz",
    displayName: "Hun Batz",
    backgroundImage: "images/bg-hun-batz.png",
    class: "Assassin",
    roles: "Jungle",
    biggestThreats: "Teamfighting ult",
    mobility: "Medium/high",
    playstyles: [
        {
            title: "God Counters",
            description: "These gods are effective counters against Hun Batz.",
            items: [
                { name: "Ravana", image: "images/ravana.png", path: "../../gods/godtemplate/godtemplate.html?ravana", description: "Ravana's CC immunity can help him avoid Hun Batz's big teamfighting ult." },
                { name: "Hel", image: "images/hel.png", path: "../../gods/godtemplate/godtemplate.html?hel", description: "Hel's group cleanse can counter Hun Batz's big CC teamfighting ult." },
                { name: "Awilix", image: "images/awilix.png", path: "../../gods/godtemplate/godtemplate.html?awilix", description: "Awilix's ult can pull Hun Batz from his leap potentially putting him in a dangerous spot." }
            ]
        },
        {
            title: "Counter Items",
            description: "These items can help counter Hun Batz.",
            items: [
                { name: "Purification Beads", image: "images/purification_beads.png", path: "https://smite.fandom.com/wiki/Purification_Beads", external: true, description: "Purification Beads can cleanse Hun Batz big CC teamfighting ult." },
                { name: "Magi's Cloak", image: "images/magis_cloak.png", path: "https://smite.fandom.com/wiki/Magi%27s_Cloak", external: true, description: "Magi's Cloak can cleanse Hun Batz big CC teamfighting ult." }
            ]
        },
        {
            title: "Counter Playstyles",
            description: "These playstyles or gods are effective against Hun Batz.",
            items: [
                { name: "Gods with CC immunity", image: "images/cc_immunity.png", path: "../../categs/yes-toggle/yes-toggle.html?category=ccimmunity", description: "Gods with crowd control immunity can avoid Hun Batz's teamfighting ultimate, preventing him from locking them down." }
            ]
        },
        {
            title: "Antiheal Priority",
            description: "This shows how important it is to build antiheal against Hun Batz.",
            items: [
                { name: "Very Low", image: "images/healinggods.png", path: "../../menu/antihealpage/antihealpage.html", description: "Hun Batz has no self-sustain, making antiheal less effective against him compared to other gods." }
            ]
        }
    ]
},

{
    name: "ishtar",
    displayName: "Ishtar",
    backgroundImage: "images/bg-ishtar.png",
    class: "Hunter",
    roles: "Carry",
    biggestThreats: "Poke/ult",
    mobility: "Medium/low",
    playstyles: [
        {
            title: "God Counters",
            description: "These gods are effective counters against Ishtar.",
            items: [
                { name: "Poseidon", image: "images/poseidon.png", path: "../../gods/godtemplate/godtemplate.html?poseidon", description: "Poseidon's whirlpool cripple and burst damage abilities can prevent Ishtar from escaping or positioning safely in fights." },
                { name: "Artio", image: "images/artio.png", path: "../../gods/godtemplate/godtemplate.html?artio", description: "Artio's cripple and chasedown can help her lock Ishtar down." },
                { name: "Izanami", image: "images/izanami.png", path: "../../gods/godtemplate/godtemplate.html?izanami", description: "Izanami's crowd control and aggressiveness can match Ishtar's pressure." }
            ]
        },
        {
            title: "Counter Items",
            description: "These items can help counter Ishtar.",
            items: [
                { name: "Purification Beads", image: "images/purification_beads.png", path: "https://smite.fandom.com/wiki/Purification_Beads", external: true, description: "Purification Beads can cleanse you from Ishtar's CC ult." },
                { name: "Bewitched Dagger", image: "images/bewitched_dagger.png", path: "https://smite.fandom.com/wiki/Bewitched_Dagger", external: true, description: "Bewitched Dagger can counter the built-in attack speed in Ishtar's kit." },
                { name: "Midgardian Mail", image: "images/midgardian_mail.png", path: "https://smite.fandom.com/wiki/Midgardian_Mail", external: true, description: "Midgardian Mail can counter the built-in attack speed in Ishtar's kit." }
            ]
        },
        {
            title: "Counter Playstyles",
            description: "These playstyles or gods are effective against Ishtar.",
            items: [
                { name: "Gods with Leaps", image: "images/leaps.png", path: "../../categs/yes-toggle/yes-toggle.html?category=leaps", description: "Gods with leaps can avoid Ishtar's poke and ultimate, preventing her from locking them down." },
                { name: "Gods with Walls", image: "images/walls.png", path: "../../categs/yes-toggle/yes-toggle.html?category=walls", description: "Gods with walls can lock Ishtar down as she has no leaps to escape them." }
            ]
        },
        {
            title: "Antiheal Priority",
            description: "This shows how important it is to build antiheal against Ishtar.",
            items: [
                { name: "Very Low", image: "images/healinggods.png", path: "../../menu/antihealpage/antihealpage.html", description: "Ishtar has no self-sustain, making antiheal less effective against her compared to other gods." }
            ]
        }
    ]
},

{
    name: "ix_chel",
    displayName: "Ix Chel",
    backgroundImage: "images/bg-ix-chel.png",
    class: "Mage",
    roles: "Mid",
    biggestThreats: "Sustained dmg + heals",
    mobility: "Low",
    playstyles: [
        {
            title: "God Counters",
            description: "These gods are effective counters against Ix Chel.",
            items: [
                { name: "Ah Puch", image: "images/ahpuch.png", path: "../../gods/godtemplate/godtemplate.html?ah_puch", description: "Ah Puch's anti-healing kit is designed to counter healers like Ix Chel." },
                { name: "Cu Chulainn", image: "images/cuchulainn.png", path: "../../gods/godtemplate/godtemplate.html?cu_chulainn", description: "Cu Chulainn's anti-heal and dive can help lock down Ix Chel." },
                { name: "Sobek", image: "images/sobek.png", path: "../../gods/godtemplate/godtemplate.html?sobek", description: "Sobek's displacement with his pluck and his anti-heal with his 3 can help lock down Ix Chel." }
            ]
        },
        {
            title: "Counter Items",
            description: "These items can help counter Ix Chel's.",
            items: [
                { name: "Antiheal", image: "images/antiheal.png", path: "../../menu/antihealpage/antihealpage.html", description: "Antiheal items can reduce Ix Chel's self-sustain, making it harder for her to survive during team fights and reducing her ability to use her sustained damage and heals effectively." }
            ]
        },
        {
            title: "Counter Playstyles",
            description: "These playstyles or gods are effective against Ix Chel.",
            items: [
                { name: "Gods with CC immunity", image: "images/cc_immunity.png", path: "../../categs/yes-toggle/yes-toggle.html?category=ccimmunity", description: "Gods with crowd control immunity can easily avoid Ix Chel's crowd control and sustained damage." },
                { name: "Gods with built-in Antiheal", image: "images/antiheal.png", path: "../../categs/yes-toggle/yes-toggle.html?category=antiheal", description: "Gods with built-in antiheal can reduce Ix Chel's group heals." },
                { name: "Gods with Walls", image: "images/walls.png", path: "../../categs/yes-toggle/yes-toggle.html?category=walls", description: "Gods with walls can easily trap and lock down Ix Chel." }
            ]
        },
        {
            title: "Antiheal Priority",
            description: "This shows how important it is to build antiheal against Ix Chel.",
            items: [
                { name: "Very High", image: "images/healinggods.png", path: "../../menu/antihealpage/antihealpage.html", description: "Ix Chel has high group heals, making antiheal very effective against her compared to other gods." }
            ]
        }
    ]
},

{
    name: "izanami",
    displayName: "Izanami",
    backgroundImage: "images/bg-izanami.png",
    class: "Hunter",
    roles: "Carry",
    biggestThreats: "Sustained DMG",
    mobility: "Med/high",
    playstyles: [
        {
            title: "God Counters",
            description: "These gods are effective counters against Izanami.",
            items: [
                { name: "Bellona", image: "images/bellona.png", path: "../../gods/godtemplate/godtemplate.html?bellona", description: "Bellona's auto attack nature and disarm can help counter Izanami's auto attacks." },
                { name: "Anhur", image: "images/anhur.png", path: "../../gods/godtemplate/godtemplate.html?anhur", description: "Anhur's burst and CC immunity can counter Izanami's ult." },
                { name: "Ares", image: "images/ares.png", path: "../../gods/godtemplate/godtemplate.html?ares", description: "Ares' cripple can lock Izanami down and stop her from entering her stealth. Also, Izanami's lack of CC immunity makes her vulnerable to Ares ult." }
            ]
        },
        {
            title: "Counter Items",
            description: "This item can help counter Izanami.",
            items: [
                { name: "Purification Beads", image: "images/purification_beads.png", path: "https://smite.fandom.com/wiki/Purification_Beads", external: true, description: "Purification Beads can provide crowd control immunity to avoid Izanami's ult silence." }
            ]
        },
        {
            title: "Counter Playstyles",
            description: "These playstyles or gods are effective against Izanami.",
            items: [
                { name: "Gods with DoT", image: "images/dot.png", path: "../../categs/yes-toggle/yes-toggle.html?category=dot", description: "Gods with damage over time (DoT) abilities can reveal Izanami in her stealth." },
                { name: "Gods with CC immunity", image: "images/cc_immunity.png", path: "../../categs/yes-toggle/yes-toggle.html?category=ccimmunity", description: "Gods with crowd control immunity can avoid Izanami's silence from her ult." }
            ]
        },
        {
            title: "Antiheal Priority",
            description: "This shows how important it is to build antiheal against Izanami.",
            items: [
                { name: "Very Low", image: "images/healinggods.png", path: "../../menu/antihealpage/antihealpage.html", description: "Izanami has no self-sustain, making antiheal less effective against her compared to other gods." }
            ]
        }
    ]
},

{
    name: "janus",
    displayName: "Janus",
    backgroundImage: "images/bg-janus.png",
    class: "Mage",
    roles: "Mid",
    biggestThreats: "Teamfighting ult + mobility",
    mobility: "Very high",
    playstyles: [
        {
            title: "God Counters",
            description: "These gods are effective counters against Janus.",
            items: [
                { name: "Ganesha", image: "images/ganesha.png", path: "../../gods/godtemplate/godtemplate.html?ganesha", description: "Ganesha's crowd control and silence abilities can interrupt Janus's portal abilities, preventing him from repositioning effectively during fights and reducing his teamfighting potential." },
                { name: "Odin", image: "images/odin.png", path: "../../gods/godtemplate/godtemplate.html?odin", description: "Odin's ultimate ability can trap Janus and his teammates, limiting their mobility and escape options during fights and reducing Janus's teamfighting potential." },
                { name: "Poseidon", image: "images/poseidon.png", path: "../../gods/godtemplate/godtemplate.html?poseidon", description: "Poseidon's cripple whirlpool and burst damage abilities can prevent Janus from repositioning effectively during fights and reduce his teamfighting potential." }
            ]
        },
        {
            title: "Counter Items",
            description: "These items can help counter Janus.",
            items: [
                { name: "Purification Beads", image: "images/purification_beads.png", path: "https://smite.fandom.com/wiki/Purification_Beads", external: true, description: "Purification Beads can help you avoid the CC from Janus portal and all the damage from it too." },
                { name: "Aegis Amulet", image: "images/aegis_amulet.png", path: "https://smite.fandom.com/wiki/Aegis_Amulet", external: true, description: "Aegis Amulet can provide brief damage immunity, allowing you to survive Janus's burst damage and buy time to reposition or escape." }
            ]
        },
        {
            title: "Counter Playstyles",
            description: "These playstyles or gods are effective against Janus.",
            items: [
                { name: "Gods with Walls", image: "images/walls.png", path: "../../categs/yes-toggle/yes-toggle.html?category=walls", description: "Gods with walls can block Janus's portal ability, preventing him from repositioning effectively during fights and reducing his teamfighting potential." }
            ]
        },
        {
            title: "Antiheal Priority",
            description: "This shows how important it is to build antiheal against Janus.",
            items: [
                { name: "Very Low", image: "images/healinggods.png", path: "../../menu/antihealpage/antihealpage.html", description: "Janus has no self-sustain, making antiheal less effective against him compared to other gods." }
            ]
        }
    ]
},

{
    name: "jing_wei",
    displayName: "Jing Wei",
    backgroundImage: "images/bg-jing-wei.png",
    class: "Hunter",
    roles: "Carry",
    biggestThreats: "Late game DMG + survivability",
    mobility: "High",
    playstyles: [
        {
            title: "God Counters",
            description: "These gods are effective counters against Jing Wei.",
            items: [
                { name: "Awilix", image: "images/awilix.png", path: "../../gods/godtemplate/godtemplate.html?awilix", description: "Jing Wei is reliant on knockups. Awilix ult can pull her out of knockups." },
                { name: "Poseidon", image: "images/poseidon.png", path: "../../gods/godtemplate/godtemplate.html?poseidon", description: "Poseidon's whirlpool cripple and burst damage abilities can prevent Jing Wei from engaging or disengaging effectively or at least force her ult." },
                { name: "Ullr", image: "images/ullr.png", path: "../../gods/godtemplate/godtemplate.html?ullr", description: "Ullr's crowd control and burst damage abilities can prevent Jing Wei from engaging or disengaging effectively during fights." }
            ]
        },
        {
            title: "Counter Items",
            description: "These items can help counter Jing Wei.",
            items: [
                { name: "Bewitched Dagger", image: "images/bewitched_dagger.png", path: "https://smite.fandom.com/wiki/Bewitched_Dagger", external: true, description: "Bewitched Dagger can counter Jing Wei's built-in attack speed." },
                { name: "Midgardian Mail", image: "images/midgardian_mail.png", path: "https://smite.fandom.com/wiki/Midgardian_Mail", external: true, description: "Midgardian Mail can counter Jing Wei's built-in attack speed." }
            ]
        },
        {
            title: "Counter Playstyles",
            description: "These playstyles or gods are effective against Jing Wei.",
            items: [
                { name: "Gods with Knockup Immunity", image: "images/knockup_immunity.png", path: "../../categs/yes-toggle/yes-toggle.html?category=knockupimmunity", description: "Gods with knockup immunity can avoid being disrupted by Jing Wei's knockup from her 1." },
                { name: "Gods with Attack Speed Reduction", image: "images/attackspeed.png", path: "../../categs/no-toggle/no-toggle.html?category=speedreduction", description: "Gods with attack speed reduction can effectively reduce Jing Wei's damage output and counter her built-in attack speed boost" }
            ]
        },
        {
            title: "Antiheal Priority",
            description: "This shows how important it is to build antiheal against Jing Wei.",
            items: [
                { name: "Very Low", image: "images/healinggods.png", path: "../../menu/antihealpage/antihealpage.html", description: "Jing Wei has no self-sustain, making antiheal less effective against her compared to other gods." }
            ]
        }
    ]
},

{
    name: "jormungandr",
    displayName: "Jormungandr",
    backgroundImage: "images/bg-jormungandr.png",
    class: "Guardian",
    roles: "Solo/Support",
    biggestThreats: "Teamfighting ult",
    mobility: "High",
    playstyles: [
        {
            title: "God Counters",
            description: "These gods are effective counters against Jormungandr.",
            items: [
                { name: "Da Ji", image: "images/daji.png", path: "../../gods/godtemplate/godtemplate.html?da_ji", description: "Da Ji's damage over time can prevent Jorm from entering his stealth effectively." },
                { name: "Bastet", image: "images/bastet.png", path: "../../gods/godtemplate/godtemplate.html?bastet", description: "Bastet's damage over time can prevent Jorm from entering his stealth effectively." },
                { name: "Ymir", image: "images/ymir.png", path: "../../gods/godtemplate/godtemplate.html?ymir", description: "Ymir's crowd control and wall can lock Jormungandr down or at the very least force his ult." }
            ]
        },
        {
            title: "Counter Items",
            description: "These items can help counter Jormungandr.",
            items: [
                { name: "Mystical Mail", image: "images/mysticalmail.png", path: "https://smite.fandom.com/wiki/Mystical_Mail", external: true, description: "Mystical Mail aura damage can reveal Jorm in his stealth." }
            ]
        },
        {
            title: "Counter Playstyles",
            description: "These playstyles or gods are effective against Jormungandr.",
            items: [
                { name: "Gods with DoT", image: "images/dot.png", path: "../../categs/yes-toggle/yes-toggle.html?category=dot", description: "Gods with damage over time abilities can reveal Jorm in his stealth." },
                { name: "Gods with Knockup Immunity", image: "images/knockup_immunity.png", path: "../../categs/yes-toggle/yes-toggle.html?category=knockupimmunity", description: "Gods with knockup immunity can avoid his two knockups, one from his ability and one from his ult." },
                { name: "Gods with Walls", image: "images/walls.png", path: "../../categs/yes-toggle/yes-toggle.html?category=walls", description: "Gods with walls can cut Jormungandr's mobility down since he has no leaps outside his ult." }
            ]
        },
        {
            title: "Antiheal Priority",
            description: "This shows how important it is to build antiheal against Jormungandr.",
            items: [
                { name: "Very Low", image: "images/healinggods.png", path: "../../menu/antihealpage/antihealpage.html", description: "Jormungandr has no self-sustain, making antiheal less effective against him compared to other gods." }
            ]
        }
    ]
},

{
    name: "kali",
    displayName: "Kali",
    backgroundImage: "images/bg-kali.png",
    class: "Assassin",
    roles: "Jungle",
    biggestThreats: "Reset on Kills",
    mobility: "Medium",
    playstyles: [
        {
            title: "God Counters",
            description: "These gods are effective counters against Kali.",
            items: [
                { name: "Xing Tian", image: "images/xingtian.png", path: "../../gods/godtemplate/godtemplate.html?xing_tian", description: "Xing Tian's disruptive crowd control and dive can lock down Kali. Her lack of CC immunity make her vulnerable to Xing Tian ult." },
                { name: "Awilix", image: "images/awilix.png", path: "../../gods/godtemplate/godtemplate.html?awilix", description: "Awilix's ult can pull Kali out of her leap putting her in a dangerous spot." },
                { name: "Arachne", image: "images/arachne.png", path: "../../gods/godtemplate/godtemplate.html?arachne", description: "Arachne's crowd control and burst damage can help her 1v1 Kali especially due to Arachne's early pressure and Kali's late game nature." }
            ]
        },
        {
            title: "Counter Items",
            description: "These items can help counter Kali.",
            items: [
                { name: "Phantom Shell", image: "images/shell.png", path: "https://smite.fandom.com/wiki/Phantom_Shell", external: true, description: "Phantom Shell can provide damage mitigation to allies, reducing the effectiveness of Kali's ult." },
                { name: "Bewitched Dagger", image: "images/bewitched_dagger.png", path: "https://smite.fandom.com/wiki/Bewitched_Dagger", external: true, description: "Bewitched Dagger can reduce attack speed countering a big part of Kali's playstyle." },
                { name: "Midgardian Mail", image: "images/midgardian_mail.png", path: "https://smite.fandom.com/wiki/Midgardian_Mail", external: true, description: "Midgardian Mail can reduce attack speed countering a big part of Kali's playstyle." }
            ]
        },
        {
            title: "Counter Playstyles",
            description: "These playstyles or gods are effective against Kali.",
            items: [
                { name: "Gods with Attack Speed Reduction", image: "images/attackspeed.png", path: "../../categs/no-toggle/no-toggle.html?category=speedreduction", description: "Gods with attack speed reduction can effectively reduce Kali's damage output, making it harder for her to secure kills and reset her hp in teamfights." }
            ]
        },
        {
            title: "Antiheal Priority",
            description: "This shows how important it is to build antiheal against Kali.",
            items: [
                { name: "High", image: "images/healinggods.png", path: "../../menu/antihealpage/antihealpage.html", description: "Kali has the ability to reset a big part of her hp after killing her target, making antiheal highly effective against her compared to other gods." }
            ]
        }
    ]
},

{
    name: "khepri",
    displayName: "Khepri",
    backgroundImage: "images/bg-khepri.png",
    class: "Guardian",
    roles: "Support",
    biggestThreats: "Lifesaving ult",
    mobility: "Medium",
    playstyles: [
        {
            title: "God Counters",
            description: "These gods are effective counters against Khepri.",
            items: [
                { name: "Odin", image: "images/odin.png", path: "../../gods/godtemplate/godtemplate.html?odin", description: "Odin's cage ult can lock Odin down and help his team focus him down." },
                { name: "Achilles", image: "images/achilles.png", path: "../../gods/godtemplate/godtemplate.html?achilles", description: "Achilles' execute ability can bypass Khepri's lifesaving ult, making it ineffective in saving allies from certain death." },
                { name: "Ao Kuang", image: "images/aokuang.png", path: "../../gods/godtemplate/godtemplate.html?ao_kuang", description: "Ao Kuang's execute ability can bypass Khepri's lifesaving ult, making it ineffective in saving allies from certain death." }
            ]
        },
        {
            title: "Counter Items",
            description: "These items can help counter Khepri.",
            items: [
                { name: "Purification Beads", image: "images/purification_beads.png", path: "https://smite.fandom.com/wiki/Purification_Beads", external: true, description: "Purification Beads can provide crowd control immunity, avoiding his pluck and/or root." },
                { name: "Erosion", image: "images/erosion.png", path: "https://smite.fandom.com/wiki/erosion", external: true, description: "Erosion can reduce Khepri's shield that he gives allies through his passive." }
            ]
        },
        {
            title: "Counter Playstyles",
            description: "These playstyles or gods are effective against Khepri.",
            items: [
                { name: "Gods with an Execute", image: "images/execute.png", path: "../../categs/no-toggle/no-toggle.html?category=execute", description: "Gods with an execute ability can bypass Khepri's lifesaving ult, making it ineffective in saving allies from certain death." },
                { name: "Gods with Walls", image: "images/walls.png", path: "../../categs/yes-toggle/yes-toggle.html?category=walls", description: "Gods with walls can lock Khepri down and prevent him from effectively protecting his allies with his lifesaving ult." }
            ]
        },
        {
            title: "Antiheal Priority",
            description: "This shows how important it is to build antiheal against Khepri.",
            items: [
                { name: "Very Low", image: "images/healinggods.png", path: "../../menu/antihealpage/antihealpage.html", description: "Khepri has no healing abilities, making antiheal less effective against him compared to other gods." }
            ]
        }
    ]
},

{
    name: "king_arthur",
    displayName: "King Arthur",
    backgroundImage: "images/bg-king-arthur.png",
    class: "Warrior",
    roles: "Solo",
    biggestThreats: "Diving Ability",
    mobility: "High",
    playstyles: [
        {
            title: "God Counters",
            description: "These gods are effective counters against King Arthur.",
            items: [
                { name: "Artio", image: "images/artio.png", path: "../../gods/godtemplate/godtemplate.html?artio", description: "Artio's cripple and good chasedown help her team lock down the elusive and tanky King Arthur." },
                { name: "Ares", image: "images/ares.png", path: "../../gods/godtemplate/godtemplate.html?ares", description: "Ares' cripple can reduce King Arthur's mobility." },
                { name: "Odin", image: "images/odin.png", path: "../../gods/godtemplate/godtemplate.html?odin", description: "Odin's cage ult can lock down King Arthur, especially that King Arthur has no leap in his kit." }
            ]
        },
        {
            title: "Counter Items",
            description: "These items can help counter King Arthur.",
            items: [
                { name: "Purification Beads", image: "images/purification_beads.png", path: "https://smite.fandom.com/wiki/Purification_Beads", external: true, description: "Purification Beads can help you avoid King Arthur's CC ult." }
            ]
        },
        {
            title: "Counter Playstyles",
            description: "These playstyles or gods are effective against King Arthur.",
            items: [
                { name: "Gods with Cripples", image: "images/cripples.png", path: "../../categs/yes-toggle/yes-toggle.html?category=cripples", description: "Gods with cripples can effectively lock down King Arthur and prevent him from escaping or engaging effectively during fights." },
                { name: "Gods with Walls", image: "images/walls.png", path: "../../categs/yes-toggle/yes-toggle.html?category=walls", description: "Gods with walls can block King Arthur's movement and abilities, reducing his impact in teamfights and making it harder for him to engage or disengage effectively." }
            ]
        },
        {
            title: "Antiheal Priority",
            description: "This shows how important it is to build antiheal against King Arthur.",
            items: [
                { name: "Very Low", image: "images/healinggods.png", path: "../../menu/antihealpage/antihealpage.html", description: "King Arthur has no self-sustain, making antiheal less effective against him compared to other gods." }
            ]
        }
    ]
},

{
    name: "kukulkan",
    displayName: "Kukulkan",
    backgroundImage: "images/bg-kukulkan.png",
    class: "Mage",
    roles: "Mid",
    biggestThreats: "Burst ult",
    mobility: "Low",
    playstyles: [
        {
            title: "God Counters",
            description: "These gods are effective counters against Kukulkan.",
            items: [
                { name: "Poseidon", image: "images/poseidon.png", path: "../../gods/godtemplate/godtemplate.html?poseidon", description: "Poseidon's cripple whirlpool and burst damage abilities can lock and take down Kukulkan." },
                { name: "Kuzenbo", image: "images/kuzenbo.png", path: "../../gods/godtemplate/godtemplate.html?kuzenbo", description: "Kuzenbo's reflect damage and displacement abilities can punish Kukulkan's damage over time and lack of mobility." },
                { name: "Ymir", image: "images/ymir.png", path: "../../gods/godtemplate/godtemplate.html?ymir", description: "Ymir's slows and wall can lock down Kukulkan who has no leaps in his kit." }
            ]
        },
        {
            title: "Counter Items",
            description: "These items can help counter Kukulkan.",
            items: [
                { name: "Shield of Thorns", image: "images/shield_of_thorns.png", path: "https://smite.fandom.com/wiki/Shield_of_Thorns", external: true, description: "Shield of Thorns can reflect Kukulkan's DoT and burst damage back to him, punishing him for aggressive plays." },
                { name: "Aegis Amulet", image: "images/aegis_amulet.png", path: "https://smite.fandom.com/wiki/Aegis_Amulet", external: true, description: "Aegis Amulet can provide temporary invulnerability, allowing players to avoid Kukulkan's burst ult and DoT." }
            ]
        },
        {
            title: "Counter Playstyles",
            description: "These playstyles or gods are effective against Kukulkan.",
            items: [
                { name: "Gods with Leaps", image: "images/leaps.png", path: "../../categs/yes-toggle/yes-toggle.html?category=leaps", description: "Gods with leaps can escape from Kukulkan's ult and his damage over time ability." },
                { name: "Gods with Walls", image: "images/walls.png", path: "../../categs/yes-toggle/yes-toggle.html?category=walls", description: "Gods with walls can lock Kukulkan in place and make him easier to focus down." }
            ]
        },
        {
            title: "Antiheal Priority",
            description: "This shows how important it is to build antiheal against Kukulkan.",
            items: [
                { name: "Very Low", image: "images/healinggods.png", path: "../../menu/antihealpage/antihealpage.html", description: "Kukulkan has no healing abilities, making antiheal less effective against him compared to other gods." }
            ]
        }
    ]
},

{
    name: "kumbhakarna",
    displayName: "Kumbhakarna",
    backgroundImage: "images/bg-kumbhakarna.png",
    class: "Guardian",
    roles: "Support",
    biggestThreats: "Eternal CC",
    mobility: "Medium/low",
    playstyles: [
        {
            title: "God Counters",
            description: "These gods are effective counters against Kumbhakarna.",
            items: [
                { name: "Khepri", image: "images/khepri.png", path: "../../gods/godtemplate/godtemplate.html?khepri", description: "Khepri's lifesaving ult can counter Kumbhakarna's CC on his target and reduce his impact in teamfights. Khepri's peel also helps." },
                { name: "Hel", image: "images/hel.png", path: "../../gods/godtemplate/godtemplate.html?hel", description: "Hel's group cleanse can counter Kumbhakarna's CC and reduce his impact in teamfights." },
                { name: "Odin", image: "images/odin.png", path: "../../gods/godtemplate/godtemplate.html?odin", description: "Odin's cage ult can lock Kumbhakarna in, especially that Kumbha's kit lacks a leap." }
            ]
        },
        {
            title: "Counter Items",
            description: "These items can help counter Kumbhakarna.",
            items: [
                { name: "Purification Beads", image: "images/purification_beads.png", path: "https://smite.fandom.com/wiki/Purification_Beads", external: true, description: "Purification Beads can provide crowd control immunity, allowing players to escape from Kumbhakarna's eternal CC." }
            ]
        },
        {
            title: "Counter Playstyles",
            description: "These playstyles or gods are effective against Kumbhakarna.",
            items: [
                { name: "Gods with CC Immunity", image: "images/cc_immunity.png", path: "../../categs/yes-toggle/yes-toggle.html?category=ccimmunity", description: "Gods with crowd control immunity can escape from Kumbhakarna's CC, reducing his impact in teamfights and making it harder for him to control the battlefield." },
                { name: "Gods with Walls", image: "images/walls.png", path: "../../categs/yes-toggle/yes-toggle.html?category=walls", description: "Gods with walls can block Kumbhakarna's movement, making it harder for him to escape." }
            ]
        },
        {
            title: "Antiheal Priority",
            description: "This shows how important it is to build antiheal against Kumbhakarna.",
            items: [
                { name: "Very Low", image: "images/healinggods.png", path: "../../menu/antihealpage/antihealpage.html", description: "Kumbhakarna has no healing abilities, making antiheal less effective against him compared to other gods." }
            ]
        }
    ]
},

{
    name: "kuzenbo",
    displayName: "Kuzenbo",
    backgroundImage: "images/bg-kuzenbo.png",
    class: "Guardian",
    roles: "Support/Solo",
    biggestThreats: "Displacement/Reflect DMG",
    mobility: "Medium/high",
    playstyles: [
        {
            title: "God Counters",
            description: "These gods are effective counters against Kuzenbo.",
            items: [
                { name: "Ravana", image: "images/ravana.png", path: "../../gods/godtemplate/godtemplate.html?ravana", description: "Ravana's crowd control immunity and tankiness make it difficult for Kuzenbo to displace him and put him in a bad spot." },
                { name: "Hel", image: "images/hel.png", path: "../../gods/godtemplate/godtemplate.html?hel", description: "Hel's group cleanse can counter Kuzenbo's displacement abilities." },
                { name: "Artio", image: "images/artio.png", path: "../../gods/godtemplate/godtemplate.html?artio", description: "Artio's cripple can counter Kuzenbo's mobility and lock him in place, or at least force his ult." }
            ]
        },
        {
            title: "Counter Items",
            description: "These items can help counter Kuzenbo.",
            items: [
                { name: "Purification Beads", image: "images/purification_beads.png", path: "https://smite.fandom.com/wiki/Purification_Beads", external: true, description: "Purification Beads can provide crowd control immunity against Kuzenbo's displacement abilities." }
            ]
        },
        {
            title: "Counter Playstyles",
            description: "These playstyles or gods are effective against Kuzenbo.",
            items: [
                { name: "Gods with Cripples", image: "images/cripples.png", path: "../../categs/yes-toggle/yes-toggle.html?category=cripples", description: "Gods with cripples can effectively lock down Kuzenbo and prevent him from escaping or engaging effectively during fights, reducing his impact in teamfights." },
                { name: "Gods with Leaps", image: "images/leaps.png", path: "../../categs/yes-toggle/yes-toggle.html?category=leaps", description: "Gods with leaps can easily escape from Kuzenbo's displacement, reducing his impact in teamfights and making it harder for him to engage effectively." },
                { name: "Gods with Walls", image: "images/walls.png", path: "../../categs/yes-toggle/yes-toggle.html?category=walls", description: "Gods with walls can block Kuzenbo's movement, making it harder for him to escape." }
            ]
        },
        {
            title: "Antiheal Priority",
            description: "This shows how important it is to build antiheal against Kuzenbo.",
            items: [
                { name: "Very Low", image: "images/healinggods.png", path: "../../menu/antihealpage/antihealpage.html", description: "Kuzenbo has no healing abilities, making antiheal less effective against him compared to other gods." }
            ]
        }
    ]
},

{
    name: "lancelot",
    displayName: "Lancelot",
    backgroundImage: "images/bg-lancelot.png",
    class: "Assassin",
    roles: "Jungle",
    biggestThreats: "Group cripple ult",
    mobility: "High",
    playstyles: [
        {
            title: "God Counters",
            description: "These gods are effective counters against Lancelot.",
            items: [
                { name: "Artio", image: "images/artio.png", path: "../../gods/godtemplate/godtemplate.html?artio", description: "Artio's cripple can lock down Lancelot." },
                { name: "Nox", image: "images/nox.png", path: "../../gods/godtemplate/godtemplate.html?nox", description: "Nox's silence and CC can mitigate Lancelot's mobility, reducing his impact in teamfights." },
                { name: "Odin", image: "images/odin.png", path: "../../gods/godtemplate/godtemplate.html?odin", description: "Odin's cage ult can lock Lancelot in, especially that Lance's kit lacks an on-demand leap." }
            ]
        },
        {
            title: "Counter Items",
            description: "These items can help counter Lancelot.",
            items: [
                { name: "Purification Beads", image: "images/purification_beads.png", path: "https://smite.fandom.com/wiki/Purification_Beads", external: true, description: "Purification Beads can provide crowd control immunity, allowing players to escape from Lancelot's group cripple ult and reducing his impact in teamfights." },
                { name: "Erosion", image: "images/erosion.png", path: "https://smite.fandom.com/wiki/Erosion", external: true, description: "Erosion provides shield reduction making it easier to knock Lancelot off his horse." }
            ]
        },
        {
            title: "Counter Playstyles",
            description: "These playstyles or gods are effective against Lancelot.",
            items: [
                { name: "Gods with CC Immunity", image: "images/cc_immunity.png", path: "../../categs/yes-toggle/yes-toggle.html?category=ccimmunity", description: "Gods with crowd control immunity can escape from Lancelot's group cripple ult, reducing his impact in teamfights and making it harder for him to lock down multiple targets effectively." },
                { name: "Gods with Cripples", image: "images/cripples.png", path: "../../categs/yes-toggle/yes-toggle.html?category=cripples", description: "Gods with cripples can effectively lock down Lancelot and prevent him from escaping or engaging effectively during fights, reducing his impact in teamfights." },
                { name: "Gods with Walls", image: "images/walls.png", path: "../../categs/yes-toggle/yes-toggle.html?category=walls", description: "Gods with walls can block Lancelot's movement, making it harder for him to escape." }
            ]
        },
        {
            title: "Antiheal Priority",
            description: "This shows how important it is to build antiheal against Lancelot.",
            items: [
                { name: "Very Low", image: "images/healinggods.png", path: "../../menu/antihealpage/antihealpage.html", description: "Lancelot has no healing abilities, making antiheal less effective against him compared to other gods." }
            ]
        }
    ]
},

{
    name: "loki",
    displayName: "Loki",
    backgroundImage: "images/bg-loki.png",
    class: "Assassin",
    roles: "Jungle",
    biggestThreats: "stealth + ult",
    mobility: "Medium/high",
    playstyles: [
        {
            title: "God Counters",
            description: "These gods are effective counters against Loki.",
            items: [
                { name: "Bastet", image: "images/bastet.png", path: "../../gods/godtemplate/godtemplate.html?bastet", description: "Bastet's damage over time prevents Loki from escaping with his stealth. Also, Bastet's high mobility helps her chase Loki down." },
                { name: "Da Ji", image: "images/daji.png", path: "../../gods/godtemplate/godtemplate.html?da_ji", description: "Da Ji's damage over time prevents Loki from escaping with his stealth. Also, Bastet's high mobility helps her chase Loki down." },
                { name: "Fenrir", image: "images/fenrir.png", path: "../../gods/godtemplate/godtemplate.html?fenrir", description: "Fenrir's brutalize can follow Loki and take him out of his stealth even." }
            ]
        },
        {
            title: "Counter Items",
            description: "These items can help counter Loki.",
            items: [
                { name: "Mystical Mail", image: "images/mystical_mail.png", path: "https://smite.fandom.com/wiki/Mystical_Mail", external: true, description: "Mystical Mail's damage aura can reveal Loki during his stealth and prevent him from escaping effectively, reducing his impact in teamfights." },
                { name: "Purification Beads", image: "images/purification_beads.png", path: "https://smite.fandom.com/wiki/Purification_Beads", external: true, description: "Purification Beads can provide crowd control immunity, allowing players to escape from Loki's crowd control and ultimate, reducing his impact in teamfights." },
                { name: "Aegis Amulet", image: "images/aegis_amulet.png", path: "https://smite.fandom.com/wiki/Aegis_Amulet", external: true, description: "Aegis Amulet can provide damage mitigation, allowing players to survive Loki's ultimate and reducing his impact in teamfights." }
            ]
        },
        {
            title: "Counter Playstyles",
            description: "These playstyles or gods are effective against Loki.",
            items: [
                { name: "Gods with CC Immunity", image: "images/cc_immunity.png", path: "../../categs/yes-toggle/yes-toggle.html?category=ccimmunity", description: "Gods with crowd control immunity can escape from Loki's crowd control and ultimate, reducing his impact in teamfights and making it harder for him to lock down targets effectively." },
                { name: "Gods with DoT", image: "images/dot.png", path: "../../categs/yes-toggle/yes-toggle.html?category=dot", description: "Gods with damage over time abilities can reveal Loki during his stealth and prevent him from escaping effectively, reducing his impact in teamfights." }
            ]
        },
        {
            title: "Antiheal Priority",
            description: "This shows how important it is to build antiheal against Loki.",
            items: [
                { name: "Very Low", image: "images/healinggods.png", path: "../../menu/antihealpage/antihealpage.html", description: "Loki has no healing abilities, making antiheal less effective against him compared to other gods." }
            ]
        }
    ]
},



{
    name: "maman_brigitte",
    displayName: "Maman Brigitte",
    backgroundImage: "images/bg-maman_brigitte.png",
    class: "Mage",
    roles: "Jungle/Mid",
    biggestThreats: "Teamfighting burst",
    mobility: "Medium",
    playstyles: [
        {
            title: "God Counters",
            description: "These gods are effective counters against Maman Brigitte.",
            items: [
                { name: "Camazotz", image: "images/camazotz.png", path: "../../gods/godtemplate/godtemplate.html?camazotz", description: "Camazotz's sustain can out-trade Maman Brigitte during teamfights. If Maman dashes into Cama, he can also leap or ult back to his team, bringing her with him if she does not react fast enough." },
                { name: "Thor", image: "images/thor.png", path: "../../gods/godtemplate/godtemplate.html?thor", description: "Thor's wall and high mobility can help him lock Maman down." },
                { name: "Odin", image: "images/odin.png", path: "../../gods/godtemplate/godtemplate.html?odin", description: "Odin's cage ult can lock down Maman since she has no leap in her kit to escape." }
            ]
        },
        {
            title: "Counter Items",
            description: "These items can help counter Maman Brigitte.",
            items: [
                { name: "Aegis Amulet", image: "images/aegis_amulet.png", path: "https://smite.fandom.com/wiki/Aegis_Amulet", external: true, description: "Aegis Amulet can provide damage mitigation, allowing players to survive Maman Brigitte's burst damage and reducing her impact in teamfights." }
            ]
        },
        {
            title: "Counter Playstyles",
            description: "These playstyles or gods are effective against Maman Brigitte.",
            items: [
                { name: "Gods with Leaps", image: "images/leaps.png", path: "../../categs/yes-toggle/yes-toggle.html?category=leaps", description: "Gods with leaps can escape from Maman Brigitte's burst damage ult, reducing her impact in teamfights." },
                { name: "Gods with Walls", image: "images/walls.png", path: "../../categs/yes-toggle/yes-toggle.html?category=walls", description: "Gods with walls can block Maman Brigitte's escape routes especially since she has no leaps." }
            ]
        },
        {
            title: "Antiheal Priority",
            description: "This shows how important it is to build antiheal against Maman Brigitte.",
            items: [
                { name: "Very Low", image: "images/healinggods.png", path: "../../menu/antihealpage/antihealpage.html", description: "Maman Brigitte has no healing abilities, making antiheal less effective against her compared to other gods." }
            ]
        }
    ]
},

{
    name: "martichoras",
    displayName: "Martichoras",
    backgroundImage: "images/bg-martichoras.png",
    class: "Hunter",
    roles: "Carry/Mid",
    biggestThreats: "Stealth/sustain DMG",
    mobility: "Low",
    playstyles: [
        {
            title: "God Counters",
            description: "These gods are effective counters against Martichoras.",
            items: [
                { name: "Kuzenbo", image: "images/kuzenbo.png", path: "../../gods/godtemplate/godtemplate.html?kuzenbo", description: "Kuzenbo's displacement and reflect damage can put Martichoras at a disadvantage during teamfights." },
                { name: "Poseidon", image: "images/poseidon.png", path: "../../gods/godtemplate/godtemplate.html?poseidon", description: "Poseidon's cripple whirlpool and burst damage can take Martichoras down or at least force his ult." },
                { name: "Chiron", image: "images/chiron.png", path: "../../gods/godtemplate/godtemplate.html?chiron", description: "Chiron's circle damage can cover a Martichoras grass patch taking him out of his stealth. He can also kill Martichoras in his ult with masterful shot" }
            ]
        },
        {
            title: "Counter Items",
            description: "These items can help counter Martichoras.",
            items: [
                { name: "Aegis Amulet", image: "images/aegis_amulet.png", path: "https://smite.fandom.com/wiki/Aegis_Amulet", external: true, description: "Aegis Amulet can provide damage mitigation, allowing players to survive Martichoras's ult." }
            ]
        },
        {
            title: "Counter Playstyles",
            description: "These playstyles or gods are effective against Martichoras.",
            items: [
                { name: "Gods with Walls", image: "images/walls.png", path: "../../categs/yes-toggle/yes-toggle.html?category=walls", description: "Gods with walls can block Martichoras's escape routes or at least force his ult." }
            ]
        },
        {
            title: "Antiheal Priority",
            description: "This shows how important it is to build antiheal against Martichoras.",
            items: [
                { name: "Very Low", image: "images/healinggods.png", path: "../../menu/antihealpage/antihealpage.html", description: "Martichoras has no healing abilities, making antiheal less effective against her compared to other gods." }
            ]
        }
    ]
},

{
    name: "maui",
    displayName: "Maui",
    backgroundImage: "images/bg-maui.png",
    class: "Guardian",
    roles: "Support",
    biggestThreats: "Displacement ult",
    mobility: "Medium",
    playstyles: [
        {
            title: "God Counters",
            description: "These gods are effective counters against Maui.",
            items: [
                { name: "Ares", image: "images/ares.png", path: "../../gods/godtemplate/godtemplate.html?ares", description: "Ares's crowd cripple can lockdown Maui and prevent his leap." },
                { name: "Anhur", image: "images/anhur.png", path: "../../gods/godtemplate/godtemplate.html?anhur", description: "Anhur's CC immune ult or his leap can help neutralize Maui's ult or pull." },
                { name: "Awilix", image: "images/awilix.png", path: "../../gods/godtemplate/godtemplate.html?awilix", description: "Awilix's ult can pull Maui out of his leap putting him in a negative spot." }
            ]
        },
        {
            title: "Counter Items",
            description: "These items can help counter Maui.",
            items: [
                { name: "Purification Beads", image: "images/purification_beads.png", path: "https://smite.fandom.com/wiki/Purification_Beads", external: true, description: "Purification Beads can cleanse crowd control effects, allowing players to escape from Maui's displacement ultimate and reducing his impact in teamfights." },
                { name: "Magi's Cloak", image: "images/magis_cloak.png", path: "https://smite.fandom.com/wiki/Magi%27s_Cloak", external: true, description: "Magi's Cloak provides a bubble that can cleanse crowd control effects, allowing players to escape from Maui's displacement ultimate and reducing his impact in teamfights." }
            ]
        },
        {
            title: "Counter Playstyles",
            description: "These playstyles or gods are effective against Maui.",
            items: [
                { name: "Gods with CC immunity", image: "images/cc_immunity.png", path: "../../categs/yes-toggle/yes-toggle.html?category=ccimmunity", description: "Gods with crowd control immunity can escape from Maui's displacement ultimate, reducing his impact in teamfights and making it harder for him to engage effectively." },
                { name: "Gods with Leaps", image: "images/leaps.png", path: "../../categs/yes-toggle/yes-toggle.html?category=leaps", description: "Gods with leaps can escape from Maui's displacement ultimate, reducing his impact in teamfights and making it harder for him to engage effectively." }
            ]
        },
        {
            title: "Antiheal Priority",
            description: "This shows how important it is to build antiheal against Maui.",
            items: [
                { name: "Very Low", image: "images/healinggods.png", path: "../../menu/antihealpage/antihealpage.html", description: "Maui has no healing abilities, making antiheal less effective against him compared to other gods." }
            ]
        }
    ]
},

{
    name: "medusa",
    displayName: "Medusa",
    backgroundImage: "images/bg-medusa.png",
    class: "Hunter",
    roles: "Carry",
    biggestThreats: "Teamfighting ult",
    mobility: "Medium",
    playstyles: [
        {
            title: "God Counters",
            description: "These gods are effective counters against Medusa.",
            items: [
                { name: "Anhur", image: "images/anhur.png", path: "../../gods/godtemplate/godtemplate.html?anhur", description: "Anhur's CC immune ult can avoid Medusa's ult stun. He can also leap her dash." },
                { name: "Ravana", image: "images/ravana.png", path: "../../gods/godtemplate/godtemplate.html?ravana", description: "Ravana's crowd control immunity from his 2 can help him avoid Medusa's ult and continue diving." },
                { name: "Odin", image: "images/odin.png", path: "../../gods/godtemplate/godtemplate.html?odin", description: "Odin's cage ult can lock down Medusa since she has no leap in her kit to escape." }
            ]
        },
        {
            title: "Counter Items",
            description: "These items can help counter Medusa.",
            items: [
                { name: "Purification Beads", image: "images/purification_beads.png", path: "https://smite.fandom.com/wiki/Purification_Beads", external: true, description: "Purification Beads can cleanse medusa stun from the ult or dash." },
                { name: "Bewitched Dagger", image: "images/bewitched_dagger.png", path: "https://smite.fandom.com/wiki/Bewitched_Dagger", external: true, description: "Bewitched Dagger provides attack speed reduction to counter the built-in attack speed boost from Medusa's 1." },
                { name: "Midgardian Mail", image: "images/midgardian_mail.png", path: "https://smite.fandom.com/wiki/Midgardian_Mail", external: true, description: "Midgardian Mail provides attack speed reduction to counter the built-in attack speed boost from Medusa's 1." }
            ]
        },
        {
            title: "Counter Playstyles",
            description: "These playstyles or gods are effective against Medusa.",
            items: [
                { name: "Gods with CC immunity", image: "images/cc_immunity.png", path: "../../categs/yes-toggle/yes-toggle.html?category=ccimmunity", description: "Gods with crowd control immunity can escape from Medusa's teamfighting ultimate, reducing her impact in teamfights and making it harder for her to engage effectively." },
                { name: "Gods with Leaps", image: "images/leaps.png", path: "../../categs/yes-toggle/yes-toggle.html?category=leaps", description: "Gods with leaps can escape from Medusa's teamfighting ultimate, reducing her impact in teamfights and making it harder for her to engage effectively." },
                { name: "Gods with Walls", image: "images/walls.png", path: "../../categs/yes-toggle/yes-toggle.html?category=walls", description: "Gods with walls can block Medusa's escape routes, especially that she has no leap to deal with walls." }
            ]
        },
        {
            title: "Antiheal Priority",
            description: "This shows how important it is to build antiheal against Medusa.",
            items: [
                { name: "Very Low", image: "images/healinggods.png", path: "../../menu/antihealpage/antihealpage.html", description: "Medusa has no healing abilities, making antiheal less effective against her compared to other gods." }
            ]
        }
    ]
},

{
    name: "mercury",
    displayName: "Mercury",
    backgroundImage: "images/bg-mercury.png",
    class: "Assassin",
    roles: "Jungle",
    biggestThreats: "Mobility ult",
    mobility: "High",
    playstyles: [
        {
            title: "God Counters",
            description: "These gods are effective counters against Mercury.",
            items: [
                { name: "Thor", image: "images/thor.png", path: "../../gods/godtemplate/godtemplate.html?thor", description: "A well placed Thor wall can block Mercury's retreat routes and even his engage ult." },
                { name: "Poseidon", image: "images/poseidon.png", path: "../../gods/godtemplate/godtemplate.html?poseidon", description: "Poseidon's cripple whirlpool and burst damage can help lock and take down Mercury." },
                { name: "Ymir", image: "images/ymir.png", path: "../../gods/godtemplate/godtemplate.html?ymir", description: "Ymir's crowd control and wall can help lock down Mercury, especially that Mercury has no leap in his kit." }
            ]
        },
        {
            title: "Counter Items",
            description: "These items can help counter Mercury.",
            items: [
                { name: "Spectral Armor", image: "images/spectral_armor.png", path: "https://smite.fandom.com/wiki/Spectral_Armor", external: true, description: "Spectral Armor reduces the effectiveness of crits. Mercury is very focused around crits and most players will likely built crit on him, so watch out for that." },
                { name: "Bewitched Dagger", image: "images/bewitched_dagger.png", path: "https://smite.fandom.com/wiki/Bewitched_Dagger", external: true, description: "Bewitched Dagger provides attack speed reduction to counter the built-in attack speed of Mercury." },
                { name: "Midgardian Mail", image: "images/midgardian_mail.png", path: "https://smite.fandom.com/wiki/Midgardian_Mail", external: true, description: "Midgardian Mail provides attack speed reduction to counter the built-in attack speed of Mercury." }
            ]
        },
        {
            title: "Counter Playstyles",
            description: "These playstyles or gods are effective against Mercury.",
            items: [
                { name: "Gods with Cripples", image: "images/cripples.png", path: "../../categs/yes-toggle/yes-toggle.html?category=cripples", description: "Gods with cripples can reduce Mercury's mobility, making it harder for him to engage or disengage effectively and reducing his impact in teamfights." },
                { name: "Gods with Walls", image: "images/walls.png", path: "../../categs/yes-toggle/yes-toggle.html?category=walls", description: "Gods with walls can ruin Mercury's mobility , reducing his impact in teamfights and making it harder for him to engage or disengage effectively." }
            ]
        },
        {
            title: "Antiheal Priority",
            description: "This shows how important it is to build antiheal against Mercury.",
            items: [
                { name: "Very Low", image: "images/healinggods.png", path: "../../menu/antihealpage/antihealpage.html", description: "Mercury has no healing abilities, making antiheal less effective against him compared to other gods." }
            ]
        }
    ]
},

{
    name: "merlin",
    displayName: "Merlin",
    backgroundImage: "images/bg-merlin.png",
    class: "Mage",
    roles: "Mid",
    biggestThreats: "Fast Burn DMG",
    mobility: "Low",
    playstyles: [
        {
            title: "God Counters",
            description: "These gods are effective counters against Merlin.",
            items: [
                { name: "Ganesha", image: "images/ganesha.png", path: "../../gods/godtemplate/godtemplate.html?ganesha", description: "Ganesha's crowd control and silences can tone down Merlin's high sustained DMG during teamfights." },
                { name: "Hades", image: "images/hades.png", path: "../../gods/godtemplate/godtemplate.html?hades", description: "Hades's crowd control and big CC ult can lock Merlin down." },
                { name: "Poseidon", image: "images/poseidon.png", path: "../../gods/godtemplate/godtemplate.html?poseidon", description: "Poseidon's cripple whirlpool and burst damage can help take Merlin down." }
            ]
        },
        {
            title: "Counter Items",
            description: "These items can help counter Merlin.",
            items: [
                { name: "Aegis Amulet", image: "images/aegis_amulet.png", path: "https://smite.fandom.com/wiki/Aegis_Amulet", external: true, description: "Aegis Amulet provides damage immunity, allowing players to survive Merlin's fast burn damage during teamfights." }
            ]
        },
        {
            title: "Counter Playstyles",
            description: "These playstyles or gods are effective against Merlin.",
            items: [
                { name: "Gods with Cripples", image: "images/cripples.png", path: "../../categs/yes-toggle/yes-toggle.html?category=cripples", description: "Gods with cripples can prevent Merlin's teleport locking him down." },
                { name: "Gods with Leaps", image: "images/leaps.png", path: "../../categs/yes-toggle/yes-toggle.html?category=leaps", description: "Gods with leaps can escape from Merlin's zoning abilities, reducing his impact in teamfights and making it harder for him to secure kills. They can also chase Merlin or escape him over walls." }
            ]
        },
        {
            title: "Antiheal Priority",
            description: "This shows how important it is to build antiheal against Merlin.",
            items: [
                { name: "Very Low", image: "images/healinggods.png", path: "../../menu/antihealpage/antihealpage.html", description: "Merlin has no healing abilities, making antiheal less effective against him compared to other gods." }
            ]
        }
    ]
},

{
    name: "morgan_le_fay",
    displayName: "Morgan Le Fay",
    backgroundImage: "images/bg-morganlefay.png",
    class: "Mage",
    roles: "Mid",
    biggestThreats: "Poke/ult",
    mobility: "Low",
    playstyles: [
        {
            title: "God Counters",
            description: "These gods are effective counters against Morgan Le Fay.",
            items: [
                { name: "Ganesha", image: "images/ganesha.png", path: "../../gods/godtemplate/godtemplate.html?ganesha", description: "Ganesha's crowd control and silence can help lock down Morgan Le Fay. Also, with no leap in her kit, she can be trapped in Ganesha's ult" },
                { name: "Hera", image: "images/hera.png", path: "../../gods/godtemplate/godtemplate.html?hera", description: "Hera's crowd control and burst damage can out-trade Morgan Le Fay during teamfights, reducing her impact in teamfights." },
                { name: "Fenrir", image: "images/fenrir.png", path: "../../gods/godtemplate/godtemplate.html?fenrir", description: "Fenrir's brutalize can chase Morgan Le Fay even through her knockback ability since he is immune to knockback during brutalize. He can also jump over her ult." }
            ]
        },
        {
            title: "Counter Items",
            description: "These items can help counter Morgan Le Fay.",
            items: [
                { name: "Aegis Amulet", image: "images/aegis_amulet.png", path: "https://smite.fandom.com/wiki/Aegis_Amulet", external: true, description: "Aegis Amulet can help you immune Morgan Le Fay's ult." }
            ]
        },
        {
            title: "Counter Playstyles",
            description: "These playstyles or gods are effective against Morgan Le Fay.",
            items: [
                { name: "Gods with Leaps", image: "images/leaps.png", path: "../../categs/yes-toggle/yes-toggle.html?category=leaps", description: "Gods with leaps can escape from Morgan Le Fay's ultimate by jumping over it. They can also chase her down more effectively." },
                { name: "Gods with Walls", image: "images/walls.png", path: "../../categs/yes-toggle/yes-toggle.html?category=walls", description: "Gods with walls can block Morgan Le Fay's escape routes, especially that she has no leap in her kit." }
            ]
        },
        {
            title: "Antiheal Priority",
            description: "This shows how important it is to build antiheal against Morgan Le Fay.",
            items: [
                { name: "Very Low", image: "images/healinggods.png", path: "../../menu/antihealpage/antihealpage.html", description: "Morgan Le Fay has no healing abilities, making antiheal less effective against her compared to other gods." }
            ]
        }
    ]
},

{
    name: "mulan",
    displayName: "Mulan",
    backgroundImage: "images/bg-mulan.png",
    class: "Warrior",
    roles: "Solo",
    biggestThreats: "Group CC",
    mobility: "Medium",
    playstyles: [
        {
            title: "God Counters",
            description: "These gods are effective counters against Mulan.",
            items: [
                { name: "Chang'e", image: "images/change.png", path: "../../gods/godtemplate/godtemplate.html?change", description: "Chang'e's crowd control immunity and sustained damage can out-trade Mulan during teamfights, reducing her impact in teamfights." },
                { name: "Jormungandr", image: "images/jormungandr.png", path: "../../gods/godtemplate/godtemplate.html?jormungandr", description: "Jormungandr's resistance to being displaced means Mulan cannot pull him or knock him up." },
                { name: "Sun Wukong", image: "images/sunwukong.png", path: "../../gods/godtemplate/godtemplate.html?sun_wukong", description: "Sun Wukong's poke and his very high mobility can prove challenging for Mulan to deal with." }
            ]
        },
        {
            title: "Counter Items",
            description: "These items can help counter Mulan.",
            items: [
                { name: "Stone of Gaia", image: "images/stoneofgaia.png", path: "https://smite.fandom.com/wiki/Stone_of_Gaia", external: true, description: "Stone of Gaia mitigates the knockup from Mulan's ult." },
                { name: "Purification Beads", image: "images/purification_beads.png", path: "https://smite.fandom.com/wiki/Purification_Beads", external: true, description: "Purification Beads can cleanse Mulan's pull or ult CC." }
            ]
        },
        {
            title: "Counter Playstyles",
            description: "These playstyles or gods are effective against Mulan.",
            items: [
                { name: "Gods with CC immunity", image: "images/cc_immunity.png", path: "../../categs/yes-toggle/yes-toggle.html?category=ccimmunity", description: "Gods with crowd control immunity can escape from Mulan's group crowd control, reducing her impact in teamfights and making it harder for her to engage effectively." },
                { name: "Gods with Knockup Immunity", image: "images/knockup_immunity.png", path: "../../categs/yes-toggle/yes-toggle.html?category=knockupimmunity", description: "Gods with knockup immunity can escape from Mulan's ult knockup, reducing her impact in teamfights and making it harder for her to engage effectively." },
                { name: "Gods with Walls", image: "images/walls.png", path: "../../categs/yes-toggle/yes-toggle.html?category=walls", description: "Gods with walls can block Mulan's escape routes, especially that she has no leap in her kit." }
            ]
        },
        {
            title: "Antiheal Priority",
            description: "This shows how important it is to build antiheal against Mulan.",
            items: [
                { name: "Medium-Low", image: "images/healinggods.png", path: "../../menu/antihealpage/antihealpage.html", description: "Mulan has somewhat limited healing abilities, making antiheal less effective against her compared to other gods." }
            ]
        }
    ]
},

{
    name: "ne_zha",
    displayName: "Ne Zha",
    backgroundImage: "images/bg-ne_zha.png",
    class: "Assassin",
    roles: "Jungle",
    biggestThreats: "Ult CC",
    mobility: "Low",
    playstyles: [
        {
            title: "God Counters",
            description: "These gods are effective counters against Ne Zha.",
            items: [
                { name: "Odin", image: "images/odin.png", path: "../../gods/godtemplate/godtemplate.html?odin", description: "Odin's ultimate ability can trap Ne Zha inside and antiheal him so that he is an easy target." },
                { name: "Ymir", image: "images/ymir.png", path: "../../gods/godtemplate/godtemplate.html?ymir", description: "Ymir's wall can lock Ne Zha in place or even block his ult if timed correctly." },
                { name: "Aphrodite", image: "images/aphrodite.png", path: "../../gods/godtemplate/godtemplate.html?aphrodite", description: "Aphrodite's ult can neutralize ne zha's ult or sash, protecting herself and/or her linked teammate." }
            ]
        },
        {
            title: "Counter Items",
            description: "These items can help counter Ne Zha.",
            items: [
                { name: "Purification Beads", image: "images/purification_beads.png", path: "https://smite.fandom.com/wiki/Purification_Beads", external: true, description: "Purification Beads can cleanse Ne Zha's ult or sash." },
                { name: "Magi's Cloak", image: "images/magis_cloak.png", path: "https://smite.fandom.com/wiki/Magi%27s_Cloak", external: true, description: "Magi's Cloak can cleanse Ne Zha's ult or sash." }
            ]
        },
        {
            title: "Counter Playstyles",
            description: "These playstyles or gods are effective against Ne Zha.",
            items: [
                { name: "Gods with CC immunity", image: "images/cc_immunity.png", path: "../../categs/yes-toggle/yes-toggle.html?category=ccimmunity", description: "Gods with crowd control immunity can escape from Ne Zha's ult or sash." },
                { name: "Gods with Walls", image: "images/walls.png", path: "../../categs/yes-toggle/yes-toggle.html?category=walls", description: "Gods with walls can block Ne Zha's escape routes or even his ult." }
            ]
        },
        {
            title: "Antiheal Priority",
            description: "This shows how important it is to build antiheal against Ne Zha.",
            items: [
                { name: "Medium/High", image: "images/healinggods.png", path: "../../menu/antihealpage/antihealpage.html", description: "Ne Zha has a fairly significant sustain from his 2, making antiheal effective against him during teamfights." }
            ]
        }
    ]
},
{
    name: "neith",
    displayName: "Neith",
    backgroundImage: "images/bg-neith.png",
    class: "Hunter",
    roles: "Carry",
    biggestThreats: "Global Ult",
    mobility: "Medium/Low",
    playstyles: [
        {
            title: "God Counters",
            description: "These gods are effective counters against Neith.",
            items: [
                { name: "Ares", image: "images/ares.png", path: "../../gods/godtemplate/godtemplate.html?ares", description: "Ares' cripple chains can immobilize neith and prevent her backflip. Also, with no CC immune ult, Neith is vulnerable to Ares ult." },
                { name: "Awilix", image: "images/awilix.png", path: "../../gods/godtemplate/godtemplate.html?awilix", description: "Awilix's ult can pull Neith out of her backflip putting her in a bad spot." },
                { name: "Cupid", image: "images/cupid.png", path: "../../gods/godtemplate/godtemplate.html?cupid", description: "Cupid's big cripple ult can lock Neith in space and prevent her from using her backflip." }
            ]
        },
        {
            title: "Counter Items",
            description: "These items can help counter Neith.",
            items: [
                { name: "Purification Beads", image: "images/purification_beads.png", path: "https://smite.fandom.com/wiki/Purification_Beads", external: true, description: "Purification Beads can cleanse Neith root or ult stun." },
                { name: "Aegis Amulet", image: "images/aegis_amulet.png", path: "https://smite.fandom.com/wiki/Aegis_Amulet", external: true, description: "Aegis Amulet can help you immune Neith ult, or you can hide behind your (optionally healthy) teammate." }
            ]
        },
        {
            title: "Counter Playstyles",
            description: "These playstyles or gods are effective against Neith.",
            items: [
                { name: "Gods with Cripples", image: "images/cripples.png", path: "../../categs/yes-toggle/yes-toggle.html?category=cripples", description: "Gods with cripples can lock Neith down by preventing her from using her backflip." },
                { name: "Gods with CC immunity", image: "images/cc_immunity.png", path: "../../categs/yes-toggle/yes-toggle.html?category=ccimmunity", description: "Gods with crowd control immunity can escape from Neith's global ultimate stun." },
                { name: "Gods with Walls", image: "images/walls.png", path: "../../categs/yes-toggle/yes-toggle.html?category=walls", description: "Gods with walls can block lock Neith down and block her escape routes." }
            ]
        },
        {
            title: "Antiheal Priority",
            description: "This shows how important it is to build antiheal against Neith.",
            items: [
                { name: "Medium", image: "images/healinggods.png", path: "../../menu/antihealpage/antihealpage.html", description: "Neith has a heal in her 2, which may or may not warrant antiheal. Watch for her items too." }
            ]
        }
    ]
},
{
    name: "nemesis",
    displayName: "Nemesis",
    backgroundImage: "images/bg-nemesis.png",
    class: "Assassin",
    roles: "Jungle",
    biggestThreats: "Ult Prot Shred",
    mobility: "Med/high",
    playstyles: [
        {
            title: "God Counters",
            description: "These gods are effective counters against Nemesis.",
            items: [
                { name: "Mercury", image: "images/mercury.png", path: "../../gods/godtemplate/godtemplate.html?mercury", description: "Mercury's high mobility allows him to counter-rotate Nemesis or catch her out of position." },
                { name: "Susano", image: "images/susano.png", path: "../../gods/godtemplate/godtemplate.html?susano", description: "Susano's high mobility allows him to stick to Nemesis and counter-rotate her." },
                { name: "Khepri", image: "images/khepri.png", path: "../../gods/godtemplate/godtemplate.html?khepri", description: "Khepri's life-saving ult can help him peel for his teammate against Nemesis' ult and protection shred." }
            ]
        },
        {
            title: "Counter Items",
            description: "These items can help counter Nemesis.",
            items: [
                { name: "Erosion", image: "images/erosion.png", path: "https://smite.fandom.com/wiki/Erosion", external: true, description: "Erosion reduces the effectiveness of Nemesis' shield leading to less survivability for her." },
                { name: "Bewitched Dagger", image: "images/bewitched_dagger.png", path: "https://smite.fandom.com/wiki/Bewitched_Dagger", external: true, description: "Bewitched Dagger reduces Nemesis' attack speed, reducing her damage output and impact in teamfights." },
                { name: "Midgardian Mail", image: "images/midgardian_mail.png", path: "https://smite.fandom.com/wiki/Midgardian_Mail", external: true, description: "Midgardian Mail reduces Nemesis' attack speed, reducing her damage output and impact in teamfights." }
            ]
        },
        {
            title: "Counter Playstyles",
            description: "These playstyles or gods are effective against Nemesis.",
            items: [
                { name: "Gods with Walls", image: "images/walls.png", path: "../../categs/yes-toggle/yes-toggle.html?category=walls", description: "With no leaps in her kit, Nemesis is vulnerable to player-made walls." }
            ]
        },
        {
            title: "Antiheal Priority",
            description: "This shows how important it is to build antiheal against Nemesis.",
            items: [
                { name: "Medium", image: "images/healinggods.png", path: "../../menu/antihealpage/antihealpage.html", description: "Nemesis shield heals her based on incoming damage, making antiheal somewhat effective against her." }
            ]
        }
    ]
},
{
    name: "nike",
    displayName: "Nike",
    backgroundImage: "images/bg-nike.png",
    class: "Warrior",
    roles: "Solo",
    biggestThreats: "Dive potential",
    mobility: "Medium",
    playstyles: [
        {
            title: "God Counters",
            description: "These gods are effective counters against Nike.",
            items: [
                { name: "Achilles", image: "images/achilles.png", path: "../../gods/godtemplate/godtemplate.html?achilles", description: "Achilles' execute can counter Nike's big ult shield." },
                { name: "Thanatos", image: "images/thanatos.png", path: "../../gods/godtemplate/godtemplate.html?thanatos", description: "Thanatos' execute can counter Nike's big ult shield." },
                { name: "Awilix", image: "images/awilix.png", path: "../../gods/godtemplate/godtemplate.html?awilix", description: "Awilix's ult can pull Nike out of her leap, putting her in a bad spot." }
            ]
        },
        {
            title: "Counter Items",
            description: "These items can help counter Nike.",
            items: [
                { name: "Erosion", image: "images/erosion.png", path: "https://smite.fandom.com/wiki/Erosion", external: true, description: "Erosion reduces Nike's ult shield, reducing her survivability and impact in teamfights." }
            ]
        },
        {
            title: "Counter Playstyles",
            description: "These playstyles or gods are effective against Nike.",
            items: [
                { name: "Gods with CC immunity", image: "images/cc_immunity.png", path: "../../categs/yes-toggle/yes-toggle.html?category=ccimmunity", description: "Gods with crowd control immunity can escape from Nike's knockup, reducing her impact in teamfights and making it harder for her to secure kills." },
                { name: "Gods with Knockup Immunity", image: "images/knockup_immunity.png", path: "../../categs/yes-toggle/yes-toggle.html?category=knockupimmunity", description: "Gods with knockup immunity can escape from Nike's knockup, reducing her impact in teamfights and making it harder for her to secure kills." },
                { name: "gods with an Execute", image: "images/execute.png", path: "../../categs/no-toggle/no-toggle.html?category=execute", description: "Gods with an execute ability can finish off Nike and counter her shield ult." }
            
            ]
        },
        {
            title: "Antiheal Priority",
            description: "This shows how important it is to build antiheal against Nike.",
            items: [
                { name: "Very Low", image: "images/healinggods.png", path: "../../menu/antihealpage/antihealpage.html", description: "Nike has no healing abilities, making antiheal less effective against her compared to other gods." }
            ]
        }
    ]
},
{
    name: "nox",
    displayName: "Nox",
    backgroundImage: "images/bg-nox.png",
    class: "Mage",
    roles: "Mid/Support",
    biggestThreats: "Lots of CC",
    mobility: "Medium",
    playstyles: [
        {
            title: "God Counters",
            description: "These gods are effective counters against Nox.",
            items: [
                { name: "Aphrodite", image: "images/aphrodite.png", path: "../../gods/godtemplate/godtemplate.html?aphrodite", description: "Aphrodite's ult can save her or a linked teammate from Nox's overwhelming CC." },
                { name: "Cabrakan", image: "images/cabrakan.png", path: "../../gods/godtemplate/godtemplate.html?cabrakan", description: "Cabrakan's CC and ult wall can lock down Nox, especially that she has no leap in her kit." },
                { name: "Hel", image: "images/hel.png", path: "../../gods/godtemplate/godtemplate.html?hel", description: "Hel's group cleanse can negate Nox's crowd control, reducing her impact in teamfights and making it harder for her to secure kills." }
            ]
        },
        {
            title: "Counter Items",
            description: "These items can help counter Nox.",
            items: [
                { name: "Purification Beads", image: "images/purification_beads.png", path: "https://smite.fandom.com/wiki/Purification_Beads", external: true, description: "Purification Beads can cleanse Nox's root and silence." },
                { name: "Magi's Cloak", image: "images/magis_cloak.png", path: "https://smite.fandom.com/wiki/Magi%27s_Cloak", external: true, description: "Magi's Cloak can cleanse Nox's root and silence." }
            ]
        },
        {
            title: "Counter Playstyles",
            description: "These playstyles or gods are effective against Nox.",
            items: [
                { name: "Gods with CC immunity", image: "images/cc_immunity.png", path: "../../categs/yes-toggle/yes-toggle.html?category=ccimmunity", description: "Gods with crowd control immunity can escape from Nox's crowd control, reducing her impact in teamfights and making it harder for her to secure kills." }
            ]
        },
        {
            title: "Antiheal Priority",
            description: "This shows how important it is to build antiheal against Nox.",
            items: [
                { name: "Very Low", image: "images/healinggods.png", path: "../../menu/antihealpage/antihealpage.html", description: "Nox has no healing abilities, making antiheal less effective against her compared to other gods." }
            ]
        }
    ]
},
{
    name: "nut",
    displayName: "Nut",
    backgroundImage: "images/bg-nut.png",
    class: "Hunter",
    roles: "Carry/Mid",
    biggestThreats: "Teamfighting ult/sustained DMG",
    mobility: "Low",
    playstyles: [
        {
            title: "God Counters",
            description: "These gods are effective counters against Nut.",
            items: [
                { name: "Fenrir", image: "images/fenrir.png", path: "../../gods/godtemplate/godtemplate.html?fenrir", description: "Fenrir's dive and brutalize can help him chase down the somewhat immobile Nut." },
                { name: "Bellona", image: "images/bellona.png", path: "../../gods/godtemplate/godtemplate.html?bellona", description: "Bellona's disarm and ability to trade with auto attack hunters can make her a decent counter to Nut." },
                { name: "Osiris", image: "images/osiris.png", path: "../../gods/godtemplate/godtemplate.html?osiris", description: "Osiris' tether reduces attack speed and his auto attack nature can help him trade well with Nut." }
            ]
        },
        {
            title: "Counter Items",
            description: "These items can help counter Nut",
            items: [
                { name: "Purification Beads", image: "images/purification_beads.png", path: "https://smite.fandom.com/wiki/Purification_Beads", external: true, description: "Purification Beads can cleanse Nut's ult." }
            ]
        },
        {
            title: "Counter Playstyles",
            description: "These playstyles or gods are effective against Nut.",
            items: [
                { name: "Gods with Cripples", image: "images/cripples.png", path: "../../categs/yes-toggle/yes-toggle.html?category=cripples", description: "Gods with cripples can help lock Nut down and block her escape routes." }
            ]
        },
        {
            title: "Antiheal Priority",
            description: "This shows how important it is to build antiheal against Nut.",
            items: [
                { name: "Very Low", image: "images/healinggods.png", path: "../../menu/antihealpage/antihealpage.html", description: "Nut has no healing abilities, making antiheal less effective against her compared to other gods." }
            ]
        }
    ]
},
{
    name: "nu_wa",
    displayName: "Nu Wa",
    backgroundImage: "images/bg-nu_wa.png",
    class: "Mage",
    roles: "Mid",
    biggestThreats: "Global Ult",
    mobility: "Low",
    playstyles: [
        {
            title: "God Counters",
            description: "These gods are effective counters against Nu Wa.",
            items: [
                { name: "Odin", image: "images/odin.png", path: "../../gods/godtemplate/godtemplate.html?odin", description: "Odin's cage ultimate can lock down Nu Wa who has no leap in her kit." },
                { name: "Ymir", image: "images/ymir.png", path: "../../gods/godtemplate/godtemplate.html?ymir", description: "Ymir's CC and wall can be challenging for Nu Wa, especially with no leap to jump over his wall." },
                { name: "Chiron", image: "images/chiron.png", path: "../../gods/godtemplate/godtemplate.html?chiron", description: "Chiron can cleanse a teammate or take out Nu Wa at a higher range than she can handle in some situations." }
            ]
        },
        {
            title: "Counter Items",
            description: "These items can help counter Nu Wa.",
            items: [
                { name: "Purification Beads", image: "images/purification_beads.png", path: "https://smite.fandom.com/wiki/Purification_Beads", external: true, description: "Purification Beads can cleanse Nu Wa's stun." },
                { name: "Aegis Amulet", image: "images/aegis_amulet.png", path: "https://smite.fandom.com/wiki/Aegis_Amulet", external: true, description: "Aegis Amulet can help immune Nu Wa's global damage ult." }
            ]
        },
        {
            title: "Counter Playstyles",
            description: "These playstyles or gods are effective against Nu Wa.",
            items: [
                { name: "Gods with Walls", image: "images/walls.png", path: "../../categs/yes-toggle/yes-toggle.html?category=walls", description: "Gods with walls can block Nu Wa's escape routes, especially that she has no leap in her kit." }
            ]
        },
        {
            title: "Antiheal Priority",
            description: "This shows how important it is to build antiheal against Nu Wa.",
            items: [
                { name: "Very Low", image: "images/healinggods.png", path: "../../menu/antihealpage/antihealpage.html", description: "Nu Wa has no healing abilities, making antiheal less effective against her compared to other gods." }
            ]
        }
    ]
},

{
    name: "odin",
    displayName: "Odin",
    backgroundImage: "images/bg-odin.png",
    class: "Warrior",
    roles: "Solo",
    biggestThreats: "Ultimate (cage)",
    mobility: "Medium",
    playstyles: [
        {
            title: "God Counters",
            description: "These gods are effective counters against Odin.",
            items: [
                { name: "Awilix", image: "images/awilix.png", path: "../../gods/godtemplate/godtemplate.html?awilix", description: "Awilix can use her ultimate to pull Odin out of his leap, putting him in a dangerous spot." },
                { name: "Hades", image: "images/hades.png", path: "../../gods/godtemplate/godtemplate.html?hades", description: "Hades can use his ultimate to provide crowd control and damage within Odin's cage, turning the fight against him and his teammates." },
                { name: "Anhur", image: "images/anhur.png", path: "../../gods/godtemplate/godtemplate.html?anhur", description: "Anhur can leap out of Odin's cage and his leap or ult can help him immune Odin's telegraphed stun." }
            ]
        },
        {
            title: "Counter Items",
            description: "These items can help counter Odin.",
            items: [
                { name: "Phantom Shell", image: "images/shell.png", path: "https://smite.fandom.com/wiki/Phantom_Shell", external: true, description: "Phantom Shell can allow Odin and his teammates to pass through his ultimate (cage) walls, negating its effectiveness in trapping them." },
                { name: "Erosion", image: "images/erosion.png", path: "https://smite.fandom.com/wiki/Erosion", external: true, description: "Erosion can reduce Odin's shield, weakening his defenses and making it easier to take him down." }
            ]
        },
        {
            title: "Counter Playstyles",
            description: "These playstyles or gods are effective against Odin.",
            items: [
                { name: "Gods with Leaps", image: "images/leaps.png", path: "../../categs/yes-toggle/yes-toggle.html?category=leaps", description: "Gods with leaps can escape from Odin's ultimate (cage), allowing them to reposition or engage more effectively." }
            ]
        },
        {
            title: "Antiheal Priority",
            description: "This shows how important it is to build antiheal against.",
            items: [
                { name: "Very Low", image: "images/healinggods.png", path: "../../menu/antihealpage/antihealpage.html", description: "Odin has no healing abilities, making antiheal less effective against him compared to other gods." }
            ]
        }
    ]
},

{
    name: "olorun",
    displayName: "Olorun",
    backgroundImage: "images/bg-olorun.png",
    class: "Mage",
    roles: "Carry/Mid",
    biggestThreats: "Teamfighting ult",
    mobility: "Low",
    playstyles: [
        {
            title: "God Counters",
            description: "These gods are effective counters against Olorun .",
            items: [
                { name: "Yemoja", image: "images/yemoja.png", path: "../../gods/godtemplate/godtemplate.html?yemoja", description: "Yemoja's big ult walls can split the fight, neutralizing Olorun ult or splitting the opponent team. With no leaps, Olorun cannot escape those walls too." },
                { name: "Bakasura", image: "images/bakasura.png", path: "../../gods/godtemplate/godtemplate.html?bakasura", description: "Bakasura's high burst damage can quickly eliminate Olorun and create a cripple zone with his ult." },
                { name: "Fenrir", image: "images/fenrir.png", path: "../../gods/godtemplate/godtemplate.html?fenrir", description: "Fenrir's brutalize can follow Olorun and counter his knockup self-peel." }
            ]
        },
        {
            title: "Counter Items",
            description: "These items can help counter Olorun.",
            items: [
                { name: "Purification Beads", image: "images/purification_beads.png", path: "https://smite.fandom.com/wiki/Purification_Beads", external: true, description: "Purification Beads can help neutralize the CC from Olorun ult." }
            ]
        },
        {
            title: "Counter Playstyles",
            description: "These playstyles or gods are effective against Olorun.",
            items: [
                { name: "Gods with CC Immunity", image: "images/cc_immunity.png", path: "../../categs/yes-toggle/yes-toggle.html?category=ccimmunity", description: "Gods with crowd control immunity can escape from Olorun's CC ultimate, reducing his impact in teamfights and making it harder for him to lock down targets effectively." },
                { name: "Gods with Leaps", image: "images/leaps.png", path: "../../categs/yes-toggle/yes-toggle.html?category=leaps", description: "Gods with leaps can escape from Olorun's CC ult." },
                { name: "Gods with Knockup Immunity", image: "images/knockup_immunity.png", path: "../../categs/yes-toggle/yes-toggle.html?category=knockupimmunity", description: "Gods with knockup immunity can escape from Olorun's knockup self-peel." }
            ]
        },
        {
            title: "Antiheal Priority",
            description: "This shows how important it is to build antiheal against Olorun.",
            items: [
                { name: "Medium/Low", image: "images/healinggods.png", path: "../../menu/antihealpage/antihealpage.html", description: "Olorun has limited heals out of his 3, making antiheal somewhat effective against him, especially if he itemizes into lifesteal, which is likely." }
            ]
        }
    ]
},

{
    name: "osiris",
    displayName: "Osiris",
    backgroundImage: "images/bg-osiris.png",
    class: "Warrior",
    roles: "Solo/Jungle",
    biggestThreats: "Dive potential",
    mobility: "Medium/low",
    playstyles: [
        {
            title: "God Counters",
            description: "These gods are effective counters against Osiris.",
            items: [
                { name: "Ravana", image: "images/ravana.png", path: "../../gods/godtemplate/godtemplate.html?ravana", description: "Ravana's CC immunity can escape Osiris' tether and help Ravana continue his dive." },
                { name: "Tyr", image: "images/tyr.png", path: "../../gods/godtemplate/godtemplate.html?tyr", description: "Tyr's crowd control and sustain can out-trade Osiris in fights, countering his dive potential and reducing his impact." },
                { name: "Vamana", image: "images/vamana.png", path: "../../gods/godtemplate/godtemplate.html?vamana", description: "Vamana's high sustain and crowd control can out-trade Osiris in fights, countering his dive potential and reducing his impact." }
            ]
        },
        {
            title: "Counter Items",
            description: "These items can help counter Osiris.",
            items: [
                { name: "Purification Beads", image: "images/purification_beads.png", path: "https://smite.fandom.com/wiki/Purification_Beads", external: true, description: "Purification Beads can provide crowd control immunity from Osiris tether or ult." }
            ]
        },
        {
            title: "Counter Playstyles",
            description: "These playstyles or gods are effective against Osiris.",
            items: [
                { name: "Gods with CC Immunity", image: "images/cc_immunity.png", path: "../../categs/yes-toggle/yes-toggle.html?category=ccimmunity", description: "Gods with crowd control immunity can escape from Osiris's crowd control and dive potential, reducing his impact in fights and making it harder for him to lock down targets effectively." },
                { name: "Gods with Leaps", image: "images/leaps.png", path: "../../categs/yes-toggle/yes-toggle.html?category=leaps", description: "Gods with leaps can escape out of Osiris' tether. Also, Osiris can only leap via ult, making gods with leaps more challenging for him to chase down." }
            ]
        },
        {
            title: "Antiheal Priority",
            description: "This shows how important it is to build antiheal against Osiris.",
            items: [
                { name: "Very Low", image: "images/healinggods.png", path: "../../menu/antihealpage/antihealpage.html", description: "Osiris has no healing abilities, making antiheal less effective against him compared to other gods." }
            ]
        }
    ]
},

{
    name: "pele",
    displayName: "Pele",
    backgroundImage: "images/bg-pele.png",
    class: "Assassin",
    roles: "Jungle",
    biggestThreats: "All-in ult",
    mobility: "Medium",
    playstyles: [
        {
            title: "God Counters",
            description: "These gods are effective counters against Pele.",
            items: [
                { name: "Anubis", image: "images/anubis.png", path: "../../gods/godtemplate/godtemplate.html?anubis", description: "Anubis's high burst damage and his knockup immunity in his 1 can be challenging for Pele to deal with." },
                { name: "Da Ji", image: "images/daji.png", path: "../../gods/godtemplate/godtemplate.html?da_ji", description: "Da Ji's knockup immunity in her 2 and her chase down potential can be challenging for Pele to deal with." },
                { name: "Odin", image: "images/odin.png", path: "../../gods/godtemplate/godtemplate.html?odin", description: "Odin's ultimate can trap Pele and prevent her from escaping or dealing damage effectively during her all-in ult." }
            ]
        },
        {
            title: "Counter Items",
            description: "These items can help counter Pele.",
            items: [
                { name: "Purification Beads", image: "images/purification_beads.png", path: "https://smite.fandom.com/wiki/Purification_Beads", external: true, description: "Purification Beads can provide crowd control immunity from Pele's knockup." },
                { name: "Aegis Amulet", image: "images/aegis_amulet.png", path: "https://smite.fandom.com/wiki/Aegis_Amulet", external: true, description: "Aegis Amulet can provide dmg immunity, allowing players to survive Pele's burst damage during her ult." } 
            ]
        },
        {
            title: "Counter Playstyles",
            description: "These playstyles or gods are effective against Pele.",
            items: [
                { name: "Gods with CC Immunity", image: "images/cc_immunity.png", path: "../../categs/yes-toggle/yes-toggle.html?category=ccimmunity", description: "Gods with crowd control immunity can counter Pele's knockup." },
                { name: "Gods with Knockup Immunity", image: "images/knockup_immunity.png", path: "../../categs/yes-toggle/yes-toggle.html?category=knockupimmunity", description: "Gods with knockup immunity can escape from Pele's knockup." },
                { name: "Gods with Walls", image: "images/walls.png", path: "../../categs/yes-toggle/yes-toggle.html?category=walls", description: "Gods with walls can block Pele's path and prevent her from engaging or escaping effectively during her ult." }
            ]
        },
        {
            title: "Antiheal Priority",
            description: "This shows how important it is to build antiheal against Pele.",
            items: [
                { name: "Medium/High", image: "images/healinggods.png", path: "../../menu/antihealpage/antihealpage.html", description: "Pele has moderate healing abilities, making antiheal somewhat effective against her compared to other gods." }
            ]
        }
    ]
},
{
    name: "persephone",
    displayName: "Persephone",
    backgroundImage: "images/bg-persephone.png",
    class: "Mage",
    roles: "Mid",
    biggestThreats: "Group CC ult",
    mobility: "Medium/low",
    playstyles: [
        {
            title: "God Counters",
            description: "These gods are effective counters against Persephone.",
            items: [
                { name: "Cabrakan", image: "images/cabrakan.png", path: "../../gods/godtemplate/godtemplate.html?cabrakan", description: "Cabrakan's walls and crowd control can disrupt Persephone's positioning and prevent her from retreating safely, especially that she has no leap." },
                { name: "Odin", image: "images/odin.png", path: "../../gods/godtemplate/godtemplate.html?odin", description: "Odin's ultimate can trap Persephone and prevent her from escaping, especially that she has no leap." },
                { name: "Awilix", image: "images/awilix.png", path: "../../gods/godtemplate/godtemplate.html?awilix", description: "Awilix can use her ultimate to pull Persephone out of her leap." }
            ]
        },
        {
            title: "Counter Items",
            description: "These items can help counter Persephone.",
            items: [
                { name: "Purification Beads", image: "images/purification_beads.png", path: "https://smite.fandom.com/wiki/Purification_Beads", external: true, description: "Purification Beads can provide crowd control immunity, allowing players to escape from Persephone's ult." }
            ]
        },
        {
            title: "Counter Playstyles",
            description: "These playstyles or gods are effective against Persephone.",
            items: [
                { name: "Gods with CC Immunity", image: "images/cc_immunity.png", path: "../../categs/yes-toggle/yes-toggle.html?category=ccimmunity", description: "Gods with crowd control immunity can escape from Persephone's ult CC." },
                { name: "Gods with Leaps", image: "images/leaps.png", path: "../../categs/yes-toggle/yes-toggle.html?category=leaps", description: "Gods with leaps can jump over Persephone's ult with a quick reaction." },
                { name: "Gods with Walls", image: "images/walls.png", path: "../../categs/yes-toggle/yes-toggle.html?category=walls", description: "Gods with walls can block Persephone's escape routes and walls can even block Persephone's ult." }
            ]
        },
        {
            title: "Antiheal Priority",
            description: "This shows how important it is to build antiheal against Pele.",
            items: [
                { name: "Medium", image: "images/healinggods.png", path: "../../menu/antihealpage/antihealpage.html", description: "Persephone can heal by taking her flowers, making antiheal somewhat effective against her compared to other gods." }
            ]
        }
    ]
},
{
    name: "poseidon",
    displayName: "Poseidon",
    backgroundImage: "images/bg-poseidon.png",
    class: "Mage",
    roles: "Mid",
    biggestThreats: "Burst ult",
    mobility: "Medium/low",
    playstyles: [
        {
            title: "God Counters",
            description: "These gods are effective counters against Poseidon.",
            items: [
                { name: "Hel", image: "images/hel.png", path: "../../gods/godtemplate/godtemplate.html?hel", description: "Hel's group cleanse can counter Poseidon's whirlpool cripple." },
                { name: "Ravana", image: "images/ravana.png", path: "../../gods/godtemplate/godtemplate.html?ravana", description: "Ravana's CC immunity from his 2 can counter Poseidon's whirlpool cripple." },
                { name: "Odin", image: "images/odin.png", path: "../../gods/godtemplate/godtemplate.html?odin", description: "Odin's ultimate can trap Poseidon and prevent him from escaping, especially that Poseidon has no leap." }
            ]
        },
        {
            title: "Counter Items",
            description: "These items can help counter Poseidon.",
            items: [
                { name: "Aegis Amulet", image: "images/aegis_amulet.png", path: "https://smite.fandom.com/wiki/Aegis_Amulet", external: true, description: "Aegis Amulet can is a classic answer to immune Poseidon's burst ult." }
            ]
        },
        {
            title: "Counter Playstyles",
            description: "These playstyles or gods are effective against Poseidon.",
            items: [
                { name: "Gods with CC Immunity", image: "images/cc_immunity.png", path: "../../categs/yes-toggle/yes-toggle.html?category=ccimmunity", description: "Gods with crowd control immunity can escape from Poseidon's crowd control and ultimate, reducing his impact in fights and making it harder for him to lock down targets effectively." },
                { name: "Gods with Walls", image: "images/walls.png", path: "../../categs/yes-toggle/yes-toggle.html?category=walls", description: "Gods with walls can block Poseidon's escape routes, especially that he has no leaps." }
            ]
        },
        {
            title: "Antiheal Priority",
            description: "This shows how important it is to build antiheal against Poseidon.",
            items: [
                { name: "Very Low", image: "images/healinggods.png", path: "../../menu/antihealpage/antihealpage.html", description: "Poseidon has no healing abilities, making antiheal less effective against him compared to other gods." }
            ]
        }
    ]
},

{
    name: "ra",
    displayName: "Ra",
    backgroundImage: "images/bg-ra.png",
    class: "Mage",
    roles: "Mid",
    biggestThreats: "Ult snipe",
    mobility: "Low",
    playstyles: [
        {
            title: "God Counters",
            description: "These gods are effective counters against Ra.",
            items: [
                { name: "Ah Puch", image: "images/ahpuch.png", path: "../../gods/godtemplate/godtemplate.html?ah_puch", description: "Ah Puch's anti-healing kit is designed to counter healers like Ra." },
                { name: "Sobek", image: "images/sobek.png", path: "../../gods/godtemplate/godtemplate.html?sobek", description: "Sobek's displacement pluck and his built-in antiheal can be a strong answer to Ra's playstyle." },
                { name: "Odin", image: "images/odin.png", path: "../../gods/godtemplate/godtemplate.html?odin", description: "Odin's ultimate can trap Ra and prevent him from escaping or using his sustain effectively, reducing his impact in teamfights." }
            ]
        },
        {
            title: "Counter Items",
            description: "These items can help counter Ra.",
            items: [
                { name: "Antiheal", image: "images/antiheal.png", path: "../../menu/antihealpage/antihealpage.html", external: false, description: "Antiheal items can reduce Ra's healing, making it harder for him to sustain his team and reducing his impact in fights." },
                { name: "Aegis Amulet", image: "images/aegis_amulet.png", path: "https://smite.fandom.com/wiki/Aegis_Amulet", external: true, description: "Aegis Amulet can provide damage mitigation, allowing players to survive Ra's burst damage ult." }
            ]
        },
        {
            title: "Counter Playstyles",
            description: "These playstyles or gods are effective against Ra.",
            items: [
                { name: "Gods with Leaps", image: "images/leaps.png", path: "../../categs/yes-toggle/yes-toggle.html?category=leaps", description: "Gods with leaps can escape from Ra's ult snipe and chase him down effectively." },
                { name: "Gods with Walls", image: "images/walls.png", path: "../../categs/yes-toggle/yes-toggle.html?category=walls", description: "Gods with walls can block Ra's escape routes, especially that he has no leap abilities." }
            ]
        },
        {
            title: "Antiheal Priority",
            description: "This shows how important it is to build antiheal against Ra.",
            items: [
                { name: "Very High", image: "images/healinggods.png", path: "../../menu/antihealpage/antihealpage.html", description: "Ra's area heal is potent, making antiheal very effective against him." }
            ]
        }
    ]
},
{
    name: "raijin",
    displayName: "Raijin",
    backgroundImage: "images/bg-raijin.png",
    class: "Mage",
    roles: "Mid",
    biggestThreats: "Teamfighting ult",
    mobility: "Medium",
    playstyles: [
        {
            title: "God Counters",
            description: "These gods are effective counters against Raijin.",
            items: [
                { name: "Arachne", image: "images/arachne.png", path: "../../gods/godtemplate/godtemplate.html?arachne", description: "Arachne's crowd control and 1v1 potential can help burst down Raijin." },
                { name: "Poseidon", image: "images/poseidon.png", path: "../../gods/godtemplate/godtemplate.html?poseidon", description: "Poseidon's whirlpool cripple and his burst damage can help take down Raijin before he can dash out." },
                { name: "Scylla", image: "images/scylla.png", path: "../../gods/godtemplate/godtemplate.html?scylla", description: "Scylla's root into burst damage can take down Raijin before he can dash out." }
            ]
        },
        {
            title: "Counter Items",
            description: "These items can help counter Raijin.",
            items: [
                { name: "Purification Beads", image: "images/purification_beads.png", path: "https://smite.fandom.com/wiki/Purification_Beads", external: true, description: "Purification Beads can help you immune Raijin's ult CC." },
                { name: "Aegis Amulet", image: "images/aegis_amulet.png", path: "https://smite.fandom.com/wiki/Aegis_Amulet", external: true, description: "Aegis Amulet can provide damage immunity, allowing players to survive Raijin's burst damage during his teamfighting ult and reducing his impact in fights." }
            ]
        },
        {
            title: "Counter Playstyles",
            description: "These playstyles or gods are effective against Raijin.",
            items: [
                { name: "Gods with Cripples", image: "images/cripples.png", path: "../../categs/yes-toggle/yes-toggle.html?category=cripples", description: "Gods with cripples can prevent Raijin from dashing out of a bad situation." }
            ]
        },
        {
            title: "Antiheal Priority",
            description: "This shows how important it is to build antiheal against Raijin.",
            items: [
                { name: "Very Low", image: "images/healinggods.png", path: "../../menu/antihealpage/antihealpage.html", description: "Raijin has no healing abilities, making antiheal less effective against him compared to other gods." }
            ]
        }
    ]
},
{
    name: "rama",
    displayName: "Rama",
    backgroundImage: "images/bg-rama.png",
    class: "Hunter",
    roles: "Carry",
    biggestThreats: "Ult snipes",
    mobility: "Medium",
    playstyles: [
        {
            title: "God Counters",
            description: "These gods are effective counters against Rama.",
            items: [
                { name: "Loki", image: "images/loki.png", path: "../../gods/godtemplate/godtemplate.html?loki", description: "Loki's stealth and burst damage can surprise and eliminate Rama." },
                { name: "Bakasura", image: "images/bakasura.png", path: "../../gods/godtemplate/godtemplate.html?bakasura", description: "Bakasura's high burst damage and cripple ult can help quickly take Rama down." },
                { name: "Odin", image: "images/odin.png", path: "../../gods/godtemplate/godtemplate.html?odin", description: "Odin's ultimate can trap Rama and prevent him from escaping or at least force his ult." }
            ]
        },
        {
            title: "Counter Items",
            description: "These items can help counter Rama.",
            items: [
                { name: "Aegis Amulet", image: "images/aegis_amulet.png", path: "https://smite.fandom.com/wiki/Aegis_Amulet", external: true, description: "Aegis Amulet can provide damage immunity against Rama's 3 snipes from his ult." },
                { name: "Bewitched Dagger", image: "images/bewitched_dagger.png", path: "https://smite.fandom.com/wiki/Bewitched_Dagger", external: true, description: "Bewitched Dagger can slow Ra's built-in attack speed." },
                { name: "Midgardian Mail", image: "images/midgardian_mail.png", path: "https://smite.fandom.com/wiki/Midgardian_Mail", external: true, description: "Midgardian Mail can slow Ra's built-in attack speed." }
            ]
        },
        {
            title: "Counter Playstyles",
            description: "These playstyles or gods are effective against Rama.",
            items: [
                { name: "Gods with Leaps", image: "images/leaps.png", path: "../../categs/yes-toggle/yes-toggle.html?category=leaps", description: "Gods with leaps can escape from Rama's ult snipes and can chase Rama down effectively." },
                { name: "Gods with Walls", image: "images/walls.png", path: "../../categs/yes-toggle/yes-toggle.html?category=walls", description: "Gods with walls can block Rama's escape routes forcing him into his ult defensively." },
                { name: "Gods with Cripples", image: "images/cripples.png", path: "../../categs/yes-toggle/yes-toggle.html?category=cripples", description: "Gods with cripples can prevent Rama from dashing out of a bad situation." }
            ]
        },
        {
            title: "Antiheal Priority",
            description: "This shows how important it is to build antiheal against Rama.",
            items: [
                { name: "Very Low", image: "images/healinggods.png", path: "../../menu/antihealpage/antihealpage.html", description: "Rama has no healing abilities, making antiheal less effective against him compared to other gods." }
            ]
        }
    ]
},
{
    name: "ratatoskr",
    displayName: "Ratatoskr",
    backgroundImage: "images/bg-ratatoskr.png",
    class: "Assassin",
    roles: "Jungle/Support/Solo",
    biggestThreats: "Mobility ult",
    mobility: "High",
    playstyles: [
        {
            title: "God Counters",
            description: "These gods are effective counters against Ratatoskr.",
            items: [
                { name: "Thor", image: "images/thor.png", path: "../../gods/godtemplate/godtemplate.html?thor", description: "Thor's wall can lock down ratatoskr or force his ult. Also Thor's global ult can counter Ratatoskr's global ult ganks." },
                { name: "Ganesha", image: "images/ganesha.png", path: "../../gods/godtemplate/godtemplate.html?ganesha", description: "Ganesha's silence and crowd control can disrupt Ratatoskr's mobility or force his ult." },
                { name: "Morgan Le Fay", image: "images/morganlefay.png", path: "../../gods/godtemplate/godtemplate.html?morgan_le_fay", description: "Morgan Le Fay's knockback and high dmg output can be a good answer to Rat." }
            ]
        },
        {
            title: "Counter Items",
            description: "These items can help counter Ratatoskr.",
            items: [
                { name: "Purification Beads", image: "images/purification_beads.png", path: "https://smite.fandom.com/wiki/Purification_Beads", external: true, description: "Purification Beads can help you cleans the CC from Ratatoskr ult." }
            ]
        },
        {
            title: "Counter Playstyles",
            description: "These playstyles or gods are effective against Ratatoskr.",
            items: [
                { name: "Gods with CC Immunity", image: "images/cc_immunity.png", path: "../../categs/yes-toggle/yes-toggle.html?category=ccimmunity", description: "Gods with crowd control immunity can escape from Ratatoskr's crowd control and ultimate knockup." },
                { name: "Gods with Knockup Immunity", image: "images/knockup_immunity.png", path: "../../categs/yes-toggle/yes-toggle.html?category=knockupimmunity", description: "Gods with knockup immunity can avoid Ratatoskr's ult knockup." },
                { name: "Gods with Walls", image: "images/walls.png", path: "../../categs/yes-toggle/yes-toggle.html?category=walls", description: "Gods with walls can block Ratatoskr's engage/disengage or force his ult." }
            ]
        },
        {
            title: "Antiheal Priority",
            description: "This shows how important it is to build antiheal against Ratatoskr.",
            items: [
                { name: "Very Low", image: "images/healinggods.png", path: "../../menu/antihealpage/antihealpage.html", description: "Ratatoskr has no healing abilities, making antiheal unnecessary against him." }
            ]
        }
    ]
},
{
    name: "ravana",
    displayName: "Ravana",
    backgroundImage: "images/bg-ravana.png",
    class: "Assassin",
    roles: "Solo/Jungle",
    biggestThreats: "Dive potential",
    mobility: "Low",
    playstyles: [
        {
            title: "God Counters",
            description: "These gods are effective counters against Ravana.",
            items: [
                { name: "Nemesis", image: "images/nemesis.png", path: "../../gods/godtemplate/godtemplate.html?nemesis", description: "Nemesis's ult protections shred can help take down the tanky Ravana." },
                { name: "Odin", image: "images/odin.png", path: "../../gods/godtemplate/godtemplate.html?odin", description: "Odin's ultimate can trap Ravana, take away his heals and prevent him from escaping or at the very least forcing his ult defensively." },
                { name: "Cabrakan", image: "images/cabrakan.png", path: "../../gods/godtemplate/godtemplate.html?cabrakan", description: "Cabrakan's crowd control and ult wall can lock Ravana in place or at the very least force his ult." }
            ]
        },
        {
            title: "Counter Items",
            description: "These items can help counter Ravana.",
            items: [
                { name: "Erosion", image: "images/erosion.png", path: "https://smite.fandom.com/wiki/Erosion", external: true, description: "Erosion can reduce Ravana's shield making him less tanky." }
            ]
        },
        {
            title: "Counter Playstyles",
            description: "These playstyles or gods are effective against Ravana.",
            items: [
                { name: "Gods with Walls", image: "images/walls.png", path: "../../categs/yes-toggle/yes-toggle.html?category=walls", description: "Gods with walls can block Ravana's escape routes or at the very least force his ult." }
            ]
        },
        {
            title: "Antiheal Priority",
            description: "This shows how important it is to build antiheal against Ravana.",
            items: [
                { name: "Medium", image: "images/healinggods.png", path: "../../menu/antihealpage/antihealpage.html", description: "Ravana has moderate sustain, making antiheal somewhat effective against him." }
            ]
        }
    ]
},

{
    name: "scylla",
    displayName: "Scylla",
    backgroundImage: "images/bg-scylla.png",
    class: "Mage",
    roles: "Mid",
    biggestThreats: "Burst ult",
    mobility: "Medium/high",
    playstyles: [
        {
            title: "God Counters",
            description: "These gods are effective counters against Scylla.",
            items: [
                { name: "Awilix", image: "images/awilix.png", path: "../../gods/godtemplate/godtemplate.html?awilix", description: "Awilix's ult can pull Scylla during her 'leap', putting her in a dangerous spot." },
                { name: "Poseidon", image: "images/poseidon.png", path: "../../gods/godtemplate/godtemplate.html?poseidon", description: "Poseidon's cripple and burst damage can help take down Scylla fast." },
                { name: "Artio", image: "images/artio.png", path: "../../gods/godtemplate/godtemplate.html?artio", description: "Artio's cripple can immobilize Scylla or at the very least force her ult." }
            ]
        },
        {
            title: "Counter Items",
            description: "These items can help counter Scylla.",
            items: [
                { name: "Purification Beads", image: "images/purification_beads.png", path: "https://smite.fandom.com/wiki/Purification_Beads", external: true, description: "Purification Beads can help you immune Scylla's root." },
                { name: "Aegis Amulet", image: "images/aegis_amulet.png", path: "https://smite.fandom.com/wiki/Aegis_Amulet", external: true, description: "Aegis Amulet can provide damage immunity, allowing players to negate Scylla's burst damage." }
            ]
        },
        {
            title: "Counter Playstyles",
            description: "These playstyles or gods are effective against Scylla.",
            items: [
                { name: "Gods with CC Immunity", image: "images/cc_immunity.png", path: "../../categs/yes-toggle/yes-toggle.html?category=ccimmunity", description: "Gods with crowd control immunity can escape from Scylla's root, avoiding her confirmed damage afterwards." },
                { name: "Gods with Leaps", image: "images/leaps.png", path: "../../categs/yes-toggle/yes-toggle.html?category=leaps", description: "Gods with leaps can jump away from Scylla's burst ult, reducing her impact in fights and making it harder for her to secure kills effectively." }
            ]
        },
        {
            title: "Antiheal Priority",
            description: "This shows how important it is to build antiheal against Scylla.",
            items: [
                { name: "Very Low", image: "images/healinggods.png", path: "../../menu/antihealpage/antihealpage.html", description: "Scylla has no healing abilities, making antiheal less effective against her." }
            ]
        }
    ]
},
{
    name: "serqet",
    displayName: "Serqet",
    backgroundImage: "images/bg-serqet.png",
    class: "Assassin",
    roles: "Jungle",
    biggestThreats: "Disruptive CC",
    mobility: "High",
    playstyles: [
        {
            title: "God Counters",
            description: "These gods are effective counters against Serqet.",
            items: [
                { name: "Ares", image: "images/ares.png", path: "../../gods/godtemplate/godtemplate.html?ares", description: "Ares's cripple from his chains can help lock Serqet down." },
                { name: "Awilix", image: "images/awilix.png", path: "../../gods/godtemplate/godtemplate.html?awilix", description: "Awilix's ult can pull serqet from her leap putting her in a dangerous spot." },
                { name: "Geb", image: "images/geb.png", path: "../../gods/godtemplate/godtemplate.html?geb", description: "Geb's shield and peal ability can help save Serqet's dive and disrupt her dive." }
            ]
        },
        {
            title: "Counter Items",
            description: "These items can help counter Serqet.",
            items: [
                { name: "Purification Beads", image: "images/purification_beads.png", path: "https://smite.fandom.com/wiki/Purification_Beads", external: true, description: "Purification Beads can help negate Serqet's CC and displacement ult." }
            ]
        },
        {
            title: "Counter Playstyles",
            description: "These playstyles or gods are effective against Serqet.",
            items: [
                { name: "Gods with CC Immunity", image: "images/cc_immunity.png", path: "../../categs/yes-toggle/yes-toggle.html?category=ccimmunity", description: "Gods with crowd control immunity can escape from Serqet's CC and/or ult." }
            ]
        },
        {
            title: "Antiheal Priority",
            description: "This shows how important it is to build antiheal against Serqet.",
            items: [
                { name: "Very Low", image: "images/healinggods.png", path: "../../menu/antihealpage/antihealpage.html", description: "Serqet has no healing abilities, making antiheal less effective against her compared to other gods." }
            ]
        }
    ]
},
{
    name: "set",
    displayName: "Set",
    backgroundImage: "images/bg-set.png",
    class: "Assassin",
    roles: "Jungle/Solo/Mid/Carry",
    biggestThreats: "High Sustain",
    mobility: "Medium",
    playstyles: [
        {
            title: "God Counters",
            description: "These gods are effective counters against Set.",
            items: [
                { name: "Ah Puch", image: "images/ahpuch.png", path: "../../gods/godtemplate/godtemplate.html?ah_puch", description: "Ah Puch's area damage and antiheal can negate Set's high sustain, reducing his impact in fights." },
                { name: "Ganesha", image: "images/ganesha.png", path: "../../gods/godtemplate/godtemplate.html?ganesha", description: "Ganesha's silence and area damage can prevent Set from using his abilities effectively, reducing his impact in fights." },
                { name: "Nox", image: "images/nox.png", path: "../../gods/godtemplate/godtemplate.html?nox", description: "Nox's silence and CC can prevent Set from using his abilities effectively, reducing his impact in fights." }
            ]
        },
        {
            title: "Counter Items",
            description: "These items can help counter Set.",
            items: [
                { name: "Antiheal", image: "images/healinggods.png", path: "../../menu/antihealpage/antihealpage.html", description: "Antiheal items can reduce Set's healing from his abilities, negating his high sustain and reducing his impact in fights." }
            ]
        },
        {
            title: "Counter Playstyles",
            description: "These playstyles or gods are effective against Set.",
            items: [
                { name: "Gods with Built-in Antiheal", image: "images/antiheal.png", path: "../../categs/yes-toggle/yes-toggle.html?category=antiheal", description: "Gods with abilities that apply antiheal can reduce Set's ult heals, negating his high sustain and reducing his impact in fights." }
            ]
        },
        {
            title: "Antiheal Priority",
            description: "This shows how important it is to build antiheal against Set.",
            items: [
                { name: "Very High", image: "images/healinggods.png", path: "../../menu/antihealpage/antihealpage.html", description: "Set has high sustain from his ult, making antiheal very effective against him." }
            ]
        }
    ]
},

{
    name: "shiva",
    displayName: "Shiva",
    backgroundImage: "images/bg-shiva.png",
    class: "Warrior",
    roles: "Solo/Jungle/Support",
    biggestThreats: "Teamfighting ult",
    mobility: "Medium",
    playstyles: [
        {
            title: "God Counters",
            description: "These gods are effective counters against Shiva.",
            items: [
                { name: "Odin", image: "images/odin.png", path: "../../gods/godtemplate/godtemplate.html?odin", description: "Odin's ultimate can trap Shiva and prevent him from escaping or using his team heals." },
                { name: "Eset", image: "images/eset.png", path: "../../gods/godtemplate/godtemplate.html?eset", description: "Eset's knockup immunity from her 1 can counter Shiva. Eset's disruptive CC can also interrupt Shiva's dive." },
                { name: "Fenrir", image: "images/fenrir.png", path: "../../gods/godtemplate/godtemplate.html?fenrir", description: "Fenrir's brutalize make him immune to Shiva's knockup and can chase him down with his leap/ult." }
            ]
        },
        {
            title: "Counter Items",
            description: "These items can help counter Shiva.",
            items: [
                { name: "Antiheal", image: "images/healinggods.png", path: "../../menu/antihealpage/antihealpage.html", description: "Antiheal items can reduce Shiva's group healing from his ult." },
                { name: "Heavenly Wings", image: "images/heavenly_wings.png", path: "https://smite.fandom.com/wiki/Heavenly_Wings", external: true, description: "Heavenly Wings can provide increased movement speed taking a team out of his ult when used offensively." }
            ]
        },
        {
            title: "Counter Playstyles",
            description: "These playstyles or gods are effective against Shiva.",
            items: [
                { name: "Gods with Knockup Immunity", image: "images/knockup_immunity.png", path: "../../categs/yes-toggle/yes-toggle.html?category=knockupimmunity", description: "Gods with knockup immunity can avoid Shiva's knockup setup." },
                { name: "Gods with Built-in Antiheal", image: "images/antiheal.png", path: "../../categs/yes-toggle/yes-toggle.html?category=antiheal", description: "Gods with abilities that apply antiheal can reduce Shiva's healing from his teamfighting ult, negating its impact in teamfights and reducing his team sustain." },
                { name: "Gods with Walls", image: "images/walls.png", path: "../../categs/yes-toggle/yes-toggle.html?category=walls", description: "Gods with walls can lock down Shiva, especially as Shiva has no leap in his kit." }
            ]
        },
        {
            title: "Antiheal Priority",
            description: "This shows how important it is to build antiheal against Shiva.",
            items: [
                { name: "High", image: "images/healinggods.png", path: "../../menu/antihealpage/antihealpage.html", description: "Shiva has high sustain, making antiheal very effective against him." }
            ]
        }
    ]
},
{
    name: "skadi",
    displayName: "Skadi",
    backgroundImage: "images/bg-skadi.png",
    class: "Hunter",
    roles: "Carry",
    biggestThreats: "Kaldr (pet) chase + ult",
    mobility: "Low",
    playstyles: [
        {
            title: "God Counters",
            description: "These gods are effective counters against Skadi.",
            items: [
                { name: "Cupid", image: "images/cupid.png", path: "../../gods/godtemplate/godtemplate.html?cupid", description: "Cupid's area cripple ult can lock Skadi in place. His long dash can also help him chase her down." },
                { name: "Cabrakan", image: "images/cabrakan.png", path: "../../gods/godtemplate/godtemplate.html?cabrakan", description: "Cabrakan's tremors and ult walls can lock Skadi down, especially that she has no leap in her kit." },
                { name: "Odin", image: "images/odin.png", path: "../../gods/godtemplate/godtemplate.html?odin", description: "Odin's ultimate can trap Skadi and prevent her from escaping or using Kaldr, her pet, effectively." }
            ]
        },
        {
            title: "Counter Items",
            description: "These items can help counter Skadi.",
            items: [
                { name: "Purification Beads", image: "images/purification_beads.png", path: "https://smite.fandom.com/wiki/Purification_Beads", external: true, description: "Purification Beads can cleanse Skadi's CC or ult." },
                { name: "Aegis Amulet", image: "images/aegis_amulet.png", path: "https://smite.fandom.com/wiki/Aegis_Amulet", external: true, description: "Aegis Amulet can provide damage immunity especially when being ulted by Skadi." }
            ]
        },
        {
            title: "Counter Playstyles",
            description: "These playstyles or gods are effective against Skadi.",
            items: [
                { name: "Gods with CC Immunity", image: "images/cc_immunity.png", path: "../../categs/yes-toggle/yes-toggle.html?category=ccimmunity", description: "Gods with crowd control immunity can escape from Skadi's crowd control abilities and ultimate, reducing her impact in fights and making it harder for her to secure kills effectively." },
                { name: "Gods with Walls", image: "images/walls.png", path: "../../categs/yes-toggle/yes-toggle.html?category=walls", description: "Gods with walls can block Skadi's escape routes, especially that she has no leaps in her kit." }
            ]
        },
        {
            title: "Antiheal Priority",
            description: "This shows how important it is to build antiheal against.",
            items: [
                { name: "Very Low", image: "images/healinggods.png", path: "../../menu/antihealpage/antihealpage.html", description: "Skadi has no healing abilities, making antiheal less effective against her compared to other gods." }
            ]
        }
    ]
},
{
    name: "sobek",
    displayName: "Sobek",
    backgroundImage: "images/bg-sobek.png",
    class: "Guardian",
    roles: "Support/Solo",
    biggestThreats: "Displacement (pluck)",
    mobility: "Medium/high",
    playstyles: [
        {
            title: "God Counters",
            description: "These gods are effective counters against Sobek.",
            items: [
                { name: "Jormungandr", image: "images/jormungandr.png", path: "../../gods/godtemplate/godtemplate.html?jormungandr", description: "Jormungandr's immunity to being displaced counters the main aspect of Sobek, his pluck." },
                { name: "Geb", image: "images/geb.png", path: "../../gods/godtemplate/godtemplate.html?geb", description: "Geb's shield and good peal can negate Sobek's reducing the impact of Sobek's pluck in fights." },
                { name: "Jing Wei", image: "images/jingwei.png", path: "../../gods/godtemplate/godtemplate.html?jing_wei", description: "Jing Wei's ability to dash while being mid-air can counter Sobek's pluck. She also has a CC immune ult" }
            ]
        },
        {
            title: "Counter Items",
            description: "These items can help counter Sobek.",
            items: [
                { name: "Purification Beads", image: "images/purification_beads.png", path: "https://smite.fandom.com/wiki/Purification_Beads", external: true, description: "Purification Beads can help you immune Sobek's pluck." },
                { name: "Heavenly Wings", image: "images/heavenly_wings.png", path: "https://smite.fandom.com/wiki/Heavenly_Wings", external: true, description: "Heavenly Wings can provide increased movement speed and slow immunity, allowing players to escape from Sobek's slow from his ult." }
            ]
        },
        {
            title: "Counter Playstyles",
            description: "These playstyles or gods are effective against Sobek.",
            items: [
                { name: "Gods with CC Immunity", image: "images/cc_immunity.png", path: "../../categs/yes-toggle/yes-toggle.html?category=ccimmunity", description: "Gods with crowd control immunity can escape Sobek's pluck with a good reaction." },
                { name: "Gods with Leaps", image: "images/leaps.png", path: "../../categs/yes-toggle/yes-toggle.html?category=leaps", description: "Gods with leaps can escape from Sobek's displacement, reducing his impact in fights and making it harder for him to engage effectively." }
            ]
        },
        {
            title: "Antiheal Priority",
            description: "This shows how important it is to build antiheal against Sobek.",
            items: [
                { name: "Medium-low", image: "images/healinggods.png", path: "../../menu/antihealpage/antihealpage.html", description: "Sobek has some sustain from his 3, making antiheal somewhat helpful but not necessary." }
            ]
        }
    ]
},

{
    name: "sol",
    displayName: "Sol",
    backgroundImage: "images/bg-sol.png",
    class: "Mage",
    roles: "Carry/Mid",
    biggestThreats: "Sustained DMG",
    mobility: "Medium",
    playstyles: [
        {
            title: "God Counters",
            description: "These gods are effective counters against Sol.",
            items: [
                { name: "Cerberus", image: "images/cerberus.png", path: "../../gods/godtemplate/godtemplate.html?cerberus", description: "Cerberus's anti-heal and CC can help lock Sol down." },
                { name: "Ah Puch", image: "images/ahpuch.png", path: "../../gods/godtemplate/godtemplate.html?ah_puch", description: "Ah Puch's area damage and antiheal can negate Sol's sustained damage and healing, reducing her impact in fights." },
                { name: "Odin", image: "images/odin.png", path: "../../gods/godtemplate/godtemplate.html?odin", description: "Odin's cage can trap Sol and prevent her from escaping or sustaining." }
            ]
        },
        {
            title: "Counter Items",
            description: "These items can help counter Sol.",
            items: [
                { name: "Antiheal", image: "images/healinggods.png", path: "../../menu/antihealpage/antihealpage.html", description: "Antiheal items can reduce Sol's healing from her abilities, reducing her impact in fights." },
                { name: "Bewitched Dagger", image: "images/bewitched_dagger.png", path: "https://smite.fandom.com/wiki/Bewitched_Dagger", external: true, description: "Bewitched Dagger can provide attack speed reduction, reducing Sol's damage output in fights." },
                { name: "Midgardian Mail", image: "images/midgardian_mail.png", path: "https://smite.fandom.com/wiki/Midgardian_Mail", external: true, description: "Midgardian Mail can provide attack speed reduction, reducing Sol's damage output in fights." }
            ]
        },
        {
            title: "Counter Playstyles",
            description: "These playstyles or gods are effective against Sol.",
            items: [
                { name: "Gods with Built-in Antiheal", image: "images/antiheal.png", path: "../../categs/yes-toggle/yes-toggle.html?category=antiheal", description: "Gods with abilities that apply antiheal can reduce Sol's healing from her abilities, negating her sustained damage and reducing her impact in fights." },
                { name: "Gods with Attack Speed Reduction", image: "images/attackspeed.png", path: "../../categs/no-toggle/no-toggle.html?category=speedreduction", description: "Gods with abilities that provide attack speed reduction can reduce Sol's damage output in fights." },
                { name: "Gods with Walls", image: "images/walls.png", path: "../../categs/yes-toggle/yes-toggle.html?category=walls", description: "Gods with walls can block Sol's escape, especially that Sol has no leap." }
            ]
        },
        {
            title: "Antiheal Priority",
            description: "This shows how important it is to build antiheal against Sol.",
            items: [
                { name: "Medium-high", image: "images/healinggods.png", path: "../../menu/antihealpage/antihealpage.html", description: "Sol has good sustain, making antiheal fairly effective to build against her." }
            ]
        }
    ]
},
{
    name: "sun_wukong",
    displayName: "Sun Wukong",
    backgroundImage: "images/bg-sun_wukong.png",
    class: "Warrior",
    roles: "Solo/Jungle",
    biggestThreats: "Poke/Mobility",
    mobility: "High",
    playstyles: [
        {
            title: "God Counters",
            description: "These gods are effective counters against Sun Wukong.",
            items: [
                { name: "King Arthur", image: "images/kingarthur.png", path: "../../gods/godtemplate/godtemplate.html?king_arthur", description: "King Arthur's dive and high mobility can help match and trade Sun Wukong in lane somewhat." },
                { name: "Artio", image: "images/artio.png", path: "../../gods/godtemplate/godtemplate.html?artio", description: "Artio's cripple can lock the elusive Wukong down and help stick to him." },
                { name: "Cabrakan", image: "images/cabrakan.png", path: "../../gods/godtemplate/godtemplate.html?cabrakan", description: "Cabrakan's crowd control and wall lock Wukong down or at least force his ult sometimes." }
            ]
        },
        {
            title: "Counter Items",
            description: "These items can help counter Sun Wukong.",
            items: [
                { name: "Heavenly Wings", image: "images/heavenly_wings.png", path: "https://smite.fandom.com/wiki/Heavenly_Wings", external: true, description: "Heavenly Wings can provide increased movement speed to chase down Wukong." },
                { name: "Horrific Emblem", image: "images/horrific_emblem.png", path: "https://smite.fandom.com/wiki/Horrific_Emblem", external: true, description: "Horrific Emblem can reduce Sun Wukong's movement speed and help mitigate his high mobility." }
            ]
        },
        {
            title: "Counter Playstyles",
            description: "These playstyles or gods are effective against Sun Wukong.",
            items: [
                { name: "Gods with walls", image: "images/walls.png", path: "../../categs/yes-toggle/yes-toggle.html?category=walls", description: "Gods with walls can block Sun Wukong's abilities and prevent him from engaging effectively, reducing his impact in fights." }
            ]
        },
        {
            title: "Antiheal Priority",
            description: "This shows how important it is to build antiheal against Sun Wukong.",
            items: [
                { name: "Medium", image: "images/healinggods.png", path: "../../menu/antihealpage/antihealpage.html", description: "Sun Wukong has sustain from his ult, making antiheal moderately effective against him compared to other gods." }
            ]
        }
    ]
},
{
    name: "surtr",
    displayName: "Surtr",
    backgroundImage: "images/bg-surtr.png",
    class: "Warrior",
    roles: "Solo/Jungle",
    biggestThreats: "Global Ult/Sustain",
    mobility: "Medium/high",
    playstyles: [
        {
            title: "God Counters",
            description: "These gods are effective counters against Surtr.",
            items: [
                { name: "Ah Puch", image: "images/ahpuch.png", path: "../../gods/godtemplate/godtemplate.html?ah_puch", description: "Ah Puch's area damage and antiheal can negate Surtr's sustain, reducing his impact in fights." },
                { name: "Achilles", image: "images/achilles.png", path: "../../gods/godtemplate/godtemplate.html?achilles", description: "Achilles's sustain can help out-trade Surtr's sustain or execute him when he is low enough." },
                { name: "Medusa", image: "images/medusa.png", path: "../../gods/godtemplate/godtemplate.html?medusa", description: "Medusa's crowd control and anti-heal can be a decent answer to Surtr's playstyle." }
            ]
        },
        {
            title: "Counter Items",
            description: "These items can help counter Surtr.",
            items: [
                { name: "Antiheal", image: "images/antiheal.png", path: "../../menu/antihealpage/antihealpage.html", description: "Antiheal items can reduce Surtr's healing from his abilities, negating his sustain and reducing his impact in fights." }
            ]
        },
        {
            title: "Counter Playstyles",
            description: "These playstyles or gods are effective against Surtr.",
            items: [
                { name: "Gods with walls", image: "images/walls.png", path: "../../categs/yes-toggle/yes-toggle.html?category=walls", description: "Gods with walls can block Surtr's escape routes or at the very least force his global ult." },
                { name: "Gods with Leaps", image: "images/leaps.png", path: "../../categs/yes-toggle/yes-toggle.html?category=leaps", description: "Gods with leaps can escape from Surtr's ult and chase him down or escape him over walls." }
            ]
        },
        {
            title: "Antiheal Priority",
            description: "This shows how important it is to build antiheal against Surtr.",
            items: [
                { name: "High", image: "images/healinggods.png", path: "../../menu/antihealpage/antihealpage.html", description: "Surtr has high sustain , making antiheal highly effective against him compared to other gods." }
            ]
        }
    ]
},

{
    name: "susano",
    displayName: "Susano",
    backgroundImage: "images/bg-susano.png",
    class: "Assassin",
    roles: "Jungle",
    biggestThreats: "Teamfighting ult",
    mobility: "Medium",
    playstyles: [
        {
            title: "God Counters",
            description: "These gods are effective counters against Susano.",
            items: [
                { name: "Ares", image: "images/ares.png", path: "../../gods/godtemplate/godtemplate.html?ares", description: "Ares's cripple from the chains can limit susano's mobility and lock him down." },
                { name: "Artio", image: "images/artio.png", path: "../../gods/godtemplate/godtemplate.html?artio", description: "Artio's cripple can limit susano's mobility and lock him down." },
                { name: "Thor", image: "images/thor.png", path: "../../gods/godtemplate/godtemplate.html?thor", description: "Thor's high mobility, wall and knockup immunity can help counter Susano's playstyle." }
            ]
        },
        {
            title: "Counter Items",
            description: "These items can help counter Susano.",
            items: [
                { name: "Purification Beads", image: "images/purification_beads.png", path: "https://smite.fandom.com/wiki/Purification_Beads", external: true, description: "Purification Beads can provide crowd control immunity for Susano's ult and/or pull." },
                { name: "Aegis Amulet", image: "images/aegis_amulet.png", path: "https://smite.fandom.com/wiki/Aegis_Amulet", external: true, description: "Aegis Amulet can provide damage immunity for Susano's burst damage/ult." }
            ]
        },
        {
            title: "Counter Playstyles",
            description: "These playstyles or gods are effective against Susano.",
            items: [
                { name: "Gods with CC Immunity", image: "images/cc_immunity.png", path: "../../categs/yes-toggle/yes-toggle.html?category=ccimmunity", description: "Gods with crowd control immunity can escape from Susano's crowd control abilities and ult." },
                { name: "Gods with Cripples", image: "images/cripples.png", path: "../../categs/yes-toggle/yes-toggle.html?category=cripples", description: "Gods with abilities that apply cripple can prevent Susano from dashing away, reducing his mobility and impact in teamfights." },
                { name: "Gods with Walls", image: "images/walls.png", path: "../../categs/yes-toggle/yes-toggle.html?category=walls", description: "Gods with walls can block Susano's escape routes if timed correctly." }
            ]
        },
        {
            title: "Antiheal Priority",
            description: "This shows how important it is to build antiheal against Susano.",
            items: [
                { name: "Very Low", image: "images/healinggods.png", path: "../../menu/antihealpage/antihealpage.html", description: "Susano has no healing abilities, making antiheal less effective against him compared to other gods." }
            ]
        }
    ]
},

{
    name: "sylvanus",
    displayName: "Sylvanus",
    backgroundImage: "images/bg-sylvanus.png",
    class: "Guardian",
    roles: "Support",
    biggestThreats: "Pull into ult",
    mobility: "Very low",
    playstyles: [
        {
            title: "God Counters",
            description: "These gods are effective counters against Sylvanus.",
            items: [
                { name: "Ah Puch", image: "images/ahpuch.png", path: "../../gods/godtemplate/godtemplate.html?ah_puch", description: "Ah Puch's area damage and antiheal can negate Sylvanus's healing and reduce his impact in fights." },
                { name: "Odin", image: "images/odin.png", path: "../../gods/godtemplate/godtemplate.html?odin", description: "Odin's cage can trap Sylvanus and prevent him from escaping or using his heals." },
                { name: "Serqet", image: "images/serqet.png", path: "../../gods/godtemplate/godtemplate.html?serqet", description: "Serqet's disruptive crowd control and her ult antiheal can make her counter Sylvanus." }
            ]
        },
        {
            title: "Counter Items",
            description: "These items can help counter Sylvanus.",
            items: [
                { name: "Antiheal", image: "images/antiheal.png", path: "../../menu/antihealpage/antihealpage.html", description: "Antiheal items can reduce Sylvanus's healing, mitigating his sustain and reducing his impact in fights." },
                { name: "Purification Beads", image: "images/purification_beads.png", path: "https://smite.fandom.com/wiki/Purification_Beads", external: true, description: "Purification Beads can provide crowd control immunity, allowing players to escape from Sylvanus's pull/ult knockup." }
            ]
        },
        {
            title: "Counter Playstyles",
            description: "These playstyles or gods are effective against Sylvanus.",
            items: [
                { name: "Gods with Built-in Antiheal", image: "images/antiheal.png", path: "../../categs/yes-toggle/yes-toggle.html?category=antiheal", description: "Gods with abilities that apply antiheal can reduce Sylvanus's healing, negating his sustain and reducing his impact in fights." },
                { name: "Gods with CC Immunity", image: "images/cc_immunity.png", path: "../../categs/yes-toggle/yes-toggle.html?category=ccimmunity", description: "Gods with crowd control immunity can escape from Sylvanus's crowd control abilities, reducing his impact in fights and making it harder for him to lock down targets effectively." },
                { name: "Gods with Walls", image: "images/walls.png", path: "../../categs/yes-toggle/yes-toggle.html?category=walls", description: "Gods with walls can block Sylvanus's escape routes locking him down." }
            ]
        },
        {
            title: "Antiheal Priority",
            description: "This shows how important it is to build antiheal against Sylvanus.",
            items: [
                { name: "Very High", image: "images/healinggods.png", path: "../../menu/antihealpage/antihealpage.html", description: "Sylvanus has strong group healing, making antiheal very effective against him compared to other gods." }
            ]
        }
    ]
},

{
    name: "terra",
    displayName: "Terra",
    backgroundImage: "images/bg-terra.png",
    class: "Guardian",
    roles: "Support",
    biggestThreats: "Teamfighting Ult + CC",
    mobility: "Medium",
    playstyles: [
        {
            title: "God Counters",
            description: "These gods are effective counters against Terra.",
            items: [
                { name: "Ah Puch", image: "images/ahpuch.png", path: "../../gods/godtemplate/godtemplate.html?ah_puch", description: "Ah Puch's area damage and antiheal can negate Terra's healing and reduce her impact in fights." },
                { name: "Odin", image: "images/odin.png", path: "../../gods/godtemplate/godtemplate.html?odin", description: "Odin's cage can trap Terra and prevent her from escaping or using her heals, reducing her impact in fights." },
                { name: "Serqet", image: "images/serqet.png", path: "../../gods/godtemplate/godtemplate.html?serqet", description: "Serqet's disruptive crowd control and anti-heal from the ult can prevent Terra from executing her combo effectively, reducing her impact in fights." }
            ]
        },
        {
            title: "Counter Items",
            description: "These items can help counter Terra.",
            items: [
                { name: "Antiheal", image: "images/healinggods.png", path: "../../menu/antihealpage/antihealpage.html", description: "Antiheal items can reduce Terra's healing, negating her sustain and reducing her impact in fights." },
                { name: "Phantom Shell", image: "images/shell.png", path: "https://smite.fandom.com/wiki/Phantom_Shell", external: true, description: "Phantom Shell can allow teammates to walk through Terra's wall structures." }
            ]
        },
        {
            title: "Counter Playstyles",
            description: "These playstyles or gods are effective against Terra.",
            items: [
                { name: "Gods with Built-in Antiheal", image: "images/antiheal.png", path: "../../categs/yes-toggle/yes-toggle.html?category=antiheal", description: "Gods with abilities that apply antiheal can reduce Terra's healing, negating her sustain and reducing her impact in fights." },
                { name: "Gods with CC Immunity", image: "images/cc_immunity.png", path: "../../categs/yes-toggle/yes-toggle.html?category=ccimmunity", description: "Gods with crowd control immunity can escape from Terra's crowd control abilities, reducing her impact in fights and making it harder for her to lock down targets effectively." },
                { name: "Gods with Walls", image: "images/walls.png", path: "../../categs/yes-toggle/yes-toggle.html?category=walls", description: "Gods with walls can lock down Terra since she has no leap in her kit." }
            ]
        },
        {
            title: "Antiheal Priority",
            description: "This shows how important it is to build antiheal against Terra.",
            items: [
                { name: "Very High", image: "images/healinggods.png", path: "../../menu/antihealpage/antihealpage.html", description: "Terra has strong healing abilities, making antiheal very effective against her compared to other gods." }
            ]
        }
    ]
},
{
    name: "thanatos",
    displayName: "Thanatos",
    backgroundImage: "images/bg-thanatos.png",
    class: "Assassin",
    roles: "Jungle",
    biggestThreats: "Ultimate (Execute)",
    mobility: "Medium",
    playstyles: [
        {
            title: "God Counters",
            description: "These gods are effective counters against Thanatos.",
            items: [
                { name: "Serqet", image: "images/serqet.png", path: "../../gods/godtemplate/godtemplate.html?serqet", description: "Serqet's crowd control and mobility can help her escape Thanatos's and his ultimate, reducing his impact in fights." },
                { name: "Arachne", image: "images/arachne.png", path: "../../gods/godtemplate/godtemplate.html?arachne", description: "Arachne's 1v1 potential and her CC can lockdown Thanatos and counter his strong early game." },
                { name: "Odin", image: "images/odin.png", path: "../../gods/godtemplate/godtemplate.html?odin", description: "Odin's cage can trap Thanatos and block his escape or at least force his ult defensively." }
            ]
        },
        {
            title: "Counter Items",
            description: "These items can help counter Thanatos.",
            items: [
                { name: "Antiheal", image: "images/antiheal.png", path: "../../menu/antihealpage/antihealpage.html", description: "Antiheal items can reduce Thanatos's healing and fairly high sustain." },
                { name: "Purification Beads", image: "images/purification_beads.png", path: "https://smite.fandom.com/wiki/Purification_Beads", external: true, description: "Purification Beads can provide crowd control immunity for the CC from Thana ult or silence on his 3." },
                { name: "Aegis Amulet", image: "images/aegis_amulet.png", path: "https://smite.fandom.com/wiki/Aegis_Amulet", external: true, description: "Aegis Amulet can help you immune Thanatos ult execute if you time it correctly." }
            ]
        },
        {
            title: "Counter Playstyles",
            description: "These playstyles or gods are effective against Thanatos.",
            items: [
                { name: "Gods with Leaps", image: "images/leaps.png", path: "../../categs/yes-toggle/yes-toggle.html?category=leaps", description: "Gods with leaps can escape from Thanatos's ultimate or scythe." },
                { name: "Gods with Walls", image: "images/walls.png", path: "../../categs/yes-toggle/yes-toggle.html?category=walls", description: "Gods with walls can block Thanatos's escape routes or at the very least force his ult defensively." }
            ]
        },
        {
            title: "Antiheal Priority",
            description: "This shows how important it is to build antiheal against Thanatos.",
            items: [
                { name: "High", image: "images/healinggods.png", path: "../../menu/antihealpage/antihealpage.html", description: "Thanatos relies on his high sustain to stay in fights, making antiheal effective against him." }
            ]
        }
    ]
},
{
    name: "the_morrigan",
    displayName: "The Morrigan",
    backgroundImage: "images/bg-the_morrigan.png",
    class: "Mage",
    roles: "Mid/Jungle",
    biggestThreats: "Ultimate (Transform)/burst potential",
    mobility: "Medium/high",
    playstyles: [
        {
            title: "God Counters",
            description: "These gods are effective counters against The Morrigan.",
            items: [
                { name: "Geb", image: "images/geb.png", path: "../../gods/godtemplate/godtemplate.html?geb", description: "Geb's shield and good peal can protect The Morrigan's target from being bursted down." },
                { name: "Bastet", image: "images/bastet.png", path: "../../gods/godtemplate/godtemplate.html?bastet", description: "Bastet's damage over time and good chasedown can make it very difficult for The Morrigan to disengage safely." },
                { name: "Poseidon", image: "images/poseidon.png", path: "../../gods/godtemplate/godtemplate.html?poseidon", description: "Poseidon's cripple and burst potential can take The Morrigan down." }
            ]
        },
        {
            title: "Counter Items",
            description: "These items can help counter The Morrigan.",
            items: [
                { name: "Mystical Mail", image: "images/mystical_mail.png", path: "https://smite.fandom.com/wiki/Mystical_Mail", external: true, description: "Mystical Mail's damage aura can reveal The Morrigan during her stealth and prevent her from escaping effectively, reducing her impact in fights." },
                { name: "Purification Beads", image: "images/purification_beads.png", path: "https://smite.fandom.com/wiki/Purification_Beads", external: true, description: "Purification Beads can help you cleanse the stun from The Morrigan's first ability." },
                { name: "Aegis Amulet", image: "images/aegis_amulet.png", path: "https://smite.fandom.com/wiki/Aegis_Amulet", external: true, description: "Aegis Amulet can provide damage immunity to avoid The Morrigan's burst." }
            ]
        },
        {
            title: "Counter Playstyles",
            description: "These playstyles or gods are effective against The Morrigan .",
            items: [
                { name: "Gods with CC immunity", image: "images/cc_immunity.png", path: "../../categs/yes-toggle/yes-toggle.html?category=ccimmunity", description: "Gods with crowd control immunity can escape from The Morrigan's crowd control abilities, reducing her impact in fights and making it harder for her to lock down targets effectively." },
                { name: "Gods with Walls", image: "images/walls.png", path: "../../categs/yes-toggle/yes-toggle.html?category=walls", description: "Gods with walls can block The Morrigan's escape routes or at the very least force her high cooldown ult." }
            ]
        },
        {
            title: "Antiheal Priority",
            description: "This shows how important it is to build antiheal against The Morrigan.",
            items: [
                { name: "Very Low (Situational)", image: "images/healinggods.png", path: "../../menu/antihealpage/antihealpage.html", description: "The Morrigan has no healing abilities, making antiheal less effective against her compared to other gods. It is situational though and if she is turning into gods with high sustain (such as Set, Thanatos, Anubis, etc), antiheal might be needed." }
            ]
        }
    ]
},
{
    name: "thor",
    displayName: "Thor",
    backgroundImage: "images/bg-thor.png",
    class: "Assassin",
    roles: "Jungle/Solo",
    biggestThreats: "Global ult",
    mobility: "Very high",
    playstyles: [
        {
            title: "God Counters",
            description: "These gods are effective counters against Thor.",
            items: [
                { name: "Thanatos", image: "images/thanatos.png", path: "../../gods/godtemplate/godtemplate.html?thanatos", description: "Thanatos's silence and ability to counter-gank Thor's global ult can be a decent answer." },
                { name: "Aphrodite", image: "images/aphrodite.png", path: "../../gods/godtemplate/godtemplate.html?aphrodite", description: "Aphrodite's crowd control immunity for her and her linked teammate can mitigate Thor's dive. Her stun from the 1 can also help lock Thor down." },
                { name: "Geb", image: "images/geb.png", path: "../../gods/godtemplate/godtemplate.html?geb", description: "Geb's crowd control, good peal and shield can prevent Thor from diving and locking down targets." }
            ]
        },
        {
            title: "Counter Items",
            description: "These items can help counter Thor.",
            items: [
                { name: "Purification Beads", image: "images/purification_beads.png", path: "https://smite.fandom.com/wiki/Purification_Beads", external: true, description: "Purification Beads can cleanse Thor's stuns from the ult or wall." },
                { name: "Aegis Amulet", image: "images/aegis_amulet.png", path: "https://smite.fandom.com/wiki/Aegis_Amulet", external: true, description: "Aegis Amulet can provide damage immunity, allowing players to survive Thor's burst damage, reducing his impact in fights." },
                { name: "Phantom Shell", image: "images/shell.png", path: "https://smite.fandom.com/wiki/Phantom_Shell", external: true, description: "Phantom Shell can allow your team to walk through Thor's wall, making it harder for him to lock targets down." }
            ]
        },
        {
            title: "Counter Playstyles",
            description: "These playstyles or gods are effective against Thor.",
            items: [
                { name: "Gods with CC immunity", image: "images/cc_immunity.png", path: "../../categs/yes-toggle/yes-toggle.html?category=ccimmunity", description: "Gods with crowd control immunity can escape from Thor's crowd control abilities, reducing his impact in fights and making it harder for him to lock down targets effectively." },
                { name: "Gods with a Global Ultimate", image: "images/global.png", path: "../../categs/no-toggle/no-toggle.html?category=globalult", description: "Gods with global presence can match Thor's rotation and global ult." },
                { name: "Gods with Leaps", image: "images/leaps.png", path: "../../categs/yes-toggle/yes-toggle.html?category=leaps", description: "Gods with leaps can escape from Thor's global ultimate and his wall, reducing his impact in fights and making it harder for him to execute targets effectively." }
            ]
        },
        {
            title: "Antiheal Priority",
            description: "This shows how important it is to build antiheal against Thor.",
            items: [
                { name: "Very Low", image: "images/healinggods.png", path: "../../menu/antihealpage/antihealpage.html", description: "Thor has no healing abilities, making antiheal less effective against him compared to other gods." }
            ]
        }
    ]
},

{
    name: "thoth",
    displayName: "Thoth",
    backgroundImage: "images/bg-thoth.png",
    class: "Mage",
    roles: "Mid",
    biggestThreats: "Burst ult",
    mobility: "Medium",
    playstyles: [
        {
            title: "God Counters",
            description: "These gods are effective counters against Thoth.",
            items: [
                { name: "Odin", image: "images/odin.png", path: "../../gods/godtemplate/godtemplate.html?odin", description: "Odin's cage can lock Thoth in since Thoth has no leap in his kit." },
                { name: "Poseidon", image: "images/poseidon.png", path: "../../gods/godtemplate/godtemplate.html?poseidon", description: "Poseidon's whirlpool cripple and his high burst can help take down Thoth quickly." },
                { name: "Ares", image: "images/ares.png", path: "../../gods/godtemplate/godtemplate.html?ares", description: "Ares's cripple from his chains can lock Thoth in place. With no CC immunity on his ult, Thoth is also vulnerable to Ares ult." }
            ]
        },
        {
            title: "Counter Items",
            description: "These items can help counter Thoth.",
            items: [
                { name: "Purification Beads", image: "images/purification_beads.png", path: "https://smite.fandom.com/wiki/Purification_Beads", external: true, description: "Purification Beads can provide crowd control immunity for Thoth's stun if you see him dash you." },
                { name: "Aegis Amulet", image: "images/aegis_amulet.png", path: "https://smite.fandom.com/wiki/Aegis_Amulet", external: true, description: "Aegis Amulet can help you immune his big burst ult." }
            ]
        },
        {
            title: "Counter Playstyles",
            description: "These playstyles or gods are effective against Thoth.",
            items: [
                { name: "Gods with CC immunity", image: "images/cc_immunity.png", path: "../../categs/yes-toggle/yes-toggle.html?category=ccimmunity", description: "Gods with crowd control immunity can escape from Thoth's dash into stun." },
                { name: "Gods with Leaps", image: "images/leaps.png", path: "../../categs/yes-toggle/yes-toggle.html?category=leaps", description: "Gods with leaps can jump all his abilities including his ult and can effectively chase Thoth down." },
                { name: "Gods with Walls", image: "images/walls.png", path: "../../categs/yes-toggle/yes-toggle.html?category=walls", description: "Gods with walls can block Thoth's escape routes, especially since Thoth has no leap in his kit." }
            ]
        },
        {
            title: "Antiheal Priority",
            description: "This shows how important it is to build antiheal against Thoth.",
            items: [
                { name: "Very Low", image: "images/healinggods.png", path: "../../menu/antihealpage/antihealpage.html", description: "Thoth has no healing abilities, making antiheal less effective against him compared to other gods." }
            ]
        }
    ]
},
{
    name: "tiamat",
    displayName: "Tiamat",
    backgroundImage: "images/bg-tiamat.png",
    class: "Mage",
    roles: "Mid",
    biggestThreats: "Tanky Mage/sustained DMG",
    mobility: "Medium",
    playstyles: [
        {
            title: "God Counters",
            description: "These gods are effective counters against Tiamat.",
            items: [
                { name: "Awilix", image: "images/awilix.png", path: "../../gods/godtemplate/godtemplate.html?awilix", description: "Awilix's ult can pull Tiamat out of her leap and Awilix's chasedown can help lock Tiamat down." },
                { name: "Poseidon", image: "images/poseidon.png", path: "../../gods/godtemplate/godtemplate.html?poseidon", description: "Poseidon's cripple whirlpool and burst can help take down Tiamat fast." },
                { name: "Anubis", image: "images/anubis.png", path: "../../gods/godtemplate/godtemplate.html?anubis", description: "Anubis's wrap into burst ult can help take her out before Tiamat goes into her ground form, making her tanky." }
            ]
        },
        {
            title: "Counter Items",
            description: "These items can help counter Tiamat.",
            items: [
                { name: "Erosion", image: "images/erosion.png", path: "https://smite.fandom.com/wiki/Erosion", external: true, description: "Erosion reduces Tiamat's shield making her easier to take down." }
            ]
        },
        {
            title: "Counter Playstyles",
            description: "These playstyles or gods are effective against Tiamat.",
            items: [
                { name: "Gods with Leaps", image: "images/leaps.png", path: "../../categs/yes-toggle/yes-toggle.html?category=leaps", description: "Gods with leaps can escape from Tiamat's crowd control and damage, reducing her impact in teamfights." }
            ]
        },
        {
            title: "Antiheal Priority",
            description: "This shows how important it is to build antiheal against Tiamat.",
            items: [
                { name: "Medium", image: "images/healinggods.png", path: "../../menu/antihealpage/antihealpage.html", description: "Tiamat's sustain from her passive makes antiheal moderately effective against her." }
            ]
        }
    ]
},
{
    name: "tsukuyomi",
    displayName: "Tsukuyomi",
    backgroundImage: "images/bg-tsukuyomi.png",
    class: "Assassin",
    roles: "Jungle",
    biggestThreats: "Teamfighting ult",
    mobility: "Low",
    playstyles: [
        {
            title: "God Counters",
            description: "These gods are effective counters against Tsukuyomi.",
            items: [
                { name: "Sobek", image: "images/sobek.png", path: "../../gods/godtemplate/godtemplate.html?sobek", description: "Sobek's displacement pluck can put Tsukuyomi out of position. With no leaps or dashes, this may lock Tsukuyomi down or force a defensive ult." },
                { name: "Hercules", image: "images/hercules.png", path: "../../gods/godtemplate/godtemplate.html?hercules", description: "Hercules's displacement combo can put Tsukuyomi out of position. With no leaps or dashes, this may lock Tsukuyomi down or force a defensive ult." },
                { name: "Odin", image: "images/odin.png", path: "../../gods/godtemplate/godtemplate.html?odin", description: "Odin's cage ult can lock down Tsukuyomi or force him to ult since Tsukuyomi has no leap." }
            ]
        },
        {
            title: "Counter Items",
            description: "These items can help counter Tsukuyomi.",
            items: [
                { name: "Purification Beads", image: "images/purification_beads.png", path: "https://smite.fandom.com/wiki/Purification_Beads", external: true, description: "Purification Beads can provide crowd control immunity for Tsukuyomi's stun." },
                { name: "Aegis Amulet", image: "images/aegis_amulet.png", path: "https://smite.fandom.com/wiki/Aegis_Amulet", external: true, description: "Aegis Amulet can provide damage immunity and if you aegis Tsukuyomi's entire ult, he does not even teleport to you." }
            ]
        },
        {
            title: "Counter Playstyles",
            description: "These playstyles or gods are effective against Tsukuyomi.",
            items: [
                { name: "Gods with CC immunity", image: "images/cc_immunity.png", path: "../../categs/yes-toggle/yes-toggle.html?category=ccimmunity", description: "Gods with crowd control immunity can escape from Tsukuyomi's stun and lockdown." },
                { name: "Gods with Walls", image: "images/walls.png", path: "../../categs/yes-toggle/yes-toggle.html?category=walls", description: "Gods with walls can block Tsukuyomi's escape routes, especially that Tsukuyomi has no leap." }
            ]
        },
        {
            title: "Antiheal Priority",
            description: "This shows how important it is to build antiheal against Tsukuyomi.",
            items: [
                { name: "Medium/Low", image: "images/healinggods.png", path: "../../menu/antihealpage/antihealpage.html", description: "Tsukuyomi has some sustain, making antiheal moderately effective against him." }
            ]
        }
    ]
},
{
    name: "tyr",
    displayName: "Tyr",
    backgroundImage: "images/bg-tyr.png",
    class: "Warrior",
    roles: "Solo/Jungle",
    biggestThreats: "Teamfighting ult + displacement",
    mobility: "High",
    playstyles: [
        {
            title: "God Counters",
            description: "These gods are effective counters against Tyr.",
            items: [
                { name: "Ares", image: "images/ares.png", path: "../../gods/godtemplate/godtemplate.html?ares", description: "Ares's cripple from his chains can lock Tyr down or force him to ult for mobility." },
                { name: "Ravana", image: "images/ravana.png", path: "../../gods/godtemplate/godtemplate.html?ravana", description: "Ravana's CC immunity from his 2 can help him immune Tyr's CC ult or his displacement abilities." },
                { name: "Chang'e", image: "images/change.png", path: "../../gods/godtemplate/godtemplate.html?change", description: "Chang'e's CC immunity from her 2 can help him immune Tyr's CC ult or his displacement abilities." }
            ]
        },
        {
            title: "Counter Items",
            description: "These items can help counter Tyr.",
            items: [
                { name: "Purification Beads", image: "images/purification_beads.png", path: "https://smite.fandom.com/wiki/Purification_Beads", external: true, description: "Purification Beads can help him immune Tyr's CC ult or his displacement abilities." },
                { name: "Magi's Cloak", image: "images/magis_cloak.png", path: "https://smite.fandom.com/wiki/Magi%27s_Cloak", external: true, description: "Magi's Cloak can help him immune Tyr's CC ult or his displacement abilities." }
            ]
        },
        {
            title: "Counter Playstyles",
            description: "These playstyles or gods are effective against Tyr.",
            items: [
                { name: "Gods with CC immunity", image: "images/cc_immunity.png", path: "../../categs/yes-toggle/yes-toggle.html?category=ccimmunity", description: "Gods with crowd control immunity can escape from Tyr's crowd control abilities, reducing his impact in fights and making it harder for him to lock down targets effectively." },
                { name: "Gods with Cripples", image: "images/cripples.png", path: "../../categs/yes-toggle/yes-toggle.html?category=cripples", description: "Gods with cripples can disrupt Tyr's mobility, reducing his impact in fights and making it harder for him to engage effectively." },
                { name: "Gods with Walls", image: "images/walls.png", path: "../../categs/yes-toggle/yes-toggle.html?category=walls", description: "Gods with walls can block Tyr's escape routes and prevent him from engaging effectively, reducing his impact in fights." }
            ]
        },
        {
            title: "Antiheal Priority",
            description: "This shows how important it is to build antiheal against Tyr.",
            items: [
                { name: "Medium/High", image: "images/healinggods.png", path: "../../menu/antihealpage/antihealpage.html", description: "Tyr's sustain makes antiheal moderately effective against him." }
            ]
        }
    ]
},

{
    name: "ullr",
    displayName: "Ullr",
    backgroundImage: "images/bg-ullr.png",
    class: "Hunter",
    roles: "Carry",
    biggestThreats: "Poke/CC",
    mobility: "Medium",
    playstyles: [
        {
            title: "God Counters",
            description: "These gods are effective counters against Ullr.",
            items: [
                { name: "Ares", image: "images/ares.png", path: "../../gods/godtemplate/godtemplate.html?ares", description: "Ares's cripple from the chains can immobilize Ullr making him easier to take down." },
                { name: "Awilix", image: "images/awilix.png", path: "../../gods/godtemplate/godtemplate.html?awilix", description: "Awilix's crowd control and burst damage can out-trade Ullr. Also, Awilix's ult can pull Ullr out of his leap." },
                { name: "Xbalanque", image: "images/xbalanque.png", path: "../../gods/godtemplate/godtemplate.html?xbalanque", description: "Xbalanque's high mobility and burst damage can out-trade Ullr during fights, reducing his impact." }
            ]
        },
        {
            title: "Counter Items",
            description: "These items can help counter Ullr.",
            items: [
                { name: "Purification Beads", image: "images/purification_beads.png", path: "https://smite.fandom.com/wiki/Purification_Beads", external: true, description: "Purification Beads can cleanse Ullr's axe stun." }
            ]
        },
        {
            title: "Counter Playstyles",
            description: "These playstyles or gods are effective against Ullr.",
            items: [
                { name: "Gods with Built-in Antiheal", image: "images/antiheal.png", path: "../../categs/yes-toggle/yes-toggle.html?category=antiheal", description: "Gods with built-in antiheal can reduce Ullr's sustain, making it harder for him to stay in fights effectively." },
                { name: "Gods with CC immunity", image: "images/cc_immunity.png", path: "../../categs/yes-toggle/yes-toggle.html?category=ccimmunity", description: "Gods with crowd control immunity can escape from Ullr's axe stun, reducing his impact in fights and making it harder for him to lock down targets effectively." },
                { name: "Gods with Cripples", image: "images/cripples.png", path: "../../categs/yes-toggle/yes-toggle.html?category=cripples", description: "Gods with cripples can disrupt Ullr's mobility, reducing his impact in fights and making it harder for him to engage or disengage effectively." }
            ]
        },
        {
            title: "Antiheal Priority",
            description: "This shows how important it is to build antiheal against Ullr.",
            items: [
                { name: "Medium", image: "images/healinggods.png", path: "../../menu/antihealpage/antihealpage.html", description: "Ullr's sustain in his axe form makes antiheal moderately effective against him." }
            ]
        }
    ]
},

{
    name: "vamana",
    displayName: "Vamana",
    backgroundImage: "images/bg-vamana.png",
    class: "Warrior",
    roles: "Solo",
    biggestThreats: "Ultimate + sustain",
    mobility: "Medium/high",
    playstyles: [
        {
            title: "God Counters",
            description: "These gods are effective counters against Vamana.",
            items: [
                { name: "Osiris", image: "images/osiris.png", path: "../../gods/godtemplate/godtemplate.html?osiris", description: "Osiris can effectively deal with Vamana's sustain by antihealing him with his ult. Also, Osiris tether can reduce Vamana's attack speed." },
                { name: "Aphrodite", image: "images/aphrodite.png", path: "../../gods/godtemplate/godtemplate.html?aphrodite", description: "Aphrodite's healing and crowd control immunity can match Vamana's sustain. Also, Aphro ult can help her and her linked teammate avoid Vamana's persistent dive." },
                { name: "Nemesis", image: "images/nemesis.png", path: "../../gods/godtemplate/godtemplate.html?nemesis", description: "Nemesis's protection shred from her ult can help take down the tanky Vamana." }
            ]
        },
        {
            title: "Counter Items",
            description: "These items can help counter Vamana.",
            items: [
                { name: "Gods with Built-in Antiheal", image: "images/antiheal.png", path: "../../categs/yes-toggle/yes-toggle.html?category=antiheal", description: "Gods with built-in antiheal can reduce Vamana's sustain, making it harder for him to dive effectively." },
                { name: "Aegis Amulet", image: "images/aegis_amulet.png", path: "https://smite.fandom.com/wiki/Aegis_Amulet", external: true, description: "Aegis Amulet can immune the DMG from a Vamana diving you with ult." },
                { name: "Erosion", image: "images/erosion.png", path: "https://smite.fandom.com/wiki/Erosion", external: true, description: "Erosion can help reduce Vamana's shield during his ult." }
            ]
        },
        {
            title: "Counter Playstyles",
            description: "These playstyles or gods are effective against Vamana.",
            items: [
                { name: "Gods with Built-in Anti-heal", image: "images/antiheal.png", path: "../../categs/yes-toggle/yes-toggle.html?category=antiheal", description: "Gods with built-in antiheal can reduce Vamana's sustain, making it harder for him to stay in fights effectively." },
                { name: "Gods with Walls", image: "images/walls.png", path: "../../categs/yes-toggle/yes-toggle.html?category=walls", description: "Gods with walls can block Vamana's movement and reduce his effectiveness in fights." }
            ]
        },
        {
            title: "Antiheal Priority",
            description: "This shows how important it is to build antiheal against Vamana.",
            items: [
                { name: "Very High", image: "images/healinggods.png", path: "../../menu/antihealpage/antihealpage.html", description: "Vamana relies heavily on his sustain, making antiheal very effective against him." }
            ]
        }
    ]
},

{
    name: "vulcan",
    displayName: "Vulcan",
    backgroundImage: "images/bg-vulcan.png",
    class: "Mage",
    roles: "Mid",
    biggestThreats: "Burst ult",
    mobility: "Low",
    playstyles: [
        {
            title: "God Counters",
            description: "These gods are effective counters against Vulcan.",
            items: [
                { name: "Fenrir", image: "images/fenrir.png", path: "../../gods/godtemplate/godtemplate.html?fenrir", description: "Fenrir's brutalize makes him knockup immune so Vulcan cannot self-peel." },
                { name: "Da Ji", image: "images/daji.png", path: "../../gods/godtemplate/godtemplate.html?da_ji", description: "Da Ji's 2 makes her knockup immune so Vulcan cannot self-peel." },
                { name: "Ne Zha", image: "images/nezha.png", path: "../../gods/godtemplate/godtemplate.html?ne_zha", description: "Ne Zha's can CC vulcan and sash over his self-peeling knockup." }
            ]
        },
        {
            title: "Counter Items",
            description: "These items can help counter Vulcan.",
            items: [
                { name: "Purification Beads", image: "images/purification_beads.png", path: "https://smite.fandom.com/wiki/Purification_Beads", external: true, description: "Purification Beads can cleanse Vulcan's knockup." },
                { name: "Aegis Amulet", image: "images/aegis_amulet.png", path: "https://smite.fandom.com/wiki/Aegis_Amulet", external: true, description: "Aegis Amulet can help you immune Vulcan's big burst ult." }
            ]
        },
        {
            title: "Counter Playstyles",
            description: "These playstyles or gods are effective against Vulcan.",
            items: [
                { name: "Gods with Leaps", image: "images/leaps.png", path: "../../categs/yes-toggle/yes-toggle.html?category=leaps", description: "Gods with leaps can escape from Vulcan's burst ultimate, reducing his impact in fights and making it harder for him to lock down targets effectively." },
                { name: "Gods with Walls", image: "images/walls.png", path: "../../categs/yes-toggle/yes-toggle.html?category=walls", description: "Gods with walls can block Vulcan's escape routes since he has no leap in his kit." }
            ]
        },
        {
            title: "Antiheal Priority",
            description: "This shows how important it is to build antiheal against Vulcan.",
            items: [
                { name: "Very Low", image: "images/healinggods.png", path: "../../menu/antihealpage/antihealpage.html", description: "Vulcan has no healing abilities, making antiheal less effective against him compared to other gods." }
            ]
        }
    ]
},

{
    name: "xbalanque",
    displayName: "Xbalanque",
    backgroundImage: "images/bg-xbalanque.png",
    class: "Hunter",
    roles: "Carry",
    biggestThreats: "Ult/poke",
    mobility: "Medium",
    playstyles: [
        {
            title: "God Counters",
            description: "These gods are effective counters against Xbalanque.",
            items: [
                { name: "Nut", image: "images/nut.png", path: "../../gods/godtemplate/godtemplate.html?nut", description: "Nut's ultimate can take her out of danger when Xbalanque is ulting. Also, Nut's high auto attack output can out-trade Xbalanque." },
                { name: "Nu Wa", image: "images/nuwa.png", path: "../../gods/godtemplate/godtemplate.html?nu_wa", description: "Nu Wa's can take her out of danger when Xbalanque is ulting and return some damage on his team weakening their engage." },
                { name: "Rama", image: "images/rama.png", path: "../../gods/godtemplate/godtemplate.html?rama", description: "Rama's ultimate can take him out of danger when Xbalanque is ulting and his built-in attack speed can help him out-trade Xbalanque." }
            ]
        },
        {
            title: "Counter Items",
            description: "These items can help counter Xbalanque.",
            items: [
                { name: "Bewitched Dagger", image: "images/bewitched_dagger.png", path: "https://smite.fandom.com/wiki/Bewitched_Dagger", external: true, description: "Bewitched Dagger can slow Xbalanque's attack speed, reducing his poke and overall damage output in fights." },
                { name: "Midgardian Mail", image: "images/midgardian_mail.png", path: "https://smite.fandom.com/wiki/Midgardian_Mail", external: true, description: "Midgardian Mail can slow Xbalanque's attack speed, reducing his poke and overall damage output in fights." }
            ]
        },
        {
            title: "Counter Playstyles",
            description: "These playstyles or gods are effective against Xbalanque.",
            items: [
                { name: "Gods with Walls", image: "images/wall.png", path: "../../categs/yes-toggle/yes-toggle.html?category=walls", description: "With no leap and a dash that does not go through walls, gods that create walls can lock the slippery Xbalanque down." }
            ]
        },
        {
            title: "Antiheal Priority",
            description: "This shows how important it is to build antiheal against Xbalanque.",
            items: [
                { name: "Very Low", image: "images/healinggods.png", path: "../../menu/antihealpage/antihealpage.html", description: "Xbalanque has no healing abilities, making antiheal less effective against him compared to other gods." }
            ]
        }
    ]
},

{
    name: "xing_tian",
    displayName: "Xing Tian",
    backgroundImage: "images/bg-xing_tian.png",
    class: "Guardian",
    roles: "Support/Solo",
    biggestThreats: "Displacement ult",
    mobility: "Medium",
    playstyles: [
        {
            title: "God Counters",
            description: "These gods are effective counters against Xing Tian.",
            items: [
                { name: "Ares", image: "images/ares.png", path: "../../gods/godtemplate/godtemplate.html?ares", description: "Ares' can cripple Xing Tian preventing him from using his double leap. Also, Ares can immune Xing Tian ult by using his own." },
                { name: "Chiron", image: "images/chiron.png", path: "../../gods/godtemplate/godtemplate.html?chiron", description: "Chiron's group cleanse and his CC immune ult can lower the impact of Xing Tian ult." },
                { name: "Nox", image: "images/nox.png", path: "../../gods/godtemplate/godtemplate.html?nox", description: "Nox's silence and root can disrupt Xing Tian's combos and mobility." }
            ]
        },
        {
            title: "Counter Items",
            description: "These items can help counter Xing Tian.",
            items: [
                { name: "Purification Beads", image: "images/purification_beads.png", path: "https://smite.fandom.com/wiki/Purification_Beads", external: true, description: "Purification Beads can cleanse Xing Tian's big displacement ult." },
                { name: "Magi's Cloak", image: "images/magis_cloak.png", path: "https://smite.fandom.com/wiki/Magi's_Cloak", external: true, description: "Magi's Cloak cleanse Xing Tian's big displacement ult." }
            ]
        },
        {
            title: "Counter Playstyles",
            description: "These playstyles or gods are effective against Xing Tian.",
            items: [
                { name: "Gods with CC Immunity", image: "images/cc_immunity.png", path: "../../categs/yes-toggle/yes-toggle.html?category=ccimmunity", description: "Gods with crowd control immunity can escape from Xing Tian's displacement ultimate, reducing his impact in fights and making it harder for him to engage effectively." },
                { name: "Gods with Leaps", image: "images/leaps.png", path: "../../categs/yes-toggle/yes-toggle.html?category=leaps", description: "Gods with leaps can jump over Xing Tian's displacement ultimate, reducing his impact in fights and making it harder for him to engage effectively." }
            ]
        },
        {
            title: "Antiheal Priority",
            description: "This shows how important it is to build antiheal against Xing Tian.",
            items: [
                { name: "Medium", image: "images/healinggods.png", path: "../../menu/antihealpage/antihealpage.html", description: "Xing Tian has some sustain in his kit from his HP5, making antiheal moderately effective against him, especially if he builds more HP5." }
            ]
        }
    ]
},

{
    name: "yemoja",
    displayName: "Yemoja",
    backgroundImage: "images/bg-yemoja.png",
    class: "Guardian",
    roles: "Support",
    biggestThreats: "Teamfighting ult",
    mobility: "Medium/low",
    playstyles: [
        {
            title: "God Counters",
            description: "These gods are effective counters against Yemoja.",
            items: [
                { name: "Awilix", image: "images/awilix.png", path: "../../gods/godtemplate/godtemplate.html?awilix", description: "Awilix's ultimate can pull Yemoja out of her leap from her bubble portals. Awilix leap can also help her avoid being trapped by Yemoja ult." },
                { name: "Odin", image: "images/odin.png", path: "../../gods/godtemplate/godtemplate.html?odin", description: "Odin's ultimate can trap Yemoja and her allies inside, disrupting her teamfighting and reducing her heals and impact in fights. Odin can also leap out of Yemoja ult." },
                { name: "Xing Tian", image: "images/xingtian.png", path: "../../gods/godtemplate/godtemplate.html?xing_tian", description: "Xing Tian's ultimate can disrupt Yemoja's teamfighting, separate her team and reduce her impact in fights. Xing Tian can also leap out of Yemoja ult." }
            ]
        },
        {
            title: "Counter Items",
            description: "These items can help counter Yemoja.",
            items: [
                { name: "Phantom Shell", image: "images/shell.png", path: "https://smite.fandom.com/wiki/Phantom_Shell", external: true, description: "Phantom Shell can allow your team to walk through Yemoja's big walls ult." },
                { name: "Erosion", image: "images/erosion.png", path: "https://smite.fandom.com/wiki/Erosion", external: true, description: "Erosion can reduce Yemoja's group shields applied to her teammates." }
            ]
        },
        {
            title: "Counter Playstyles",
            description: "These playstyles or gods are effective against Yemoja.",
            items: [
                { name: "Gods with Built-in Antiheal", image: "images/antiheal.png", path: "../../categs/yes-toggle/yes-toggle.html?category=antiheal", description: "Gods with built-in antiheal can reduce Yemoja's group healing, reducing her sustain and impact in teamfights." },
                { name: "Gods with Leaps", image: "images/leaps.png", path: "../../categs/yes-toggle/yes-toggle.html?category=leaps", description: "Gods with leaps can escape from Yemoja's teamfighting ult, reducing her impact in fights and making it harder for her to engage effectively." },
                { name: "Gods with Walls", image: "images/walls.png", path: "../../categs/yes-toggle/yes-toggle.html?category=walls", description: "Gods with walls can block Yemoja escape routes and/or separate teams in her ult." }
            ]
        },
        {
            title: "Antiheal Priority",
            description: "This shows how important it is to build antiheal against Yemoja.",
            items: [
                { name: "Very High", image: "images/healinggods.png", path: "../../menu/antihealpage/antihealpage.html", description: "Yemoja relies heavily on healing, making antiheal very effective against her." }
            ]
        }
    ]
},

{
    name: "ymir",
    displayName: "Ymir",
    backgroundImage: "images/bg-ymir.png",
    class: "Guardian",
    roles: "Support",
    biggestThreats: "CC + high DMG output",
    mobility: "Very low",
    playstyles: [
        {
            title: "God Counters",
            description: "These gods are effective counters against Ymir.",
            items: [
                { name: "Serqet", image: "images/serqet.png", path: "../../gods/godtemplate/godtemplate.html?serqet", description: "Serqet's mobility and burst damage can effectively deal with Ymir's slows and wall." },
                { name: "Anhur", image: "images/anhur.png", path: "../../gods/godtemplate/godtemplate.html?anhur", description: "Anhur can use Ymir's wall for his impale. Anhur can also leap Ymir wall and ult. Anhur's CC immune ult also neutralizes Ymir's freeze." },
                { name: "Kali", image: "images/kali.png", path: "../../gods/godtemplate/godtemplate.html?kali", description: "Kali can leap Ymir's wall and ult making her a good god for chasing Ymir and his team down." }
            ]
        },
        {
            title: "Counter Items",
            description: "These items can help counter Ymir.",
            items: [
                { name: "Purification Beads", image: "images/purification_beads.png", path: "https://smite.fandom.com/wiki/Purification_Beads", external: true, description: "Purification Beads can provide crowd control immunity, allowing players to escape from Ymir's crowd control abilities, reducing his impact in fights." },
                { name: "Phantom Shell", image: "images/shell.png", path: "https://smite.fandom.com/wiki/Phantom_Shell", external: true, description: "Phantom Shell can allow teams to walk through Ymir's wall." }
            ]
        },
        {
            title: "Counter Playstyles",
            description: "These playstyles or gods are effective against Ymir.",
            items: [
                { name: "Gods with CC Immunity", image: "images/cc_immunity.png", path: "../../categs/yes-toggle/yes-toggle.html?category=ccimmunity", description: "Gods with crowd control immunity can negate Ymir's crowd control, reducing his impact in teamfights." },
                { name: "Gods with Leaps", image: "images/leaps.png", path: "../../categs/yes-toggle/yes-toggle.html?category=leaps", description: "Gods with leaps can escape from Ymir's crowd control and wall." }
            ]
        },
        {
            title: "Antiheal Priority",
            description: "This shows how important it is to build antiheal against Ymir.",
            items: [
                { name: "Very Low", image: "images/healinggods.png", path: "../../menu/antihealpage/antihealpage.html", description: "Ymir has no healing abilities, making antiheal less effective against him compared to other gods." }
            ]
        }
    ]
},

{
    name: "yu_huang",
    displayName: "Yu Huang",
    backgroundImage: "images/bg-yu_huang.png",
    class: "Mage",
    roles: "Mid",
    biggestThreats: "Poke/Burst dmg",
    mobility: "Medium",
    playstyles: [
        {
            title: "God Counters",
            description: "These gods are effective counters against Yu Huang.",
            items: [
                { name: "Persephone", image: "images/persephone.png", path: "../../gods/godtemplate/godtemplate.html?persephone", description: "Persephone's sustained damage and crowd control can effectively deal with Yu Huang's poke and burst damage, reducing his impact in teamfights." },
                { name: "Susano", image: "images/susano.png", path: "../../gods/godtemplate/godtemplate.html?susano", description: "Susano's mobility and burst damage can effectively deal with Yu Huang's poke and burst damage, reducing his impact in teamfights." },
                { name: "Loki", image: "images/loki.png", path: "../../gods/godtemplate/godtemplate.html?loki", description: "Loki's stealth and burst damage can effectively shut down Yu Huang's poke and burst damage, reducing his impact in teamfights." }
            ]
        },
        {
            title: "Counter Items",
            description: "These items can help counter Yu Huang.",
            items: [
                { name: "Purification Beads", image: "images/purification_beads.png", path: "https://smite.fandom.com/wiki/Purification_Beads", external: true, description: "Purification Beads can provide crowd control immunity against Yu Huang's ult." },
                { name: "Aegis Amulet", image: "images/aegis_amulet.png", path: "https://smite.fandom.com/wiki/Aegis_Amulet", external: true, description: "Aegis Amulet can help you immune Yu Huang's burst damage." }
            ]
        },
        {
            title: "Counter Playstyles",
            description: "These playstyles or gods are effective against Yu Huang.",
            items: [
                { name: "Gods with CC Immunity", image: "images/cc_immunity.png", path: "../../categs/yes-toggle/yes-toggle.html?category=ccimmunity", description: "Gods with crowd control immunity can escape from Yu Huang's CC and ult." },
                { name: "Gods with Leaps", image: "images/leaps.png", path: "../../categs/yes-toggle/yes-toggle.html?category=leaps", description: "Gods with leaps can escape from Yu Huang's CC and ult." }
            ]
        },
        {
            title: "Antiheal Priority",
            description: "This shows how important it is to build antiheal against Yu Huang.",
            items: [
                { name: "Very Low", image: "images/healinggods.png", path: "../../menu/antihealpage/antihealpage.html", description: "Yu Huang has no healing abilities, making antiheal less effective against him compared to other gods." }
            ]
        }
    ]
},

{
    name: "zeus",
    displayName: "Zeus",
    backgroundImage: "images/bg-zeus.png",
    class: "Mage",
    roles: "Mid",
    biggestThreats: "Big circle ult",
    mobility: "Low",
    playstyles: [
        {
            title: "God Counters",
            description: "These gods are effective counters against Zeus.",
            items: [
                { name: "Loki", image: "images/loki.png", path: "../../gods/godtemplate/godtemplate.html?loki", description: "Loki's stealth and burst damage can effectively shut down the immobile Zeus." },
                { name: "Sobek", image: "images/sobek.png", path: "../../gods/godtemplate/godtemplate.html?sobek", description: "Sobek's displacement and crowd control can disrupt Zeus's positioning and put him in dangerous spots." },
                { name: "Kuzenbo", image: "images/kuzenbo.png", path: "../../gods/godtemplate/godtemplate.html?kuzenbo", description: "Kuzenbo's reflect damage and displacement abilities can put Zeus in a dangerous spot." }
            ]
        },
        {
            title: "Counter Items",
            description: "These items can help counter Zeus.",
            items: [
                { name: "Aegis Amulet", image: "images/aegis_amulet.png", path: "https://smite.fandom.com/wiki/Aegis_Amulet", external: true, description: "Aegis Amulet can provide damage immunity to avoid Zeus' burst damage." }
            ]
        },
        {
            title: "Counter Playstyles",
            description: "These playstyles or gods are effective against Zeus.",
            items: [
                { name: "Gods with Displacement", image: "images/displacement.png", path: "../../categs/yes-toggle/yes-toggle.html?category=displacement", description: "Gods with displacement abilities can disrupt Zeus's positioning and put him in a dangerous spot." }
            ]
        },
        {
            title: "Antiheal Priority",
            description: "This shows how important it is to build antiheal against Zeus.",
            items: [
                { name: "Very Low", image: "images/healinggods.png", path: "../../menu/antihealpage/antihealpage.html", description: "Zeus has no healing abilities, making antiheal less effective against him compared to other gods." }
            ]
        }
    ]
},

{
    name: "zhong_kui",
    displayName: "Zhong Kui",
    backgroundImage: "images/bg-zhong_kui.png",
    class: "Mage",
    roles: "Mid/Solo",
    biggestThreats: "Ult sustain dmg",
    mobility: "Very low",
    playstyles: [
        {
            title: "God Counters",
            description: "These gods are effective counters against Zhong Kui.",
            items: [
                { name: "Odin", image: "images/odin.png", path: "../../gods/godtemplate/godtemplate.html?odin", description: "Odin's ultimate can trap Zhong Kui and prevent him from healing." },
                { name: "Thor", image: "images/thor.png", path: "../../gods/godtemplate/godtemplate.html?thor", description: "Thor's crowd control and wall can lock down Zhong Kui or peal him off Thor's teammates." },
                { name: "Cerberus", image: "images/cerberus.png", path: "../../gods/godtemplate/godtemplate.html?cerberus", description: "Cerberus's built-in antiheal and displacement ult can put Zhong Kui in danger especially with no leap or CC immunity in Zhong Kui's kit." }
            ]
        },
        {
            title: "Counter Items",
            description: "These items can help counter Zhong Kui.",
            items: [
                { name: "Aegis Amulet", image: "images/aegis_amulet.png", path: "https://smite.fandom.com/wiki/Aegis_Amulet", external: true, description: "Aegis Amulet can provide damage immunity against Zhong Kui's big ult damage." },
                { name: "Antiheal", image: "images/antiheal.png", path: "../../menu/antihealpage/antihealpage.html", description: "Antiheal items can reduce the effectiveness of Zhong Kui's sustain damage by reducing his healing." }
            ]
        },
        {
            title: "Counter Playstyles",
            description: "These playstyles or gods are effective against Zhong Kui.",
            items: [
                { name: "Gods with Displacement", image: "images/displacement.png", path: "../../categs/yes-toggle/yes-toggle.html?category=displacement", description: "Gods with displacement abilities can either peal Zhong Kui away from your team or put him in a bad spot, especially that he has no escape abilities." },
                { name: "Gods with Leaps", image: "images/leaps.png", path: "../../categs/yes-toggle/yes-toggle.html?category=leaps", description: "Gods with leap abilities can quickly escape from Zhong Kui's ultimate, reducing his impact in teamfights." }
            ]
        },
        {
            title: "Antiheal Priority",
            description: "This shows how important it is to build antiheal against Zhong Kui.",
            items: [
                { name: "Very High", image: "images/healinggods.png", path: "../../menu/antihealpage/antihealpage.html", description: "Zhong Kui's has significant sustain, making antiheal very effective against him in teamfights." }
            ]
        }
    ]
}

        ]
    }     
];

const godList = document.getElementById('god-list');
let index = Gods[0].items.findIndex(god => god.name === window.location.href.split('?')[1]);

// Function to display playstyles, their icons, and counters
function displayPlayStyles() {
    // Clear previous list
    godList.innerHTML = '';
    console.log(Gods[0].items[0].playstyles);
    document.getElementById('sitet').innerHTML = Gods[0].items[index].displayName;
    document.getElementById("page-title").innerHTML = Gods[0].items[index].displayName;
    document.getElementById('class').children[0].innerHTML = Gods[0].items[index].class;
    document.getElementById('roles').children[0].innerHTML = Gods[0].items[index].roles;
    document.getElementById('biggest-threat').children[0].innerHTML = Gods[0].items[index].biggestThreats;
    document.getElementById('mobility').children[0].innerHTML = Gods[0].items[index].mobility;
    document.getElementById('god-list').style.background = "url(" + Gods[0].items[index].backgroundImage + ")no-repeat";
    // Display playstyles, their icons, and counters
    Gods[0].items[index].playstyles.forEach((playStyle, index) => {
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
                playStyleName.style.color = '#febe26'; // Change color to gold
            });

            // Adding mouseout event to the playstyle image
            playStyleImage.addEventListener('mouseout', function() {
                tooltipText.style.visibility = 'hidden';
                playStyleName.style.color = 'white'; // Change color back to white
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
                playStyleName.style.color = '#febe26'; // Change color to gold
            });
            playStyleName.addEventListener('mouseout', function() {
                tooltipText.style.visibility = 'hidden';
                playStyleName.style.color = 'white'; // Change color back to white
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

