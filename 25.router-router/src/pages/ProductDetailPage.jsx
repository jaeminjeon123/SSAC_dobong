import { useNavigate, useParams } from "react-router-dom"

export default function ProductDetailPage({products}){
    // const params=useParams();
    const {productId}=useParams();
    console.log(productId);

    const navigate=useNavigate();

    //filter: 배열을 리턴,
    //paramas의 productId와 product.id가 같은 것 찾기
    const [targetProduct]=products.filter(
        (product)=>product.id===Number(productId));

    console.log(targetProduct);//{postId,id,name,body(상세설명),email(판매자)}
       
    if(!targetProduct){
        return <main>존재하지 않는 상품입니다</main>
    }
    return(
        

        <main>
        <h1>상세페이지</h1>
        <button onClick={()=>navigate("/")}>홈으로 이동하기</button>
        <button onClick={()=>navigate(-1)}>뒤로 가기</button>
        <ul>
            <li>판매 번호{targetProduct.id}</li>
            <li>상품명{targetProduct.name}</li>
            <li>판매자{targetProduct.email}</li>
            <li>상세설명{targetProduct.body}</li>
        </ul>
        </main>
    )
}