import React from 'react'
import './style.scss'

export const CategoryCard = (props: { category: { name: string; totalCourse: number } }) => {
    const categorie = props.category;

    return (
        <div className='categorie-card flex flex-col justify-between'>
            <h6 className='categories-titles'>{categorie.name}</h6>
            <h1 className='categories-courses '>{categorie.totalCourse} Courses</h1>
        </div>
    )

}