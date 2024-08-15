import React, { useRef } from 'react'
import { AiFillGithub } from 'react-icons/ai';
import styled from 'styled-components';

let data = [

  {
    heading: "Pizza Shop",
    img: "/pizza.png",
    tech_stack:"React.js, MongoDB, Express.js, Node.js",
    disc: "This is complete authentication and also it has authorized functionality pizza delivery app.This responsive web design.",
    link: "https://effortless-semifreddo-349782.netlify.app/",
    github_link: "https://github.com/yogeshvj1912/pizza-app-frontend"
  },

  {
    heading: "Diary",
    img: "/diary.png",
    tech_stack:"React.js, MongoDB, Express.js, Node.js",
    disc: "Developed a comprehensive digital diary manager app, allowing users to record daily activities, thoughts, and appointments in a user-friendly",
    link: "https://fastidious-daifuku-107870.netlify.app/",
    github_link: "https://github.com/yogeshvj1912/diary_manager_frontend"
  },

  {
    heading: "Password Reset Flow",
    img: "/password.png",
    tech_stack:"React.js, MongoDB, Express.js, Node.js",
    disc: "Designed and implemented a secure and user-friendly password reset flow, ensuring hassle-free account recovery for users via email verification and password updating.Developed a robust password reset mechanism, allowing users to reset their passwords securely, with email notifications and real-time password strength validation.",
    link: "https://magnificent-sopapillas-535129.netlify.app/",
    github_link: "https://github.com/yogeshvj1912/day43-password-reset"
  },
  {
    heading: "Note Pad App",
    img: "notepad.png",
    tech_stack:"React.js, MongoDB, Express.js, Node.js",
    disc: "A sleek and user-friendly Notepad app that allows users to effortlessly create, edit, and manage their notes. It offers a fast and secure performance for a smooth note-taking experience.",
    link: "https://calm-beignet-258e6a.netlify.app",
    github_link: "https://github.com/yogeshvj1912/Notepad-app-frontend"
  }
];


const SliderComp = () => {



  return (
    <Container>
      <div className='project'>

        {data.map((ele, i) => {
          return (

            <div key={i}>
              <h3 className='box'>{ele.heading}</h3>
              <div className='box-1'><img src={ele.img} alt="" /></div>
              <div className='box-2'>Tech Stack : {ele.tech_stack}</div>
              <div className='box-3'>{ele.disc}</div>
              <div className='box-4'>  <a href={ele.github_link} target="_blank">
                <AiFillGithub />
              </a><a href={ele.link} target="_blank">Demo</a></div>
            </div>

          )
        })}
      </div>
    </Container>
  )
}

export default SliderComp;

const Container = styled.div`



.project{
width:100% ;
display:flex;
flex-wrap:wrap;
justify-content:space-around;
align-items:space-between;

}




.project>div{
  width: 300px;
  height: 450px;
  box-sizing: border-box;
  font-size:0.9rem;
  background-color:#191923;
  margin:15px 10px;
  border:1px solid white;
}
  .box{
  padding:10px;
  height:9%;
  color: #01be96;
  filter: drop-shadow(0px 10px 10px #01be9551);
  }
.box-1{
  width:100%;
  height:35%;
}
img{
  width:100%;
  height:100%;

}
  .box-2{

  width:100%;
  height:10%;
  padding:10px
  }

.box-3{
overflow-x: auto;
 display:flex;
  width:100%;
  height:37%;
  padding:10px;
   ::-webkit-scrollbar {
  display: none;
}
}
 
.box-4{
  width:100%;
  height:9%;
  padding:0 20px 5px;
  display:flex;
  flex-wrap:wrap;
justify-content:space-between;

  //  background-color: white;
   
}
a{
  all:unset;
  border-radius:50px;
    padding: 7px 8px 0;
   margin-bottom:3px;
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
