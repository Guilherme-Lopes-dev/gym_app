import React from 'react'
import {Link} from 'react-router-dom'
import {Button, Stack, Typography} from '@mui/material'

const ExerciseCard = ({exercise}) => {
  return (
    <Link className='exercise-card'to={`/exercise/${exercise.id}`}>
        <img src={exercise.gfUrl} alt={exercise.name} Loading='lazy'/>
        <Stack direction='row'>
            <Button sx={{m1:'21px', color: '#fff', background: '#ffa9a9',
            fontSize:'14px', borderRadius: '20px', textTransform:'capitalize' }}>
                
            </Button>
        </Stack>
    </Link>
  )
}

export default ExerciseCard