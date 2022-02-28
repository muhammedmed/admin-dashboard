import React from "react";
import styled from "styled-components";
import { MdFastfood, MdNoDrinks } from "react-icons/md";
import {GrDocument} from "react-icons/gr";
export default function Transfers() {
  return (
    <Section>
      <div className="title">
        <h2>Stock Amount</h2>
      </div>
      <div className="menu">
        <div className="item">
          <h5>
            <MdFastfood /> Foods
          </h5>
          <p>93,555,05</p>
        </div>
        <div className="item">
          <h5>
            <MdNoDrinks /> Drinks
          </h5>
          <p>25,555,34</p>
        </div>
        <div className="item"   >
          <h5>
            <GrDocument /> Other
          </h5>
          <p>6,555,45</p>
        </div>
        <div className="item" >
          <h5>
            Total
          </h5>
          <p>12,566,584</p>
        </div>

      </div>
    </Section>
  );
}

const Section = styled.section`
  padding: 1rem 2rem 3rem 2rem;
  border-radius: 1rem;
  background-color: #fff;
  color: black;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
    rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
  height: 330px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  .title {
    h2 {
      color: black;
      letter-spacing: 0.1rem;
    }
  }

  .menu {
    display: flex;
    flex-direction: column;
  }

  .item {
    display: flex;
    margin-top: 0.5rem;
    background-color: #f7f7f7;
    height:50px;
    border-radius: 1rem;
    justify-content: space-between;
    align-items: center;
    text-align: center;


    h5{
      color:black;
      opacity:0.5;
      font-size: 1.15rem;
      margin-left: 0.5rem;
     
    }
    p{
        font-size: 1rem;
        opacity:0.5;
        margin-right:0.5rem;
      }
  }
`;
