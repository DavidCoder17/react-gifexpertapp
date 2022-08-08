import { useEffect, useState } from 'react'

import { getGifs } from '../helpers/getGifs'

export const useFetchGifs = ( category ) => {

    const [images, setImages] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    const getImages = async () => {
        const newImages = await getGifs(category)
        setImages(newImages)
        setIsLoading(false)
    }

    // ? USE EFFECT EJECUTA LO QUE ESTE DENTRO SOLO LA PRIMERA VEZ QUE SE CREA EL COMPONENTE 
    // ? Y NO CADA VEZ QUE SE REENDERIZE 

    useEffect(() => {
        getImages()
    }, [])

    return {
        images,
        isLoading
    }
}
