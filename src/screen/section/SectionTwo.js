import React,{ useEffect } from 'react';
import { Link } from 'react-router-dom';
import Loader from '../../components/Loader';
import { getSectionTwoPosts } from '../../redux/actions/blogActions';
import { connect } from 'react-redux';


const SectionTwo = ({ postTwo, getSectionTwoPosts }) => {

    useEffect(() => {
        
        getSectionTwoPosts()
        
    }, [getSectionTwoPosts]);

    const { loading, posts } = postTwo;


    return (
        <div className='mb-6'>
            {
                loading ? <Loader /> : (
                    <div className='grid grid-cols-1 lg:grid-cols-3 gap-8 '>
                        {
                            posts.map((val, index) => (
                                <Link to={`/post/${val.slug.current}`} key={index} className={index === 0 ? 'md:col-span-2' : index === 6 ? 'md:col-span-2' : '' }>
                                    <div className='relative w-full h-72 rounded-3xl'>
                                        <img src={val.mainImage.asset.url} alt='images' className='w-full rounded-3xl h-72 absolute  object-cover'  />    
                                        <div className='absolute bg w-full rounded-3xl h-72  '>
                                            <div className='title text-lg tracking-wide mx-10 mt-16 mb-2 relative'>{val.title}</div>
                                        </div>
                                    </div>
                                </Link>
                            ))
                        }
                    </div>
                )
            }
        </div>
    )
}


const mapStateToProps = (state) => ({
    postTwo : state.postTwo
})

export default connect(mapStateToProps, { getSectionTwoPosts })(SectionTwo);