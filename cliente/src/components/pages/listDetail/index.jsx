import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { useSelector } from 'react-redux'
import { GetUserListApi } from '../../../apiConnection'

import ListContainer from '../../organisms/listContainer'

const ListDetail = () => {
  const { idList } = useParams()
  const { token } = useSelector(({ user }) => user.info)

  const [listArray, setListArray] = useState(null)
  const [getListResponse, getListStatus, getListFetch] = GetUserListApi(idList.trim())

  const config = {
    headers: { Authorization: `Bearer ${token}` }
  }

  useEffect(() => {
    getListFetch('', {}, config)
  }, [idList])

  useEffect(() => {
    if (getListStatus.success) {
      setListArray(getListResponse)
      console.log(getListResponse)
    }
  }, [getListResponse])

  return (
    <main className='list-detail'>
      {listArray
        ? (<ListContainer list={listArray} />)
        : (<h3>...Cargando</h3>)
      }
    </main>
  )
}

export default ListDetail
