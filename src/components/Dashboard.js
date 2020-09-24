import React, {useEffect} from 'react';
 
import {Link} from 'react-router-dom';

//REDUX
import { useSelector, useDispatch} from 'react-redux'
import {getPlants} from '../store/actions/index'
import {deletePlant} from '../store/actions/index';


import { Card,Button} from 'antd';


const Dashboard = (props) => {    

    const dispatch = useDispatch();

    //Plant State
    const plants = useSelector(state => state.plantList);



    // MVP for React 1
    useEffect(()=> {
        // this will be my action to call the plants list when I get the end point
        dispatch(getPlants());
        
    }, [dispatch])


  
   
    return(
        <section id="dashBg">
          
            <div id='plantCardBg'>
            
            {plants.map(plant  => 
          
                <div key={plant.id} id="plantCard">
               
                <Card>
                <div>
                <p>Nickname: {plant.nickname}</p>
                <p>Species: {plant.species}</p>
                <p>H2o Frequency: {plant.h2o_frequency}</p>
                
                

                <div>

                    <Link to={`/editplant/${plant.id}`}><Button id="btnEdit">Edit</Button></Link>

                    <Button type='danger'  htmlType='submit' onClick={() => {dispatch(deletePlant(plant.id));}}>Delete</Button> 
                    
                </div>
                </div>
                </Card>
                </div>  
                
                )}
                </div>
        </section>
    )
    
}

export default Dashboard;