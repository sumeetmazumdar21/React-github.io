import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'


/* const reactElement = {
  type: 'a',
  props: {
      href: 'https://google.com',
      target: '_blank'
  },
  children: 'Click and render Google'
} */
       const reactElement = React.createElement(
          'a',
          {href:"https://google.com", target:"_blank"},
          "Google: Click Here"
       )

createRoot(document.getElementById('root')).render(
  reactElement
)
