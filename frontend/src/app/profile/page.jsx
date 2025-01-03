import Header from '../components/Header';
import PageHeading from '../components/PageHeading';
import ProfileContent from '../components/ProfileContent';





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
        </>
    );
}