import React from "react";

const Main = (props) => {
    return(
        <div>
            You made it {props.session.currentUser.username} !
        </div>
    )
}

export default Main