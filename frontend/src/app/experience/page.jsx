import Header from '../components/Header';

import Experience from '../components/Experience';
import PageHeading from '../components/PageHeading';



export const metadata = {
    title: 'Mark Sweitzer | Experience',
    description:
      'Crafting exceptional web experiences through innovation and expertise.',
  };

export default async function Page(){
//   const QUERY = `*[_type == "resume"]{ _id,
//   title, 
//   jobTitle -> {
//     title, 
//     cookieValue
//   },
//   experience []->{
//     title,
//     company,
//     displayTitle,
//     yearStart,
//     yearEnd,
//     displayYears,
//     duties
//   }, 
//   skillsDisplayName,
//   skills
// }`;
// const resumeData = await sanityData(QUERY)


    return (
        <>
            <Header/>
            <div className="page">
                <PageHeading title="Experience" />
                <div className="ms-container">
                    <Experience  />
                </div>
            </div>
        </>
    );
}