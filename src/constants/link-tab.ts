import {
  Magento,
  Wordpress,
  Laravel,
  Woo,
  Optimize,
  Design,
  Development,
  Suivi,
} from "@/assets/images";

export const LINK_NAVBAR = [
  {
    name: "accueil",
    link: "#",
  },
  {
    name: "notre expertise",
    link: "#",
    dropdown: [
      {
        name: "Magento",
        description: "e CMS incontournable",
        link: "#",
        icon: Magento,
      },
      {
        name: "Wordpress",
        description: "Le CMS le plus connu",
        link: "#",
        icon: Wordpress,
      },
      {
        name: "Laravel",
        description: "Le Framework compétent",
        link: "#",
        icon: Laravel,
      },
      {
        name: "WooCommerce",
        description: "Création de commerce",
        link: "#",
        icon: Woo,
      },
    ],
  },
  {
    name: "nos service",
    link: "#",
    dropdown: [
      {
        name: "Optimisation",
        description: "Web",
        link: "#",
        icon: Optimize,
        verified: true,
      },
      {
        name: "Design graphique",
        description: "Web",
        link: "#",
        icon: Design,
      },
      {
        name: "Développement web",
        description: "Web",
        link: "#",
        icon: Development,
      },
      {
        name: "Suivi & support",
        description: "Web",
        link: "#",
        icon: Suivi,
      },
    ],
  },
  {
    name: "a propos",
    link: "#",
  },
  {
    name: "contact",
    link: "#",
  },
];
