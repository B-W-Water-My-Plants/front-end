import React, {useEffect, useState} from 'react';
 


import {getPlants} from '../store/actions/index'

import { useSelector, useDispatch} from 'react-redux'

import PlantCard from './PlantCard';

import {useParams} from 'react-router-dom'


import {deletePlant} from '../store/actions/index'

const Dashboard = (props) => {    

    const dispatch = useDispatch();
    const plants = useSelector(state => state.plantList);
    
    const [plant, setPlant] = useState([]);
    const {id} = useParams();
  
    
    // MVP for React 1
    useEffect(()=> {
        dispatch(getPlants());
        
    }, [dispatch])

    const handleClick = () => {
		setPlant(plant.filter(data => parseInt(data.user_id) === parseInt(id)));
   };
  
   
    const handleDelete = (plantId) => {
        console.log(plants.id);
        
        dispatch(deletePlant(plants));
        console.log(plants.id);
        
    }
 
    return(
        <section id="dashBg">
           
            <div>
            <div><button onClick={handleClick}>Show List</button></div>
            <button onClick={e  => {
                    e.stopPropagation(); 
                    handleDelete()}}>Delete</button>
                    

            <button>Edit</button>
            {plants.map(plant  => 
          
                <div>
                <PlantCard 
                    key={plant.id}
                    nickname = { plant.nickname }
                    species = { plant.species }
                    image = { plant.image } 
                    h2o={plant.h2o_frequency}
                    
                />   



                </div>   
                )}
                </div>
        </section>
    )

}

export default Dashboard;