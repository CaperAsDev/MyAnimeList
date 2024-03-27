import useFetch from '../Hooks/usefetch'
const baseUrl = 'http://localhost:1234/api/v1'
// const baseUrl = 'https://myanime.onrender.com/api/v1'

// -----USER
export function SignUpAPI () {
  const signupApi = useFetch(`${baseUrl}/users`, 'POST')
  return (signupApi)
}
export function LoginAPI () {
  const loginApi = useFetch(`${baseUrl}/users/login`, 'POST')
  return (loginApi)
}
export function LoggedAPI () {
  const loginApi = useFetch(`${baseUrl}/users/me`, 'GET')
  return (loginApi)
}
export function UpdateUserDataAPI (idUser) {
  const updateUserDataApi = useFetch(`${baseUrl}/users/${idUser}`, 'PUT')
  return (updateUserDataApi)
}
export function GetUserDataAPI () {
  const getUserDataApi = useFetch(`${baseUrl}/users`, 'GET')
  return (getUserDataApi)
}

export function UserAnimesAPI (idUser) {
  const userAnimesApi = useFetch(`${baseUrl}/users/${idUser}/animes`, 'GET')
  return (userAnimesApi)
}
export function LinkUserAnimeAPI (idUser) {
  const userAnimesApi = useFetch(`${baseUrl}/users/${idUser}/animes`, 'PUT')
  return (userAnimesApi)
}
export function DetachUserAnimeAPI (idUser) {
  const userAnimesApi = useFetch(`${baseUrl}/users/${idUser}/animes`, 'DELETE')
  return (userAnimesApi)
}

// ----LIST
export function CreateListApi () {
  const createListApi = useFetch(`${baseUrl}/listAnimes`, 'POST')
  return (createListApi)
}
export function GetAllUserListsApi (userId) {
  const getAllListsApi = useFetch(`${baseUrl}/listAnimes/user/${userId}`, 'GET')
  return (getAllListsApi)
}
export function GetUserListApi (listId) {
  const getAllListsApi = useFetch(`${baseUrl}/listAnimes/${listId}`, 'GET')
  return (getAllListsApi)
}

// ----- ANIME
export function CreateItemApi () {
  const createItemApi = useFetch(`${baseUrl}/animes`, 'POST')
  return (createItemApi)
}
export function GetOneItemApi (idItem) {
  const getOneItemApi = useFetch(`${baseUrl}/animes/${idItem}`, 'GET')
  return (getOneItemApi)
}
export function GetAllItemApi () {
  const getAllItemApi = useFetch(`${baseUrl}/animes`, 'GET')
  return (getAllItemApi)
}
export function AddGenreToItemApi (idItem) {
  const addGenreToItemApi = useFetch(`${baseUrl}/animes/${idItem}/genres`, 'POST')
  return (addGenreToItemApi)
}
export function AddItemToListApi (idItem) {
  const addItemToListApi = useFetch(`${baseUrl}/animes/${idItem}/listanime`, 'POST')
  console.log(addItemToListApi)
  return (addItemToListApi)
}

// ----- GENRE
export function CreateGenreApi () {
  const createGenreApi = useFetch(`${baseUrl}/genres`, 'POST')
  return (createGenreApi)
}
export function GetAllGenresApi () {
  const getAllGenresApi = useFetch(`${baseUrl}/genres`, 'GET')
  return (getAllGenresApi)
}

// ----- Studios
export function GetAllStudiosApi () {
  const getAllStudiosApi = useFetch(`${baseUrl}/studios`, 'GET')
  return (getAllStudiosApi)
}

// ----- Producers
export function GetAllProducersApi () {
  const getAllProducersApi = useFetch(`${baseUrl}/producers`, 'GET')
  return (getAllProducersApi)
}

// ----- Reseñas

export function CreateReviewApi () {
  const createReviewApi = useFetch(`${baseUrl}/reviews`, 'POST')
  return (createReviewApi)
}
