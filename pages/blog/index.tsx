import React from 'react';
import fs from 'fs';
import { GetStaticProps } from 'next';
import path from 'path';
import Link from 'next/link';
import Head from 'next/head';
import matter from 'gray-matter';
import Subtitle from '../../components/Subtitle';

interface Blog {
  title: string;
  description: string;
  route: string;
}

interface Props {
  posts: Blog[];
}

const Blog = ({ posts }: Props) => (
  <>
    <Head>
      <title>Blog | rojasleon</title>
    </Head>
    <Subtitle subtitle="Blog" />
    <ul className="list-disc">
      {posts.map((info) => (
        <li key={info.title}>
          <Link href="/blog/[slug]" as={`/blog/${info.route}`}>
            <a className="hover:underline text-xl">{info.title}</a>
          </Link>
        </li>
      ))}
    </ul>
  </>
);

export const getStaticProps: GetStaticProps = async () => {
  const postsDirectory = path.join(process.cwd(), 'posts');
  const filenames = fs.readdirSync(postsDirectory);

  const posts = filenames.map((filename) => {
    const file = fs.readFileSync(path.join('posts', filename)).toString();
    const parsedMarkdown = matter(file);

    return { ...parsedMarkdown.data, route: filename.replace('.md', '') };
  });

  return {
    props: {
      posts
    }
  };
};

export default Blog;
