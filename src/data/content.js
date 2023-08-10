const data = {
    en: {
        navbar: {
            find_me: "Find me",
            about: "About me",
            work: "My work",
            contact: "Get in touch"
        },
        pages: {
            home: {
                Hi: "Hi ! 👋 My name is",
                and_im: "and I'm a",
                web_dev: "fullstack web developer.",
                intro_long_text: `Nice to meet you ! Welcome on my online portfolio. I am a french web developer, with various secondary skills, like music and photography. 🎸📸[rn]
                I particularly enjoy working with data, and how you can use it, although I've have enjoyed front end more and more as I practiced and got better at it. My favourite technology today would be React, but you know, I haven't tried everything yet. 😉[rn]
                In the future, I'd love to get more involved in game development - I gave a go at Three.js in my Neon Run project and it was a very fun experience.[rn]
                I wish you a pleasant time around here ! ✨`,
                know_more: "More about me...",
                I_use: "I use",
                and_more: "and many more...",
                CV: "Get my CV",
                Projects: "Things I made",
                More_details: "More details",
                All_projects: "All my projects →",
                Contact: "Contact me",
                contact_name: "Your name",
                contact_mail: "Your email adress",
                contact_phone: "Your phone number",
                contact_message: "Your message",
                contact_send: "Send"
            },
            about: {
                title: "About me",
                blocks: [
                    {
                        title: "Tech voyage",
                        paragraphs: [
                            `Since I was a young child, I have been passionate about technology and computers. I started out by drawing trains of my father's lap when he got his very first PC at home.`,

                            `Thankfully, I've done quite a bit more since then. Building my own machines, Linux servers, web sites, video games... I've always been curious about everything, sometimes even a bit too much, as fiddling around ended up in ruining the home modem's configuration (whoops).`,

                            `Rest assured though, now I've got it under control !`,

                            `I've ended up choosing web development, because of how much it offers. You can do basically anything, as long as you're up for a fair challenge.
                        At the moment I'm having a lot of fun with Javascript. It has a seemingly infinite amount of capabilities, especially with the enormous amount of open-source libraries available these days. As someone who likes exploring and trying out very different things, it is thrilling.`,

                            `Then going full stack only makes sense for me, I really like knowing each side of a mechanism and how everything interacts to contribute to the end product. This is a key aspect of my personality, not only in development but in every other hobby I have as well.`
                        ]
                    },
                    {
                        title: "Other hobbies",
                        list: [
                            {
                                icon: `🎮`,
                                text: `Having grown in the late 90s and early 2000s, I'm obviously very much into video games. Despite having very specific tastes, I have been blown away many times and still am on a regular basis these days. The Ori franchise has made me more emotional than any other could ever.`
                            },
                            {
                                icon: `🏎️`,
                                text: ` Cars and motor sport are very much a staple in my life. Miniature cars, racing games (now sim racing), Formula 1 and much more will always excite me as a starry-eyed young kid.Real racing being quite expensive, I only practice racing in a racing simulation, but I do it seriously. I drive for the UK-based Wild things Racing team, and am currently developing a strategy tool to assist the top guys the best I can.`
                            },
                            {
                                icon: `🎸`,
                                text: `Music has been the most omnipresent thing in my life. I have gone as far as trying to do it professionally, as a teacher, as a musician, as a sound-engineer, as a live tech... It's a very crowded domain unfortunately, compared to a quite small demand.I love most kind of musics nowadays, with progressive metal being my safe place. Periphery is my favorite band, has been nearly 10 years now. `
                            },
                            {
                                icon: `📷`,
                                text: `Photography is kind of an odd ball to me. I love the principle, the process, the gear, the science behind it, the very specific way it challenges creativity... I just lack a bit of meaning for it. So it's an occasional craving rather than a passion, but I always do my very best to get gorgeous shots !`
                            },
                            {
                                icon: `🌠`,
                                text: `Science ! I am very much at loss with the many, very technical things, but I couldn't be more passionate with how our universe works.Magnetism is a frequent subject of awe for me, as well as stars - I have rarely been as hyped as the day we got the first shots from JWST. Needless to say, I got shivers for every discovery made since then ! Circling back to video games, I am eagerly waiting for Starfield to come out, as previous modern space exploration games have been underwhelming so far.`
                            }
                        ]
                    }
                ],
            },
            work: {
                title: "My work"
                // 
            }
        },
        error: {
            e404: "Oops ! 🙈 There's nothing here !",
            tel_format: "Numbers separated by spaces or hyphens, with or without the country code starting with + in front"
        }
    },
    fr: {
        navbar: {
            find_me: "Suivez-moi",
            about: "À propos",
            work: "Projets",
            contact: "Contactez-moi"
        },
        pages: {
            home: {
                Hi: "Hello ! 👋 Je m'appelle",
                and_im: "et je suis",
                web_dev: "développeur web fullstack.",
                intro_long_text: `Ravi de vous rencontrer ! Bienvenue sur mon portfolio en ligne. Je suis un développeur web français, assorti de diverses autres compétences, comme la musique ou la photographie. 🎸📸 [rn]
                J'apprécie particulièrement de travailler autour des données, et de réfléchir à leurs utilisations, bien que j'aime de plus en plus le design et le front au fil du temps et de mes progrès. Ma technologie préférée à ce jour serait probablement React, mais il m'en reste plus à découvrir. 😉[rn]
                À l'avenir, j'aimerais prendre part à des projets de développement de jeu vidéo. J'ai eu un aperçu de Three.js sur un projet récent, et c'était vraiment fun ![rn]
                Je vous souhaite un agréable moment sur ma page ! ✨`,
                know_more: "En savoir plus...",
                I_use: "Je connais",
                and_more: "entre autres...",
                CV: "Télécharger mon CV",
                Projects: "Réalisations",
                More_details: "Plus de détails",
                All_projects: "Tous mes projets →",
                Contact: "Me contacter",
                contact_name: "Votre nom",
                contact_mail: "Votre adresse email",
                contact_phone: "Votre numéro de téléphone",
                contact_message: "Votre message",
                contact_send: "Envoyer"
            },
            about: {
                title: "Enchanté !",
                blocks: [
                    {
                        title: "La tech dans ma vie",
                        paragraphs: [
                            `Déjà enfant, j'étais fasciné par la technologie et les ordinateurs. D'après ma mère, ma première expérience a été de dessiner des trains sur le premier PC de la famille.`,

                            `Heureusement, je n'en suis pas resté là ! Assembler mes propres PC, mettre en place des serveurs sous Linux, créer des sites webs, des petits jeux vidéo... J'ai toujours été, et je reste, curieux de tout, parfois même un peu trop. Je me rappelle avoir mal configuré la box internet, ce qui se faisait depuis l'espace client de Free à l'époque, résultant en... une coupure internet totale. Whoops ! 😧`,

                            `Soyez rassuré ceci dit, désormais je sais ce que je fais !`,

                            `Je me suis tourné vers le développement web, notamment pour les possibilités que cela offre. Tout est faisable, tant qu'on est prêt à relever un défi logique. Mon language préféré actuellement est Javascript. Entre toutes les librairies, outils open-source, et l'implication de la communauté pour le faire perdurer et évoluer, c'est une arme redoutable et incroyablement flexible. Pour quelqu'un comme moi aimant explorer et bidouiller, c'est un environnement formidable.`,

                            `Me considérer comme développeur fullstack est la seule option satisfaisante. J'aime savoir et comprendre comment tout fonctionne, comment chaque composant s'imbrique dans les autres pour assembler le produit complet. C'est un aspect clé de ma personnalité à vrai dire, non seulement dans le développement mais dans toutes les activités diverses que j'entreprends.`
                        ]
                    },
                    {
                        title: "Autres hobbies",
                        list: [
                            {
                                icon: `🎮`,
                                text: `Ayant grandi dans les années 90 et 2000, j'ai vu la révolution technologique appliquée aux jeux vidéo et je suis évidemment tombé dedans comme Obélix dans la potion. Malgré mes goûts et exigences très marqués, j'ai été soufflé à de nombreuses reprises et le suis encore régulièrement à notre époque. La direction artistique des jeux Ori et leurs scénarii m'émeut à chaque fois, plus qu'aucun autre jeu et de loin.`
                            },
                            {
                                icon: `🏎️`,
                                text: `L'automobile et le sport auto ont toujours été une passion. Des modèles réduits à la simulation de course aujourd'hui, en passant par la F1 et plus encore, je ne demeure qu'un enfant émerveillé par tout ça. Prendre part à de vraies courses est malheureusement extrêmement coûteux, je me contente du simulateur, mais en gardant une part de sérieux malgré tout. Je suis pilote pour l'écurie anglais Wild things Racing, pour laquelle je développe une application de stratégie afin d'apporter une pierre unique à l'édifice.`
                            },
                            {
                                icon: `🎸`,
                                text: `Depuis le début de mon adolescence, la musique est omniprésente et s'est révélée essentielle pour moi. J'ai même tenté d'en vivre, comme musicien, prof de musique, ingénieur du son, technicien concert, roadie... mais c'est une monde très peuplé et donc très concurrenciel, pour une demande au final assez limitée. J'aime beaucoup de styles différents, le metal progressif restant ma principale zone de confort. Periphery est mon groupe favori, place qu'ils occupent depuis presque 10 ans !`
                            },
                            {
                                icon: `📷`,
                                text: `La photographie est un peu la balle courbe de ma vie de créatif. J'adore le fonctionnement, l'équipement, la démarche, la science qui en découle, et la façon dont il faut tordre sa créativité pour en tirer le maximum... mais je n'ai pas tellement de motivation à en faire, la plupart du temps. C'est devenu un intérêt occasionnel, mais j'apprécie d'autant plus prendre le temps de faire de mon mieux, pour parfois avoir des résultats magnifiques.`
                            },
                            {
                                icon: `🌠`,
                                text: `La Science ! Je ne suis pas particulièrement au point concernant les maths et les choses ultra techniques, mais ça ne m'empêche d'être subjugué par notre univers. Un exemple comme un autre, le magnétisme. L'espace et les étoiles en est un autre majeur - j'ai rarement été aussi galvanisé que par les premières photos que l'on a reçues du JWST. Inutile de préciser que chaque image qu'il nous envoie depuis est tout aussi excitante pour moi !`
                            }
                        ]
                    }
                ]
            },
            work: {
                title: "Mes travaux"
                // 
            }
        },
        error: {
            e404: "Oups ! 🙈 Cette page n'existe pas !",
            tel_format: "Nombres uniquement, séparés par des espaces ou des tirets, précédés ou non du code pays démarrant avec +"
        }
    }
}

export default data;