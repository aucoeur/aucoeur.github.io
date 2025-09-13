import { useEffect, useState } from 'react'

import './Tools.css'

export default function Tools() {
  const [tools, setTools] = useState([])

  useEffect(() => {
    fetch('/data/web-tools.json')
      .then(res => res.json())
      .then(data => {
        const objects = data.tools.map(item => item)
        console.log(objects)
        setTools(objects)
      })
  }, [])

  return (

    <div className="container">
      <h1>Useful Dev Tools</h1>
      <ul>
        {tools.map(({ name, url }) => (
          <li key={name}>
            {name}: <a href={url}>{url}</a>
          </li>
        ))}
      </ul>
    </div>

  )
}
