// ? For Navigation Data Set

import Home2LineIcon from 'remixicon-react/Home2LineIcon';
import CustomerService2FillIcon from 'remixicon-react/CustomerService2FillIcon';
import MailFillIcon from 'remixicon-react/MailFillIcon';
import AtLineIcon from 'remixicon-react/AtLineIcon';

export const MenuLinks = [
    {
        name: "Home",
        href: "/",
        icon : Home2LineIcon,
    },
    {
        name: "About",
        href: "/about",
        icon : AtLineIcon,
    },
    {
        name: "Contact",
        href: "/contact",
        icon : CustomerService2FillIcon,
    },
    {
        name: "Blogs",
        href: "/blogs",
        icon : MailFillIcon,
    }
];

import Message3LineIcon from 'remixicon-react/Message3LineIcon';
import RssFillIcon from 'remixicon-react/RssFillIcon';
import FireLineIcon from 'remixicon-react/FireLineIcon';
import User6FillIcon from 'remixicon-react/User6FillIcon';

export const AuthMenuLinks = [
    {
        name: "Circle",
        href: "/feed",
        icon: RssFillIcon,
    },
    {
        name: "Trending",
        href: "/trending",
        icon: FireLineIcon,
    },
    {
        name: "Follower",
        href: "/follower",
        icon: User6FillIcon,
    },
    {
        name: "Chats",
        href: "/chats",
        icon: Message3LineIcon,
    }
];

export const FooterItems = {
    CompanyItems: [
        {
            name: "About",
            href: "/about"
        },
        {
            name: "Careers",
            href: "/careers"
        },
        {
            name: "Brand Center",
            href: "/brand_center"
        },
        {
            name: "Blog",
            href: "/blog"
        }
    ],
    Help_center: [
        {
            name: "Discord Server",
            href: "https://discord.com/"
        },
        {
            name: "Twitter",
            href: "https://Twitter.com/"
        },
        {
            name: "Facebook",
            href: "https://Facebook.com/"
        },
        {
            name: "Contact Us",
            href: "/contact"
        },
    ],
    Legal: [
        {
            name: "Privacy Policy",
            href: "/policy"
        },
        {
            name: "Licensing",
            href: "/license"
        },
        {
            name: "Terms & Conditions",
            href: "/terms"
        }
    ],
    Download: [
        {
            name: "iOS",
            href: "https://apple.com/store/"
        },
        {
            name: "Android",
            href: "https://playstore.com/"
        },
        {
            name: "Windows",
            href: "https://microsoft.com/"
        },
        {
            name: "MacOS",
            href: "https://macos.com/"
        },
    ]
};