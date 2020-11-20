import React from 'react';
import image from '../images/404.gif'

const NotFound = () => {
    return (  
       <div className="c-notFound">
            <img className="notFoundIMG" src={image} alt=""/>
       </div>
    );
}
 
export default NotFound;