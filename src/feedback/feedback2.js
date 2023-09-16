import React from "react";
import heart from "./heart.png"

export function Feedback2() {
    return (
        <>
            <div className="feedbg container-fluid d-flex justify-content-center flex-column align-items-center text-center row">
                <div className="col-md-5 container rounded bg-light p-5">
                    <img src={heart} className="feedimg"/>
                    <h2 className="m-5">Thank You</h2>
                    <p className="m-5">We will use your feedback to improve our customer support performance</p>
                </div>
            </div>
        </>
    )
}