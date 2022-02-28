import React from "react";
import styled from "styled-components";
import { HiArrowNarrowRight } from "react-icons/hi";


export default function Customers() {

  const Custom = [
    {
      id:"1",
      name:"Brittan Rois",
      spend:"$599864.94",
    },
    {
      id:"2",
      name:"Matthew Junifer",
      spend:"$557248.44",
    },
    {
      id:"3",
      name:"Finlay Baylay",
      spend:"$719845.14",
    },
    {
      id:"4",
      name:"Beryle Monelli",
      spend:"$621446.73",
    },
    {
      id:"5",
      name:"Ilario Shoppee",
      spend:"$171337.47",
    },
    {
      id:"6",
      name:"Guglielma Haking",
      spend:"$557248.44",
    },

  ]


  return (
    <Section>
      <div className="title">
        <h2>Top Customers </h2>
      </div>
    
      <ul class="responsive-table">
    <li class="table-header">
      <div class="col col-1">User Id</div>
      <div class="col col-2">User <br/> Name</div>
      <div class="col col-3">Total Spending</div>
    </li>
    {
      Custom.map((item,index)=>{
        return(
          <li class="table-row" key={index}>

          <div class="col col-1" key={index} >{item.id}</div>
          <div class="col col-2" key={index} >{item.name}</div>
          <div class="col col-3" key={index} >{item.spend}</div>
        </li>
        )
      })
    }
    </ul>
    <a className="view" href="#">
        View all <HiArrowNarrowRight />
      </a>
    </Section>
  );
}
const Section = styled.section`
    padding: 1rem 2rem 2rem 2rem;
    max-height:900px;
    min-width:700px;
  border-radius: 1rem;
  background-color: #fff;
  color: black;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
  .title {
    h2 {
      color: black;
      letter-spacing: 0.1rem;
    }
  }

  .responsive-table {
    margin-top: 1.5rem;
  li {
    border-radius: 0.5rem;
    padding: 1.5rem 2rem;
    display: flex;
    justify-content: space-between;
    margin-bottom: 1rem;
  }
  .table-header {
    background-color: #333;
    font-size: 1rem;
    font-weight: 600;
    color:white;
    text-transform: uppercase;
    letter-spacing: 0.03em;
    text-align:center;
  }
  .table-row {
    background-color: #ffffff;
    box-shadow: 0px 0px 9px 0px rgba(0,0,0,0.1);
    text-align: center;
  }
  .col-1 {
    flex-basis: 10%;
  }
  .col-2 {
    flex-basis: 40%;
  }
  .col-3 {
    flex-basis: 25%;
  }
  }
  .view {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    text-decoration: none;
    color:#349eff;
    font-weight: bold;
    margin-top: 1rem;
    gap: 0.5rem;
    svg {
      transition: 0.3s ease-in-out;
      font-size: 1.4rem;
    }
    &:hover {
      svg {
        transform: translateX(0.5rem);
      }
    }
  }
`;
