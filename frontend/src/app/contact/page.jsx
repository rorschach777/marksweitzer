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
                            <h4>Contact</h4>
                            <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </p>
                            <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
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