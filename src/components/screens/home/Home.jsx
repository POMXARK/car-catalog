import styles from './Home.module.css'
import {cars} from "./cars.data.js";
import {cars as carsData} from "./cars.data.js";
import CarItem from "./car-item/CarItem.jsx";
import {useMemo, useState} from "react";
import CreateCarForm from "./create-car-form/CreateCarForm.jsx";

const Home = () => {
    // сохраняет данные в кэш, без повторного выполнения
    // const filteredCars = useMemo(() => cars.filter(car =>
    // car.price > 23000), [])

    const [cars, setCars] = useState(carsData)

    return (
        <>
            <h1>Cars catalog</h1>
            <CreateCarForm setCars={setCars}/>
            <div>
                {cars.length ? (
                    cars.map(car => (
                    <CarItem key={car.id} car={car} />
                ))): <p>There are no cars</p>
                }
            </div>
        </>

    )
}

export default Home