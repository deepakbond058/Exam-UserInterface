import React, { useContext } from 'react'
import Context from './Context/StatesContext';

function Navbar() {
    const { timeLeft} = useContext(Context);
    //TimeLeft holds remaining exam time in milliseconds
    return (
        <nav className="navbar navbar-expand-lg bg-primary navbar-dark">
            <div className="container-fluid">
                <div className="navbar-brand" >Seekho</div>
                <div className="navbar-nav d-flex justify-content-end">
                    <h2><span className="badge bg-secondary">{timeLeft.minutes < 10 ? "0" + timeLeft.minutes : timeLeft.minutes} : {timeLeft.seconds < 10 ? "0" + timeLeft.seconds : timeLeft.seconds}</span></h2>

                </div>
            </div>
        </nav>
    )
}

export default Navbar   