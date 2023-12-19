import React from 'react';
import styles from './navbar.module.css';
import { Link } from 'react-router-dom';


const Navbar = () => {
   return (
     <nav className={styles.navbar}>
       <ul className={styles['nav_list']}>
         <li className={styles['nav-item']}>
           <Link to="/" className={styles['nav-link']}>Home</Link>
         </li>
         <li className={styles['nav-item']}>
           <Link to="/about" className={styles['nav-link']}>About</Link>
         </li>
         <li className={styles['nav-item']}>
           <Link to="/contact" className={styles['nav-link']}>Contact</Link>
         </li>
       </ul>
     </nav>
   );
 };
 
 export default Navbar;