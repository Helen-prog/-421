import React from "react";
import './Search.css';


class Search extends React.Component{
    state = {
        search: "",
        type: "all"
    }

    handleKey = (event) => {
        if(event.key === "Enter"){
            this.props.searchMovie(this.state.search)
        }
    }

    render(){
        return(
            <>
                <div className="search">
                    <input 
                        type="search"
                        placeholder="Search"
                        value={this.state.search}
                        onChange={(e) => this.setState({search: e.target.value})}
                        onKeyDown={this.handleKey}
                        />
                    <button
                        className="btn"
                        onClick={() => this.props.searchMovie(this.state.search)}
                    >Search</button>
                </div>
                <div className="radio">
                    <input type="radio" name="type" id="all" /> <label htmlFor="all">All</label>
                    <input type="radio" name="type" id="movies" /> <label htmlFor="movies">Movies</label>
                    <input type="radio" name="type" id="series" /> <label htmlFor="series">Series</label>
                    <input type="radio" name="type" id="games" /> <label htmlFor="games">Games</label>
                </div>
            </>
        )
    }
}

export default Search;