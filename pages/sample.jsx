import React from "react";
import axios from "axios";
import { read } from "gray-matter";

const Sample = () => {
  const [posts, setPosts] = React.useState([]);
  const [form, setForm] = React.useState({ id: "", title: "", author: "" });

  React.useEffect(() => {
    axios({ url: "http://localhost:8100/api/posts", method: "GET" }).then(
      ({ data }) => setPosts(data)
    );
  }, []);

  return (
    <div style={{ margin: 20 }}>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          borderBottom: "1px solid black",
          padding: 10,
          marginBottom: 20,
        }}
      >
        {/* <div style={{ marginRight: 10 }}>ID: </div><input type="text" style={{ color: 'black', width: 80 }} onChange={(e) => { setForm((prev) => ({ ...prev, id: e.target.value })) }} /> */}
        <div style={{ marginRight: 10 }}>제목 :</div>
        <input
          type="text"
          style={{ color: "black", width: 150 }}
          onChange={(e) => {
            setForm((prev) => ({ ...prev, title: e.target.value }));
          }}
        />
        <div style={{ marginRight: 10, paddingLeft: 10 }}> 작성자 :</div>
        <input
          type="text"
          style={{ color: "black", width: 80 }}
          onChange={(e) => {
            setForm((prev) => ({ ...prev, author: e.target.value }));
          }}
        />
        <button
          onClick={() => {
            axios({
              url: "http://localhost:8100/api/posts",
              method: "POST",
              data: form,
            }).then(({ data }) => setPosts((prev) => [...prev, data]));
          }}
          style={{ marginLeft: 10, paddingLeft: 5, paddingRight: 5 }}
        >
          등록
        </button>
      </div>

      {posts.map((post) => {
        return (
          <div
            key={`post_${post.id}`}
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              marginBottom: 5,
            }}
          >
            <div
              style={{
                marginRight: 10,
                border: "1px solid black",
                paddingLeft: 10,
                paddingRight: 10,
                fontSize: 14,
              }}
            >
              제목 : {post.title}
            </div>
            <div
              style={{
                marginRight: 10,
                border: "1px solid black",
                paddingLeft: 10,
                paddingRight: 10,
                fontSize: 14,
              }}
            >
              작성자 : {post.author}
            </div>

            <button
              onClick={() => {
                const data = {
                    title : prompt('수정내용을 입력하세요'),
                };
                if (data.title)
                  axios
                    .patch(`http://localhost:8100/api/posts/${post.id}`,data)
                    .then(({data}) => setPosts((prev) => prev.map(post => post.id === data.id ? data : post)));
              }}
              style={{
                paddingLeft: 5,
                paddingRight: 5,
                fontSize: 14,
                marginRight: 5,
              }}
            >
              수정
            </button>
            <button
              onClick={() => {
                axios
                  .delete(`http://localhost:8100/api/posts/${post.id}`)
                  .then(() =>
                    setPosts((prev) =>
                      prev.filter((item) => post.id !== item.id)
                    )
                  )
                  .catch((e) => {
                    console.log(e);
                  });
              }}
              style={{ paddingLeft: 5, paddingRight: 5, fontSize: 14 }}
            >
              삭제
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Sample;
