import React, {useEffect, useState} from 'react';


import {useDispatch, useSelector} from 'react-redux'
import {useParams, useHistory } from 'react-router-dom'



import { editPlant } from '../store/actions';

import {Form} from 'antd'



const UpdatePlant = ({props, }) => {

    const dispatch = useDispatch();
    const history = useHistory();

    const plants = useSelector(state => state.plantList);
    const {id} = useParams();

    const [plant, setPlant] = useState({
        nickname: '',
        species: '',
        h2o_frequency: '',
        image: '',
        user_id: ''

    })
        
    useEffect(() => {
     setPlant({...plants.filter(plant => plant.id === id)[0]})},[plant.id, id, plants]
     
     
    )


    const inputChange = (e) => {
        e.preventDefault()
        setPlant({
          ...plant, 
          [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e =>  {
        e.preventDefault();
        dispatch(editPlant(plant))
        history.push(`/dashboard/${id}`)
        console.log('submitted', plant);
        
    }

    const cancelClick = () => {
        history.push(`/dashboard/${id}`)
    }

    
     
    return(
        <div>
        <div id='updateFrm'>
           
        
        <Form onSubmit={handleSubmit} className='editform' >
        

        <input className='editInput'
            type="text"
            name="nickname"
            placeholder="Nickname"
            value={plant.nickname}
            onChange={inputChange}
            required
        />
        <input className='editInput'
            type="text"
            name="species"
            placeholder="Species"
            value={plant.species}
            onChange={inputChange}
            required
        />
        <input className='editInput'
            type="text"
            value={plant.h2o_frequency}
            name="h2o_frequency"
            placeholder="h2o Frequency"
            onChange={inputChange}
            required
        />
        <button id="editBtn">Edit Plant</button>
        <button onClick={cancelClick}>Cancel</button>
        </Form>
        </div>
        </div>
    )}
    
    


export default UpdatePlant;

