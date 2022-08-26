import { Button} from '@mui/material'
import React from 'react'
import NavBar from '../LandingPage/NavBar/NavaBar'
import './MainContent.css'
import ProductCard from './ProductCard/ProductCard'
import Sidebar from './ProductCard/Sidebar'

const MainContent = () => {
    return (
        <div>
            <NavBar />
            <div className="container">
                <div className="leftpane">
                    <img className="demo_image" src="https://images.unsplash.com/photo-1601412436009-d964bd02edbc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGh1bWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt='tiger' />
                    <Button variant="outlined" color="success" style={ { marginTop: "20px", marginLeft:"150px" } }>Upload new Photo</Button>
                </div>
                <div className="rightpane">
                    <Sidebar />
                </div>
                <div className="middlepane">
                    <ProductCard
                        title="ankush"
                        brand="Gucci"
                        image="https://images.unsplash.com/photo-1633902658394-de9ce96d326c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGxpcHN0aWNrfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                        price="$1000"
                    />
                    <ProductCard
                        title="ankush"
                        brand="Gucci"
                        image="https://images.unsplash.com/photo-1600852306771-c963331af110?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGxpcHN0aWNrfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                        price="$999"
                    />
                    <ProductCard
                        title="ankush"
                        brand="Gucci"
                        image="https://images.pexels.com/photos/2533266/pexels-photo-2533266.jpeg?auto=compress&cs=tinysrgb&w=600"
                        price="$999"
                    />
                    <ProductCard
                        title="ankush"
                        brand="Gucci"
                        image="https://images.unsplash.com/photo-1616443257944-3a6a8ac2b7ae?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTJ8fGxpcHN0aWNrfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                        price="$999"
                    />
                    <ProductCard
                        title="ankush"
                        brand="Gucci"
                        image="https://images.unsplash.com/photo-1591360236480-4ed861025fa1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzF8fGxpcHN0aWNrfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                        price="$999"
                    />
                    <ProductCard
                        title="ankush"
                        brand="Gucci"
                        image="https://images.unsplash.com/photo-1626895872564-b691b6877b83?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGxpcHN0aWNrfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                        price="$999"
                    />
                </div>
            </div>
        </div >
    )
}

export default MainContent