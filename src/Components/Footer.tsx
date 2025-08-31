import React, { FC } from "react";
import "./Footer.css";

const Footer: React.FC = () => {
    return (
        <footer>
            <div className="footer-text">
                <p>猫鮫の籠り場</p>
                <p>2025 Nekosame, all rights reserved.</p>
            </div>
            <div className="footer-link">
                <a href="privacy">プライバシーポリシー</a>
            </div>
        </footer>
    )
};

export default Footer;