import React from 'react';
import {Link} from 'react-router-dom';
import '../css/styles.css'


const MeaningsDetail = (dataDetails) => {
    
    const data = dataDetails.location.state.dataDetails;


const renderData = () => {
       
        
  
    

    return (
         <div className = "container">
           {data.map(item => (<div className = "meanings">
                              <div>PartOfSpeech : {item.partOfSpeech}</div>
                              <div>Definitions :  {item.definitions.map( element => ( <ul>
                                               <li>definition : {element.definition}</li>
                                               {element.example &&  <li> example : {element.example} </li>} 
                                               {element.synonyms && <li>synonyms : {element.synonyms.map(m=> <div className = "detail">{m}</div>)}</li>}     
                              </ul>))} </div>  
                              
                              </div>   
                                  
                                  ))}
         </div>
         );  
    }

  


    return ( 
        <div className = "app">
           meanings detail page
           {renderData()}
           <Link  className = "back-link"  to = "/">Back</Link>
        </div>
     );
}
 
export default MeaningsDetail;