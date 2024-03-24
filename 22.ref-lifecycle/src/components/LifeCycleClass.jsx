
import { Component } from "react";


class MyComponent extends Component {
    //마운트 되었을 떄
componentDidMount(){
    console.log('class component,mount됨!!');
}
    //update 되었을 때
componentDidUpdate(){
    console.log('class component,update됨!!');
}
    //upmount 예정일 떼
componentWillUnmount(){
    console.log('class component,unmount됨!!');
}


    render(){
        return <p> my Component {this.props.number}</p>
    }
}

class LifeCycleClass extends  Component{
    state={
        number:0,
        visible:true,

    };
    changeNumberState=()=>{
        this.setState({number:this.state})
    }
    chnageVisibleState=()=>{  this.setState({visible:!this.state})}
    render(){
        return(
        <>
        <button>number+1</button>
        <button>on/off</button>
        {this.state.visible&& <MyComponent number={this.state.number}/>}</>
        );
    }
}

export default LifeCycleClass;