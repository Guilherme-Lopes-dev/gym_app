import React, {useState} from 'react'
import {Box} from "@mui/material"
import { AddBox } from '@mui/icons-material'
import Exercises from '../Exercises'
import HeroBanner from '../HeroBanner'
import SearchExercises from '../SearchExercises'
const Home = () => {

  const [bodyPart, setBodyPart] = useState('all')
  const [exercises, setExercises] = useState([])

  return (
    <Box>
      <HeroBanner/>
      <SearchExercises 
      setExercises={setExercises}
      bodyPart={bodyPart}
      setBodyPart={setBodyPart}/>
      <Exercises
      setExercises={setExercises}
      bodyPart={bodyPart}
      setBodyPart={setBodyPart}/>
    </Box>
  )
}
//Quando usar varios componentes, tentar fazer com React context api
export default Home