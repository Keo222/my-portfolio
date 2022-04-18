// Images
import my_portfolio_home from "../images/websites/my_portfolio/my_portfolio_home.png";
import audio_engineer_home from "../images/websites/audio_engineer/audio_engineer_home.png";
import artist_store from "../images/websites/artist/artist_store.png";

import coming_soon from "../images/websites/coming_soon.jpg";

export const clientProjects = [
  {
    name: "Audio Engineering Website",
    id: "audio-engineer",
    description:
      "Audio Engineering website made for client to showcase work and get new clients.",
    tech: ["React", "Node.js", "PostgreSQL"],
    link: "http://joel-website.herokuapp.com",
    mainImg: audio_engineer_home,
  },
  {
    name: "Personal Musician Website",
    id: "personal-musician",
    description:
      "Website for a classical musician to organize lesson materials and schedule lessons.",
    tech: ["React", "Node.js", "MongoDB"],
    link: "https://www.bassoonswithoutborders.com",
    mainImg: coming_soon,
  },
  {
    name: "Artist Portfolio & Shop",
    id: "artist",
    description:
      "Website for an artist to show portfolio, sell art, and accept commissions",
    tech: ["React", "Node.js", "MongoDB"],
    link: "http://bassoon-reeds.herokuapp.com",
    mainImg: artist_store,
  },
];

export const personalProjects = [
  {
    name: "My Website",
    id: "my-portfolio",
    description:
      "Audio Engineering website made for client to showcase work and get new clients.",
    tech: ["React", "Typescript"],
    link: "https://www.kyle-olsen.com",
    mainImg: my_portfolio_home,
  },
  {
    name: "Date",
    id: "date",
    description:
      "Audio Engineering website made for client to showcase work and get new clients.",
    tech: ["React"],
    link: "https://www.google.com",
    mainImg: coming_soon,
  },
];
