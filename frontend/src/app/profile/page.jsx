import Header from '../components/Header';

import ProfileContent from '../components/ProfileContent';
// import Footer from '../components/Footer';
import { sanityData } from '../utilities/sanityData';



export default async function Page(){


    const QUERY = `*[_type == "profile"]{ _id,
    title,
    jobTitle->{
      title,
      cookieValue
    },
    mainMessage,
    sections[]->{
      title,
      subHeadlineTop,
      subHeadlineBottom,
      mainTitle,
      secondaryTitle,
      mainContent
    }
    }`;
    const profileData = await sanityData(QUERY)
    return (
        <>
            <Header/>
            <ProfileContent profileData={profileData} />
       </>
    );
}