import './App.css'

interface Props{
  bluePlay: string;
  onA: () => void;
  onB: () => void;
  onC: () => void;
  onD: () => void;
  
}

function App(props: Props){
  return( 
  <div className="tp1">
    <div>
      <button onClick={props.onA}>a</button> 
      <button onClick={props.onB}>b</button> 
      <button onClick={props.onC}>c</button> 
      <button onClick={props.onD}>d</button>
      </div>
      <div>

      </div>
  </div>
  )
}

export default App
