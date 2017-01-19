$(function () {

    var waveRevo = {
        arietta: {
            header: '<div class="char-header" style="background-color: #307d7e;"><h1>Butterfly Empress</h1><h6>T i t l e</h6></div>',
            name: "Arietta",
            position: "Party Leader",
            class: "[Imperator]",
            subclass: "[Dancer]",
            weapon: "(1) Large Chakram",
            classUsage: "Imperator Usage",
            classUsageText: "To impose immense pressure to bend all to her will",
            subclassUsage: "Dancer Usage",
            subclassUsageText: "To enchant foes and support allies",
            hobbies: '<li>Dragging everyone in her party to join her on random quests and dungeon raids</li><li>Getting rid of NPCs to prevent story progression</li><li>Destroying other players in PvP</li><li>Eating snacks</li>',
            likes: '<li>Chocolate ice cream</li><li>Doing events with party members</li><li>Completing a raid without anyone dying</li><li>Completing a PVP Match without anyone dying</li>',
            dislikes: '<li>Letting an enemy run away</li><li>Not completing a dungeon</li><li>Being unable to finish a quest or event</li><li>Disappointing her friends</li><li>Being useless</li>',
            bio: '<p class="bio">Once a person who only wished to help others as well as be friends with everyone, the world taught her that not all souls were good. Gathering people whom she knew she could count on, Arietta formed a party dedicated to extinguishing the life of all who were unworthy to be in this world. She’s friendly outside of battle, but once an enemy appears the only thing on her mind is total annihilation. Either surrender to her immediately or be tortured to death.</p>',
            quote: '<div class="quote ari">“Stop messing around and just kill them already.”</div>',
            footer: '<div class="footer-bar" style="background-color: #307d7e;"></div>',
            image: '<img src="/assets/img/arilsor1.png" />'
        },
        azuru: {
            header: '<div class="char-header" style="background-color: #8b99ab;"><h1>Sinnabun</h1><h6>T i t l e</h6></div>',
            name: "Azuru",
            position: "DPS/Reality Check",
            class: "[Dragoon]",
            subclass: "[Floor Tank]",
            weapon: "(1) Regular Ol' Halberd",
            classUsage: "Dragoon Usage",
            classUsageText: "[MUST BE LVL 906 TO ACCESS]",
            subclassUsage: "Floor Tank Usage",
            subclassUsageText: "[MUST BE LVL 906 TO ACCESS]",
            hobbies: '<li>Being an incredibly greedy DPS</li><li>Blitzing through content at the speed of sound</li><li>Finding cute gear over functional ones</li><li>Forgetting to log out while sleeping</li>',
            likes: '<li>Stealing aggro</li><li>Being that "World First" nerd</li><li>Wearing silly gear in a serious situation</li>',
            dislikes: '<li>Stealing aggro and actually dying</li><li>Carrot jokes</li><li>Others grabbing the tail</li>',
            bio: '<p class="bio">Actually is that person that would run content solo in an MMO. Only hangs around because sometimes other people are actually required to clear instances. Despite the inability to play nice with others, Azuru\'s more willing to help out than cause trouble and doesn\'t take the game life too seriously.</p><p class="bio">Will still freak out if you try to touch the tail though.</p>',
            quote: '<div class="quote azu">“Man, I just can\'t lose that AE aggro.”</div>',
            footer: '<div class="footer-bar" style="background-color: #8b99ab;"></div>',
            image: '<img src="/assets/img/azulsor1.png" style="width: 441px; right: -85px;"/>'
        },
        refu: {
            header: '<div class="char-header" style="background-color: #d68837;"><h1>Mother of Darkness</h1><h6>T i t l e</h6></div>',
            name: "&#12524 &#12501 [Refu]",
            position: "DPS/Party Scouter",
            class: "[Demon Lord]",
            subclass: "[Summoner]",
            weapon: "(1) Arcane Tome",
            classUsage: "Demon Lord Usage",
            classUsageText: "To summon demons and channel magic",
            subclassUsage: "Summoner Usage",
            subclassUsageText: "[SEE ENTRY DEMON LORD USAGE]",
            hobbies: '<li>Protecting the Party</li><li>(BURN THROUGH EVERYTHING)</li><li>Not protecting the not-party???</li><li>Brushing own wings (brushie brushie)</li><li>Reading</li>',
            likes: '<li>Winged mounts</li><li>HoTs</li><li>DoTs</li><li>Napping under trees</li><li>Taking care of her summons</li><li>PKing those that aren\'t worthy (I guess)</li><li>Speaking in cryptic riddles</li>',
            dislikes: '<li>Tanks that don\'t wait for buffs</li>',
            bio: '<p class="bio">A demon lord compelled by the idea of clearing this world and beginning it anew. There’s just something about ruin and chaos that seems to fit the class of Demon Lord and makes the notion a little hard to turn down. Somewhat obsessed with edgy armor that matches the wings. Will put all talent points on making wings bigger.</p>',
            quote: '<div class="quote refu">“The morning sings, and so will you.”</div>',
            footer: '<div class="footer-bar" style="background-color: #d68837;"></div>',
            image: '<img src="/assets/img/refulsor1.png" />'
        },
        kanono: {
            header: '<div class="char-header" style="background-color: #ffa62f;"><h1>Puddle</h1><h6>T i t l e</h6></div>',
            name: "Kanono",
            position: "Accountant",
            class: "[Shape-Shifter]",
            subclass: "[Crybaby]",
            weapon: "(1) Pole (?)",
            classUsage: "Shape-Shifter Usage",
            classUsageText: "No. He has a pole but it's for decoration. Maybe will hit you with it?",
            subclassUsage: "Crybaby Usage",
            subclassUsageText: "[SEE ENTRY SHAPE-SHIFTER USAGE]",
            hobbies: '<li>Talking to people</li><li>Cheering up teammates</li><li>Being excited</li><li>Making puns</li>',
            likes: '<li>His friends</li><li>Pastries</li><li>Puns</li><li>People</li><li>Pretty much everything is alright</li>',
            dislikes: '<li>Meanness</li><li>Math</li><li>Steve Buscemi</li><li>Violence</li><li>Perverts</li><li>SKYPE EMOJIS</li>',
            bio: '<p class="bio">A puddle turned into a person by Arietta to do Maths  and keep track of Money, which usually goes towards Ground Beef Sandwhiches and Door Repair. Is very wary of Red. Given his view point of being formerly inanimate, he thinks all of life is beautiful, and doesn’t understand why hatred exists. He’s constantly worried about people working too hard, and tries to help where he can so people don’t die.</p>',
            quote: '<div class="quote kan">“People are so amazing, even when that can’t see it, but I wanna make everyone able to see how amazing they are, so then they can like themselves as much as I like them!!”</div>',
            footer: '<div class="footer-bar" style="background-color: #ffa62f;"></div>',
            image: '<img src="/assets/img/kanlsor1.png" style="width: 336px; right: -16px;" />'
        },
        red: {
            header: '<div class="char-header" style="background-color: #ff6347;"><h1>Small Medium at Large</h1><h6>T i t l e</h6></div>',
            name: "Redasatomato [Jane]",
            position: "Defense/Guild Memer",
            class: "[Monk]",
            subclass: "[Necromancer]",
            weapon: "(1) [MUST BE LVL 906 TO ACCESS]",
            classUsage: "Monk Usage",
            classUsageText: "[MUST BE LVL 906 TO ACCESS]",
            subclassUsage: "Necromancer Usage",
            subclassUsageText: "[MUST BE LVL 906 TO ACCESS]",
            hobbies: '<li>( ͡° ͜ʖ ͡°) </li><li>( ͡° ͜ʖ ͡°) </li><li>( ͡° ͜ʖ ͡°) </li><li>( ͡° ͜ʖ ͡°) </li>',
            likes: '<li>( ͡° ͜ʖ ͡°) </li>',
            dislikes: '<li>( ͡° ͜ʖ ͡°) </li>',
            bio: '<p class="bio">Is the reason why expenses go to Ground Beef Sandwiches and Door Repair.</p><p class="bio">I actually am just memeing all over again I had a idea last night that went from Edgey mcFlutters to meme but basically the one NPC party character that will just not die and messes up the game by not dying oops</p><p class="bio">Like some player (a bard?) made the mistake of saving her instead of letting her die like she\'s supposed to in-game and it’s kind of fudged all the quests over on her side of the game, leading to 3 in game years of working together with said player to somehow complete game quests? But the game itself has some equivalent to an autocorrect function and ok let me work this out i am getting multiple ideas here. I’m gonna change a few things.</p>',
            quote: '<div class="quote red">“( ͡° ͜ʖ ͡°).”</div>',
            footer: '<div class="footer-bar" style="background-color: #ff6347;"></div>',
            image: '<img src="/assets/img/redlsor1.png" style="width: 310px; right: -16px;" />'
        },
        samine: {
            header: '<div class="char-header" style="background-color: #3bb9ff;"><h1>Sweet & Sour</h1><h6>T i t l e</h6></div>',
            name: "Samine",
            position: "DPS/Inventory Clerk",
            class: "[Thief]",
            subclass: "[Merchant]",
            weapon: "(1) Poison Tipped Dagger",
            classUsage: "Thief Usage",
            classUsageText: "[MUST BE LVL 906 TO ACCESS]",
            subclassUsage: "Merchant Usage",
            subclassUsageText: "[MUST BE LVL 906 TO ACCESS]",
            hobbies: '<li>Stealing/Swindling</li><li>Sneaking around to gather intel</li><li>Selling treasures/equipment found in dungeons</li>',
            likes: '<li>Providing her friends with equipment and potions</li><li>Gaining high profits</li><li>Earning achievements</li><li>Filling out maps</li><li>Phoenix</li>',
            dislikes: '<li>Beggars</li><li>Competition between merchants</li><li>Players rolling Need instead of Greed on drops</li><li>Loud barking</li>',
            bio: '<p class="bio">Orphaned from a young age and forced to fend for herself, she’s learned plenty of tricks of the trade to keep her wealth from depleting ever again. Because of her past conditions, she’s also picked up plenty of trust issues, but this hasn’t stopped her from forming a special bond with her party. Still, despite how sweet she may seem, it’d be wise not to accidentally step on her tail...</p>',
            quote: '<div class="quote sami">“Welcome! How I may I help you?~ You ARE here to drop some mezzos, right?”</div>',
            footer: '<div class="footer-bar" style="background-color: #3bb9ff;"></div>',
            image: '<img src="/assets/img/samilsor1.png" style="width: 377px; right: -57px;" />'
        },
        codephoenix: {
            header: '<div class="char-header" style="background-color: #2b3856;"><h1>Boytoy</h1><h6>T i t l e</h6></div>',
            name: "CodePhoenixVA",
            position: "DPS/Stylish Elf",
            class: "[Gunslinger]",
            subclass: "[Duelist]",
            weapon: "(2) Shotgun",
            classUsage: "Gunslinger Usage",
            classUsageText: "[MUST BE LVL 906 TO ACCESS]",
            subclassUsage: "Duelist Usage",
            subclassUsageText: "[MUST BE LVL 906 TO ACCESS]",
            hobbies: '<li>Getting into fights</li><li>Helping people out</li><li>Stealing</li>',
            likes: '<li>Music</li><li>Winning fights</li><li>Being the center of attention</li><li>His ego</li><li>Samine</li>',
            dislikes: '<li>Losing fights</li><li>Failing to help</li><li>Others being better at things he is good at</li><li>Bugs</li>',
            bio: '<p class="bio">Despite his cocky and overly optimistic attitude, he always finds himself in trouble more times than he can count. In fact, his smug face and ego is what gets him in trouble in the first place. After running around solo for so long, he ran into Samine and realized that she had stolen something more than what he had in his pockets. The two stuck to each other like glue and always worked together on many quests, despite him getting on her nerves with his loud mouth. Her party took him in with open arms, not knowing what they were gonna be in for in the long run...</p>',
            quote: '<div class="quote code">“You should be grateful that the last thing you see is me.”</div>',
            footer: '<div class="footer-bar" style="background-color: #2b3856;"></div>',
            image: '<img src="/assets/img/codelsor1.png" style="width: 377px; right: -57px;" />'
        },
        rhonos: {
            header: '<div class="char-header" style="background-color: #7a2eaa;"><h1>Eggplant Knight</h1><h6>T i t l e</h6></div>',
            name: "Rhonos",
            position: "Tank/Fantasy Indulger",
            class: "[Knight]",
            subclass: "[Wizard]",
            weapon: "(1) Temperance, Family Heirloom Sword",
            classUsage: "Knight Usage",
            classUsageText: "To protect those dear not with shield but one's life",
            subclassUsage: "Duelist Usage",
            subclassUsageText: "To make things look cool.",
            hobbies: '<li>Long heroic speeches</li><li>Dramatic gesturing</li><li>Practicing baby magic</li>',
            likes: '<li>Adventure</li><li>Magical spells</li><li>Mimics</li>',
            dislikes: '<li>Rodents of Unusual Size</li><li>Ambiguously aligned chancellors</li><li>His own insecurities concerning his family legacy</li><li>Boats</li>',
            bio: '<p class="bio">Throughout history, House Eggplant has served the Royal Tomato Family for many generations, this young knight being no exception. Having the blood of past legends run through his veins, the rookie dreams of a day when he too shall have his name cast into glory like the ancestors before him. His tendency for theatrics has earned him quite the eccentric reputation with his fellow peers, however, having a penchant of yelling out attack names during combat will do that.</p><p class="bio">Studies magic in his spare time much to the dismay of his parents.</p>',
            quote: '<div class="quote rho">“A smile better suits a hero!”</div>',
            footer: '<div class="footer-bar" style="background-color: #7a2eaa;"></div>',
            image: '<img src="/assets/img/rholsor1.png" style="width: 426px; right: -110px;" />'
        },
        knerrvana: {
            header: '<div class="char-header" style="background-color: #8b0000;"><h1>The Red Comet</h1><h6>T i t l e</h6></div>',
            name: "Knerrvana",
            position: "Tank/Front Lines",
            class: "[Traitor Paladin]",
            subclass: "[Edgemaster]",
            weapon: "(1) Soul Edge",
            classUsage: "Traitor Paladin Usage",
            classUsageText: "[MUST BE LVL 906 TO ACCESS]",
            subclassUsage: "Edgemaster Usage",
            subclassUsageText: "[MUST BE LVL 906 TO ACCESS]",
            hobbies: '<li>Weapon collecting</li><li>Casual betrayal</li><li>Never using his actual name</li>',
            likes: '<li>The color red</li><li>Fools he can manipulate</li><li>Weird girls he just straight up finds on the street (?)</li>',
            dislikes: '<li>The Zabi Family</li><li>Unstabbed backs</li><li>Texas</li>',
            bio: '<p class="bio">Born Casval Rem Deikun, he is the elder brother of Sayla Mass (Artesia Som Deikun), and the son of late Zeon Zum Deikun, the champion of sovereignty for the space colonies of Side 3, founder of the Republic of Zeon. During the One Year War, Knerrvana shows great ability not only as a mobile suit pilot, but also as a tactician and a commanding officer.</p>',
            quote: '<div class="quote knerr">“I came here to laugh at you”</div>',
            footer: '<div class="footer-bar" style="background-color: #8b0000;"></div>',
            image: '<img src="/assets/img/knerrlsor1.png" style="width: 385px; right: -97px;" />'
        },
        pancake: {
            header: '<div class="char-header" style="background-color: #ffcc98;"><h1>Hot Cheerleader</h1><h6>T i t l e</h6></div>',
            name: "Superpancake",
            position: "DPS/Cheerleader",
            class: "[Hunter]",
            subclass: "[Hunter]",
            weapon: "(1) Stake Driver/Fist of Gratia",
            classUsage: "Hunter Usage",
            classUsageText: "[MUST BE LVL 906 TO ACCESS]",
            subclassUsage: "Hunter Usage",
            subclassUsageText: "[MUST BE LVL 906 TO ACCESS]",
            hobbies: '<li>Eradicating the world of "Old Blood"</li><li>Hunting</li><li>Storytelling</li><li>Dad jokes</li>',
            likes: '<li>Crafting</li><li>Well thought out stories</li><li>Hunting</li><li>Coffee</li>',
            dislikes: '<li>Hunting</li><li>Knerrvana</li><li>Status Ailments</li>',
            bio: '<p class="bio">“A hunter must hunt.” A phrase young Pancake’s mom would always mutter during their training. Born within a small clan of hunters, Pancake learned to hunt and hone their skill at a young age. Now are the peak of skill, dashingly good looks, and age, they have set off on their never ending quest to cleanse the world of the old blood, haunted by the hunters dream... At least that’s what their search info says. Often whines about mechanics and how spicy they are.</p>',
            quote: '<div class="quote pan">“I don\'t need a shield... Just give me a gun / I\'m a crafter, not a fighter.”</div>',
            footer: '<div class="footer-bar" style="background-color: #ffcc98;"></div>',
            image: '<img src="/assets/img/panlsor1.png" style="width: 265px; right: -10px;" />'
        },
    };

    var body = $("body");
    var nav = body.find(">header>nav");
    var tabs = body.find("nav-tabs");
    var offset= -120;
    var characters = body.find("#characters");
    var charModal = body.find("#char-modal-backdrop");
    var templateSource = $('#char-template').html();
    var template = Handlebars.compile(templateSource);
    var charList = characters.find(".row #current .char-block");

    tabs.find("li a")
        .click(function (e) {
            e.preventDefault()
            $(this).tab('show')
        });

    nav.find("li a")
        .linkScroller({ 
            offset: offset
        })
        .scrollNav({
            offset: offset
        });

    charList
        .popupModal({
            modal: charModal
        });

    charList.click(function (event) {
        var currentChar = waveRevo[$(this).attr('id')];
        var result = $(template(currentChar));

        result.data("character", currentChar);
        charModal.find(".character").remove();
        charModal.find(".char-info").append(result);

        event.preventDefault();
        return false;
    });
});