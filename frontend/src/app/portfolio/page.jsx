import Portfolio from '../components/Portfolio'
import { sanityData } from '../utilities/sanityData';

export const metadata = {
    title: 'Mark Sweitzer | Portfolio',
    description:
      'Crafting exceptional web experiences through innovation and expertise.',
};


export default async function Page(){ 
    const QUERY = `*[_type == "portfolioItem" && !(_id in path('drafts.**'))]{ _id,
    title,
    slug,
    itemName,
    description,
    "imageUrl": image.asset->url
    }`;
    const portfolioData = await sanityData(QUERY)
    return <Portfolio portfolioData={portfolioData}/>
}