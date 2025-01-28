import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Swiggybody from './components/Swiggybody'
import App from './App.jsx'
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import Signup from './components/Signup.jsx';
import Button from './components/Button.jsx';
import SampleClass from './components/Sample.jsx';
import ProfileProps from './components/ProfileProps.jsx';
import TestRef from './components/testRef.jsx';
import Testing from './components/Testing.jsx';
import Memohook from './components/Memohook.jsx';
import RestaurantDetails from './components/RestaurantDetails.jsx';
import UseEffectObj from './components/UseEffectObject.jsx';
import Useeffectdep from './components/useEffectDep.jsx';

const Approuter = createBrowserRouter([
  {
    path : '/',
    element : <App/>,
    children : [     
      {
        path: '/',
        element : <Swiggybody/>
      }
      ,
      {
        path: '/login',
        element : <Signup/>
      }
      ,
      // {
      //   path: '/button',
      //   element : <Button/>
      // },
      // {
      //   path : '/sampleclass',
      //   element : <SampleClass/>
      // },
      // {
      //   path: '/profileclass',
      //   element : <ProfileProps/>
      // },
      // {
      //    path: '/ref',
      //    element : <TestRef/>
      // },
      // {
      //   path: '/testing',
      //   element : <Testing/>
      // },
      {
        path : '/memo',
        element : <Memohook/>
      },
      {
        path: '/restaurantDetails',
        element : <RestaurantDetails/>
      },
      {
        path : '/useEffectobj',
        element : <UseEffectObj/>
      },
      {
        path:'/useEffectDep',
        element : <Useeffectdep/>
      }
      
    ]
  }
])

createRoot(document.getElementById('root')).render(
    <RouterProvider router={Approuter}></RouterProvider>
)
