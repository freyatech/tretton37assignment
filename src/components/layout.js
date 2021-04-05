import React, { useLayoutEffect, useState, useEffect } from 'react';
import Profile from './profile';
import { getEmployees } from '../utils/api';

const Layout = props => {
    const { profiles } = props
    let numberOfRows = Math.floor(useWindowSize()[1] * 0.9 / (200))
    let numberOfContainers = Math.floor(useWindowSize()[0] * 0.9 / (290))
    numberOfContainers===0?numberOfContainers=1:numberOfContainers=numberOfContainers
    let columns = []
    for (let i = 0; i < numberOfRows; i++){
        columns.push(profiles.slice(i*numberOfContainers, i*numberOfContainers+numberOfContainers))
    }
    return (
        <div style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
            
        <div style={{ width: "90%",height:"80%", margin: "auto", padding: "20px" }}>
            {columns.map(value => {
                return <Row profiles={value}></Row>
            })}     
            </div>
            
            </div>
    )
}


const Row = props => {
    const {profiles}=props
    return (
        <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-around", alignItems: "center" }}>
            <div style={{ display: "flex", flexDirection: "row" }}>
                {profiles.map(value => {
                    return <Profile profile={value}></Profile>
                })}
            </div>
        </div>
    )
}
const useWindowSize=()=> {
  const [size, setSize] = useState([0, 0]);
  useLayoutEffect(() => {
    const updateSize=()=> {
      setSize([window.innerWidth, window.innerHeight]);
    }
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);
  return size;
}

export default Layout