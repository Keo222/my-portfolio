// Images
import my_portfolio_homex600 from "../images/websites/my_portfolio/my_portfolio_homex600.png";
import my_portfolio_homex900 from "../images/websites/my_portfolio/my_portfolio_homex900.png";
import my_portfolio_homex1200 from "../images/websites/my_portfolio/my_portfolio_homex1200.png";

// Audio Engineer Images
import audio_engineer_homex600 from "../images/websites/audio_engineer/audio_engineer_homex600.png";
import audio_engineer_homex900 from "../images/websites/audio_engineer/audio_engineer_homex900.png";
import audio_engineer_homex1200 from "../images/websites/audio_engineer/audio_engineer_homex1200.png";

// Artist Images
import artist_storex600 from "../images/websites/artist/artist_storex600.png";
import artist_storex900 from "../images/websites/artist/artist_storex900.png";
import artist_storex1200 from "../images/websites/artist/artist_storex1200.png";

// Coming Soon Images
import coming_soonx600 from "../images/websites/coming_soon/coming_soonx1200.jpg";
import coming_soonx900 from "../images/websites/coming_soon/coming_soonx1200.jpg";
import coming_soonx1200 from "../images/websites/coming_soon/coming_soonx1200.jpg";

export const clientProjects = [
  {
    name: "Audio Engineering Website",
    id: "audio-engineer",
    description:
      "Audio Engineering website made for music engineer to showcase work and get new clients. Includes admin tools for client to update website.",
    long_description:
      'This Audio Engineering website is built using a React frontend, a Node/Express backend, and a PostgreSQL database. The goal of this application was to present my clients\' full body of work in one place where the user can peruse particular genres and get an idea of if their music would be a good fit for my clients particular engineering style. To do this I made embeddable tracks for 3 major music streaming services (Spotify, Apple Music, and Tidal) and allowed the user to select their streaming service of choice. Then the correct embeddable music players will show up for each track within the database. Speaking of which, there are multiple admin tools to help the client add new tracks, genres, and text into their database. They can be accessed through the "/admin" path with Username: testuser and Password: AudioPassword!100',
    tech: ["React", "Node.js", "PostgreSQL"],
    link: "https://audio-engineer.herokuapp.com",
    imgs: {
      600: audio_engineer_homex600,
      900: audio_engineer_homex900,
      1200: audio_engineer_homex1200,
    },
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
      "The Artist Portfolio website was built using a React frontend and a Node/Express backend. The cart checkout uses Stripe, although Stripe is disabled because the site is currently inactive. This website was built to accommodate the needs of a screen printer. They were wanting a place to showcase their previous projects as well as a way to sell currently listed items and accept commission requests.",
    tech: ["React", "Node.js"],
    link: "https://artist-portfolio-app.herokuapp.com",
    imgs: {
      600: artist_storex600,
      900: artist_storex900,
      1200: artist_storex1200,
    },
  },
];

export const personalProjects = [
  {
    name: "My Website",
    id: "my-portfolio",
    description:
      "My own personal website for displaying my web development portfolio.",
    long_description:
      "This is the website you’re currently looking at! It’s built using React with a serverless function hosted on Vercel to handle the contact form logic. I wanted this site to be as simple as possible while still showing off my projects. This website is the first one I ever used Typescript on. There is also a hidden extra on the homepage where your cursor turns into Harold from Harold and the Purple Crayon and you get to draw on a canvas element in the middle of the screen.",
    tech: ["React", "Typescript"],
    link: "https://www.kyle-olsen.com",
    imgs: {
      600: my_portfolio_homex600,
      900: my_portfolio_homex900,
      1200: my_portfolio_homex1200,
    },
  },
  {
    name: "Tandemly",
    id: "tandemly",
    description:
      "This is an app I am working on to help my girlfriend and I with date ideas.",
    long_description:
      "This is an app I'm developing to help my girlfriend and I decide on date ideas as well as just figure out what we want to do on any given night. So far I've done some work using the Google Maps and Google Places API's to keep track of places we want to go on dates. I've also been looking into movie API's such as IMDB's API and The MovieDB API. I'm hoping to use one or both of these to make a combined movie watch list that will keep track of who wants to watch which movies and help to randomly select movies on our list based on criteria such as genre, length, and streaming platform availability. Beyond this I have a couple ideas to help facilitate decision making like a spinner to choose between dinner ideas where we can input some of our current favorite easy dinners. More than anything I'm hoping to make the app extremely modular so it's easy to expand upon when our hobbies and interests grow. At some point it'd be nice to add hikes, live shows, art projects, etc..",
    tech: ["React", "Typescript"],
    link: "https://www.tandemly-app.com/",
    imgs: {
      600: coming_soonx600,
      900: coming_soonx900,
      1200: coming_soonx1200,
    },
  },
];
