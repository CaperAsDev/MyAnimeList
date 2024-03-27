import axios from 'axios'
import { useState } from 'react'

const useFetch = (baseUrl, method) => {
  const [fetchStatus, setFetchStatus] = useState({ loading: false, success: false, error: null })
  const [infoApi, setInfoApi] = useState()

  const handleSuccess = (data) => {
    setFetchStatus({ loading: false, success: true, error: null })
    setInfoApi(data)
  }

  const handleError = (error) => {
    setFetchStatus({ loading: false, success: false, error })
  }

  const fetchData = (path = '', data = {}, config = {}) => {
    setFetchStatus({ loading: true, success: false, error: null })

    axios({
      method,
      url: `${baseUrl}${path}`,
      data,
      ...config
    })
      .then(res => {
        handleSuccess(res.data)
      })
      .catch(err => {
        handleError(err)
      })
  }

  return [infoApi, fetchStatus, fetchData]
}

export default useFetch
