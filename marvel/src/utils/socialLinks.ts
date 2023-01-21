import GitHub from '../assets/logosSocial/github.png'
import Insta from "../assets/logosSocial/insta.png"
import Twitter from "../assets/logosSocial/twitter.png"
import Linkedin from "../assets/logosSocial/linkedin.png"
import Hotmail from "../assets/logosSocial/hotmail.png"

export const socialLinks = [
    {
        icon: GitHub,
        alt: "GitHub",
        onClick: () => window.open('https://github.com/Chagas-Thiago/marvel-2023', '_blank')
    },
    {
        icon: Linkedin,
        alt: "Linkedin",
        onClick: () => window.open("https://www.linkedin.com/in/thiago-faria-chagas-4a63271b1/", '_blank')
    },
    {
        icon: Twitter,
        alt: "Twitter",
        onClick: () => window.open("https://twitter.com/ThiagoV34252210", '_blank')
    },

    {
        icon: Insta,
        alt: "Instagram",
        onClick: () => window.open("https://www.instagram.com/thiago_vinicius_bh/", '_blank')
    },
    {
        icon: Hotmail,
        alt: "Hotmail",
        onClick: () => window.location.href = 'mailto:fariachagas@hotmail.com'
    },
];