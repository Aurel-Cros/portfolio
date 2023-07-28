import imageNeon from '../assets/images/introReadMe.webp';
import imageWTR from '../assets/images/wildthings.webp';
import imageWeather from '../assets/images/Thunder.png';

const projects = [
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
                longText: "Blabla"
            },
            fr: {
                date: "Juillet 2023",
                shortText: "Un jeu rétrofuturiste inspiré de la synth-wave et les jeux mobiles de type runner, développé en équipe sur 5 jours.",
                longText: "Blabla"
            }
        }
    },
    {
        name: "Wild things Racing Wingman",
        techs: ["nodejs", "js", "electron", "sass", "webpack"],
        image: imageWTR,
        github: '',
        text: {
            en: {
                date: "2023",
                shortText: "A specialized strategy app, reporting data extracted from a program’s shared memory, spread to grouped clients and processed into an efficient display.",
                longText: "Blabla"
            },
            fr: {
                date: "2023",
                shortText: "Une application spécialisée de stratégie, faisant le relai entre la mémoire partagée d'un programme et tous les clients connectés et groupés, le tout dans un affichage pensé pour l'efficacité.",
                longText: "Blabla"
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
                shortText: "A training project, this app displays the weather in a random city in the world. One original aspect was we all had to develop an app using someone else's design."
            },
            fr: {
                date: "Juin 2023",
                shortText: "Projet de formation, cette appli affiche la météo dans une ville au hasard dans le monde. L'un des challenges était de développer une appli en partant du design d'un collègue. Voici l'appli que j'ai développée."
            }
        }
    }
]

export default projects;