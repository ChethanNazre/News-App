import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Hero = () => {

    const [heroinfo, setHeroInfo] = useState([{}]);

    useEffect(() => {
        fetchData()
    }, [])


    const fetchData = async () => {
        try {
            const hero_data = await axios.get(`http://localhost:5000`);
            setHeroInfo(hero_data.data.articles[Math.floor(Math.random() * hero_data.data.articles.length - 1)])
            console.log(hero_data.data.articles[Math.floor(Math.random() * hero_data.data.articles.length - 1)])
        }

        catch (error) {
            console.log("error", error)
        }
    }



    return (
        <><div className='w-full md:h-[100vh] relative lg:h-full'>
            <div className='md:w-[100vw] w-full md:h-[100vh] h-full'>
                <img className='w-full h-full' key={heroinfo?.id} src={heroinfo && heroinfo?.urlToImage} alt="{heroinfo?.title}" />
            </div>
            <div className='absolute md:full w-full bottom-[0%] left-0 p-5 bg-gradient-to-t from-black '>
                <h1 className='text-white font-bold text-[3vmin]'>{heroinfo?.title}</h1>
                <div className='w-full h-full md:pt-5 pt-2 flex justify-around'>
                    <Link to={heroinfo?.url} target='blank' rel='noopener noreferrer'><button className='text-white bg-green-500 p-2 mr-2 rounded-xl text-[2.5vmin]'>Read More</button></Link>
                    <button onClick={fetchData} className='text-white p-2 rounded-xl bg-yellow-400 font-bold text-[2.5vmin]'>Next</button>
                </div>
            </div>
        </div>
        </>

    )
}
export default Hero;

