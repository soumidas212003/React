import React from 'react'

const About = (info) => {
  let card={
    margin:"12px",
    width:"140px",
    textAlign:"center",
    border:"1px solid black",
    padding:"12px",
    boxShadow:"1px 1px 3px"
  }
  return <>
    <div style={card}>
      <img src={info.img} style={{width:"140px"}}></img>
      <p><b>{info.proTitle}</b></p>
      <p><button>BUY NOW</button></p>
    </div>
  </>
}

export default About
