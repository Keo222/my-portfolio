import { useEffect } from "react";
import { Helmet } from "react-helmet";

// Image
import picOfMe from "images/me/beach_kyle500x667.jpg";

// Styled Components
import {
  HomeContainer,
  LargeOutlineSection,
  MyCanvas,
  HomeHeader,
  HomeBlurb,
  LinkButton,
} from "./styled";

const Home = () => {
  // CANVAS ANIMATIONS
  function drawLine(
    context: CanvasRenderingContext2D,
    x1: number,
    y1: number,
    x2: number,
    y2: number
  ) {
    context.beginPath();
    context.strokeStyle = "purple";
    context.lineWidth = 3;
    context.moveTo(x1, y1);
    context.lineTo(x2, y2);
    context.stroke();
    context.closePath();
  }

  function fitToContainer(canvas: HTMLCanvasElement) {
    canvas.style.width = "100%";
    canvas.style.height = "100%";
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
  }

  useEffect(() => {
    let x = 0;
    let y = 0;
    const canvas = document.getElementById("canvas") as HTMLCanvasElement;
    const container = document.getElementById(
      "canvas-container"
    ) as HTMLDivElement;
    if (canvas) {
      let ctx: CanvasRenderingContext2D;
      ctx = canvas.getContext("2d")!;
      window.addEventListener("resize", () => fitToContainer(canvas));
      fitToContainer(canvas);
      if (ctx) {
        container.addEventListener("mouseover", (e) => {
          x = e.offsetX;
          y = e.offsetY;
        });
        canvas.addEventListener("mousemove", (e) => {
          drawLine(ctx, x, y, e.offsetX, e.offsetY);
          x = e.offsetX;
          y = e.offsetY;
        });
      }
    }
  }, []);

  return (
    <HomeContainer>
      <Helmet>
        <title>Kyle Olsen: Web Developer</title>
        <meta
          name="description"
          content="Kyle Olsen is a web developer in the Portland, Oregon area. Kyle Olsen is a fullstack web developer focusing on React.js, Node.js, Express.js, and PostgreSQL."
        />
        <meta name="twitter:card" content="summary" />
        <meta property="og:url" content="https://www.kyle-olsen.com" />
        <meta property="og:title" content="Kyle Olsen - Web Dev" />
        <meta
          property="og:description"
          content="Kyle Olsen is a web developer in the Portland, Oregon area. Kyle Olsen is a fullstack web developer focusing on React.js, Node.js, Express.js, and PostgreSQL."
        />
        <meta property="og:image" content={picOfMe} />
      </Helmet>
      <LargeOutlineSection
        id="canvas-container"
        aria-labelledby="home-header"
      >
        <MyCanvas id="canvas"></MyCanvas>
        <HomeHeader id="home-header">Kyle Olsen</HomeHeader>
        <HomeBlurb>
          My name is Kyle Olsen. I am a curious web developer perpetually
          learning more about the state of the web and how to make websites
          beautiful and intuitive.
        </HomeBlurb>
        <LinkButton to="/portfolio" tabIndex={0}>
          View Portfolio
        </LinkButton>
      </LargeOutlineSection>
    </HomeContainer>
  );
};

export default Home;
