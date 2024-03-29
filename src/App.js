import React, {Component} from "react";
import { robots } from "./robots";
import CardList from "./CardList"
import SearchBox from "./SearchBox.js"


class App extends Component {
    constructor() {
        super()
        this.state={
            robots: robots,
            Searchfield: ''
        }
    }
    onSearchChange = (event) =>{
        this.setState({Searchfield: event.target.value})
        
    }
    render() {
        const filteredRobots = this.state.robots.filter(robot =>{
            return robot.name.toLowerCase().includes(this.state.Searchfield.toLowerCase())
        })
        return(
            <div className="tc">
                <h1> RoboFriends</h1>
                <SearchBox searchChange={this.onSearchChange}/>
                <CardList robots={filteredRobots} />
            </div>
        );
    }
}

export default App;