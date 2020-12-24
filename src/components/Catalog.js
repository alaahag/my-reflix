import React, { Component } from 'react'
import Movie from './Movie'

export default class Catalog extends Component {
    constructor(props){
        super();
        this.state = {
            searchItem: "",
            budget: 10-(props.movies.filter(f => f.isRented === true).length * 3),
            movies: props.movies
        }
        const myCollection = JSON.parse(localStorage.getItem('myCollection'));
        if (myCollection)
            this.setState({movies: myCollection});
    }
	rentUnrent = (movie) => {
        if (!movie.isRented && this.state.budget < 3) {
            alert ("You don't have enough money");
        }
        else {
            if (movie.isRented)
                this.setState({ budget: this.state.budget + 3});
            else
                this.setState({ budget: this.state.budget - 3});

            const allMovies = [...this.state.movies];
            const mv = allMovies.find(m => m === movie);
            mv.isRented = !movie.isRented;
            this.setState({movies: allMovies});
            localStorage.setItem('myCollection', JSON.stringify(allMovies));
        }

    }

    onTextChange = (text) => {
        this.setState({searchItem: text.target.value});
    }

    render(){
        return (
            <div>
                <div>
                    <input value={this.state.searchItem} onChange={this.onTextChange} type="text" id="search" placeholder="Search for item"></input>
                    <span id="budget_num">{this.state.budget}$</span>
                    <span id="budget_label">Budget:</span>
                </div>
                <div style={{display: this.state.movies.some(movie => movie.isRented === true) ? "block" : "none"}} className="catalog_name">Rented</div>
                <div className="catalog_header">
                    {this.state.movies.filter(f => f.isRented === true).map(m => <Movie rentUnrent={this.rentUnrent} movie={m} />)}
                </div>
                <div className="catalog_name">Catalog</div>
                <div className="catalog_header">
                    {this.state.movies.filter(f => f.title.toLowerCase().includes(this.state.searchItem.toLowerCase())).map(m => <Movie rentUnrent={this.rentUnrent} movie={m} />)}
                </div>
            </div>
        )
    }
}
