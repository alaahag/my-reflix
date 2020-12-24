import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Movie extends Component {
    render(){
        return (
            <div>
                <Link to={`/movies/${this.props.movie.id}`}>
                    <img key={this.props.movie.id} className="moviesImage" src={this.props.movie.img} alt="movie"/>
                </Link>
                <button onClick={() => this.props.rentUnrent(this.props.movie)} className="button_add_remove">{this.props.movie.isRented? "-" : "+"}</button>
            </div>
        )
    }
}
