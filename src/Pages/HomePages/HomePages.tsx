import React from 'react'
import { CardSilderList } from '../../Components/HomePage/CardSilderList/CardSilderList'
import { CategoriesList } from '../../Components/HomePage/CategoriesList/CategoriesList'
import { CoursesList } from '../../Components/HomePage/CourseList/CoursesList'
import { HeroSlider } from '../../Components/HomePage/HeroSlider/HeroSlider'
import { PageLayout } from '../../Layouts/PageLayout'

export default function HomePages() {
    return (
        <PageLayout>
            <HeroSlider />
            <CardSilderList />
            <CoursesList />
            <CategoriesList />
        </PageLayout>
    )
}
