import { createContext } from "react";
import HtmlIcon from './assets/images/html-icon.png'
import CssIcon from './assets/images/css-icon.png'
import JsIcon from './assets/images/js-icon.png'
import ES6Icon from './assets/images/ES6-icon.jpg'
import ReactIcon from './assets/images/react-icon.png'
import ReactRouterIcon from './assets/images/react-router-icon.png'
import ReduxToolkitIcon from './assets/images/redux-toolkit-icon.png'
import ProjectOneImage from './assets/images/projectOneImg.webp'
import ProjectTwoImage from './assets/images/projectTwoImg.jpg'

export const DataContext = createContext(null)

export const Data = {
    navigation: ["home", "about-me", "my-skills", "my-projects", "contact-me"],
    aboutDescription: "I'm Ibrahim, a front-end developer passionate about turning concepts into impactful digital experiences. With a blend of technical expertise and creative problem-solving, I specialize in bringing ideas to life through clean and intuitive web designs. From wireframes to pixel-perfect implementations, I thrive on transforming visions into engaging user interfaces. Let's collaborate to transform your ideas into stunning digital solutions that make a lasting impression.",
    skills: [
        {
            title: "html5",
            imageURL: HtmlIcon,
        },
        {
            title: "css3",
            imageURL: CssIcon,
        },
        {
            title: "javascript",
            imageURL: JsIcon,
        },
        {
            title: "ES6",
            imageURL: ES6Icon,
        },
        {
            title: "react",
            imageURL: ReactIcon,
        },
        {
            title: "react router 6",
            imageURL: ReactRouterIcon,
        },
        {
            title: "redux toolkit",
            imageURL: ReduxToolkitIcon,
        },
    ],
    projects: [
        {
            imageURL: ProjectOneImage,
            title: "project number one",
            description: "Hi, I'm Ibrahim a front-end developer passionate about turning concepts into impactful digital experiences",
            demoLink: "https://ibrahim31313.github.io/p/",
            repoLink: "https://ibrahim31313.github.io/p/",
            techUsed: [HtmlIcon, CssIcon, JsIcon],
        },
        {
            imageURL: ProjectTwoImage,
            title: "project number two",
            description: "Hi, I'm Ibrahim a front-end developer passionate about turning concepts into impactful digital experiences",
            demoLink: "https://chimerical-trifle-6ae795.netlify.app/",
            repoLink: "https://chimerical-trifle-6ae795.netlify.app/",
            techUsed: [HtmlIcon, CssIcon, JsIcon],
        },
    ]
}