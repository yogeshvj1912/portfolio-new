import React, { useRef } from 'react'
import styled from 'styled-components';

let data = [

  {
    img : "/pizza.png",
    disc : "This is complete authentication and also it has authorized functionality pizza delivery app.This responsive web design.",
    link : "https://effortless-semifreddo-349782.netlify.app/"
},
  
    {
        img : "diary.png",
        disc : "Developed a comprehensive digital diary manager app, allowing users to record daily activities, thoughts, and appointments in a user-friendly",
        link : "https://fastidious-daifuku-107870.netlify.app/"
    },

    {
        img : "/password.png",
        disc : "Designed and implemented a secure and user-friendly password reset flow, ensuring hassle-free account recovery for users via email verification and password updating.Developed a robust password reset mechanism, allowing users to reset their passwords securely, with email notifications and real-time password strength validation.",
        link : "https://magnificent-sopapillas-535129.netlify.app/"
    },
    {
        img : "https://lh3.googleusercontent.com/2W40wwMniWgf6z2EzWEy_UsYDb5d2ebyKivGfy_qNf8Pc0z43Efa6JeeIiijdpaZBqbddXLI4hoOHuKqbvmx219Ls_OJ237qT8L2zspFEaOJvVAVQe4QC9Rum4a5Ggcu_qAQVHoiKg=w2400",
        disc : "This Weather API shows the 'Temperature', 'Humidity' and 'Description' of the particular country/capitals/state that you need to know!",
        link : "https://zingy-dusk-58afbb.netlify.app/"
    }
];


const SliderComp = () => {


  
  return (
    <Container>
      <div className='project'>
        
      {data.map((ele,i)=>{
        return(
         
<div key={i}>
  <div className='box-1'><img src={ele.img} alt="" /></div>
  <div className='box-2'>{ele.disc}</div>
  <div className='box-3'><a href={ele.link} target="_blank">Demo</a></div>
</div>

        )
      })}
      </div>
    </Container>
  )
}

export default SliderComp;

const Container = styled.div`

min-width:100%;
overflow-x: auto;
overflow-y: hidden;
.project{
  display: flex;  
}

::-webkit-scrollbar {
  display: none;
}


.project>div{
  min-width: 300px;
  height: 400px;
  // display: flex;
  // flex-direction: column;
  // justify-content: center;
  // align-items: center;
  box-sizing: border-box;
  background-color:#191923;
  margin:0 10px;
  border:1px solid white;
}
.box-1{
  width:100%;
  height:40%;

  background-color:white;
}
img{
  width:100%;
  height:100%;

}
.box-2{
  width:100%;
  height:50%;
  padding:10px;
  
  font-size:0.9rem;
}
.box-3{
  width:100%;
  height:10%;
}
a{
  all:unset;
  border-radius:15px;
    padding: 0.5rem 1rem;
    margin-top: 3rem;
    cursor: pointer;
    background-color: #01be96;
    border: none;
    color: #fff;
    font-weight: 500;
    filter: drop-shadow(0px 10px 10px #01be9551);
    :hover {
      filter: drop-shadow(0px 10px 10px #01be9570);
    }
}
`
