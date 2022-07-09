import React from 'react';

import "./Box.css";

export const Box = ({ value, onClick, issWinner, isCheo  }) => {
    
    const style = isCheo ? "diagonalCross " : ""
    const styles = value === "X"  ? "box x" : "box o";
   

    // issWinner && <button className={styles + style}  onClick={onClick}>{value}</button>  
   

 
 return <button className={style + styles}  onClick={onClick}>{value}</button> 
}