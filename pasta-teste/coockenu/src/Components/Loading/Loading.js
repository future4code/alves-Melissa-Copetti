import { CircularProgress } from '@material-ui/core'
import React from 'react'
import { LoadingContainer } from './Style'


export const Loading = () => {
  return (
    <LoadingContainer>
        <CircularProgress/>
    </LoadingContainer>
  )
}
