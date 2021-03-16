import React from 'react';

const MovieReviews = props => {
    const renderedRevs = props.reviews.map(r => {
        return <li key={r.display_title} className="review">{r.headline}</li>
    });
    return (
        <ul className="review-list">
            {renderedRevs}
        </ul>
    );
}

export default MovieReviews;