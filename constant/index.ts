import {
  web,
  html,
  git,
  css,
  redux,
  mobile,
  Nextjs,
  reactjs,
  creator,
  tailwind,
  Nike_img,
  javascript,
  TypeScript,
  Home_y_tube,
  Home_Netflix,
  Home_e_commerce,
  Home_social_Media,
  projectHoobank_img,
} from "@/public/assets";

export const navLinks = [
  {
    id: "#about",
    title: "About",
  },
  {
    id: "#work",
    title: "Work",
  },
  {
    id: "#contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
  {
    title: "Next Developer",
    icon: mobile,
  },
];

const technologies = [
  html,
  css,
  javascript,
  TypeScript,
  reactjs,
  Nextjs,
  redux,
  tailwind,
  git,
];

const projects = [
  {
    name: "Social Media app",
    description:
      "The provided website is a social media application that allows users to connect, share content, and interact with each other online. It serves as a platform for users to post updates, share photos and videos, follow other users, and engage in discussions likes. The app aims to provide a dynamic and engaging social networking experience for its users.",
    tags: [
      {
        name: "Next",
        color: "blue-text-gradient",
      },
      {
        name: "TypeScript",
        color: "green-text-gradient",
      },
      {
        name: "tailwindCss",
        color: "pink-text-gradient",
      },
      {
        name: "firebase",
        color: "pink-yellow-gradient",
      },
    ],
    image: Home_social_Media,
    source_github_link: "https://github.com/Alaa-Fawaz-Manea-AFM/social_media_app",
    source_web_link: "https://social-media-app-nine-self.vercel.app/",
  },
  {
    name: "E-Commerce",
    description:
      "The provided website is an e-commerce platform designed for online shopping. It offers a wide range of products across various categories, allowing users to browse, search, and purchase items conveniently from the comfort of their homes. The website aims to provide a seamless and enjoyable shopping experience for customers while showcasing products effectively and securely processing transactions",
    tags: [
      {
        name: "Next",
        color: "blue-text-gradient",
      },
      {
        name: "TypeScript",
        color: "green-text-gradient",
      },
      {
        name: "tailwindCss",
        color: "pink-text-gradient",
      },
      {
        name: "firebase",
        color: "pink-yellow-gradient",
      },
    ],
    image: Home_e_commerce,
    source_github_link: "https://github.com/Alaa-Fawaz-Manea-AFM/e-commerce",
    source_web_link: "https://e-commerce-ruddy-ten.vercel.app/",
  },
  {
    name: "y-tube",
    description:
      "provided website is a clone of the popular streaming platform Netflix. It replicates the user interface and features of Netflix, allowing users to browse and watch a wide range of movies and TV shows online. With a similar layout and design, users can enjoy a familiar streaming experience on this clone site",
    tags: [
      {
        name: "Next",
        color: "blue-text-gradient",
      },
      {
        name: "TypeScript",
        color: "green-text-gradient",
      },
      {
        name: "tailwindCss",
        color: "pink-text-gradient",
      },
    ],
    image: Home_y_tube,
    source_github_link: "https://github.com/Alaa-Fawaz-Manea-AFM/y-tube",
    source_web_link: "https://y-tube-lac.vercel.app/",
  },
  {
    name: "Net_Flix",
    description:
      "provided website is a clone of the popular streaming platform Netflix. It replicates the user interface and features of Netflix, allowing users to browse and watch a wide range of movies and TV shows online. With a similar layout and design, users can enjoy a familiar streaming experience on this clone site",
    tags: [
      {
        name: "Next",
        color: "blue-text-gradient",
      },
      {
        name: "TypeScript",
        color: "green-text-gradient",
      },
      {
        name: "tailwindCss",
        color: "pink-text-gradient",
      },
      {
        name: "firebase",
        color: "pink-yellow-gradient",
      },
    ],
    image: Home_Netflix,
    source_github_link: "https://github.com/Alaa-Fawaz-Manea-AFM/Net-Flix",
    source_web_link: "https://net-flix-umber.vercel.app/",
  },


  {
    name: "Nike",
    description:
      "The provided website is a clone of the Nike e-commerce platform, aiming to replicate the user interface and shopping experience of the original Nike website. It offers a wide range of Nike products, including footwear, apparel, and accessories, allowing users to browse, select, and purchase items online.",
    tags: [
      {
        name: "Next",
        color: "blue-text-gradient",
      },
      {
        name: "TypeScript",
        color: "green-text-gradient",
      },
      {
        name: "tailwindCss",
        color: "pink-text-gradient",
      },
    ],
    image: Nike_img,
    source_github_link: "https://github.com/Alaa-Fawaz-Manea-AFM/Nike-clone",
    source_web_link: "https://nike-app-eight.vercel.app/",
  },
  {
    name: "projectHoobank",
    description:
      'The provided website is an online banking platform called "Hoobank" designed to offer a range of banking services and features to users. It aims to provide a convenient and secure way for users to manage their finances, perform transactions, and access banking services remotely.',
    tags: [
      {
        name: "Next",
        color: "blue-text-gradient",
      },
      {
        name: "TypeScript",
        color: "green-text-gradient",
      },
      {
        name: "tailwindCss",
        color: "pink-text-gradient",
      },
    ],
    image: projectHoobank_img,
    source_github_link: "https://github.com/Alaa-Fawaz-Manea-AFM/projectHoobank",
    source_web_link: "https://project-hoobank-beta.vercel.app/",
  },
];

export { services, technologies, projects };
