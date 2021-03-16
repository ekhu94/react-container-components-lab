import axios from 'axios';
import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

class SearchableMovieReviewsContainer extends Component {
    state = { reviews: [], searchTerm: '' };

    onFormSubmit = e => {
        e.preventDefault();
        fetch(URL)
            .then(res => res.json())
            .then(data => this.setState({ reviews: data.results }))
        // const res = await axios.get(URL);
        // this.setState({ reviews: res.data.results });
    }

    render() {
        return (
            <div className="searchable-movie-reviews">
                <form onSubmit={this.onFormSubmit}>
                    <input 
                        name="search"
                        value={this.state.searchTerm}
                        onChange={e => this.setState({ searchTerm: e.target.value })}
                    />
                </form>
                <div>
                    <MovieReviews reviews={this.state.reviews} />
                </div>
            </div>
        );
    }
}

export default SearchableMovieReviewsContainer;
