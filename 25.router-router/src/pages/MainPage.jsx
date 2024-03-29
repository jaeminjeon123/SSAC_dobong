import { useSearchParams } from "react-router-dom";

export default function MainPage() {
    const [searchParams, setSearchParams] = useSearchParams();
    const mode = searchParams.get('mode'); // URL에서 'mode' 파라미터 값을 가져옴

    // mode가 'dark'일 경우 'dark' 클래스를 추가하고, 그렇지 않으면 빈 문자열을 반환
    const className = mode === 'dark' ? 'dark' : '';

    return (
      <main className={`MainPage ${className}`}>
        <h2>여기는 홈입니다.</h2>
        <button onClick={() => setSearchParams({ mode: "dark" })}>Dark Mode</button>
      </main>
    );
}
