import React from 'react'

const ProjectDetail = (props) => {
    console.log(props.match.params['id'])
    const id=props.match.params['id'];
    return (
       <div className="container section project-detail">
           <div className="card z-depth-0">
               <div className="card-content">
    <span className="card-title"> Project Title {id?id:''}</span>
                   <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero voluptatibus qui nihil doloribus. A dolor nesciunt numquam unde, molestias dicta magnam, laudantium accusamus doloremque suscipit at sapiente quod sed! Eos!</p>
               </div>
               <div className="card-action grey lighten-4 grey-text">
                   <div>Posted by Ejaz sidhu</div>
                   <div>3rd September,2am</div>
               </div>
           </div>
       </div>
    )
}

export default ProjectDetail;
