export default function Btn(props){
    return(
      <>
        <button onClick={props.events}> {props.name}</button>
      </>
    );
  }