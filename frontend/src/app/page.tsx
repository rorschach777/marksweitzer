
import HomeContent from './components/HomeContent';
import { Metadata } from 'next';
import { client } from "../sanity/client"
import { type SanityDocument } from "next-sanity";

export const metadata: Metadata = {
  title: 'Mark Sweitzer | Home',
  description:
    'Crafting exceptional web experiences through innovation and expertise.',
};

const POSTS_QUERY = `*[_type == "post"]{ _id, title }`;

const options = { next: { revalidate: 30 } };

export default async function Home() {
  const posts = await client.fetch<SanityDocument[]>(POSTS_QUERY, {}, options);
  console.log(posts);
  return (
    <>
      <HomeContent/>
    </>

  );
}
