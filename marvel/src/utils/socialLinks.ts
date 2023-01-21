import { GitHub } from '@material-ui/icons'

import Insta from "../assets/logosSocial/insta.png"
import Twitter from "../assets/logosSocial/twitter.png"
import Linkedin from "../assets/logosSocial/linkedin.png"
import Hotmail from "../assets/logosSocial/hotmail.png"

export const socialLinks = [
    {
        icon: GitHub,
        alt: "GitHub",
        onClick: () => window.location.href = 'sssss',
    },
    {
        icon: Twitter,
        alt: "Twitter",
        onClick: () => console.log("Twitter clicked"),
    },
    {
        icon: Linkedin,
        alt: "Linkedin",
        onClick: () => console.log("Linkedin clicked"),
    },
    {
        icon: Insta,
        alt: "Instagram",
        onClick: () => console.log("Instagram clicked"),
    },
    {
        icon: Hotmail,
        alt: "Hotmail",
        onClick: () => console.log("Hotmail clicked"),
    },
];