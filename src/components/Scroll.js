import React from "react";

const Scroll = (props) => {
    return (
        <div className="mv5" style={{overflowY: 'scroll', height: `700px`}}>
            {props.children}
        </div>
    )
}

export default Scroll;