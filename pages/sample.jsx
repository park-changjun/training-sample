import React from 'react';
import axios from 'axios';

const Sample = () => {
  const [posts, setPosts] = React.useState([]);
  const [form, setForm] = React.useState({ id: '', title: '', author: '' });
  const [update, setUpdate] = React.useState({ id: '', title: '', author: '' });
  const { id, title, author } = update;
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    axios({ url: 'http://localhost:8100/api/posts', method: 'GET' }).then(
      ({ data }) => setPosts(data)
    );
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          border: '1px solid black',
        }}
      >
        {/* <div style={{ marginRight: 10 }}>ID: </div>
        <input
          type='text'
          style={{ color: 'black', width: 80 }}
          value={id}
          onChange={(e) => {
            setForm((prev) => ({ ...prev, id: e.target.value }));
            setUpdate((prev) => ({ ...prev, id: e.target.value }));
          }}
        /> */}
        <div style={{ marginRight: 10 }}>title: </div>
        <input
          type='text'
          style={{ color: 'black', width: 80 }}
          value={title}
          onChange={(e) => {
            setForm((prev) => ({ ...prev, title: e.target.value }));
            setUpdate((prev) => ({ ...prev, title: e.target.value }));
          }}
        />
        <div style={{ marginRight: 10 }}>author: </div>
        <input
          type='text'
          style={{ color: 'black', width: 80 }}
          value={author}
          onChange={(e) => {
            setForm((prev) => ({ ...prev, author: e.target.value }));
            setUpdate((prev) => ({ ...prev, author: e.target.value }));
          }}
        />
        <button
          onClick={() => {
            if (open === false) {
              axios({
                url: 'http://localhost:8100/api/posts',
                method: 'POST',
                data: form,
              }).then(({ data }) => setPosts((prev) => [...prev, data]));
            }
            // 수정 후 submit
            else {
              axios({
                url: `http://localhost:8100/api/posts/${id}`,
                method: 'PUT',
                data: form,
              }).then(({ data }) =>
                setPosts((prev) =>
                  prev.map((post) => (post.id === id ? data : post))
                )
              );

              setUpdate((prev) => ({
                ...prev,
                id: '',
                author: '',
                title: '',
              }));
              setOpen(false);
            }
          }}
        >
          {open ? '수정완료' : '제출'}
        </button>
      </div>

      {posts.map((post) => {
        return (
          <div
            key={`post_${post.id}`}
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
            }}
          >
            <div style={{ marginRight: 10, border: '1px solid black' }}>
              ID: {post.id}
            </div>
            <div style={{ marginRight: 10, border: '1px solid black' }}>
              title: {post.title}
            </div>
            <div style={{ marginRight: 10, border: '1px solid black' }}>
              author: {post.author}
            </div>
            <button
              onClick={() => {
                setUpdate((prev) => ({
                  ...prev,
                  id: post.id,
                  author: post.author,
                  title: post.title,
                }));
                setOpen(true);
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
