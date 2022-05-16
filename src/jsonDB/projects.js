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
      "Audio Engineering website made for client to showcase work and get new clients. Includes admin tools for client to update website.",
    long_description:
      "This Audio Engineering website is built using a React frontend, a Node/Express backend, and a PostgreSQL database. The goal of this application was to present my clients' full body of work in one place where the user can peruse particular genres and get an idea of if their music would be a good fit for my clients particular engineering style. To do this I made embeddable tracks for 3 major music streaming services (Spotify, Apple Music, and Tidal) and allowed the user to select their streaming service of choice. Then the correct embeddable music players will show up for each track within the database. Speaking of which, there are multiple admin tools to help the client add new tracks, genres, and text into their database.",
    tech: ["React", "Node.js", "PostgreSQL"],
    link: "https://audio-engineer.herokuapp.com",
    mainImg: audio_engineer_home,
  },
  // {
  //   name: "Personal Musician Website",
  //   id: "personal-musician",
  //   description:
  //     "Website for a classical musician to organize lesson materials, schedule lessons, and advertise themselves.",
  //   long_description:
  //     "Website for a classical musician to organize lesson materials and schedule lessons.",
  //   tech: ["React", "Node.js"],
  //   link: "https://www.bassoonswithoutborders.com",
  //   mainImg: coming_soon,
  // },
  {
    name: "Artist Portfolio & Shop",
    id: "artist",
    description:
      "Website for an artist to show off their portfolio, sell art, and accept commissions.",
    long_description:
      "Website for an artist to show portfolio, sell art, and accept commissions",
    tech: ["React", "Node.js"],
    link: "https://artist-portfolio-app.herokuapp.com",
    mainImg: artist_store,
  },
];

export const personalProjects = [
  {
    name: "My Website",
    id: "my-portfolio",
    description:
      "My own personal website for displaying my web development portfolio.",
    long_description:
      "Audio Engineering website made for client to showcase work and get new clients.",
    tech: ["React", "Typescript"],
    link: "https://www.kyle-olsen.com",
    mainImg: my_portfolio_home,
  },
  {
    name: "Couples Calendar",
    id: "couples-calendar",
    description:
      "This is an app I am working on to help my girlfriend and I with date ideas.",
    long_description:
      "This is an app I'm developing to help my girlfriend and I decide on date ideas as well as just figure out what we want to do on any given night. So far I've done some work using the Google Maps and Google Places API's to keep track of places we want to go on dates. I've also been looking into movie API's such as IMDB's API and The MovieDB API. I'm hoping to use one or both of these to make a combined movie watch list that will keep track of who wants to watch which movies and help to randomly select movies on our list based on criteria such as genre, length, and streaming platform availability. Beyond this I have a couple ideas to help facilitate decision making like a spinner to choose between dinner ideas where we can input some of our current favorite easy dinners. More than anything I'm hoping to make the app extremely modular so it's easy to expand upon when our hobbies and interests grow. At some point it'd be nice to add hikes, live shows, art projects, etc..",
    tech: ["React"],
    link: "https://www.google.com",
    mainImg: coming_soon,
  },
];
