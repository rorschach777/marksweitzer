import Header from '../components/Header';
import PageHeading from '../components/PageHeading';
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
            <div className="profile-page page">
                <PageHeading title="Profile" />
                <ProfileContent profileData={profileData} />
            </div>
 
        </>
    );
}