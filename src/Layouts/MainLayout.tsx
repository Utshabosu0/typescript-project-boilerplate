import React, { ReactNode } from 'react'
import Footer from '../Components/Common/Footer/Footer';
import Header from '../Components/Common/Header/Header';
interface Props {
    children: ReactNode;
}

export default function MainLayout(props: Props) {
    const { children } = props;
    return (
        <div className="main-layout">
            <header>
                <Header />
            </header>
            <main className="layout-children">
                {children}
            </main>
            <footer>
                <Footer />
            </footer>
        </div>
    )
}
