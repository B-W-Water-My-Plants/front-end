import React, {useEffect} from 'react';
 

import Drawer from './Drawer'
import {getPlants} from '../store/actions/index'

import { useSelector, useDispatch} from 'react-redux'

import PlantCard from './PlantCard';


// const H1SignIn = styled.h1`
// text-align: center;
// font-family: Amatic SC;
// font-size: 64px;
// `;


const Dashboard = (props) => {    
    const dispatch = useDispatch();
    const plants = useSelector(state => state.plantList);

   
    // MVP for React 1
    useEffect(()=> {
        // this will be my action to call the plants list when I get the end point
        dispatch(getPlants());
        
    }, [dispatch])

    return(
        <section id="dashBg">
            <Drawer />
            <div> 
                {plants.map(plant => 
                <div>
                    <PlantCard id={plant.id}
                    nickname = { plant.nickname }
                    species = { plant.species }
                    image = { plant.image } 
                    h2o={plant.h2o_frequency}/>
                </div> 
                             
                )}
                )}
            </div>
        </section>
    )

}
        

export default Dashboard;