import iconJS from '../assets/icons/js.svg';
import iconPHP from '../assets/icons/php.svg';
import iconSQL from '../assets/icons/sql.svg';
import iconReact from '../assets/icons/react.svg';
import iconWebpack from '../assets/icons/webpack.svg';
import iconElectron from '../assets/icons/electron.svg';
import iconGit from '../assets/icons/git.svg';
import iconSass from '../assets/icons/sass.svg';
import iconNode from '../assets/icons/nodejs.svg';
import iconVite from '../assets/icons/vite.svg';
import iconThree from '../assets/icons/three.svg';
import iconWP from '../assets/icons/wordpress.png';
import iconSymfony from '../assets/icons/symfony.png';
import iconNext from '../assets/icons/next-js.svg';

import iconDownload from '../assets/icons/download.svg';
import iconCal from './../assets/icons/calendar.svg';
import iconPopout from './../assets/icons/popout.svg';
import iconGithubDb from './../assets/icons/github-darkblue.svg';
import iconGithubW from './../assets/icons/github-darkblue.svg';

import iconSend from '../assets/icons/contact-lime.svg';
import iconCheck from '../assets/icons/checkmark.svg';
import iconError from '../assets/icons/error-cross.svg';

export const icons = {
    technologies: {
        next: {
            name: "Next.js",
            icon: iconNext,
        },
        symfony: {
            name: "Symfony",
            icon: iconSymfony,
        },
        js: {
            name: 'Javascript',
            icon: iconJS
        },
        nodejs: {
            name: 'Node.js',
            icon: iconNode
        },
        php: {
            name: 'PHP',
            icon: iconPHP
        },
        sql: {
            name: 'SQL',
            icon: iconSQL
        },
        react: {
            name: 'React',
            icon: iconReact
        },
        webpack: {
            name: 'Webpack',
            icon: iconWebpack
        },
        electron: {
            name: 'Electron',
            icon: iconElectron
        },
        git: {
            name: 'Git',
            icon: iconGit
        },
        sass: {
            name: 'Sass',
            icon: iconSass
        },
        threejs: {
            name: 'Three.js',
            icon: iconThree
        },
        vite: {
            name: 'Vite',
            icon: iconVite
        },
        wordpress: {
            name: 'Wordpress',
            icon: iconWP
        }
    },
    all: {
        calendar: iconCal,
        cv: iconDownload,
        popout: iconPopout,
        githubdb: iconGithubDb,
        githubw: iconGithubW,
        send: iconSend,
        check: iconCheck,
        error: iconError
    }
}