import Header from '../components/Header';

import Experience from '../components/Experience';
import PageHeading from '../components/PageHeading'
import ContactForm from '../components/ContactForm';


export default function Page(){
    
    return (
        <>
            <Header/>
            <div className="contact-page page">
                <PageHeading title="Contact" />
                <div className="ms-container">
                    <div className="ms-flex-container">
                   
                        <div>
                            <h4>Lets Connect!</h4>
                            <p>
                            Let’s connect! If you’re interested in collaborating on a project or have a role in frontend development that aligns with my expertise, feel free to fill out the form. I’m always happy to schedule a time to chat and explore opportunities to create outstanding digital experiences together.
                            </p>
                           
                        </div>
                        <div>
                            <ContactForm />
                        </div>
                    </div>
                  
                </div>
            </div>
        </>
    );
}