
import HomeContent from './components/HomeContent';
import { Metadata } from 'next';
import { client } from "../sanity/client"
import { type SanityDocument } from "next-sanity";
import {sanityData} from './utilities/sanityData';

export const metadata: Metadata = {
  title: 'Mark Sweitzer | Home',
  description:
    'Crafting exceptional web experiences through innovation and expertise.',
};





export default async function Home() {
  const POSTS_QUERY = `*[_type == "post"]{ _id, title }`;
  const posts = sanityData(POSTS_QUERY)
  return (
    <>
      <HomeContent/>
    </>

  );
}
