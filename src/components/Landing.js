import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Landing extends Component {
    constructor(){
        super();
        this.state = {
            users: [
                { name: "Mona", color: "red" },
                { name: "Jasmine", color: "green" },
                { name: "Aura", color: "purple" },
                { name: "Tina", color: "Blue" }
            ]
        }
    }
    render(){
        return (
            <div>
                <span id="whoiswatching">Who's Watching ?</span>
                <div className="App-header">
                    {this.state.users.map(m => <Link key={m.name} to="/catalog"><button style={{color: m.color}} className="landing_divs">{m.name}</button></Link>)}
                </div>
            </div>
        )
    }
}
