import React from 'react';
import { Link } from "react-router-dom";

function Header (props) {
        return (
            <div className='header'> 
               <header className="App-header">
                    <h2 className="App-title">Code Skills Test</h2>
                    <Link to="/home" >
                            <span>HOME</span>
                        </Link>
                </header>                                         
            </div>
        );   
}
export default Header;