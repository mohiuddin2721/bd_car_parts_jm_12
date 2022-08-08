import React from 'react';
import './MainButton.css';

const MainButton = ({children}) => {
    return <button className='button'>{children}</button>;
};

export default MainButton;