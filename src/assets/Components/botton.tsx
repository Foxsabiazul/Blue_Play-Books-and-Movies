import './botton.css'

interface Props{
    onClick: ()=> void;
}

function botton(props: Props){
    return(
        <button className="a1" onClick={props.onClick}></button>
    )
}

export default botton