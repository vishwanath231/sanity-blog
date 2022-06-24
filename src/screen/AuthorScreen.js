import React,{ useEffect } from 'react';
import Loader from '../components/Loader';
import { getAuthors } from '../redux/actions/blogActions';
import { connect } from 'react-redux';
import BlockContent from '@sanity/block-content-to-react';


const AuthorScreen = ({author, getAuthors}) => {


    useEffect(() => {
        
        getAuthors()

    }, [getAuthors]);

    const { loading, authors } = author;

    return (
        <div className='container max-w-screen-lg mx-auto p-4'>
            {
                loading ? <Loader /> : (
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                        { authors.map((val,index) => (
                            <div className='flex justify-center items-center flex-col shadow-md rounded-lg p-4' key={index}>
                                <img src={val.image.asset.url} alt='f' className='w-32 h-32 rounded-full object-cover' />
                                <div className='sen-font text-lg font-bold mt-4'>{val.name}</div>
                                <div className='font-medium'>
                                    <BlockContent 
                                        blocks={val.bio} 
                                        projectId="gj7t578t"
                                        dataset="production" 
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                )
            }
        </div>
    )
}



const mapStateToProps = (state) => ({
    author : state.author
})

export default connect(mapStateToProps, { getAuthors })(AuthorScreen);