import React from "react";
import styled from "styled-components";
import { BiSearch } from "react-icons/bi";
import {IoIosNotifications} from 'react-icons/io'
export default function Navbar() {
  return (
    <Nav>
      <div className="search">
        <BiSearch />
        <input type="text" placeholder="Search..." />
      </div>
      <div className="item">
      <IoIosNotifications/>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/1024px-User-avatar.svg.png" alt="" />
      </div>
    </Nav>
  );
}
const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  .search {
    background-color: #fff;
    display: flex;
    align-items: center;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
    gap: 1rem;
    padding: 1rem 6rem 1rem 1rem;
    border-radius: 1rem;
    svg {
      color: #666666;
    }
    input {
      background-color: transparent;
      border: none;
      color: #666666;
      letter-spacing: 0.1rem;
      &:focus {
        outline: none;
      }
      &::placeholder {
        color: #666666;
      }
    }
  }
  .item{
    display:flex;
    img{
      width:2rem;
      height:2rem;
      border-radius:50%;
      border:.1rem solid black;
    }
    svg{
      font-size: 2rem;
      margin-right: 0.3rem;
    }
    
  }

`;
