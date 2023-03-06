import React, { Suspense } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { PATH } from '../Constants/PATH'
import MainLayout from '../Layouts/MainLayout'
import { Loading } from '../Loading/Loading'
import HomePages from '../Pages/HomePages/HomePages'

export default function ALLRoutes() {
    return (
        <BrowserRouter>
            <MainLayout>
                <Suspense fallback={<Loading />}>
                    <Routes>
                        <Route path={PATH.HOME} element={<HomePages />}></Route>

                    </Routes>

                </Suspense>
            </MainLayout>
        </BrowserRouter>
    )
}
