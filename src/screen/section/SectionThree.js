import React,{ useEffect } from 'react';
import { Link } from 'react-router-dom';
import Loader from '../../components/Loader';
import { getSectionThreePosts } from '../../redux/actions/blogActions';
import { connect } from 'react-redux';


const SectionThree = ({ postThree, getSectionThreePosts }) => {

    useEffect(() => {
        
        getSectionThreePosts()
        
    }, [getSectionThreePosts]);

    const { loading, posts } = postThree;


    return (
        <>
            {
                loading ? <Loader /> : (
                    <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 '>
                        {
                            posts.map((val, index) => (
                                <Link to={`/post/${val.slug.current}`} key={index}>
                                    <div className='relative w-full h-72 rounded-3xl'>
                                        <img src={val.mainImage.asset.url} alt='images' className='w-full rounded-3xl h-72 absolute  object-cover'  />    
                                        <div className='absolute bg w-full rounded-3xl h-72  '>
                                        <div className='title text-lg tracking-wide mx-4 mt-10 mb-2 relative'>{val.title}</div>
                                        <div className='border-current text-white font-medium tracking-wide border-2 w-fit mx-4 px-3 py-1 rounded-full relative'>{val.tags[0]}</div>
                                        </div>
                                    </div>
                                </Link>
                            ))
                        }
                    </div>
                )
            }
        </>
    )
}


const mapStateToProps = (state) => ({
    postThree: state.postThree
})

export default connect(mapStateToProps, { getSectionThreePosts })(SectionThree);
