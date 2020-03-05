import React, {useEffect} from 'react';
 


import Drawer from './Drawer'
import {getPlants} from '../store/actions/index'

import { useSelector, useDispatch} from 'react-redux'

import PlantCard from './PlantCard';


import {deletePlant} from '../store/actions/index';


const Dashboard = () => {    

    const dispatch = useDispatch();
    const plants = useSelector(state => state.plantList);
    
  
    console.log(plants);

    
  
    
    // MVP for React 1
    useEffect(()=> {
        // this will be my action to call the plants list when I get the end point
        dispatch(getPlants());
        
    }, [dispatch])

 
    return(
        <section id="dashBg">
            <Drawer />
            
            
            {plants.map(plants  => 
          
                <div>
                <PlantCard 
                    key={plants.id}
                    nickname = { plants.nickname }
                    species = { plants.species }
                    image = { plants.image } 
                    h2o={plants.h2o_frequency}
                    
                />   

                <button onClick={() => {dispatch(deletePlant(plants.id));}}>Delete</button>

                <button>Edit</button>

                </div>   
                )}
                
        </section>
    )

}

export default Dashboard;