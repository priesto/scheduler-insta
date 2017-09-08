import React from 'react';

import './Styles/DividerWithTextMiddle.css';

export default (props) => (
    <div className="wrapper">
        <div className="left" />
        {props.text}
        <div className="right" />
    </div>
)