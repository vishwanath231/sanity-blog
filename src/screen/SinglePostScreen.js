import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import imageUrlBuilder  from '@sanity/image-url';
import BlockContent from '@sanity/block-content-to-react';
import sanityClient from '../client';
import Loader from '../components/Loader';


const builder = imageUrlBuilder(sanityClient);
function urlFor(source){
    return builder.image(source)
}

const SinglePostScreen = () => {


    const [post, setPost] = useState(null);

    const { slug } = useParams();
 
    useEffect(() => {

        sanityClient.fetch(`*[slug.current == "${slug}"]{
            title,
            _id,
            slug,
            mainImage{
                asset->{
                    url
                }
            },
            description,
            publishedAt,
            body,
            "name": author->name,
            "authorImage": author->image
        }`).then((res) => {
            setPost(res[0])
        })

    }, [slug]);

    
 

    return (
        
        <div className='container max-w-screen-lg mx-auto p-4'>
            {
                !post ? <Loader /> : (
                    <>
                        <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-8 '>
                            <div className='flex justify-center'>
                                <img src={post.mainImage.asset.url}  
                                    alt={post.title} className='w-full rounded-3xl object-cover'/>
                            </div>
                            <div className='col-span-2'>
                                <div className='cursive text-4xl md:text-6xl'>
                                    {post.title}
                                </div>
                                <div className='my-4'>
                                    {post.description}
                                </div>
                                <div className='flex items-center'>
                                    <div className='mr-2'>
                                        <img src={urlFor(post.authorImage).url()}  alt='profile' className='rounded-full w-12 h-12 object-cover'  />
                                    </div>
                                    <div className='sen-font text-sm'>
                                        <p>{post.name}</p>
                                        <p>{new Date(post.publishedAt).toLocaleString()}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='my-4'>
                            <BlockContent 
                                blocks={post.body} 
                                projectId="gj7t578t"
                                postset="production" 
                            />
                        </div>
                    </>
                )
            } 
        </div>
    )
}



export default SinglePostScreen;