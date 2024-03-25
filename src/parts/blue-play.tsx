import "../parts/blue-play.css"
interface Props{
    bluePlay: string;
    onA: () => void;
    onB: () => void;
    onC: () => void;
    onD: () => void;
}


function bluePlay(props: Props){
    return( 
    <div className="tp1">



        <button onClick={props.onA}>a</button> 
        <button onClick={props.onB}>b</button> 
        <button onClick={props.onC}>c</button> 
        <button onClick={props.onD}>d</button>

        

    </div>
    ) 
}

export default bluePlay