import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { MdSpaceDashboard } from "react-icons/md";
import { SiSimpleanalytics, SiPhpmyadmin} from "react-icons/si";
import { FaAddressCard,  FaBox } from "react-icons/fa";
import { IoSettings } from "react-icons/io5";
import { FiLogOut } from "react-icons/fi";
import {BiCart, BiCategory} from "react-icons/bi"
import scrollreveal from "scrollreveal";
export default function Sidebar() {
  const [currentLink, setCurrentLink] = useState(1);

  useEffect(() => {
    const sr = scrollreveal({
      origin: "bottom",
      distance: "80px",
      duration: 1000,
      reset: false,
    });

    sr.reveal(
      `
          .brand,
          .links>ul>li:nth-of-type(1),
      .links>ul>li:nth-of-type(2),
      .links>ul>li:nth-of-type(3),
      .links>ul>li:nth-of-type(4),
      .links>ul>li:nth-of-type(5),
      .links>ul>li:nth-of-type(6),
      .links>ul>li:nth-of-type(7),
      .logout
      `,
      {
        opacity: 0,
        interval: 300,
      }
    );
  }, []);

  return (
    <>
      <Section>
        <div className="top">
          <div className="brand">
            <SiPhpmyadmin />
            <span>Admin
            </span>
          </div>
          <div className="links">
            <ul>
              <li
                className={currentLink === 1 ? "active" : "none"}
                onClick={() => setCurrentLink(1)}
              >
                <a href="#">
                  <MdSpaceDashboard />
                  <span> Dashboard</span>
                </a>
              </li>
              <li
                className={currentLink === 2 ? "active" : "none"}
                onClick={() => setCurrentLink(2)}
              >
                <a href="#">
                <FaAddressCard />
                 
                  <span> Customers</span>
                </a>
              </li>
              <li
                className={currentLink === 3 ? "active" : "none"}
                onClick={() => setCurrentLink(3)}
              >
                <a href="#">
                <FaBox />
                  <span>Products</span>
                </a>
              </li>
              <li
                className={currentLink === 4 ? "active" : "none"}
                onClick={() => setCurrentLink(4)}
              >
                <a href="#">
                  <BiCart/>
                  <span>Orders</span>
                </a>
              </li>
              <li
                className={currentLink === 5 ? "active" : "none"}
                onClick={() => setCurrentLink(5)}
              >
                <a href="#">
                  <SiSimpleanalytics />
                  <span> Analytics</span>
                </a>
              </li>
              <li
                className={currentLink === 6 ? "active" : "none"}
                onClick={() => setCurrentLink(6)}
              >
                <a href="#">
                  <BiCategory />
                  <span> Categories</span>
                </a>
              </li>
              <li
                className={currentLink === 7 ? "active" : "none"}
                onClick={() => setCurrentLink(7)}
              >
                <a href="#">
                  <IoSettings />
                  <span> Settings</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="logout">
          <a href="#">
            <FiLogOut />
            <span className="logout">Logout</span>
          </a>
        </div>
      </Section>
    </>
  );
}
const Section = styled.section`
  position: fixed;
  left: 0;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 25px 50px -12px;
  background-color: #fff;
  height: 100vh;
  width: 15vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 0;
  gap: 2rem;
  .top {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    width: 100%;

    .brand {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 2rem;
      svg {
        color: #333;
        font-size: 2rem;
      }
      span {
        font-size: 2rem;
        color: #333;
      }
    }
    .links {
      display: flex;
      justify-content: center;
      ul {
        list-style-type: none;
        display: flex;
        flex-direction: column;
        gap: 1rem;
        li {
          padding: 1rem 3rem;
          border-radius: 0.6rem;

          svg{
            font-size: 1.3rem;
          }
          &:hover {
            background-color: #349eff;
            a {
              color: #fff;
            }
          }
          a {
            text-decoration: none;
            display: flex;
            font-size: 1.2rem;
            gap: 1rem;
            color: #333;
          }
        }
        .active {
          background-color: #349eff;
          a {
            color: #fff;
          }
        }
      }
    }
  }

  .logout {
    padding: 0.4rem 1.2rem;
    border-radius: 0.6rem;
    background-color: #333;
      color:white;
      svg{
        color:white;
        font-size: 1.3rem;
      }
    a {
      text-decoration: none;
      display: flex;
      align-items: center;
      justify-content: center;
      color: black;
      
    }
  }
 
`;


