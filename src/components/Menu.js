import React from 'react'
import Card from '../pages/Card'
import Sdata from './Food'

const Menu = () => {
    return (
        <>
            <section className="menu container mx-auto py-8">
            <h1 className="text-xl font-bold mb-8 mt-2 text-center">All Foods</h1>
                <div className="row row-cols-1 row-cols-md-3 g-4">
                { Sdata.map((val) => {
                    return (
                        <Card
                            id={val.id}
                            imgsrc={val.imgsrc}
                            sname={val.sname}
                            price={val.price}
                        /> 
                    )
                })}
                </div>
            </section>
        </>
    )
}

export default Menu
