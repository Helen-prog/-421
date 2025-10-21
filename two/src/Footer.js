import React from "react";

class Footer extends React.Component{
    render(){
        let {copyright} = this.props;
        return (
            <footer style={{background: "#0088FF", fontSize: "22px", padding: "10px 0", color: "#FFF"}}>
                <p>{copyright}</p>
            </footer>
        )
    }
}

export default Footer;