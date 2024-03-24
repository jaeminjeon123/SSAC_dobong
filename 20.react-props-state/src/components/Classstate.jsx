import { Component } from "react";

class Classstate extends Component{
//     constructor(props){
// // super(props);
// // this.state={
// //     banana:"바나나",

// // };
//     }
state={
    banana:"바나나"
};
    
    render(){
        return(
            <div>
            <div
                style={{
                    color:"yellow",
                    fontWeight:"700",
                    backgroundColor:"black",

                }}
                
            >{this.state.banana}</div>
                <button onClick={()=>{
                    this.setState({banana:"banana"});
                }}>영어로 변경</button>
            </div>
        )
    }
}
export default Classstate;