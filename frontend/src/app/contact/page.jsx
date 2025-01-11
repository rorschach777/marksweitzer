import Header from '../components/Header';
import PageHeading from '../components/PageHeading'
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';


export default function Page(){
    
    return (
        <>
            <Header/>
            <div className="contact-page page">
                <PageHeading title="Contact" />
                <div className="ms-container">
                    <div className="ms-flex-container">
                   
                        <div>
                            <h4>
                                Let’s Connect & Build Something Great!
                            </h4>
                        <p>
                            I’m always excited to collaborate on innovative projects and explore new opportunities. Whether you’re looking for a frontend developer to bring your design vision to life, or you have a role that matches my skills, I’d love to hear from you. My goal is to create seamless, engaging, and responsive web experiences that not only meet but exceed user expectations. Let’s discuss how we can turn your ideas into reality.
                        </p>
                        <p>
                            Whether you’re looking to develop a new web application, redesign an existing website, or create interactive features, I bring a passion for clean code, user-centric design, and modern technologies. I’m always open to new challenges and thrive in environments where collaboration and creativity come together to solve real-world problems. Fill out the form, and let’s chat about how we can work together to create exceptional digital products that stand out.
                        </p>
                        </div>
                        <div className="contact-form-container">
                            <ContactForm />
                        </div>
                    </div>
                  
                </div>
            </div>
            <Footer/>
        </>
    );
}