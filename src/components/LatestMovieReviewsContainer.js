import axios from 'axios';
import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

class LatestMovieReviewsContainer extends Component {
    state = { reviews: [] };

    componentDidMount = () => {
        fetch(URL)
            .then(res => res.json())
            .then(data => this.setState({ reviews: data.results }))
        // const res = await axios.get(URL);
        // this.setState({ reviews: res.data.results });
        // console.log(this.state.reviews)
    }

    render() {
        return (
            <div className="latest-movie-reviews">
                <MovieReviews reviews={this.state.reviews} />
            </div>
        );
    }
}

export default LatestMovieReviewsContainer;
