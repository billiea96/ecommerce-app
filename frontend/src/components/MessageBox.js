import React from "react";

export default function MessageBox(props) {
    return (
        <div className={`alert alert-${props.variant || 'info'}`}>
            {/* Whenever there are any contents on children of component this MessageBox, we can use props.children. Note : look at HomeScreen.js */}
            {props.children}
        </div>
    );
}