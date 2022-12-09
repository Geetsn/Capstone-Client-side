import '../../components/Btn/Btn.scss';

function Btn (props){
  
  return <button type={props.type} onClick = {props.onClick} className={props.className}>{props.text}</button>;
}

export default Btn;