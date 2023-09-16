import React from "react";

export function Datefun(){
    function datefu(){
        var givendate=document.getElementById('datevalue').value;
        var cal=new Date(givendate);
        cal.setDate(cal.getDate()+90);
        alert(cal.toLocaleDateString());

    }
    return(

        
        <><div className="container-fluid d-flex justify-content-center align-items-center dea row">
        <div className="container rounded bg-primary col-lg-5 p-5">
        <label className="fs-5">Enter the date</label><br></br>
        <input type="date" id="datevalue" className="fs-5"/>
        <input type="button" value="submit" onClick={datefu} className="fs-5 btn btn-dark"/>
        </div>
        </div>
        </>
    )
}