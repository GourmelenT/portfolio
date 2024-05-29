import {
  drone,
  underwater,
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
  dronemovie,
  surf,
  solarsystem,
  ifremer,
  swelladdiction,
  carrent,
  pnrproject,
  cinema,
  cerema,
  moon,
  undersea,
  punto,
  todolist,
  weather,
  symfony,
  bootstrap,
  tycolibri,
  python,
  arduino,
  astronomy,
  sea,
  navalbattle,
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
    id: "project",
    title: "Projets",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Astronomie",
    icon: astronomy,
  },
  {
    title: "Les vagues",
    icon: sea,
  },
  {
    title: "Sous la mer",
    icon: underwater,
  },
  {
    title: "Drone loisir",
    icon: drone,
  },
];

const informations = [
  {
    text: "Depuis mon enfance, je me suis toujours posé la question de savoir si nous étions seuls dans l'univers. En grandissant, j'ai réalisé que cette réponse est peut-être au-delà de notre portée actuelle. Nous avons encore tant à explorer. Pour assouvir ma curiosité et contempler les merveilles célestes inaccessibles à l'œil nu, j'ai investi dans un télescope. Chaque fois que le ciel le permet, je m'émerveille devant la beauté infinie de l'espace.",
    image: moon,
    type: "image",
  },
  {
    text: "Ayant grandi dans un environnement marins, depuis mes six ans, j'ai pratiqué le body-board, puis j'ai rapidement évolué vers le surf. Bien que mes débuts aient été difficiles avec une planche trop avancée pour mon niveau, j'ai persévéré. Plus tard, j'ai découvert le Stand Up Paddle en club, puis en compétition, et j'ai combiné ma passion pour le surf avec le Sup Surf. Récemment, j'ai adopté le Wing Foil, un sport qui me donne la sensation de voler au-dessus de l'eau, surtout durant les périodes venteuses.",
    image: surf,
    type: "image",
  },
  {
    text: "Lors de mes vacances à Lanzarote en décembre 2022, j'ai eu l'occasion de découvrir la plongée en apnée avec l'entraîneur de l'équipe de France, Christian Vogler. En rentrant chez moi à Brest, j'ai été inspiré à continuer à explorer ce monde sous-marin. J'ai acheté un masque, un tuba et des palmes pour retrouver les sensations éprouvées à Lanzarote. Malgré la différence de température, je suis convaincu que ce sport continuera à m'entraîner à améliorer mes performances en apnée et à découvrir toujours plus de merveilles sous-marines.",
    image: undersea,
    type: "video",
  },
  {
    text: "Passioné par les réalisations spéctaculaires, filmés par des drones cinématiques, je me suis fourni avant mon voyage à Lanzarote, un drone Mavic Mini 2. Ainsi j'ai pu découvrir une autre façon d'aimer les promenades mais cette fois-ci dans les aires comme le montre la vidéo présenté ici. A présent, dès que le soleil brille sur les côtes bretonnes, je saisis l'occasion pour capturer des images aériennes époustouflantes.",
    image: dronemovie,
    type: "video",
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
    title: "Technicien développement web en alternance",
    company_name: "Ifremer - Direction Générale et département de l’Infrastructures de Recherche et Système d’Information  - Plouzané",
    icon: ifremer,
    iconBg: "#E6DEDD",
    date: "Septembre 2022 - Présent (24 mois)",
    points: [
      "Conception et réalisation d'outils web pour le recueil de signalement en déontologie et santé publique et d’environnement (Mise en application de la loi n°2013-907 du 11 octobre 2013 relative à la transparence de la vie publique).",
      "Utilisation du plug-in QuForm de WordPress pour la création de nombreux formulaires.",
      "Création d'un diagramme UML qui a donné suite à une base de données stockés sur PostgreSQL.",
      "Création d'un script permettant d'insérer les données, d'un fichier CSV récupéré de la plateforme QuForm, dans une base données.",
      "Mise à jour des thématiques de la Direction Générale sur l'intranet de l'entreprise avec eZPublish.",
      "Utilisation de plusieurs langages, logiciels et progiciels dédiés à l’interfaçage web tels que PHP, JavaScript, Twig, Symfony 6 et PostgreSQL.",
    ],
  },
  {
    title: "Chargé d'études réseau",
    company_name: "CEREMA - Plouzané",
    icon: cerema,
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
    title: "Projectionniste",
    company_name: "Cinéma l'Image - Plougastel",
    icon: cinema,
    iconBg: "#E6DEDD",
    date: "Avril 2019 (10 jours)",
    points: [
      "Découverte des coulisses d'un cinéma, de son organisation et de sa logistique.",
      "Récupération des clés d'exploitation des films puis téléversement des films sur les projecteurs.",
      "Impression, vérification du stocks et vente de billets de cinéma.",
    ],
  },
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
  {
    name: "Bataille Navale",
    description:
      "Pour cette application web, nous devions produire un rapport d'utilisation détaillé sur l'outil MongoDB. Pour ce faire, nous avons dû créer un site web avec React et Express JS pour faire le côté serveur et le côté client.",
    tags: [
      {
        name: "c++",
        color: "blue-text-gradient",
      },
      {
        name: "eclipse",
        color: "green-text-gradient",
      },
    ],
    image: navalbattle,
    source_code_link: "https://github.com/GourmelenT/projet_naval_battle",
  },
  {
    name: "Projet PNR",
    description:
      "L'objectif de cette application était de réaliser une application permettant au parc naturel régional du Golfe du Morbihan, de saisir des données afin d'y voir plus clair dans le processus d'observation d'espèces.",
    tags: [
      {
        name: "javaswing",
        color: "blue-text-gradient",
      },
      {
        name: "vscode",
        color: "green-text-gradient",
      },
      {
        name: "mysql",
        color: "pink-text-gradient",
      },
    ],
    image: pnrproject,
    source_code_link: "https://github.com/GourmelenT/pnr-project-javaswing",
  },
  {
    name: "Astronomie Python",
    description:
      "Dans ce dépôt, j'essaie d'en apprendre toujours plus dans l'apprentissage du langage Python. Mon objectif est de m'intéresser de plus près à son utilisation en astronomie. Actuellement, j'en ai appris plus sur la réalisation d'une simulation du système solaire.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "vscode",
        color: "green-text-gradient",
      },
    ],
    image: solarsystem,
    source_code_link: "https://github.com/GourmelenT/astronomy-project",
  },
  {
    name: "Projet Ty-Colibri",
    description:
      "Voici un de nos tout premiers sites web. Ici, nous avons appris à reprendre un template déjà créé et nous l'avons simplement modifié pour le restaurant associatif 'Ty-Colibri'.",
    tags: [
      {
        name: "WordPress",
        color: "blue-text-gradient",
      },
      {
        name: "HTML/CSS",
        color: "pink-text-gradient",
      },
      {
        name: "Javascript",
        color: "pink-text-gradient",
      },
      {
        name: "vscode",
        color: "green-text-gradient",
      },
    ],
    image: tycolibri,
    source_code_link: "https://github.com/GourmelenT/ty-colibri",
    link_web: "https://tycolibri.gourmelen-tom.com",
  },
];

export { services, informations, technologies, experiences, projects };
