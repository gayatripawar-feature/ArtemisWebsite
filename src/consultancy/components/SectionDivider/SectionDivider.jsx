 import './SectionDivider.css';

 const SectionDivider = () => {
   return (
     <div className="section-divider">
       <div className="divider-line left"></div>
       <div className="divider-icon">
         <div className="diamond">
           <div className="diamond-inner"></div>
         </div>
       </div>
       <div className="divider-line right"></div>
     </div>
   );
 };

 export default SectionDivider;