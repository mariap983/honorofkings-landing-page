import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

/* The selected code renders the App component to the root element. 
The root element is a div with id 'root' in index.html file. */

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
