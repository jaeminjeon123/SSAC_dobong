

export function FunctionProps2(props){
    const {name,number,price}=props;
    return(
        <div>
            <h5>{name}</h5>
            
            <p>
                {number}개에 {price}원
            </p>
            <div>{props.children}</div>
            <hr />
        </div>
    )
}
export function FunctionProps({ name, number, price }) {
    //   props = {
    //     name: "사과",
    //     price: 1000,
    //     number: 5,
    //   };
    //   console.log(props);
    // const { name, number: count, price } = props;
    return (
      <div>
        <h5>{name}</h5>
        <p>
          {number}개에 {price}원
        </p>
        {/* <img src={img} alt="pooh" /> */}
        <hr />
      </div>
    );
  }
// 컴포넌트이름.defaultProps={정의할 데이터 객체로 표현}
FunctionProps2.defaultProps={
    number:3,
    name:"샤인머스켓",

};