import React from 'react'

import { courses } from '../../../Constants/courses'
import { CardSilder } from '../../CardSilder/CardSilder'
export const CardSilderList = () => {



    return (
        <div className="card-silder-container">
            <div className="card-silder-content">
                <div className='lg:text-start md:text-center sm:text-center ml-5'>

                    <h1 className='card-silder-title'>Top
                        <span style={{ color: "#008CC9" }}> Courses</span>
                    </h1>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mx-2  md:mx-5 '>
                    {
                        courses.slice(0, 3).map((courses) => {
                            return <CardSilder courses={courses} />
                        })
                    }

                </div>




            </div>
        </div >
    )
}
