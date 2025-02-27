import React from 'react'
import styles from './LoggedFoods.module.css'

export default function LoggedFoods({ loggedFood, quantity }) {
    return (
        <div className={styles.mainContainer}>
            <h3>Logged Foods</h3>
            <div className={styles.loggedFoodContainer}>
                <ul>
                    {loggedFood.map((food, index) => (
                        <li key={index}>
                            {food.name} - Calories: {food.calories} - Quantity: {quantity}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}
