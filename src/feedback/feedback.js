import React from "react";
import sad from "./sad.png";
import happy from "./happy1.jpeg";
import normal from "./normal1.png";
import { Link } from "react-router-dom";

export function Feedback()
{
    return(
        <>
        <div className="feedbg container-fluid d-flex justify-content-center flex-column align-items-center text-center row">
                <div className="col-md-5 container rounded bg-light p-5">
                <h2>How satisfy are you with our customer support performance?</h2>
                <div className=" d-flex justify-content-evenly mt-5">
                <div><Link to='/thank'><img src={sad} className="feedimg"/></Link>
                <h5>Sad</h5></div>
                <div><Link to="/thank"><img src={happy} className="feedimg"/></Link>
                <h5>Happy</h5></div>
                <div><Link to="/thank"><img src={normal} className="feedimg"/></Link>
                <h5>Normal</h5></div>
                </div>
            </div>
        </div>
        </>
    )
}