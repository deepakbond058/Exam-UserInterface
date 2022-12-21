import React,{useContext} from 'react'
import { Link } from "react-router-dom";
import Context from './Context/StatesContext';

function Assesment(props) {
    const {correct,wrong,unattempted} = props.result;
    const {clearTimer} = useContext(Context)
  return (
    <>
    <div className='container d-flex justify-content-evenly mt-3'>
     <Link type="button" className="btn btn btn-success" to="/" onClick={clearTimer}>Go To Homepage</Link>
    </div>
    <div className="card container mt-5">
  <h5 className="card-header">Assesment Completed</h5>
  <div className="card-body">
    <div className="card-title"><b>Correct Answers: </b>{correct}</div>
    <div className="card-title"><b>Incorrect Answers: </b>{wrong}</div>
    <div className="card-title"><b>Unattempted: </b>{unattempted}</div>
  </div>
</div>
    <div className='container mt-3'>
    <h2>Your Answers in this mock test</h2>
    {Object.keys(props.userAnswers).map((onekey, i) => { return (<div className="my-3" key={onekey}><b>{parseInt(onekey) + 1} . {props.book.questionBank[onekey].question}<br/>Your Answer : </b>{props.book.questionBank[onekey].options[props.userAnswers[onekey]]}<br/><b>Correct Answer : </b>{props.book.questionBank[onekey].options[props.book.questionBank[onekey].answer]}</div>) })}
</div>
</>
  )
}

export default Assesment