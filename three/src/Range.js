import React from "react";

class Range extends React.Component{
    state = {val: 90}

    range = (event) => {
        this.setState({val: event.target.value})
    }

    render(){
        return(
            <>
                <input type="range" onChange={this.range} min="20" max="150" step="10" />
                <p>{this.state.val}</p>
            </>
        )
    }
}

export default Range;