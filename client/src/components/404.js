import React from 'react';
import {Link} from 'react-router-dom';
// import 'animate.css';

const NotFound=()=>{
    
    return(
        <div className='NotFound'>
            <p>Page not found</p>
            <Link to='/'>Go To Home</Link>
        </div>
    )
}

export default NotFound;