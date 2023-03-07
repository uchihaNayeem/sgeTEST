import React from 'react';
import HeaderNav from '../HeaderNav/HeaderNav';

const NotFound = () => {
    return (
        <div >
            <HeaderNav></HeaderNav>
            <div className='pt-5 text-center'>

                <h1 className='pt-5'>page not found</h1>
            </div>
        </div>
    );
};

export default NotFound;