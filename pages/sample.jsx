import React from "react";
import axios from "axios";

const Sample = () => {
  const [posts, setPosts] = React.useState([])
  const [form, setForm] = React.useState({ id: '', title: '', author: '' })

  React.useEffect(() => {
    axios({ url: 'http://localhost:8100/api/posts', method: 'GET'})
    .then(({ data }) => setPosts(data))
  }, [])

  return (<div style={{ padding: 20 }}>
    <div style={{ display: "flex", flexDirection: "row", alignItems: "center", border: '1px solid black' }}>
      {/* <div style={{ marginRight: 10 }}>ID: </div><input type="text" style={{ color: 'black', width: 80 }} onChange={(e) => { setForm((prev) => ({ ...prev, id: e.target.value })) }} /> */}
      <div style={{ marginRight: 10 }}>title: </div><input type="text" style={{ color: 'black', width: 80 }} onChange={(e) => { setForm((prev) => ({ ...prev, title: e.target.value })) }} />
      <div style={{ marginRight: 10 }}>author: </div><input type="text" style={{ color: 'black', width: 80 }} onChange={(e) => { setForm((prev) => ({ ...prev, author: e.target.value })) }} />
      <button onClick={() => {
        axios({ url: 'http://localhost:8100/api/posts', method: "POST", data: form })
        .then(({ data }) => setPosts(prev => [...prev, data ]))
      }}>submit</button>
    </div>
    {posts.map(post => {
      return (
        <div key={`post_${post.id}`} style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
          {/* <div style={{ marginRight: 10, border: '1px solid black' }}>ID: {post.id}</div> */}
          <div style={{ marginRight: 10, border: '1px solid black' }}>title: {post.title}</div>
          <div style={{ marginRight: 10, border: '1px solid black' }}>author: {post.author}</div>
        </div>
      )
    })}
  </div>)
}

export default Sample;
