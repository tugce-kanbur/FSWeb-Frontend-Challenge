import javascript from "/logolar/javascript.png";
import react from "/logolar/react.png";
import redux from "/logolar/redux.png";
import node from "/logolar/node.png";
import vs from "/logolar/vs.png";
import figma from "/logolar/figma.png";
import image2 from "/fotoğraflar/image 2.png";
import image3 from "/fotoğraflar/Rectangle 41.png";
import image4 from "/fotoğraflar/Rectangle 42.png";
import icon1 from "/icons/twitter 1.png";
import icon2 from "/icons/codepen 1.png";
import icon3 from "/icons/at-sign 1.png";
import icon4 from "/icons/instagram 1.png";
import icon5 from "/icons/github-dark.png";
import icon6 from "/icons/LinkedIn-dark.png";
import icon7 from "/icons/Vector.png";
import icon8 from "/icons/codepen-dark.png";
import icon9 from "/icons/at-sign-dark.png";
import icon10 from "/icons/instagram-dark.png";
export const heroData = {
    heading: {
        en: "I am a Frontend",
        tr: "Ben bir Frontend",
    },
    heading1: {
        en: "Developer...",
        tr: "Geliştiricisiyim...",
    },
    description: {
        en: "...who likes to craft solid and scalable frontend",
        tr: "...sağlam ve ölçeklenebilir arayüz ürünleri üretmeyi",
    },
    description1: {
        en: "products with great user experiences.",
        tr: "ve harika kullanıcı deneyimleri sunmayı seviyorum.",
    },
    image: "/fotoğraflar/hero-right.png",
    buttons: [
        {
            label: { en: "Github", tr: "Github" },
            iconLight: "/icons/github.png",
            iconDark: icon5,
            url: "https://github.com/tugce-kanbur?tab=repositories",
        },
        {
            label: { en: "Linkedin", tr: "Linkedin" },
            iconLight: "/icons/LinkedIn.png",
            iconDark: icon6,
            url: "https://www.linkedin.com/in/tu%C4%9F%C3%A7e-kanbur-61234121b/",
        },
    ],
};

export const skillsTitle = {
    en: "Skills",
    tr: "Yetenekler",
};

export const skillsData = [
    { id: 1, title: { en: "JAVASCRIPT", tr: "JAVASCRIPT" }, icon: javascript, alt: "javascript-icon" },
    { id: 2, title: { en: "REACT", tr: "REACT" }, icon: react, alt: "react-icon" },
    { id: 3, title: { en: "REDUX", tr: "REDUX" }, icon: redux, alt: "redux-icon" },
    { id: 4, title: { en: "NODE", tr: "NODE" }, icon: node, alt: "node-icon" },
    { id: 5, title: { en: "VS CODE", tr: "VS KOD" }, icon: vs, alt: "vscode-icon" },
    { id: 6, title: { en: "FIGMA", tr: "FIGMA" }, icon: figma, alt: "figma-icon" },
];

export const profileData = {
    title: {
        en: "Profile",
        tr: "Profil",
    },
    basicInfo: {
        sectionTitle: {
            en: "Basic Information",
            tr: "Temel Bilgiler",
        },
        details: [
            { label: { en: "Date of Birth", tr: "Doğum Tarihi" }, value: "24.03.1996" },
            { label: { en: "Home City", tr: "Şehir" }, value: "Ankara" },
            { label: { en: "Education Status", tr: "Eğitim Durumu" }, value: "Hacettepe Üniv. Biyoloji\nLisans, 2016" },
            { label: { en: "Prefered Role", tr: "Tercih Edilen Rol" }, value: "Frontend, UI" },
        ],
    },
    about: {
        title: {
            en: "About Me",
            tr: "Hakkımda",
        },
        paragraphs: [
            {
                en: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam aut, odit laborum aliquam voluptatum nisi mollitia.",
                tr: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam aut, odit laborum aliquam voluptatum nisi mollitia.",
            },
            {
                en: "Minima accusamus ratione soluta aperiam sit voluptate? Dicta quod deserunt quam temporibus cumque magnam!",
                tr: "Minima accusamus ratione soluta aperiam sit voluptate? Dicta quod deserunt quam temporibus cumque magnam!",
            },
        ],
        image: image2,
    },
};

export const projectsHeader = {
    en: "Projects",
    tr: "Projeler",
};

export const projectsData = [
    {
        id: 1,
        title: { en: "Workintech", tr: "Workintech" },
        description: {
            en: "A simple, customizable, minimal setup cookie plugin that allows your users to select which cookies to accept or decline. This was created with vanilla JS, SCSS and Parcel Bundler and is available as a NPM package and the git repository makes any type of customization to code and themes possible.",
            tr: "Kullanıcıların kabul edeceği veya reddedeceği çerezleri seçmesini sağlayan basit, özelleştirilebilir bir eklenti. Vanilla JS, SCSS ve Parcel Bundler ile oluşturulmuştur. NPM paketi olarak sunulmakta ve GitHub üzerinden tamamen özelleştirilebilir.",
        },
        tags: ["react", "redux", "vercel"],
        image: image3,
        links: {
            live: "https://fs-web-frontend-challenge-8nnr.vercel.app",
            github: "https://github.com/tugce-kanbur?tab=repositories",
        },
    },
    {
        id: 2,
        title: { en: "Journey", tr: "Yolculuk" },
        description: {
            en: "A simple, customizable, minimal setup cookie plugin that allows your users to select which cookies to accept or decline. This was created with vanilla JS, SCSS and Parcel Bundler and is available as a NPM package and the git repository makes any type of customization to code and themes possible.",
            tr: "Kullanıcıların kabul edeceği veya reddedeceği çerezleri seçmesini sağlayan basit, özelleştirilebilir bir eklenti. Vanilla JS, SCSS ve Parcel Bundler ile oluşturulmuştur. NPM paketi olarak sunulmakta ve GitHub üzerinden tamamen özelleştirilebilir.",
        },
        tags: ["react", "redux", "vercel"],
        image: image4,
        links: {
            live: "https://fs-web-frontend-challenge-8nnr.vercel.app",
            github: "https://github.com/tugce-kanbur?tab=repositories",
        },
    },
];

export const contactData = {
    title: {
        en: "Send me a message!",
        tr: "Bana bir mesaj gönder!",
    },
    description: {
        en: "Got a question or proposal, or just want to say hello? Go ahead.",
        tr: "Bir sorunuz, teklifiniz mi var ya da sadece selam mı vermek istediniz? Hadi yazın!",
    },
    email: "almilasucode@gmail.com",
    icons: [
        {
            id: 1,
            name: "Twitter",
            iconLight: icon1,
            iconDark: icon7,
            link: "https://twitter.com",
        },
        {
            id: 2,
            name: "Codepen",
            iconLight: icon2,
            iconDark: icon8,
            link: "https://codepen.io",
        },
        {
            id: 3,
            name: "At Sign",
            iconLight: icon3,
            iconDark: icon9,
            link: "mailto:tugcekanbr@gmail.com",
        },
        {
            id: 4,
            name: "Instagram",
            iconLight: icon4,
            iconDark: icon10,
            link: "https://instagram.com",
        },
    ],
};
