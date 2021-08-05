import React from 'react';
import {Link} from 'react-router-dom';
import '../css/styles.css'


const PhoneticsDetail = (dataDetails) => {
    
    const data = dataDetails.location.state.dataDetails;
    

   
const renderData = () => {
       
        
    let dataToDisplay =  getWordSet();

    return (
         <div className = "container">
             {dataToDisplay && dataToDisplay.map(item =>
              <div >{
                      item.map( i => <div>{(i.key === "audio")  && <a  href = {i.val} taeget="_blank">{i.key} : {i.val}</a> }
                                          {(i.key !== "audio") && <div className = "col">{i.key} : {i.val}</div> }                                         
                                         </div>)       
                                   }
                                       
                </div> 
             )}
         </div>
         );  
    }

    const getWordSet = () => {

        let wordSet = [];
       if(data.length >0){
          
          for(let i =0 ; i<data.length ; i++){          
               wordSet.push(displayWordSet(data[i]));                
          }
          
          return wordSet;
       }
    
    };

    const displayWordSet = (words) => {  
        let wordVal = [];     
         for(let key in words){ 
               let val = "";
               let detail = "";
               if(Array.isArray(words[key])){
  
                   
                   detail  = words[key];
  
               }
                 
               else  val = words[key];        
                
               wordVal.push({key,val,detail});
          } 
          console.log(wordVal);
          return wordVal;
  }
  



    return ( 
        <div className = "app">
           phonetics detail page
           {renderData()}
           <Link  className = "back-link link"  to = "/">Back</Link>
        </div>
     );
}
 
export default PhoneticsDetail;