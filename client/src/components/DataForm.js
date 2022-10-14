import React,{ useState } from 'react';
import { useParams} from "react-router-dom";

const DataForm = (props) =>{
    const {id: testName} = useParams();
    console.log(testName);
    if(props.seconds){
        document.querySelector('body').classList.add('rmpopup');
        let seconds = Number(props.seconds);

        let timer = setInterval(() => {
          seconds--;
          document.getElementById("seconds").textContent=seconds;
  
          if (seconds <= 0) {
            props.setpopupBtn(false)
            clearInterval(timer);
            document.querySelector('body').classList.remove('rmpopup');
            window.location.reload();

          }
        }, 1000);
    }
    

    return(
        <>
        <div className='header-section dataForm-page'>
                <div className='header-section-inner'>
                    <h1>Test Taking Website</h1>
                    <p>Start coding</p>
                </div>
            </div>
        <div className='dataForm'>
            <div className='dataForm-inner'>
                <label htmlFor="fname">First Name</label>
                <input type="text" id="fname" name="fname" placeholder="Your name.."/>
                <label htmlFor="email">Last Name</label>
                <input type="email" id="email" name="email" placeholder="Your email.."/>
                <input type="submit" value="Submit"/>
            </div>
        </div>
        </>
    )
}

export default DataForm;