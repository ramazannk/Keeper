import { useState } from "react";

const Footer = () => {
    const time = new Date().getFullYear()
    return (
        <p>copyright{time}</p>
    )
};
export default Footer;