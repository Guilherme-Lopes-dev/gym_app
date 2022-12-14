import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import { Box } from '@mui/material'
import ExerciseVideos from '../components/ExerciseVideos'
import  Detail  from '../components/Detail'
import SimilarExercises from '../components/SimilarExercises'

import { exerciseOptions, fetchData, youtubeOptions } from '../utils/fetchData'

const ExerciseDetail = () => {

const [exerciseDetail, setExerciseDetail] = useState({});
const [exerciseVideos, setExerciseVideos] = useState([])
const{id} = useParams()//acesso ao numero do exercicio

useEffect(()=>{
  const fetchExercisesData = async () =>{
    const exerciseDbUrl = 'https://exercisedb.p.rapidapi.com'
    const youtubeSearchUrl = 'https://youtube-search-and-download.p.rapidapi.com/video/related'

    const exerciseDetailData = await fetchData(`${exerciseDbUrl}/exercises/exercise/${id}`, exerciseOptions)
  
    setExerciseDetail(exerciseDetailData)

    const exerciseVideosData = await fetchData(`${youtubeSearchUrl}/search?query=${exerciseDetailData.name}`, youtubeOptions )
    setExerciseVideos(exerciseVideosData.contents)
  }
  fetchExercisesData()
}, [id]) //Sempre que o id mudar, chama a função


  return (
    <Box>
      <Detail exerciseDetail={exerciseDetail} />
      
    </Box>
  )
}

export default ExerciseDetail