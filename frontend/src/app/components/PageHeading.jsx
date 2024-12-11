
const PageHeading = ( props ) => {
    return (
        <div className="ms-container">
        <h1 className="page-title-main">{props.title}</h1>
        <div className="ms-flex-container ms-heading">
            <div className="column">
                <span className="page-title page-title-left">{props.title}</span>
            </div>
            <div className="column">
                <span className="page-title page-title-right">{props.title}</span>
            </div>
            <div className="column"></div>
            <div className="column"></div>
        </div>
    </div>
    );
}
export default PageHeading;