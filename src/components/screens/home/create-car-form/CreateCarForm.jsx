import styles from './CreateCarForm.module.css'
import {useState} from "react";

const CreateCarForm = () => {
    const [name, setName] = useState('')
    const [price, setPrice] = useState('')

    const createCar = e => {
        e.preventDefault()
        console.log({name, price})
    }

    return (
            <form className={styles.form}>
                <input
                    placeholder='Name'
                    onChange={e => setName(e.target.value)}
                    value={name}
                />
                <input
                    placeholder='Price'
                    onChange={e => setPrice(e.target.value)}
                    value={price}
                />

                <button onClick={e => createCar(e)}>Create</button>
            </form>
    )
}

export default CreateCarForm