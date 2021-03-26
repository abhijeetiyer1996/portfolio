import {VscHome, VscRootFolder, VscPreview, VscInfo} from "react-icons/vsc";

export const menuLinks = [
    {
        href: '#',
        link: "/",
        icon : <VscHome/>,
        text:"Home"
        
    },
    {
        href: "#",
        link: "/about",
        icon: <VscPreview/>,
        text:"About"
    },
    {
        href: "#",
        link: "/projects",
        icon: <VscRootFolder/> ,
        text:"Projects"
    },
    {
        href: "#",
        link: "/contact",
        icon: <VscInfo/>,
        text:"Contact"
    }
];