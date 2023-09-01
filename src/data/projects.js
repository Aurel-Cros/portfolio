import imageNeon from '../assets/images/introReadMe.webp';
import imageWTR from '../assets/images/wildthings.webp';
import imageWeather from '../assets/images/weatherApp.webp';

const projects = [
    {
        name: "Wild things Racing Wingman",
        techs: ["nodejs", "js", "electron", "sass", "webpack"],
        image: imageWTR,
        github: 'https://github.com/Aurel-Cros/wtr-wingman-app',
        text: {
            en: {
                date: "2023",
                shortText: "A specialized strategy app, reporting data extracted from a program's shared memory, spread to grouped clients and processed into an efficient display.",
                longText: `This originated from a collective need. Wild things Racing in a UK-based sim racing team, which drivers often take part in races organized on Assetto Corsa Competizione. As a driving simulator, it goes as far as simulating dynamic weather conditions, tyre wear, fuel consumption, etc, in real time. The weather has a forecast display that uses fixed times, 10 and 30 minutes. We players do not have access to a history of this forecast, which sometimes make it difficult to keep track of weather evolution.[rn]
                Then was born the original idea, and quickly after, a bare-boned first version of an app that would simply register a weather change and the time at which it occured.[rn]
                The whole project has well evolved since then, and will now include a lot more data, like ambient and track temperature, a graph history of precipitations, tyre temperature, brake wear, and so on. I have spent time making a slick, efficient design for the app, too, to make accessing the data as easy and clear as possible.[rn]
                The core of the app resides in the WebSocket technology, allowing Javascript to push data from an emitter to the other clients without the need for constant polling. Wingman gets data from the simulator's shared memory, detects any change from the previous state and pushes it via WebSocket to the server.[rn]
                Electron makes the perfect platform for this project, since it embeds a Node engine, making accessing the shared memory possible and super easy thanks to the library "acc-node-wrapper". Using the app is, in reality, only necessary for the emitter client, as the rest of the group can receive and display the data from the browser component alone.[rn]
                This is, to me, an ambitious project with many hours of development yet to put in, but a very exciting one and dear to me, as it is a unique way of contributing to the racing team.`
            },
            fr: {
                date: "2023",
                shortText: "Une application spécialisée de stratégie, faisant le relai entre la mémoire partagée d'un programme et tous les clients connectés et groupés, le tout dans un affichage pensé pour l'efficacité.",
                longText: `Ce projet est né d'un besoin collectif. Wild things Racing est une écurie de sim racing basé en Angleterre, et dont les pilotes prennent part régulièrement à des courses organisées sur Assetto Corsa Competizione. En tant que simulateur de conduite, le programme simule des conditions météo dynamiques, l'usure des pneus, la consommation de carburant, etc, le tout en direct. La météo notamment a un affiche très simple de prévisions, et utilisant des timings fixes : 10 et 30 minutes. Les utilisateurs n'ont pas accès à un historique complet de ces infos, ce qui rend difficile le suivi et l'évolution des données.[rn]
                Suivant ce constat est arrivée l'idée de cette appli, et peu de temps après une première version très basique, qui enregistrait simplement les changements météo prévus et l'heure à laquelle ils devaient arriver.[rn]
                Le concept a bien évoluer depuis, et inclura de nombreuses données supplémentaires, comme la température ambiente et au sol, un graphique des précipitations passées, l'usure des pneus, et tant d'autres. J'ai également pris le temps de concevoir une interface claire et moderne, permettant une lecture claire et efficace des données.[rn]
                Le coeur de l'appli réside dans la technologie WebSocket accessible par Javascript et Node, permettant au client émetteur de push des données sans attendre un polling des clients récepteurs. Wingman récupère les données directement depuis la mémoire partagée du jeu et les relait au serveur WebSocket au besoin et dans un délai minime.[rn]
                Electron est la plateforme idéale pour ce projet, notamment grâce à son embarquation de Node en back end, permettant l'accès à la mémoire partagée du programme de manière super facile grâce à la librairie "acc-node-wrapper". L'appli est donc uniquement nécessaire pour le client émetteur, le reste du groupe pouvant recevoir les données depuis un navigateur standard.[rn]
                C'est un projet excitant, ambitieux à mon échelle mais largement à ma portée, et qui me tient à coeur puisqu'il me permet de participer à la vie et au succès de mon écurie de manière unique.
                `
            }
        }
    },
    {
        name: "Neon run",
        techs: ["threejs", "vite"],
        image: imageNeon,
        github: 'https://github.com/Aurel-Cros/neon-run',
        demoLink: "https://neon-run.vercel.app",
        text: {
            en: {
                date: "July 2023",
                shortText: "A retro-futuristic game inspired by synth-wave and mobile runner games, collaboratively developed in 5 days.",
                longText: `This relatively simple game was an ambitious challenge, developed during a Game Jam organized by our training organization, in which we had to develop a game in 2 days (14 hours). Our group, strongly influenced by myself, decided to use Three.js to offer a scrolling effect with depth, without needing to manage perspective. Working in collaboration with a team of designers, this decision allowed them to create assets in 2D and front view, making them very productive.[rn]
                As the most experienced member, I took the lead of the development team. The development process itself went well, but we were not able to deliver a finished program on time. I took the responsibility for this, as I encouraged the development team to use a technology that might have been a bit too challenging to grasp in such a short period.[rn]
                However, some of us, deeply disappointed but intrigued by our project, decided to bring the project to completion, in order to have a playable version, which seemed to be the bare minimum to us.[rn]
                It's likely that this project will continue to evolve in the future, aiming to turn it into a polished and more professional product, even though it already represents a great source of pride for everyone who actively participated in its creation.`
            },
            fr: {
                date: "Juillet 2023",
                shortText: "Un jeu rétrofuturiste inspiré de la synth-wave et les jeux mobiles de type runner, développé en équipe sur 5 jours.",
                longText: `Ce jeu relativement simple a été un challenge ambitieux, développé à l'occasion d'une Game Jam organisé par notre organise de formation, pour laquelle nous devions développer un jeu en 2 jours (14h). Notre groupe, fortément influencé par moi-même, a décidé d'utiliser Three.js afin de proposer un scrolling en profondeur, sans avoir à gérer la perspective. Travaillant en collaboration avec une équipe de designers, cette décision leur a permis de créer des assets en 2D et vue de face, donc d'être très productifs.[rn]
                Étant le plus expérimenté, j'ai pris le lead de l'équipe développement. Celui-ci, en lui-même, s'est bien passé, mais nous n'avons pas été en mesure de rendre un programme fini dans les temps. J'ai pris sur moi cette responsabilité, ayant encouragé l'équipe de développement à utiliser une technologie peut-être un peu trop difficile à prendre en main en si peu de temps.[rn]
                Ceci dit, certains fortement déçus mais séduits par notre projet, avons décidé de mener le projet à son terme, afin d'avoir une version jouable, ce qui nous semblait le strict minimum.[rn]
                Il est probable que ce projet évolue encore par la suite, pour en faire pourquoi un produit accompli et plus professionnel, bien qu'il représente déjà une grande fierté pour tous ceux ayant participé activement à sa création.`
            }
        }
    },
    {
        name: "Weather app",
        techs: ["js", "sass", "webpack"],
        image: imageWeather,
        github: 'https://github.com/Aurel-Cros/weather-app-sv',
        demoLink: 'https://weather-app-sv-navy.vercel.app',
        text: {
            en: {
                date: "June 2023",
                shortText: "A training project, this app displays the weather in a random city in the world. One original aspect was we all had to develop an app using someone else's design.",
                longText: `As a training exercise, this app will have been the source of many head scratchings. Originally, it was an exercise to learn how to use APIs and connect the various data collected.[rn]
                The basic idea that was proposed to us was to obtain random cities by filtering based on the weather. For instance, you choose snow, and you get Chamonix or Courchevel. In practice, the entire class ran into the following issue: no API exists that offers this service. And for good reason, it became clear that creating such an API would require a lot of resources, as it would be necessary to maintain a constantly updated database of all the cities in the world and their weather with the least possible delay. The other solution would be to bombard a weather API with random geolocations until finding a corresponding city... not very elegant.[rn]
                Therefore, this feature was unanimously abandoned, simplifying the app to a selection of random cities and possibly a search system by name.[rn]
                The app presented here was designed by Salomé Vauchier.`
            },
            fr: {
                date: "Juin 2023",
                shortText: "Projet de formation, cette appli affiche la météo dans une ville au hasard dans le monde. L'un des challenges était de développer une appli en partant du design d'un collègue. Voici l'appli que j'ai développée.",
                longText: `Pur projet d'entraînement, cette appli aura été source de nombreux grattages de tête. À la base, c'était un exercice pour apprendre à utiliser des APIs, et mettre en relation les différentes données récoltées.[rn]
                L'idée de base que l'on nous avait proposé était d'obtenir des villes au hasard en filtrant par météo. Par exemple, on choisit la neige, et l'on obtient Chamonix ou Courchevel. En pratique, toute la promo s'est heurtée au souci suivant : aucune API n'existe proposant ce service. Et pour cause, il s'est révélé évident que réaliser une telle API demanderait beaucoup de ressources, puisqu'il faudrait tenir une base de données constamment à jour de toutes les villes du monde et leur météo avec le moins de délai possible. L'autre solution étant de bombarder une API météo de géolocalisations aléatoires jusqu'à trouver une ville correspondate... pas très élégant.[rn]
                Cette feature a donc été abandonnée d'un commun accord, simplifiant l'appli à une sélection de ville aléatoire, et éventuellement un système de recherche par nom.[rn]
                L'appli présentée ici a été designée par Salomé Vauchier.`
            }
        }
    }
]

export default projects;