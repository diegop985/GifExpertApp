
export const getGifs = async ( category ) => {
    const URL = `https://api.giphy.com/v1/gifs/search?api_key=CXCVf0yIBmroMRGMVjzOeo3p73c3N4gk&q=${ encodeURI(category) }&limit=10`
    const resp = await fetch ( URL )
    const {data} = await resp.json()
    const gifs = data.map( img => {
          return {
            id: img.id,
            title: img.title,
            img_url: img.images?.downsized_medium.url
          }
      })

      

      return gifs
  }
