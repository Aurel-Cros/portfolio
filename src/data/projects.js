import imageNeon from '../assets/images/introReadMe.webp';
import imageWTR from '../assets/images/wildthings.webp';

const projects = [
    {
        name: "Neon run",
        techs: ["threejs", "vite"],
        image: imageNeon,
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
        text: {
            en: {
                date: "2023",
                shortText: "A retro-futuristic game inspired by synth-wave and mobile runner games, collaboratively developed in 5 days.",
                longText: "Blabla"
            },
            fr: {
                date: "2023",
                shortText: "Un jeu rétrofuturiste inspiré de la synth-wave et les jeux mobiles de type runner, développé en équipe sur 5 jours.",
                longText: "Blabla"
            }
        }
    }
]

export default projects;