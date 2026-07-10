import './PlaygroundReviews.css';
import {useState} from 'react';
import { pushToDataLayer } from '../utilities/analytics';

const data = [
    {title: "review 1", text: "review-text"},
    {title: "review 2", text: "review-text"},
    {title: "review 3", text: "review-text"}
]

const createReviews = () => {
    return data.map((c,i) => {
        const [reviewState, setReviewState] = useState({expanded: false });
        const reviewId = `review-${i}`;
        const updatedExpandedState = !reviewState.expanded;
        const expandHandler = () => {
            const eventPayload = {
                review_id: reviewId,
                review_expanded: updatedExpandedState
            };
            pushToDataLayer("review-expanded", eventPayload);
            setReviewState({expanded: updatedExpandedState});
        }
        return (
            <div className="review" key={`review-${i}`} id={`review-${i}`}>
                <div>{c.title}</div>
                { reviewState.expanded && ( <p>{c.text}</p>)} 
                <span onClick={expandHandler}>expand</span>
            </div>
        )
    })
}

const PlaygroundReviews = () => {
    return (
        <div className="review-container">
           {createReviews()}
        </div>
    );
}
export default PlaygroundReviews;