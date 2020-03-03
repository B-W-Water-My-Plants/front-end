import React, { useEffect, useState } from "react";
import PlantCard from "./PlantCard";
import axios from 'axios';
import "../index.css";

export default function PlantList() {
    // useState to track data from useEffect
    const [plant, setPlant] = useState([]);

    useEffect(() => {
        // API Request - run in `useEffect`
        axios.get("https://water-my-plants-bw.herokuapp.com/api/:id/plants").then(res => {
            console.log(res.data.results);
            setPlant(res.data.results);
        }).catch(e => console.log(e));
    }, []);

    return (
        <section>
            {plant.map(plant =>
                <PlantCard
                    id={plant.id},
                    nickname = { plant.nickname },
                    species = { plant.species },
                    image = { plant.image },
                />
            )
            }
        </section>
    )
} 
