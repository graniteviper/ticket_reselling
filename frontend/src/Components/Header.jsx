import React, { useState } from "react";
import styles from "../styles/Header.module.css"
import {useNavigate, Link} from "react-router-dom";


function Header(){
    const navigate = useNavigate();
    const handleSignInClick = () => {
            navigate('/SignIn'); // Navigate to login page
    };

let [show,setshow] = useState(false)
const handlemenu=()=>{
    setshow(!show)

}
    return (
        <>
        <div className={styles.header}>
            <div className={styles.header_space1}>
                <img src ="https://media.istockphoto.com/id/671182996/vector/two-tickets-line-art-outline-tickets-icon-vector.jpg?s=612x612&w=0&k=20&c=6BclkDXbZ5JzOU8hKG1Z4IDNcF7_kHHC4R5EcORM8Zk=" height="100%" alt="TradeMyTicket logo" />
                <Link to='/' className={styles.logoLink}><h1  id={styles.logo}>TradeMyTicket</h1></Link>

            </div>
            <div className={styles.header_space2}>
                <Link to='/Explore' className={styles.logoLink1}><p>Explore</p></Link>
                <p><Link to="/HowItWorks" className={styles.link}>How it works!</Link></p>
                <p><Link to="/ContactUs" className={styles.link}>Contact Us</Link></p>
            </div>
            <div className={styles.header_space3}>
                <div>
                <Link to='/Seller1' className={styles.sell_button}>Sell</Link>
                </div>
                <span>
                <button onClick={handleSignInClick}>Sign In/Register</button>
                <Link to='/profile'><p>Profile</p></Link>
                </span>
              
            </div>
        </div>
        </>
    );
}


export default Header;