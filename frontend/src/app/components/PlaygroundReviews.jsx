import './PlaygroundReviews.css';
import {useState} from 'react';
import { pushToDataLayer } from '../utilities/analytics';

const data = [
    {title: "review 1", text: "review-text"},
    {title: "review 2", text: "review-text"},
    {title: "review 3", text: "review-text"}
]



const ReviewCard = ({ item, index }) => {
  const [expanded, setExpanded] = useState(false);

  const reviewId = `review-${index}`;

  const expandHandler = () => {
    const nextExpanded = !expanded;

    pushToDataLayer("review-expanded", {
      review_id: reviewId,
      review_expanded: nextExpanded
    });

    setExpanded(nextExpanded);
  };

  return (
    <div className="review" id={reviewId}>
      <div>{item.title}</div>
      {expanded && <p>{item.text}</p>}
      <span onClick={expandHandler}>expand</span>
    </div>
  );
};

const PlaygroundReviews = () => {
  return (
    <div className="review-container">
      {data.map((item, index) => (
        <ReviewCard key={index} item={item} index={index} />
      ))}
    </div>
  );
};
export default PlaygroundReviews;