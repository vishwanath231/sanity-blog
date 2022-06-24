import React from 'react';
import SectionOne from './section/SectionOne';
import SectionTwo from './section/SectionTwo';
import SectionThree from './section/SectionThree';

const HomeScreen = () => {
    return (
        <div className='container max-w-screen-lg mx-auto p-4'>
            <SectionOne />
            <SectionTwo />
            <SectionThree />
        </div>
    )
}

export default HomeScreen;