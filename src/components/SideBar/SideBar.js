import React from 'react';
import ViewToggle from '../ViewToggle/ViewToggle';

const SideBar = ({show}) => {
    return (
        <div>
            <h3>Hi Reader,</h3>
            <ViewToggle show={show} />
            <h3>Feedback</h3>
        </div>
    );
};

export default SideBar;