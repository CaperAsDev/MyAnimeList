import React from 'react'
import ReactDOM from 'react-dom/client'
import { store } from './store.js'
import { Provider } from 'react-redux'

import { UserSignUpProvider } from './context/UseSignUpContext.jsx'

import Layout from './layout/index.jsx'

import Login from './components/pages/logIn/index.jsx'
import Home from './components/pages/home/index.jsx'
import SignUp from './components/pages/signUp/index.jsx'
import Profile from './components/pages/profile/index.jsx'
import Community from './components/pages/community/index.jsx'
import DetailView from './components/pages/detailView'
import Creator from './components/pages/creator/index.jsx'

import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'
import Anime from './components/pages/anime/index.jsx'
import Manga from './components/pages/manga/index.jsx'
import ListDetail from './components/pages/listDetail/index.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: '/profile/:id',
        element: <Profile />
      },
      {
        path: '/profile/list/:idList',
        element: <ListDetail />
      },
      {
        path: '/comunidad',
        element: <Community />
      },
      {
        path: '/anime/:id',
        element: <DetailView />
      },
      {
        path: '/creator',
        element: <Creator />
      },
      {
        path: '/anime',
        element: <Anime />
      },
      {
        path: '/manga',
        element: <Manga />
      }
    ]
  },
  { path: '/login', element: <Login/> },
  { path: '/signup', element: <UserSignUpProvider><SignUp/></UserSignUpProvider> }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <UserSignUpProvider></UserSignUpProvider>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
)
