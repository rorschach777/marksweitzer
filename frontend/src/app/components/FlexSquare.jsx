import './FlexSquare.css';
const FlexSquare = ( props ) => {
    return(
        <div className="ms-flex-square">
            <div></div>
            <div></div>
            {props.label && (
                <span>Content</span>
            )}
        </div>
    );
}
export default FlexSquare;