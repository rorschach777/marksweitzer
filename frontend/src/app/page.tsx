
import HomeContent from './components/HomeContent';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mark Sweitzer | Home',
  description:
    'Crafting exceptional web experiences through innovation and expertise.',
};
export default function Home() {
  return (
    <>
      <HomeContent/>
    </>

  );
}
