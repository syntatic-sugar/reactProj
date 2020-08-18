import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import home from '../homeicon.svg';
import styled from 'styled-components';
import {ButtonContainer} from './Button';
export default class Navbar extends Component{
    render(){
        return(
        <NavWrapper className="navbar navbar-expand-sm navbar-dark bg-primary px-sm-5" >

            <Link to="/">
                <img src={home} alt="store" className="navbar-brand"></img>
            </Link>
            <ul className="navbar-nav align-items-center">
                <li className="nav-item ml-5">
            <Link to="/product" className="nav-link">
                Product
            </Link>
            </li>
            </ul>
            <Link to="/cart" className="ml-auto">
                <ButtonContainer>
                    <span className="mr-2m">
                    <i className="fas fa-cart-plus"/>
                    </span>
                    my cart
                </ButtonContainer>
            </Link>
        </NavWrapper>
        );
    }
}

const NavWrapper =styled.nav`
background:black;
.nav-link{
    color:var(--mainWhite)!imporant;
    font-size:1.3rem;
    text-transform:capitalize;
}
`