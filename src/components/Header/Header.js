import React from 'react';
import HeaderCSS from '../Header.module.css';

const Header = () => {
    return (
        <div className={`
        ${HeaderCSS['header-container']}>
            red
        `}>
            <p>header</p>
        </div>
    );
}
export default Header;