import { GetStaticProps } from 'next';
import Head from 'next/head';
import Card from '../../components/Card';
import Subtitle from '../../components/Subtitle';
import { getResources, Resources } from '../../utils/resources';

export interface Project {
  title: string;
  description: string;
  route: string;
  image: string;
  languages: string[];
  github: string;
  website: string;
  date: string;
}

interface Props {
  projects: Project[];
}

const Portfolio = ({ projects }: Props) => {
  return (
    <div>
      <Head>
        <title>Portfolio - rojasleon</title>
      </Head>
      <Subtitle subtitle="Portfolio (I'll update this page in a bit since I've got more experience)" />
      <div className="m-auto grid gap-4 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((info) => (
          <Card key={info.title} {...info} />
        ))}
      </div>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const projects: Project[] = getResources(Resources.Projects);

  return {
    props: {
      projects: projects.sort((a, b) => {
        return new Date(b.date).getTime() - new Date(a.date).getTime();
      })
    }
  };
};

export default Portfolio;
