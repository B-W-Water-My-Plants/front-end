import React, {useEffect, useState} from 'react';

import { getPlant } from '../store/actions';

import {useDispatch} from 'react-redux'




const UpdatePlant = () => {

    const dispatch = useDispatch();
    
    

    // const [plant, setPlant] = useState({
    //     id: params.id, 
    //     nickname: '',
    //     species: '',
    //     h2o_frequency:'',
    //     image:'',
    //     user_id: params.id
    // })

    useEffect(() => {
        dispatch(getPlant())
        
    })

    const submitHandler = (event) => {
        event.preventDefault();
        dispatch()
    }

    
    return(
        <>
            <form onSubmit={submitHandler} className="form">
                <h3>Edit Plant</h3>

             
            </form></>
    )
}

export default UpdatePlant;

// {/* <div className="input-container">
// {/* Name of plant input */}
// <div>
//     <h4 htmlFor="nickname">
//     Nickname: <input
//     type="text"
//     value={plant.nickname}
//     onChange={event =>setPlant({...plant, [event.target.name]:event.target.value})}
//     name="nickname" required/>

//     </h4>
    
// </div>

// {/* Species of plant input */}

// <div>
//     <h4 htmlFor="species">Species: </h4>
//     <input
//         type="text"
//         value={plant.species}
//         onChange={event =>setPlant({...plant, [event.target.name]:event.target.value})}
//         name="species"
//     />
// </div>

// {/* H2oFrequency of plant */}
// <div>
//     <h4 htmlFor="h2o_frequency">H2o Frequency: </h4>
//     <input
//         type="text"
//         value={plant.h2o_frequency}
//         onChange={event =>setPlant({...plant, [event.target.name]:event.target.value})}
//         name="h2o_frequency"
//     />
// </div>
// </div> */}