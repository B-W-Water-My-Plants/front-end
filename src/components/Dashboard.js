import React, {useEffect} from 'react';
 
import {Link} from 'react-router-dom';

//REDUX
import { useSelector, useDispatch} from 'react-redux'
import {getPlants} from '../store/actions/index'
import {deletePlant} from '../store/actions/index';

import styled from 'styled-components';
import {Card, Button} from 'antd';


const Dashboard = (props) => {    

    const dispatch = useDispatch();

    //Plant State
    const plants = useSelector(state => state.plantList);



    // MVP for React 1
    useEffect(()=> {
        // this will be my action to call the plants list when I get the end point
        dispatch(getPlants());
        
    }, [dispatch])

    const Plants = styled.div`
    display: flex;
    align-self: auto;
    justify-content: space-around;
    margin-top: 20px;
    width: 60%;
    margin: auto;
    margin-top: 30px;
    height: auto;
    background-color: rgba(151, 198, 165, 0.6);
    `;

  
   
    return(
        <section id="dashBg">
          
            
            
            {plants.map(plant  => 
          
                <div>
               
                <Card id="plantCard">
                <div key={plant.id}>
                <p>Nickname: {plant.nickname}</p>
                <p>Species: {plant.species}</p>
                <p>H2o Frequency: {plant.h2o_frequency}</p>
                
                

                <div>

                    <Link to={`/editplant/${plant.id}`}><button id="btnEdit">Edit</button></Link>

                    <Button htmlType='submit' onClick={() => {dispatch(deletePlant(plant.id));}}>Delete</Button> 
                    
                </div>
                </div>
                </Card>
                </div>  
                
                )}
                
        </section>
    )
    
}

export default Dashboard;