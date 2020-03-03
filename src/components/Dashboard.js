import React, { useEffect } from 'react';
import Drawer from './Drawer'
<<<<<<< HEAD
import {getPlants} from '../store/actions/index'

import { useSelector, useDispatch} from 'react-redux'

import PlantCard from './PlantCard';


=======
import { getPlants } from '../store/actions/index'
import { useSelector, useDispatch } from 'react-redux'
import PlantCard from './PlantCard';
>>>>>>> 3d388f5a203f1f9570089cd31271f686250d1922
// const H1SignIn = styled.h1`
// text-align: center;
// font-family: Amatic SC;
// font-size: 64px;
// `;
<<<<<<< HEAD


const Dashboard = (props) => {    
    const dispatch = useDispatch();
    const plants = useSelector(state => state.plantList);

   
=======
const Dashboard = (props) => {
    const dispatch = useDispatch();
    const plants = useSelector(state => state.plantList);
>>>>>>> 3d388f5a203f1f9570089cd31271f686250d1922
    // MVP for React 1
    useEffect(() => {
        // this will be my action to call the plants list when I get the end point
        dispatch(getPlants());
<<<<<<< HEAD
        
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
                             
=======
    }, [dispatch])
    return (
        <section id="dashBg">
            <Drawer />
            <div>
                {plants.map(plant =>
                    <div>
                        <PlantCard
                            nickname={plant.nickname}
                            species={plant.species}
                            image={plant.image}
                            h2o={plant.h2o_frequency} />
                    </div>
>>>>>>> 3d388f5a203f1f9570089cd31271f686250d1922
                )}
                )}
            </div>
        </section>
    )
}
export default Dashboard;