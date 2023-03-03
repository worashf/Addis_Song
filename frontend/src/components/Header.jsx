import React from "react"
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
const Nav = styled.header`
box-shadow: 0px 5px 10px 0px #aaa;
position: fixed;
width: 100%;
background-color : #fff;
color: #000;
opacity: 0.9;
z-index: 100;

`
const NavContainer = styled.nav`

display: flex;
justify-content: space-between;
height: 80px;
align-items: center;
margin:  0 5%
`

const Logo = styled("h1")`
order: 1;
font-size: 2rem;

`
const MenuContainer = styled("ul")`
order: 2;
display: flex;
`
const MenuItem = styled("li")`
list-style: none;
margin-left: 1.5rem;
font-size: 1.3rem;
`
const MenuLink = styled(Link)`
    color: #444;
    text-decoration: none;
    font-weight: 500;
    transition: color 0.3s ease-in-out;
    &:hover {
        color: #117964;
 } 
  
`


const Header = () => {
    return (
        <Nav >
            <NavContainer>
                <MenuContainer>
                    <MenuItem> <MenuLink to="/" > Add  songs</MenuLink> </MenuItem>
                    <MenuItem> <MenuLink to="/" > Manage songs</MenuLink></MenuItem>
                    <MenuItem> <MenuLink to="/" > Manage songs</MenuLink> </MenuItem>
                </MenuContainer>
                <Logo> Addis Songs </Logo>
            </NavContainer>
        </Nav>
    )
}

export default Header