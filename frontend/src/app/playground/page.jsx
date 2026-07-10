import './page.css';

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

    return (
        <>
         <span>Playground</span>
       </>
    );
}