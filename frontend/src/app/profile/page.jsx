import Header from '../components/Header';
import PageHeading from '../components/PageHeading';
import ProfileContent from '../components/ProfileContent';
import Footer from '../components/Footer';

export default function Page(){
    return (
        <>
            <Header/>
            <div className="profile-page page">
                <PageHeading title="Profile" />
                <div className="ms-container">
                    <ProfileContent />
                </div>
            </div>
            <Footer/>
        </>
    );
}