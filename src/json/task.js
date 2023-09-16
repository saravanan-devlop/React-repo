import React,{ useEffect, useState } from "react";
import { CSVLink } from "react-csv";
import { Link } from "react-router-dom";

export function Taskfetch(){
    const [fetchvalue,setFetchvalue]=useState([])
    useEffect(()=>{
        fetch("https://fakestoreapi.com/products/")
        .then(response=>response.json())
        .then(data=>setFetchvalue(data))
    })
    return(
        <>
        <div className="row">
        {
           fetchvalue.map((value,index)=>(
            <>
                <div className="card col-lg-3 mt-5 pt-5">
                    <img src={value.image} className="card-img-top"/>
                    <div className="card-body">
                        <h1 className="card-title">{value.title}</h1>
                        <p className="card-content">{value.price}</p>
                        <Link to={`/product/${value.id}`}><button className="btn btn-primary">More</button></Link>
                    </div>

                </div>
            </>
           ))
        }
        </div>
        </>
    )
}