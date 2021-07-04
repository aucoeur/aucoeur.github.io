import './Main.css'

export default function Main({setTheme, theme}) {
  return (
    <div className="main">
      <h1>Hello World - main</h1>
      <h3>Itme STINE</h3>
      <p>Ahuhuhuhuh hi hello</p>
       <div className='corner'>
            <button onClick={() => setTheme(!theme)}>Toggle Theme </button>
          </div>
    </div>
  )
}
