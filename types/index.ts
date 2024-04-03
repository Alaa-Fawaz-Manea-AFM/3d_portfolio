export type INavLinks = {
  id: string;
  title: string;
};

export type IServices = {
  icon: { src: string };
  title: string;
};

export type IProjects = {
  name: string;
  description: string;
  tags: {
    name: string;
    color: string;
  }[];
  image: { src: string };
  source_web_link: string;
  source_github_link: string;
};
