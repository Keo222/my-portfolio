export type ImgArray = {
  src: string;
  alt: string;
}[];

export type ProjArray = {
  name: string;
  id: string;
  description: string;
  tech: string[];
  link: string;
  imgs: { 600: string; 900: string; 1200: string };
}[];
