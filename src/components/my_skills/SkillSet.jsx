import React from 'react'
import styled from 'styled-components'
import { Slide } from "react-awesome-reveal";

function SkillSet() {
    let skillData =[
        {
          path:"/img/html-logo.png",
          languageName:"HTML",
          percentage:"80%",
        },
        {
          path:"/img/css-logo.png",
          languageName:"CSS",
          percentage:"80%",
        },
        {
          path:"/img/js-logo.png",
          languageName:"JS",
          percentage:"70%",
        },
        {
          path:"/img/bootstrap-logo.png",
          languageName:"BOOTSTRAP",
          percentage:"70%",
        },
        {
          path:"/img/react-logo.png",
          languageName:"REACT",
          percentage:"70%",
        },
        {
          path:"/img/mysql-logo.png",
          languageName:"MySQL",
          percentage:"80%",
        },
        {
          path:"/img/mongodb-logo.png",
          languageName:"mongo DB",
          percentage:"65%",
        },
        {
          path:"/img/node-logo.png",
          languageName:"nodeJS",
          percentage:"65%",
        },
      ]
  return (
   <Container id="skills">
    <Slide>
    <h1>
          My <span className="green">Skills</span>
        </h1>
    <div className='skill-page'> 
  {skillData.map((data,index) => {
    return <div className='logo' key={index}>
    <div className='logo-img'>
     <img src={data.path} className='img-icon'/>{data.languageName}
    </div>
      <div className='logo-percentage'>
  <div className='progress-bar'>
   <div className='progress' style={{width:data.percentage}}>
  {data.percentage}
   </div>
  </div>
 </div>
    </div>
  })}
  
</div>
    </Slide>
   </Container>
  )
}

export default SkillSet
 const Container = styled.div`
 width: 80%;
 max-width: 1280px;
 margin: 0 auto;
 padding: 3rem 0;
 @media (max-width: 840px) {
   width: 90%;
 }


 }
 .skill-page {
    width: 100%;
    height: 100%;
    padding: 50px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: column;
  
  }
  
  .progress {
    width: 90%;
  }
  
  .logo {
    width: 80%;
    height: 50px;
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
  
  }
  
  
  .img-icon {
    width: 30px;
    margin: 2px;
  }
  
  .logo-img{
   margin-right:10px ;
    padding:0 5px;
    min-width: 115px;
    height: 35px;
     color: rgb(255, 255, 255);
    background-color: rgb(0, 0, 0);
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content:start;
    font-size: 11px;
   
  }
  .logo-percentage{
  width: 700px;
  height: 100%;
  display: flex;
  align-items: center;
  }
  
  /* PROJECTS */
  .project-page{
    padding: 60px;
    color: rgb(112, 108, 108);
  }

.progress-bar{
    
    height:14px;
    width:400px;
    background-color:white;
    border-radius:10px
}
@media screen and (min-device-width: 320px) and (max-device-width: 600px) { 
  .img-icon {
    width: 18px;
    margin: 1px;
  }
  .logo-img{
    min-width:90px;
    font-size:10px;
  }
  .progress-bar{
    width:200px;
 
}
}
.progress{
  height:100%;
    background-color:blue;
    color:white;
    border-radius:5px;
    display:flex;
    align-items:center;
    justify-content:center;
}
 `