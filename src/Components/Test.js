import React, { useState, useEffect ,useContext } from 'react'
import Assesment from './Assesment';
import Navbar from './Navbar'
import Context from './Context/StatesContext';

function Test(props) {
    const book = {
        "questionBank": [
            {
                "id": "0",
                "question": "Radiocarbon is produced in the atmosphere as a result of",
                "options": {
                    "a": "collision between fast neutrons and nitrogen nuclei present in the atmosphere",
                    "b": "action of ultraviolet light from the sun on atmospheric oxygen",
                    "c": "action of solar radiations particularly cosmic rays on carbon dioxide present in the atmosphere",
                    "d": "lightning discharge in atmosphere"
                },
                "answer": "a"
            },

            {
                "id": "1",
                "question": "It is easier to roll a stone up a sloping road than to lift it vertical upwards because",
                "options": {
                    "a": "work done in rolling is more than in lifting",
                    "b": "work done in lifting the stone is equal to rolling it",
                    "c": "work done in both is same but the rate of doing work is less in rolling",
                    "d": "work done in rolling a stone is less than in lifting it"
                },
                "answer": "d"
            },

            {
                "id": "2",
                "question": "The absorption of ink by blotting paper involves",
                "options": {
                    "a": "viscosity of ink",
                    "b": "capillary action phenomenon",
                    "c": "diffusion of ink through the blotting",
                    "d": "siphon action"
                },
                "answer": "b"
            },

            {
                "id": "3",
                "question": "Siphon will fail to work if",
                "options": {
                    "a": "the densities of the liquid in the two vessels are equal",
                    "b": "the level of the liquid in the two vessels are at the same height",
                    "c": "both its limbs are of unequal length",
                    "d": "the temperature of the liquids in the two vessels are the same"
                },
                "answer": "b"
            },

            {
                "id": "4",
                "question": "Large transformers, when used for some time, become very hot and are cooled by circulating oil. The heating of the transformer is due to",
                "options": {
                    "a": "the heating effect of current alone",
                    "b": "hysteresis loss alone",
                    "c": "both the heating effect of current and hysteresis loss",
                    "d": "intense sunlight at noon"
                },
                "answer": "c"
            },

            {
                "id": "5",
                "question": "Nuclear sizes are expressed in a unit named",
                "options": {
                    "a": "Fermi",
                    "b": "angstrom",
                    "c": "newton",
                    "d": "tesla"
                },
                "answer": "a"
            },

            {
                "id": "6",
                "question": "Light year is a unit of",
                "options": {
                    "a": "time",
                    "b": "distance",
                    "c": "light",
                    "d": "intensity of light"
                },
                "answer": "b"
            },

            {
                "id": "7",
                "question": "Mirage is due to",
                "options": {
                    "a": "unequal heating of different parts of the atmosphere",
                    "b": "magnetic disturbances in the atmosphere",
                    "c": "depletion of ozone layer in the atmosphere",
                    "d": "equal heating of different parts of the atmosphere"
                },
                "answer": "a"
            },

            {
                "id": "8",
                "question": "Light from the Sun reaches us in nearly",
                "options": {
                    "a": "2 minutes",
                    "b": "4 minutes",
                    "c": "8 minutes",
                    "d": "16 minutes"
                },
                "answer": "c"
            },

            {
                "id": "9",
                "question": "Planets do not twinkle because",
                "options": {
                    "a": "they emit light of a constant intensity",
                    "b": "their distance from the earth does not change with time",
                    "c": "they are very far away from the earth resulting in decrease in intensity of light",
                    "d": "they are nearer to earth and hence we receive a greater amount of light and, therefore minor variations in the intensity are not noticeable"
                },
                "answer": "d"
            }
        ]
    };
    const [userAnswers, setuserAnswers] = useState({});
    const {examState,setexamState} = useContext(Context)
    
    const [result, setResult] = useState({correct:0,wrong:0,unattempted:0})
    const [id, setId] = useState(0);
   

    const onPrevious = () => {
        saveAnswer();
        setId(id - 1);
    }

    const onNext = () => {
        saveAnswer();
        setId(id + 1);

    }

    const saveAnswer = () => {
        let ele = document.getElementsByName(`userAnswer${id}`);
        for (let i = 0; i < ele.length; i++) {
            if (ele[i].checked) {
                setuserAnswers({ ...userAnswers, [id]: ele[i].value });
            }
        }
    }

    useEffect(() => {
        let ele = document.getElementsByName(`userAnswer${id}`);
        if (userAnswers[id] === "a" || userAnswers[id] === "b" || userAnswers[id] === "c" || userAnswers[id] === "d") {
            document.getElementById(`${id}option${userAnswers[id]}`).checked = true;
            
        } else {
            for (let i = 0; i < ele.length; i++)
            ele[i].checked = false;
        }
        
        saveAnswer();
    }, [id])

    useEffect(() => {
        let correct = 0, wrong = 0, unattempted = 0;
        for (let index = 0; index < 10; index++) {
            
            if (userAnswers[index] === undefined) {
                unattempted++;
            } else if (userAnswers[index] === book.questionBank[index].answer) {
                correct++;
            }
            else {
                wrong++;
            }
        }
        setResult({correct:correct,wrong:wrong,unattempted:unattempted});
    }, [userAnswers])
    

    const onExamend = () => {
        saveAnswer();
        setexamState(false);
    }
    return (

        <>
            {examState?
                <>
                <Navbar examState={setexamState} timerStart={props.timerStart}/>
                <div className='container my-3'>
                 <div style={{height:"30vh"}}>
                <div>
                    <b>Q{`${id + 1}`}</b> . {book.questionBank[id].question}
                </div>
                <div className="form-check my-2">
                    <input className="form-check-input" type="radio" name={`userAnswer${id}`} value="a" id={`${id}optiona`} />
                    <label className="form-check-label" htmlFor={`${id}optiona`}>
                        {book.questionBank[id].options.a}
                    </label>
                </div>
                <div className="form-check my-2">
                    <input className="form-check-input" type="radio" name={`userAnswer${id}`} value="b" id={`${id}optionb`} />
                    <label className="form-check-label" htmlFor={`${id}optionb`}>
                        {book.questionBank[id].options.b}
                    </label>
                </div>
                <div className="form-check my-2">
                    <input className="form-check-input" type="radio" name={`userAnswer${id}`} value="c" id={`${id}optionc`} />
                    <label className="form-check-label" htmlFor={`${id}optionc`}>
                        {book.questionBank[id].options.c}
                    </label>
                </div>
                <div className="form-check my-2">
                    <input className="form-check-input" type="radio" name={`userAnswer${id}`} value="d" id={`${id}optiond`} />
                    <label className="form-check-label" htmlFor={`${id}optiond`}>
                        {book.questionBank[id].options.d}
                    </label>
                </div>
                </div>   


            <div className='d-flex justify-content-evenly mt-3'>
                <ul className="pagination">
                    <li className="page-item">
                        <button disabled={id <= 0} className="page-link" onClick={onPrevious}>Save & Previous</button>
                    </li>
                    <li className="page-item"><button className="page-link" >{id < 1 ? "  " : id}</button></li>
                    <li className="page-item active" aria-current="page">
                        <button className="page-link" >{id + 1}</button>
                    </li>
                    <li className="page-item"><button className="page-link">{id >= 9 ? "  " : id + 2}</button></li>
                    <li className="page-item">
                        <button disabled={id >= 9} className="page-link" onClick={onNext}>Save & Next</button>
                    </li>
            <button type="button" className="btn btn btn-success mx-3" onClick={onExamend}>Submit Assesment</button>
                </ul>
            </div>
         
            <div className='mt-3'>
                <h2>Your Answers in this mock test</h2>
                {Object.keys(userAnswers).map((onekey, i) => { return (<div key={onekey}><b>{parseInt(onekey) + 1}.({userAnswers[onekey]})</b> {book.questionBank[onekey].options[userAnswers[onekey]]}</div>) })}
            </div>
            </div>
            </>
            :
            <Assesment result={result} userAnswers={userAnswers} book={book} />}
            
        </>
    )
}

export default Test