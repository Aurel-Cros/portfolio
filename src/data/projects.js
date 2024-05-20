import imageNeon from '../assets/images/introReadMe.webp';
import imageWTR from '../assets/images/wildthings.webp';
import imageWeather from '../assets/images/weatherApp.webp';
import imageWordpress from '../assets/images/wordpress.png';

const projects = [
    {
        name: "Invoice editor",
        techs: ["next"],
        demoLink: "https://invoice.aurelien-cros.fr",
        github: "https://github.com/Aurel-Cros/Invoice-Editor",
        text: {
            fr: {
                date: "2024",
                shortText: "Un outil simple pour facilement éditer des devis et factures fait avec Next.js",
                longText: "Un outil simple pour facilement éditer des devis et factures fait avec Next.js"
            },
            en: {
                date: "2024",
                shortText: "A simple tool to easily create invoices, made with Next.js",
                longText: "A simple tool to easily create invoices, made with Next.js"
            }
        }
    },
    {
        name: "Plateforme d'elearning",
        techs: ["symfony", "js", "webpack"],
        image: "https://elearning.ecole-richard-cross.com/build/images/logo-erc.5d71acb3.svg",
        demoLink: "https://elearning.ecole-richard-cross.fr",
        text: {
            fr: {
                date: "2023",
                shortText: "Une plateforme d'apprentissage en ligne pour une école de musique",
                longText: `J'ai fait la gestion de projet pour une équipe de 2 développeurs, nous sommes partis de zéro et nous avions 7 semaines pour sortir un POC fonctionnel.[rn]
                Le projet repose entièrement sur Symfony 6. Le design a été réalisé sur Figma puis intégré avec Bootstrap. Un back-office a été développé grâce à EasyAdmin.`
            },
            en: {
                date: "2023",
                shortText: "An online learning platform for a music school",
                longText: `I managed the project for a team of 2 developers; we started from scratch and had 7 weeks to deliver a functional POC.[rn]
                The project is entirely based on Symfony 6. The design was created in Figma and then integrated with Bootstrap. A back office was developed using EasyAdmin.`
            }
        }
    },
    {
        name: "Wild things Racing Wingman",
        techs: ["nodejs", "js", "electron", "sass", "webpack"],
        image: imageWTR,
        github: 'https://github.com/Aurel-Cros/wtr-wingman-app',
        text: {
            en: {
                date: "2023",
                shortText: "A specialized strategy app, reporting data extracted from a program's shared memory, spread to grouped clients and processed into an efficient display.",
                longText: `After establishing a functional specification document, I developed a modern and readable interface in Figma. The client is built with Electron and Webpack. On the front end, it uses React 18 and Redux Toolkit. On the back end, Electron includes an instance of Node.js; the code is organized around Events to facilitate maintenance. Finally, a Node.js server acts as a relay between clients, all interconnected via WebSocket.`
            },
            fr: {
                date: "2023",
                shortText: "Une application spécialisée de stratégie, faisant le relai entre la mémoire partagée d'un programme et tous les clients connectés et groupés, le tout dans un affichage pensé pour l'efficacité.",
                longText: `Après avoir établi un cahier des charges fonctionnel, j'ai développé une interface moderne et lisible dans Figma.[rn] 
                Le client est construit avec Electron et Webpack. Côté front, du React 18 et Redux Toolkit. En back, Electron embarque une instance de Node.js ; le code est organisé autour d'Events pour faciliter la maintenance.[rn]
                Enfin, un serveur Node.js sert de relai entre les clients, le tout entre-connecté en WebSocket.`
            }
        }
    },
    {
        name: "Kitty Machine    ",
        techs: ["wordpress", "react"],
        image: imageWordpress,
        github: 'https://github.com/Aurel-Cros/kittymachine',
        text: {
            en: {
                date: "2023",
                shortText: "A small practice plugin for Wordpress, that does the very important task of displaying a random cat.",
                longText: "I used React to build a component that does all the work, calling a free API that returns the URL of a random cat photo. The final step is to add the plugin's PHP file to configure its behavior in WordPress.The plugin is easy to use: activate the plugin and add it to your page from the Gutenberg blocks."
            },
            fr: {
                date: "2023",
                shortText: "Un simple plugin d'entraînement pour Wordpress, qui effectue la tâche essentielle d'afficher un chat au hasard.",
                longText: `J'ai utilisé React pour construire un composant qui fait tout le travail, qui appelle une API gratuite renvoyant l'url d'une photo de chat au hasard. Dernière étape, ajouter le fichier php du plugin configurant son comportement dans Wordpress.[rn] Le plugin est facile à utiliser : activez le plugin, et ajoutez le sur votre page à partir des blocs Gutenberg.
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
                longText: `I took the lead of the development team, and we worked with a team of designers.[rn]
                I started by learning how to run Three.js, then I explained to my team how it works and how to collaborate using a class-based architecture and good organization in Git.[rn]
                The project is compiled with Vite and deployed using Vercel.`
            },
            fr: {
                date: "Juillet 2023",
                shortText: "Un jeu rétrofuturiste inspiré de la synth-wave et les jeux mobiles de type runner, développé en équipe sur 5 jours.",
                longText: `J'ai pris le lead de l'équipe développement, et nous avons travaillé avec une équipe de designer.[rn]
                J'ai commencé par découvrir comment faire tourner Three.js, puis j'ai expliqué à mon équipe son fonctionnement et comment collaborer grâce à une architecture basée sur les classes et une bonne organisation dans Git.[rn]
                Le projet est compilé avec Vite et déployé grâce à Vercel.`
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
                longText: `A web application in JavaScript utilizing and interconnecting various APIs. The styles were developed in SCSS and the application is compiled with Webpack. The application presented here was designed by Salomé Vauchier.`
            },
            fr: {
                date: "Juin 2023",
                shortText: "Projet de formation, cette appli affiche la météo dans une ville au hasard dans le monde. L'un des challenges était de développer une appli en partant du design d'un collègue.",
                longText: `Appli web en Javascript utilisant et inter-connectant diverses API. Les styles ont été développé en SCSS et l'appli est compilée avec Webpack.[rn]
                L'appli présentée ici a été designée par Salomé Vauchier.`
            }
        }
    }
]

export default projects;