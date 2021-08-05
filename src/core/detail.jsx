import React from 'react';
import '../css/styles.css';
import {Link} from 'react-router-dom';

const Detail = ({dataKey,dataDetails}) => {
     console.log("isDataDetail :",dataDetails);
    const getLink = (dataKey) => {
        if (dataKey === "phonetics") return "/phoneticsdetail";
        else if(dataKey === "meanings") return "/meaningsdetail";
    }
     
     
    return (
        <div  className = "app">
         <Link className = "link"   to = {{ pathname : getLink(dataKey),
                                            state: {dataDetails}   }}>{dataKey}</Link>           
        </div>
      );
}
 
export default Detail;