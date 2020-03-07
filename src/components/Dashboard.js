import React, {useEffect, useState} from 'react';
 

import {getPlants} from '../store/actions/index'

import { useSelector, useDispatch} from 'react-redux'


import {Link, useParams} from 'react-router-dom';


import {deletePlant} from '../store/actions/index';
import styled from 'styled-components';


const Dashboard = (props) => {    

    const dispatch = useDispatch();
    const plants = useSelector(state => state.plantList);
    // const {id} = useParams();
  
    console.log(plants);
   

    

    // MVP for React 1
    useEffect(()=> {
        // this will be my action to call the plants list when I get the end point
        dispatch(getPlants());
        
    }, [dispatch])

    const Plants = styled.div`
    background:#E8DEBD;
    display: flex;
    align-self: center;
    justify-content: space-around;
    margin-top: 20px;
    width: 60%;
    margin: auto;
    margin-top: 30px;
    height: auto;
    border-radius: 10px;
    border:2px solid #7D695F;
    padding: 20px;
    text-align: center;
    `;

  
   
    return(
        <section id="dashBg">
          
            
            
            {plants.map(plant  => 
          
                <div>
                {/* <PlantCard 
                    key={plants.id}
                    id={plants.id}
                    nickname = { plants.nickname }
                    species = { plants.species }
                    image = { plants.image } 
                    h2o={plants.h2o_frequency}
                    
                />    */}
                <Plants>
                <div key={plant.id}>
                <p>Nickname: {plant.nickname}</p>
                <p>Species: {plant.species}</p>
                <p>H2o Frequency: {plant.h2o_frequency}</p>
                
                

                <div>
                    <button onClick={() => {dispatch(deletePlant(plant.id));}}>Delete</button> 

                    <Link to={`/editplant/${plant.id}`}><button id="btnEdit">Edit</button></Link>
                    
                </div>
                </div>
                </Plants>
                </div>
                
                )}
                
        </section>
    )
    
}

export default Dashboard;