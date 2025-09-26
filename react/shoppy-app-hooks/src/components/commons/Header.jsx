import { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { FiShoppingBag } from "react-icons/fi";
import { GiShoppingCart } from "react-icons/gi";
import { CartContext } from '../../context/CartContext';
import { AuthContext } from '../../context/AuthContext';
import { useAuth } from '../../hooks/useAuth.js';

export function Header() {
    const {handleLogout} = useAuth();
    const {isLogin} = useContext(AuthContext);
    const {cartCount} = useContext(CartContext);

    return (
        <div className="header-outer">
            <div className="header">
                <Link to="/" className='header-left'>
                    <FiShoppingBag />
                    <span>Shoppy-hooks</span>
                </Link>
                <nav className='header-right'>
                    <Link to="/all">Products</Link>
                    <Link to="/cart" className="header-icons-cart-link">
                        <GiShoppingCart className='header-icons'/>
                        <span className='header-icons-cart'>{cartCount}</span>
                    </Link>
                    {isLogin ? 
                        // <Link to="/login">
                            <button type="button"
                                    onClick={handleLogout}>Logout</button>
                        // </Link>
                             :
                        <Link to="/login">
                            <button type="button">Login</button>
                        </Link>
                    }
                    {!isLogin && 
                        <Link to="/signup">
                            <button type="button">Signup</button>
                        </Link>
                    }
                    {isLogin &&              
                        <Link to="/support">
                            <button type="button">Support</button>
                        </Link>     
                    }              
                </nav>
            </div>
        </div>
    );
}