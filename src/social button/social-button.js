import React from 'react';
export function Social() {
    return (
        <>
            <div className='social-bg d-flex flex-column justify-content-center align-items-center mt-5'>
                <h1 className='textSocial text-light'>Social Buttons</h1>
                <div className='m-4'>
                    <div className='btn btn-warning text-light mx-2'>Like</div>
                    <div className='btn btn-light text-dark mx-2'>Comment</div>
                    <div className='btn btn-primary text-light mx-2'>Share</div>
                </div>
            </div>
        </>
    );
}