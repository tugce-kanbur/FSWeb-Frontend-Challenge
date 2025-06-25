import javascript from "../assets/logolar/javascript.png";
import react from "../assets/logolar/react.png";
import redux from "../assets/logolar/redux.png";
import node from "../assets/logolar/node.png";
import vs from "../assets/logolar/vs.png";
import figma from "../assets/logolar/figma.png";
import image2 from "../assets/fotoğraflar/image 2.png";
import image3 from "../assets/fotoğraflar/Rectangle 41.png";
import image4 from "../assets/fotoğraflar/Rectangle 42.png";
import icon1 from "../assets/icons/twitter 1.png";
import icon2 from "../assets/icons/codepen 1.png";
import icon3 from "../assets/icons/at-sign 1.png";
import icon4 from "../assets/icons/instagram 1.png";

const heroData = {
    heading: 'I am a Frontend Developer...',
    description:
        '...who likes to craft solid and scalable frontend products with great user experiences.',
    image: '/src/assets/fotoğraflar/hero-right.png',
    buttons: [
        {
            label: 'Github',
            icon: '/src/assets/icons/github.png',
            url: 'https://github.com/',
        },
        {
            label: 'Linkedin',
            icon: '/src/assets/icons/LinkedIn.png',
            url: 'https://linkedin.com/',
        },
    ],
};

export default heroData;
export const skillsTitle = "Skills";
export const skillsData = [
    { id: 1, title: "JAVASCRIPT", icon: javascript, alt: "javascript-icon" },
    { id: 2, title: "REACT", icon: react, alt: "react-icon" },
    { id: 3, title: "REDUX", icon: redux, alt: "redux-icon" },
    { id: 4, title: "NODE", icon: node, alt: "node-icon" },
    { id: 5, title: "VS CODE", icon: vs, alt: "vscode-icon" },
    { id: 6, title: "FIGMA", icon: figma, alt: "figma-icon" },
];

export const profileData = {
    title: "Profile",
    basicInfo: {
        sectionTitle: "Basic Information",
        details: [
            { label: "Date of bBirth", value: "24.03.1996" },
            { label: "Home City", value: "Ankara" },
            { label: "Education Status", value: "Hacettepe Üniv. Biyoloji\nLisans, 2016" },
            { label: "Prefered Role", value: "Frontend, UI" }
        ]
    },
    about: {
        title: "About Me",
        paragraphs: [
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam aut, odit laborum aliquam voluptatum nisi mollitia.",
            "Minima accusamus ratione soluta aperiam sit voluptate? Dicta quod deserunt quam temporibus cumque magnam!"
        ],
        image: image2
    }
};

export const projectsHeader = "Projects";

export const projectsData = [
    {
        id: 1,
        title: "Workintech",
        description:
            "A simple, customizable, minimal setup cookie plugin that allows your users to select which cookies to accept or decline. This was created with vanilla JS, SCSS and Parcel Bundler and is available as a NPM package and the git repository makes any type of customization to code and themes possible.",
        tags: ["react", "redux", "vercel"],
        image: image3,
        links: {
            live: "https://your-workintech-live-link.com",
            github: "https://github.com/your-username/workintech"
        }
    },
    {
        id: 2,
        title: "Journey",
        description:
            "A simple, customizable, minimal setup cookie plugin that allows your users to select which cookies to accept or decline. This was created with vanilla JS, SCSS and Parcel Bundler and is available as a NPM package and the git repository makes any type of customization to code and themes possible.",
        tags: ["react", "redux", "vercel"],
        image: image4,
        links: {
            live: "https://your-journey-live-link.com",
            github: "https://github.com/your-username/journey"
        }
    }
];

export const contactData = {
    title: "Send me a message!",
    description: "Got a question or proposal, or just want to say hello? Go ahead.",
    email: "almilasucode@gmail.com",
    icons: [
        {
            id: 1,
            name: "Twitter",
            icon: icon1,
            link: "https://twitter.com/almilasucode",
        },
        {
            id: 2,
            name: "Codepen",
            icon: icon2,
            link: "https://codepen.io/almilasucode",
        },
        {
            id: 3,
            name: "At Sign",
            icon: icon3,
            link: "mailto:almilasucode@gmail.com",
        },
        {
            id: 4,
            name: "Instagram",
            icon: icon4,
            link: "https://instagram.com/almilasucode",
        },
    ],
};
