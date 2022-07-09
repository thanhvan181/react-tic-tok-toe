import React from 'react'
import * as S from "./Board.styles"
import { Box } from "./Box"
import { useState } from 'react'


export const Board = ({ board, onClick, isWinner, position }) => {
 
  
  return (
    <S.Board>
      {
        board.map((value, idx ) => {
          console.log("POsition: ", value, position, idx)
          if(position.indexOf(idx) > -1){
            
            
            return <Box isCheo={true} value={value} issWinner={isWinner}  onClick={() => value === null && onClick(idx)} />;
          }
          return <Box isCheo={false} value={value} issWinner={isWinner}  onClick={() => value === null && onClick(idx)} />;
        })
      }
    </S.Board>
  )
}
