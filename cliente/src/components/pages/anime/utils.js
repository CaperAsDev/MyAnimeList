export const filterItem = (genre, year, array) => {
  if (genre !== 'Genero' && year === 'Año') {
    return array.filter(anime => {
      return anime.genre.toLowerCase().includes(genre.toLowerCase())
    })
  } else if (genre === 'Genero' && year !== 'Año') {
    return array.filter(anime => {
      return anime.year.toString().includes(year.toString())
    })
  } else {
    return array.filter(anime => {
      return anime.genre.toLowerCase().includes(genre.toLowerCase()) &&
            anime.year.toString().includes(year.toString())
    })
  }
}
