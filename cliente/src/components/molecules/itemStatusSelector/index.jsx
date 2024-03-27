import React, { useEffect } from 'react'
import toast, { Toaster } from 'react-hot-toast'
import { useParams } from 'react-router-dom'

import { useSelector, useDispatch } from 'react-redux'
import { setAnimeRelation } from '../../../slices/animeDetailSlice'

import { LinkUserAnimeAPI } from '../../../apiConnection'

function ItemStatusSelector () {
  /*
  !Cuando el usuario no este logeado este componente no se renderiza
  */

  const dispatch = useDispatch()
  const animeState = useSelector(({ animeDetail }) => animeDetail.relation)
  const { token, data } = useSelector(({ user }) => user.info)

  const { id } = useParams()// Anime Id to send as query

  const [linkRes, linkStatus, linkFetch] = LinkUserAnimeAPI(data.id)

  const manageAnime = ({ method, status }) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      }
    }

    return method(`?anime=${id}`, JSON.stringify({ status }), config)
  }
  useEffect(() => {
    if (linkStatus.success) {
      dispatch(setAnimeRelation(linkRes))
      if (linkRes.status)toast.success(`Estas siguiendo esta serie en ${linkRes.status}`)
      else toast.success('Ya no estas siguiendo esta serie')
    }
  }, [linkStatus])

  const handleOptionChange = (e) => {
    manageAnime({ method: linkFetch, status: e.target.value || null })
  }

  return (
    <form>
      <Toaster/>
      <label
        aria-label='Select a status for this Item'
        htmlFor="status-select"
      >
        <select
          name="status"
          value={animeState.status}
          onChange={handleOptionChange}
          id="status-select"
        >
          <option value="">-/Selecciona un estado\-</option>
          <option value="viendo">
                    Viendo
          </option>
          <option value="visto">Visto</option>
          <option value="por ver">Para ver</option>
        </select>
      </label>
    </form>
  )
}

export default ItemStatusSelector
