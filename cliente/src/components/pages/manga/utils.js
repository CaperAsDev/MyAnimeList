export const filterItem = (genre, year, array) => {
  if (genre !== 'Genero' && year === 'Año') {
    return array.filter(manga => {
      return manga.genre.toLowerCase().includes(genre.toLowerCase())
    })
  } else if (genre === 'Genero' && year !== 'Año') {
    return array.filter(manga => {
      return manga.year.toString().includes(year.toString())
    })
  } else {
    return array.filter(manga => {
      return manga.genre.toLowerCase().includes(genre.toLowerCase()) &&
            manga.year.toString().includes(year.toString())
    })
  }
}
