import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  mysql,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  vuejs,
  git,
  meta,
  swelladdiction,
  carrent,
  tesla,
  shopify,
  punto,
  todolist,
  weather,
  symfony,
  bootstrap,
  python,
  arduino,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "A propos",
  },
  {
    id: "work",
    title: "Expériences",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Développeur Web",
    icon: web,
  },
  {
    title: "Passion marine",
    icon: mobile,
  },
  {
    title: "Pilote de drone",
    icon: backend,
  },
  {
    title: "Conception 3D",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "Arduino",
    icon: arduino,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Vue JS",
    icon: vuejs,
  },
  {
    name: "Symfony",
    icon: symfony,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Bootstrap",
    icon: bootstrap,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "MySQL",
    icon: mysql,
  },
];

const experiences = [
  {
    title: "Vendeur Nautique",
    company_name: "SwellAddiction - Brest",
    icon: swelladdiction,
    iconBg: "#383E56",
    date: "Mars 2018 (3 jours)",
    points: [
      "Stage d'observation des métiers de la vente dans un magasin d'articles de sports nautiques.",
      "Participation à l'inventaire et découverte du fonctionnement de la vente en ligne du magasin.",
    ],
  },
  {
    title: "Projectionniste",
    company_name: "Cinéma l'Image - Plougastel",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Avril 2019 (10 jours)",
    points: [
      "Découverte des coulisses d'un cinéma, projection de films pendant mes temps disponibles.",
      "Découverte de son organisation et de la logistique autour de la réception des films.",
      "Récupération des clés d'exploitation des films puis téléversement des films sur les projecteurs.",
      "Impression, vérification du stocks et vente de billets de cinéma.",
    ],
  },
  {
    title: "Chargé d'études réseau",
    company_name: "CEREMA - Plouzané",
    icon: shopify,
    iconBg: "#383E56",
    date: "Avril 2022 (4 jours)",
    points: [
      "Découverte de l'architecture, de l'administration, et de la gestion des organes de sécurité du réseau des CROSS (Centre Régionaux Opérationnels de Surveillance et de Sauvetage),",
      "Découverte d'outils utilisés pour la sécurité des données (Stormshield, CISCO).",
      "Découverte de différents outils permettant d'évaluer le trafic maritime dans la Manche et utilisation de ces derniers pour analyser les risques liés à la circulation maritime (conflits d'usage)",
      "Découverte de plusieurs projets utilisant des drones pour la surveillance et la protection de l'environnement",
    ],
  },
  {
    title: "Technicien développement web en alternance",
    company_name: "Ifremer - Direction Générale et département de l’Infrastructures de Recherche et Système d’Information  - Plouzané",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Septembre 2022 - Present (24 mois)",
    points: [
      "Conception et réalisation d'outils web pour le recueil de signalement en déontologie et santé publique et d’environnement (Mise en application de la loi n°2013-907 du 11 octobre 2013 relative à la transparence de la vie publique).",
      "Utilisation du plug-in QuForm de WordPress pour la création de nombreux formulaires.",
      "Création d'un diagramme UML qui a donné suite à une base de données stockés sur PostgreSQL.",
      "Création d'un script permettant d'insérer les données, d'un fichier CSV récupéré de la plateforme QuForm, dans une base données.",
      "Mise à jour des thématiques de la Direction Générale sur l'intranet de l'entreprise avec eZPublish.",
      "Utilisation de plusieurs langages, logiciels et progiciels dédiés à l’interfaçage web tels que PHP, JavaScript, Twig, Symfony 6 et PostgreSQL.",
    ],
  },
];

const projects = [
  {
    name: "Jeu Punto",
    description:
      "Il s'agit d'une application web qui vous permet de jouer au jeu Punto. Elle est codée avec ReactJS et dispose d'un système de gestion de base de données.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "MySQL",
        color: "green-text-gradient",
      },
      {
        name: "Neo4J",
        color: "green-text-gradient",
      },
      {
        name: "Bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image: punto,
    source_code_link: "https://github.com/GourmelenT/punto-project/",
  },
  {
    name: "To-Do List",
    description:
      "Ici nous avons dû créer une Todolist à l'aide du framework VueJS. Le but était de se familiariser avec VueJS et l'utilisation du stockage local (LocalStorage) pour sauvegarder les données de l'utilisateur.",
    tags: [
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
      {
        name: "vuejs",
        color: "green-text-gradient",
      },
      {
        name: "localstorage",
        color: "pink-text-gradient",
      },
    ],
    image: todolist,
    source_code_link: "https://github.com/GourmelenT/todolist-website",
  },
  {
    name: "Weather Website",
    description:
      "Application web fournissant des prévisions météorologiques. Cette application nous a permis de commencer à coder en Javascript et d'utiliser une API mise à disposition pour ce projet.",
    tags: [
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
      {
        name: "api",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: weather,
    source_code_link: "https://github.com/GourmelenT/weather-website",
  },
  {
    name: "Concession Automobile",
    description:
      "Pour cette application web, nous devions produire un rapport d'utilisation détaillé sur l'outil MongoDB. Pour ce faire, nous avons dû créer un site web avec React et Express JS pour faire le côté serveur et le côté client.",
    tags: [
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
      {
        name: "react",
        color: "green-text-gradient",
      },
      {
        name: "expressjs",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/GourmelenT/projet-react-JS-MongoDB",
  },
];

export { services, technologies, experiences, projects };
