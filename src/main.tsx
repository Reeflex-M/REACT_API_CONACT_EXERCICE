import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Error } from './component/error.tsx'
import { About } from './pages/about.tsx'
import { Meccool } from './pages/meccool.tsx'
import { Contacts } from './pages/contacts.tsx'
import { Contact } from './pages/contact.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/meccool',
        element: <Meccool />,
      },
      {
        path: '/contact',
        element: <Contacts />,
      },
      {
        path: '/contact/:id',
        element: <Contact />,
      }
    ]
  }
])

const root = createRoot(document.getElementById('root')!)
root.render(<RouterProvider router={router} />)