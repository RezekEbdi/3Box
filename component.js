import css from './component.css'
function Title(props){
    return <div>
    <h1>{
    props.Title}
    </h1>
    </div>
}
function Box(props){
    return <div className={props.MyClass}>
        <p>
            {props.message}
            </p>
            </div>
}
function Show(){
    return <div>
        <Title Title="ATTENDENCE"></Title>
        <div className='main'>
        
            <Box  MyClass="box1"message= "Saturday , sunday ,  "/>
        <br/>
            <Box MyClass="box2" message = "web development using react "/>
            <br/>
            <Box MyClass="box3" message = "CA191"/>
            </div>
        </div>
}
export default Show;