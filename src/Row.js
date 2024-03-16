
/*
import React, { useState, useEffect} from 'react'
import axios from './axios';
import './Row.css';
import YouTube from "react-youtube";
import movieTrailer from 'movie-trailer'

const base_url = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchUrl, isLargeRow }) {
    const [movies, setMovies] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState("");
    
    useEffect(() => {
        async function fetchData() {
         
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
            return request;

        }
        fetchData();

    }, [fetchUrl]);

    const opts = {
      height: '390',
      width: '100%',
      
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
        origin: 'http://localhost:3002' 
      },
    };

    const handleClick = (movie) => {
      console.log(movie)
      if(trailerUrl){
        setTrailerUrl('');
      }else{
        console.log(movie?.name || movie?.original_title  || "")
        movieTrailer(movie?.name || movie?.original_title  || "")
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          
          setTrailerUrl(urlParams.get('v'));

        })
        .catch((error) => console.log(error));
       
      }

    }

    return (
    <div className='row'>
      <h2>{title}</h2>
      <div className='row__posters'>
        {movies.map(movie => (
            <img
            key={movie.id}
            onClick={() => handleClick(movie)}
             className={`row__poster ${isLargeRow && "row__posterLarge"}`}
            src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} alt={movie.name}/>

        ))}

      </div>
      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts}/>}
      

      
    </div>
  )
}

export default Row

*/




import React, {useEffect, useState} from 'react';
import axios from './axios';
import "./Row.css"
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";
const base_url = "https://image.tmdb.org/t/p/original/";


function Row({title, fetchUrl,isLargeRow}){
    const [movies, setMovies] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState("");


    // A snippet of code which runs based on a specific conditions
    // async function call  differently in useEffect than usual
    useEffect(() => {
// if [], run once when the row loads and dont run again
 async function fetchData(){
    // so inside here we are going to actually do all the fetching
    // NOTE:- when we use any variable in useEffect that is being pulled from outside we have to include it in second parameter of this function here that variable is fetchUrl
    const request = await axios.get(fetchUrl);
    setMovies(request.data.results);
     return request;
 }
 fetchData();
    }, [fetchUrl]);

    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
         origin: 'http://localhost:3002'
        },
      };

const handleClick = (movie) => {
    if(trailerUrl){
        setTrailerUrl('');
    }else{
        console.log(movie?.name || movie?.original_title || "")
        movieTrailer(movie?.name || movie?.original_title || "")
        .then((url) => {
      const urlParams = new URLSearchParams(new URL(url).search) ;
     setTrailerUrl(urlParams.get('v'));

        })
        .catch((error) => console.log(error));
    }
}

   
    return (
        <div className = "row">

<h2>{title}</h2>
   <div className = "row_posters">
   
    {movies.map(movie =>(
        <img 
        key = {movie.id}
        onClick={() => handleClick(movie)}
         className = {`row_poster ${isLargeRow && "row_posterLarge"}`}
        src ={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} alt = {movie.name}/>
    ))}
   
   
   </div>
  {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
        </div>
    );
}

export default Row


