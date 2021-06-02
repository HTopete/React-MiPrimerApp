import React from 'react';
import { useFetchGifts } from '../hooks/useFetchGifts';
import GiftGridItem from './GiftGridItem';

const GiftGrid = ({category}) => {

    const {data:images, loading} = useFetchGifts(category);
    console.log(loading);
    // useEffect(()=>{
    //     getGifts(category)
    //         .then(setImages);
    // }, [category]);
    
   
    return (
        <>
        <h3 className="animate__animated animate__fadeInDown">{category}</h3>

        <div className="card-grid">
            {loading&& <p className="animate__animated animate__flash">Loading...</p>}
            {
                images.map((img) =>(
                    <GiftGridItem
                        key={img.id} 
                        {...img}
                    />
                ))
            }
        </div>
        </>
    )
}

export default GiftGrid;
