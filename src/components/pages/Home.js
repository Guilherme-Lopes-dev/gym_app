import React, {useState} from 'react'
import {Box} from "@mui/material"
import { AddBox } from '@mui/icons-material'
import Exercises from '../Exercises'
import HeroBanner from '../HeroBanner'
import SearchExercises from '../SearchExercises'
const Home = () => {
  return (
    <Box>
      <HeroBanner/>
      <SearchExercises/>
      <Exercises/>
    </Box>
  )
}

export default Home