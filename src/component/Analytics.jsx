import React, { useEffect, useState } from 'react';
import { FaUserPlus } from "react-icons/fa6";
import ReviewData from '../store/Reviews_data';
import { IoBookmarkOutline, IoStar, IoStarOutline } from 'react-icons/io5';
import { BiDotsHorizontal } from 'react-icons/bi';
import { NavLink } from 'react-router-dom';



 const Analytics = () => {

    const [data, setData]= useState([]);

    

    useEffect(()=>{
        setData(ReviewData);
    },[]);

    const [hoveredReview, setHoveredReview] = useState(null);

    const handleMouseEnter = (index) => {
        setHoveredReview(index);
    };

    const handleMouseLeave = () => {
        setHoveredReview(null);
    };

    const renderStars = (data) => {
        const stars = [];
        for (let i = 0; i < 10; i++) {
            if (i < Math.floor(data)) {
            stars.push(<span style={{"color":"orange"}} key={i}><IoStar /></span>); // Filled star
            } else {
            stars.push(<span style={{"color":"orange"}} key={i}><IoStarOutline /></span>); // Empty star
            }
        }
        return stars;
    };

    return (
        <div>
            <div className="container">
                <div className="row justify-content-md-center">
                    <div className="col-md-9">
                        
                             {
                                    data?.map((elemt, index)=>{
                                        return(
                                            <>
                                            <div className="row pt-5 mb-5" onMouseEnter={() => handleMouseEnter(index)} onMouseLeave={handleMouseLeave}>
                                                <div className="col-md-1">
                                                    <img src={elemt.source.image} className="w-100 rounded-circle shadow-4-strong" alt="" />
                                                </div>
                                                <div className="col-md-9">
                                                    <b>{elemt.reviewer_name}</b> wrote a review at <b> {elemt.source.name} </b>
                                                </div>
                                                <div className="col-md-2  ">
                                                    <FaUserPlus className="mr-2" /><IoBookmarkOutline className="mr-2" /> <BiDotsHorizontal />
                                                </div>
                                                <div className="col-md-10 mt-1 mb-1">
                                                    {renderStars(elemt.rating_review_score)} <span className="text-muted">{elemt.date}</span>
                                                </div>
                                                <div className="col-md-2 mt-1 mb-1" ></div>

                                                <a href={elemt.review_url} target='https://react-icons.github.io/react-icons/search/#q=star'>
                                                <div className="col-md-12" style={{"backgroundColor":"#eaf09b6b"}}>
                                                    {elemt.raw_content}
                                                    {hoveredReview === index &&
                                                        <div className="col-md-12" style={{ "backgroundColor": "#e8bd6d3d" }}>

                                                            <p>{elemt.content}</p>
                                                        </div>
                                                    }
                                                </div>
                                                </a>
                                            </div>
                                            </>
                                        )
                                    })
                                }
                            
                        </div>
                    </div>
                </div>
            </div>
    );
};


export default Analytics;