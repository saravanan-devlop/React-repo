import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { Menu } from '../menu/menu';

export function Member(){
    return(
        <>
        <div className='member-bg d-flex justify-content-center align-items-center'>
            <div className='row member-inside container'>
                <div className='col-lg-6 col-sm-6 d-flex justify-content-center align-items-center'>
                    <img src='https://cdn-icons-png.flaticon.com/512/295/295128.png' className='img-fluid'/>
                </div>
                <div className='col-lg-6 col-sm-6 d-flex flex-column g-5 p-5'>
                     <h2 className='text-center fw-bolder'>Member Login</h2>
                     <input type='email' placeholder='Email' className='bg-light mt-5 member-text'></input>
                     <input type='password' placeholder='password' className='bg-light mt-5 member-text'></input>
                     <button className='mt-5 p-3 member-button'>Login</button>
                     <p className='text-center pt-5 fw-bold'>Forget <a href='' className='member-link'>Username/ Password?</a></p>
                     <p className='text-center pt-5 fw-bold'><a href='' className='member-link'>Create your account</a></p>


                </div>
            </div>

        </div>
        </>
    )
}