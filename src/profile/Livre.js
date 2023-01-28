import React from 'react'

export default function livre(props) {

    return (
        <div>
            <div className='App'>
                {props.movies.map(Element => {
                    return (
                        <div>
                            
                            <img width={200} src={Element.image} alt="" />
                            <p>{Element.name}</p>
                            <h4>{Element.rate}</h4>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
