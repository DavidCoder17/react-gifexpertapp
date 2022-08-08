export const getGifs = async( category ) => {

    const url = `https://api.giphy.com/v1/gifs/search?api_key=7LYKvcFk5REM8fyYgmzv9Q54VW8b7x3E&q=${ category }&limit=10`
    const { data } = await (await fetch( url )).json()

    const gifs = data.map( img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }))

    return gifs
}