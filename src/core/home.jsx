import React,{useState,useEffect} from 'react';
import '../css/styles.css';
import axios from 'axios';
import {API}  from '../backend';
import Detail from './detail';



 
const Home = () => {

      const[data, setData] = useState([]);
      
     

useEffect( () => {
        axios.get(`${API}`)
             .then( res => {
                 console.log(res.data);
                 setData(res.data); 
             })
             .catch();
      

},[]);




const renderData = () => {
     
   
    let dataToDisplay =  getWordSet();
    return (
         <div className = "container">
             {dataToDisplay && dataToDisplay.map(item =>
              <div className = "row grid-1x3">{
                      item.map( i => <div><div className = "col">{i.key} : {i.val}</div>
                                          <div className = "col">{i.detail && (<Detail className = "link"
                                                                                       dataKey = {i.key}
                                                                                       dataDetails = {i.detail}
                                                                                          />)} </div> 
                                         </div>)       
                                   }
                                      
                               </div >  )
               }
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

                 val = words[key].length;  
                 detail  = words[key];

             }
               
             else  val = words[key];        
              
             wordVal.push({key,val,detail});
        } 
        
        return wordVal;
}


    return (
        <div className ="app">
          
           {renderData()}
        </div>
      );
}
 
export default Home;
