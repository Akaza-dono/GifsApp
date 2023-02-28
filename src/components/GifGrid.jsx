import { useState, useEffect } from "react";
import { getGifs } from "../helpers/getGifs";
import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifItem } from "./GifItem";
import PropTypes from 'prop-types'
// import '../../src/styles.css';

export const GifGrid = ({category}) => {
    const {images, isLoading} = useFetchGifs(category);

    return(
        <>
            <h3>{category}</h3>
            {
                isLoading && (<h2>Cargando...</h2>)
            }
            <div className="card-grid">
                {
                    images.map((image) => (
                        <GifItem key={image.id} { ...image }/>
                    ))
                }
            </div>
        </>
    )
}

GifGrid.propTypes = {
    category: PropTypes.string.isRequired
}

