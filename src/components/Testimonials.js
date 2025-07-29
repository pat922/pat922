import React, { Component } from 'react';
export default class Testimonials extends Component {
  // render() {
  //   let resumeData = this.props.resumeData;
  //   return (
  //     <section id="testimonials">
  //       <div className="text-container">
  //         <div className="row">
  //           <div className="two columns header-col">
  //             <h1><span>Client Testimonials</span></h1>
  //           </div>
  //           <div className="ten columns flex-container">
  //             <div className="flexslider">
  //               <ul className="slides">
  //                 {
  //                   resumeData.testimonials && resumeData.testimonials.map((item)=>{
  //                     return(
  //                       <li>
  //                         <blockquote>
  //                           <p>
  //                           {item.description}
  //                           </p>
  //                           <cite>{item.name}</cite>
  //                         </blockquote>
  //                       </li>
  //                     )
  //                   })
  //                 }
  //               </ul>
  //             </div> {/* div.flexslider ends */}
  //           </div> {/* div.flex-container ends */}
  //         </div> {/* row ends */}
  //       </div>  {/* text-container ends */}
  //     </section>
  //       );
  // }

     render() {
      // let resumeData = this.props.resumeData;
      return (
       <section id="testimonials"> 
       <div className="text-container">
       <div className="testimonial-row">
        <h2>Google Cloud Campaign</h2>
       <img className="gcppng"  src="images/GCPBoleh.png" alt="" />
       </div>
       <div className="text-container">
       <div className="testimonial-row">
      
         <h2>Hong Leong Hackathon Completion Certificate</h2>
       <img className="hackathonpng"  src="images/hackathon.PNG" alt="" />
       </div>
       </div>    
       </div>	
      
       </section>
      );
      }
    }