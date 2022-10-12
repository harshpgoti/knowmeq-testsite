import React,{ useState } from 'react';
import { useParams} from "react-router-dom";

const Test=()=>{
    const {id} = useParams();
    const [testAns, setTestAns]=useState([]);

    const onChange = (e) => {
        setTestAns((prevState) => ({
          ...prevState,
          [e.target.id]: e.target.value,
        }))
        console.log(testAns);
    }

    const QuestionDiv=(props)=>{
    return(
        <div className='test-single-question'>
            <p className='question'>{props.question}</p>
            <input type='radio' name={props.ansName} id={props.a1Id} value={props.a1Id} className="question-ans"/>
            <label htmlFor={props.a1Id}>{props.text}</label>

            <input type='radio' name={props.ansName} id={props.a2Id} value={props.a2Id} className="question-ans"/>
            <label htmlFor={props.a2Id}>{props.text}</label>

            <input type='radio' name={props.ansName} id={props.a3Id} value={props.a3Id} className="question-ans"/>
            <label htmlFor={props.a3Id}>{props.text}</label>

            <input type='radio' name={props.ansName} id={props.a4Id} value={props.a4Id} className="question-ans"/>
            <label htmlFor={props.a4Id}>{props.text}</label>
        </div>
    )}
    
    return(
        <div className='block-header-section'>
            <form>
                <QuestionDiv 
                    question="How is a forEach statement different from a for statement?"
                    ansName="q1"
                    a1Id="Only a for statement uses a callback function"
                    a2Id="A for statement is generic, but a forEach statement can be used only with an array."
                    a3Id="Only a forEach statement lets you specify your own iterator."
                    a4Id="A forEach statement is generic, but a for statement can be used only with an array."
                />
                
                <input type="submit" value="Submit"/>
            </form>
        </div>
        
    )
}

export default Test;