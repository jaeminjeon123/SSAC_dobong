import { GTodo } from "../../types/interface"

interface Props<T>{
    todos:GTodo<T>[];
    toggle:(id:number)=>void;
}

export default function GenericItem<T>({ todos, toggle }: Props<T>) {
    return (
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}> {/* key 속성 추가 */}
            <label>
              <input
                type="checkbox"
                checked={todo.done} // 체크 상태 바인딩 추가
                onChange={() => toggle(todo.id)}
              />
              {String(todo.text)} {/* 수정된 부분 */}
            </label>
          </li>
        ))}
      </ul>
    );
  }