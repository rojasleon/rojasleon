import Link from 'next/link';
import { Project } from '../pages/portfolio/index';
import Text from './Text';

const Card: React.FC<Project> = ({
  title,
  route,
  image,
  description,
  languages,
  github,
  website
}) => {
  return (
    <div className="bg-white dark:bg-black rounded overflow-hidden shadow-lg mb-6">
      <Link href="/portfolio/[slug]" as={`/portfolio/${route}`}>
        <a>
          <img className="w-full" src={image} />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{title}</div>
            <Text>{description}</Text>
          </div>
        </a>
      </Link>
      <div className="px-6 py-4 flex flex-wrap items-center justify-between">
        <a href={github} target="_blank">
          <button className="py-2 px-4 border border-transparent font-medium rounded-md text-white bg-indigo-700 hover:bg-indigo-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            Code
          </button>
        </a>
        {website && (
          <a href={website} target="_blank">
            <button className="py-2 px-4 border border-transparent font-medium rounded-md text-white bg-indigo-700 hover:bg-indigo-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              Preview
            </button>
          </a>
        )}
      </div>
      <div className="px-6 py-4 mt-3 border-t dark:border-gray-800">
        {languages.map((lan) => (
          <span
            key={lan}
            className="border border-black hover:bg-gray-700 hover:text-white dark:border-gray-600 dark:hover:bg-white dark:hover:text-black rounded-full px-3 py-2 mr-3 text-sm font-semibold cursor-pointer">
            {lan}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Card;
