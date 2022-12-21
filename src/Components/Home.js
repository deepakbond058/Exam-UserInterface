import React,{useContext} from 'react'
import { Link } from "react-router-dom";
import Context from './Context/StatesContext';

function Home(props) {
  const {timerStart} = useContext(Context);
    return (<>
        
        <div className="card text-center my-1">
            <h1 className="card-header">
                Mock Test
            </h1>
            <div className="card-body">
                <h5 className="card-title">General Knowledge :: Physics</h5>
                <p className="card-text">10 Q’s · 10 marks . 5 mins</p>
                <Link className="btn btn-primary mx-1 my-1" to='/test' onClick={timerStart}>Take Test</Link>
                <button className="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">Instructions</button>
            </div>
        </div>


        {/* modal */}

        <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
            <div className="offcanvas-header">
                <h3 className="offcanvas-title" id="offcanvasRightLabel">Instructions</h3>
                <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body container">
                <h4>General intructions</h4>
                <ol>
                    <li>
                        Total duration of Mock Test is 5 mins.<br />
                    </li>
                    <li>
                        The countdown timer in the top right corner of screen will display the remaining time available for you to complete the examination. When the timer reaches zero, the examination will end by itself. You will not be required to end or submit your examination.
                    </li>
                </ol>
                <h4>Navigating to a question</h4>
                <ol>
                    <li>
                        Click on Next or Previous to save your answer for the current question and then go to the next question.

                    </li>
                </ol>
        </div>
    </div>
    </>

    )
}

export default Home