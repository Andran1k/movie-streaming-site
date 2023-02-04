import React from 'react';
import cl from './style.module.css'

const Navbar = () => {

    return (
        <nav className={cl.nav}>
            <div className={cl.title}>MLand</div>
            <ul className={cl.links}>
                <li>
                    <a href="/">Home</a>
                </li>
                <li>
                    <a href="/catalog">Catalog</a>
                </li>
                <li>
                    <a href="/shop">Shop</a>
                </li>
                <li>
                    <a href="/sport">Sport</a>
                </li>
            </ul>
            <div className={cl.secPart}>
                <a className={cl.search} href="/"><img src="" alt=""/></a>
                <a href="">Enter promo code</a>
                <a href="">Login</a>
            </div>
        </nav>
    );
};

export default Navbar;