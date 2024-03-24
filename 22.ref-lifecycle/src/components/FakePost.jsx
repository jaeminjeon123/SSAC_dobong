import React, { useState, useEffect } from 'react';

// 가짜 게시물 데이터
const fakePosts = [
    {
      id: 1,
      title:
        "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
      body: "quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto",
    },
    {
      id: 2,
      title: "qui est esse",
      body: "est rerum tempore vitae sequi sint nihil reprehenderit dolor beatae ea dolores neque fugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis qui aperiam non debitis possimus qui neque nisi nulla",
    },
    {
      id: 3,
      title: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
      body: "et iusto sed quo iure voluptatem occaecati omnis eligendi aut ad voluptatem doloribus vel accusantium quis pariatur molestiae porro eius odio et labore et velit aut",
    },
    {
      id: 4,
      title: "eum et est occaecati",
      body: "ullam et saepe reiciendis voluptatem adipisci sit amet autem assumenda provident rerum culpa quis hic commodi nesciunt rem tenetur doloremque ipsam iure quis sunt voluptatem rerum illo velit",
    },
    {
      id: 5,
      title: "nesciunt quas odio",
      body: "repudiandae veniam quaerat sunt sed alias aut fugiat sit autem sed est voluptatem omnis possimus esse voluptatibus quisest aut tenetur dolor neque",
    },
    {
      id: 6,
      title: "dolorem eum magni eos aperiam quia",
      body: "ut aspernatur corporis harum nihil quis provident sequi mollitia nobis aliquid molestiae perspiciatis et ea nemo ab reprehenderit accusantium quas voluptate dolores velit et doloremque molestiae",
    },
    {
      id: 7,
      title: "magnam facilis autem",
      body: "dolore placeat quibusdam ea quo vitae magni quis enim qui quis quo nemo aut saepe quidem repellat excepturi ut quia sunt ut sequi eos ea sed quas",
    },
    {
      id: 8,
      title: "dolorem dolore est ipsam",
      body: "dignissimos aperiam dolorem qui eum facilis quibusdam animi sint suscipit qui sint possimus cum quaerat magni maiores excepturi ipsam ut commodi dolor voluptatum modi aut vitae",
    },
    {
      id: 9,
      title: "nesciunt iure omnis dolorem tempora et accusantium",
      body: "consectetur animi nesciunt iure dolore enim quia ad veniam autem ut quam aut nobis et est aut quod aut provident voluptas autem voluptas",
    },
    {
      id: 10,
      title: "optio molestias id quia eum",
      body: "quo et expedita modi cum officia vel magni doloribus qui repudiandae vero nisi sit quos veniam quod sed accusamus veritatis error",
    },
  ];

function FakePost() {
  // posts 상태와 setPosts 상태 설정 함수를 useState로 초기화합니다.
  const [posts, setPosts] = useState([]);

  // 컴포넌트가 마운트될 때 fakePosts 데이터를 posts 상태로 저장합니다.
  useEffect(() => {
    setTimeout(() => {
      setPosts(fakePosts);
    }, 2000); // 2초 후에 실행
  }, []); // 의존성 배열이 비어있으므로, 이 효과는 컴포넌트가 마운트될 때 한 번만 실행됩니다.

  return (
    <div>
      {posts.length === 0 ? (
        <p>Loading...</p> // posts 길이가 0이면 로딩 메세지를 보여줍니다.
      ) : (
        <ul>
          {posts.map((post) => (
            <li key={post.id}>
              <h2>{post.title}</h2>
              <p>{post.body}</p>
            </li>
          ))}
        </ul> // posts 길이가 0보다 크면 게시물 목록을 보여줍니다.
      )}
    </div>
  );
}

export default FakePost;
