import React, { useEffect, useRef } from "react";
import './Header.css';

const Header: React.FC = () => {
    return (
        <header>
            <a href="/">
                <h1 className="header-title">猫鮫の籠り場</h1>
            </a>
        </header>
    );
};

export default Header;