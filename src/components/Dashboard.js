import React, {useEffect} from 'react';
 
import {Link, useParams}from 'react-router-dom';

import Drawer from './Drawer'
import {getPlants} from '../store/actions/index'

import { useSelector, useDispatch} from 'react-redux'

import PlantCard from './PlantCard';



const Dashboard = () => {    

    const dispatch = useDispatch();
    const plants = useSelector(state => state.plantList);
    
  
    console.log(plants.length);

    const id = useParams();
  
    
    // MVP for React 1
    useEffect(()=> {
        // this will be my action to call the plants list when I get the end point
        dispatch(getPlants());
        
    }, [dispatch])

 
    return(
        <section id="dashBg">
            <Drawer />
            <Link to={`/editplant/${id}`}>
            
            
            {plants.map(plant  => 
          
                <div>
                
                <PlantCard 
                    key={plant.id}
                    nickname = { plant.nickname }
                    species = { plant.species }
                    image = { plant.image } 
                    h2o={plant.h2o_frequency}/>
                </div>   
                )}
                </Link>  
        </section>
    )

}
        

export default Dashboard;