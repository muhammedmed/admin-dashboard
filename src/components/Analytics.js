import React from "react";
import styled from "styled-components";
import { BsGraphUp } from "react-icons/bs";
import { IoStatsChart } from "react-icons/io5";
import { AiOutlineDollarCircle } from "react-icons/ai";
import { GrDocumentText } from "react-icons/gr";
export default function Analytics() {
  return (
    <Section>
      <div className="analytic ">
        <div className="content">
          <h5>Total Sales</h5>
          <h2>1,250</h2>
        </div>
        <div className="logo">
          <BsGraphUp />
        </div>
      </div>
      <div className="analytic">
        <div className="logo">
          <IoStatsChart />
        </div>
        <div className="content">
          <h5>Earnings</h5>
          <h2>$490.00</h2>
        </div>
      </div>
      <div className="analytic">
        <div className="logo">
          <AiOutlineDollarCircle />
        </div>
        <div className="content">
          <h5>Total Income</h5>
          <h2>$100.50</h2>
        </div>
      </div>
      <div className="analytic ">
        <div className="content">
          <h5>Total Orders</h5>
          <h2>960</h2>
        </div>
        <div className="logo">
          <GrDocumentText />
        </div>
      </div>
    </Section>
  );
}
const Section = styled.section`
  display: grid;
  grid-template-columns: auto auto;
  gap: 2rem;
  .analytic {
    padding: 1rem 2rem 3rem 2rem;
    border-radius: 1rem;
    background-color: #fff;
    color: black;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
      rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
    padding: 1rem;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    gap: 1rem;
    transition: 0.5s ease-in-out;
    &:hover {
      background-color: #349eff;
      color: white;
    }
    .logo {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 1.5rem;
      svg {
        font-size: 2.5rem;
        color: black;
      }
    }
  }
`;
