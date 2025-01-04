const Footer = () => {
    const date = new Date();
    return(
        <footer className="footer">
            <span>Mark Sweitzer | &copy; All Rights Reserved {date.getFullYear()} </span>
        </footer>
    );
}
export default Footer;