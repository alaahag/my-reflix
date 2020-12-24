import React, { Component } from 'react'

export default class MovieDetail extends Component {
    render(){
        let movieID = this.props.match.params.movieID
        let movie = this.props.movies.find(m => { return m.id == movieID })
        return (
            <div className="movie-header">
                <div><b>{movie.title} ({movie.year})</b></div>
                <img className="moviesImage" src={movie.img} alt="movie"></img>
                <div>{movie.descrShort}</div>
            </div>
        )
    }
}
