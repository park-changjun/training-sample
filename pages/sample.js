import React, { useState } from 'react'
import axios from 'axios'

const Sample = () => {
  const [posts, setPosts] = useState([])
  const [form, setForm] = useState({ id: '', title: '', author: '' })
  const [postToUpdate, setPostToUpdate] = useState({
    id: '',
    title: '',
    author: '',
  })
  const [openUpdate, setOpenUpdate] = useState(false)
  const { title, author } = form

  React.useEffect(() => {
    axios({ url: 'http://localhost:8100/api/posts', method: 'GET' }).then(
      ({ data }) => setPosts(data)
    )
  }, [])

  const handleChangeInput = (e) => {
    console.log(e.target.dataset.name)
    setForm((prev) => ({
      ...prev,
      [e.target.dataset.name]: [e.target.value],
    }))
  }

  const handleChangeUpdate = (e) => {
    console.log(e.target.dataset.update);
    setPostToUpdate((prev) => ({
      ...prev,
      [e.target.dataset.update]: [e.target.value]
    }))
  }

  const handleSubmit = () => {
    axios({
      url: 'http://localhost:8100/api/posts',
      method: 'POST',
      data: form,
    }).then(({ data }) => {
      setPosts((prev) => [...prev, data])
      setForm({ id: '', title: '', author: '' })
    })
  }

  const submitUpdate = () => {
    axios.put(`http://localhost:8100/api/posts/${postToUpdate.id}`, postToUpdate)
      .then(({data}) => setPosts((prev) => prev.map(post => post.id === data.id ? data : post)))
      .then(() => {
        alert('수정에 성공했습니다!')
        setTimeout(() => {
          closeUpdate()
        }, 400)
      });
  }

  const closeUpdate = () => {
    setOpenUpdate(false);
    setPostToUpdate({
      id: '',
      title: '',
      author: '',
    })
  }

  return (
    <div style={{ padding: 20 }}>
      <div className="form-wrapper">
        <div style={{ marginRight: 10 }}>title: </div>
        <input
          data-name="title"
          className="title-input"
          type="text"
          value={title}
          onChange={handleChangeInput}
        />
        <div style={{ marginRight: 10, marginLeft: 30 }}>author: </div>
        <input
          data-name="author"
          className="author-input"
          value={author}
          type="text"
          onChange={handleChangeInput}
        />
        <button className="submit-button" onClick={handleSubmit}>
          등록하기
        </button>
      </div>

      {openUpdate && (
        <div className="form-wrapper">
          <div style={{ marginRight: 10 }}>Id: {postToUpdate.id} </div>
          <div style={{ marginRight: 10 }}>title: </div>
          <input
            data-update="title"
            className="title-input"
            type="text"
            value={postToUpdate.title}
            onChange={handleChangeUpdate}
          />
          <div style={{ marginRight: 10, marginLeft: 30 }}>author: </div>
          <input
            data-update="author"
            className="author-input"
            value={postToUpdate.author}
            type="text"
            onChange={handleChangeUpdate}
          />
          <button className="update-button" onClick={submitUpdate}>
            수정하기
          </button>
          <button className="close-button" onClick={closeUpdate}>
            닫기
          </button>
        </div>
      )}

      {posts.map((post) => {
        return (
          <div className="post-wrapper" key={`post_${post.id}`}>
            <div className="id-box">ID: {post.id}</div>
            <div className="title-box">title: {post.title}</div>
            <div className="author-box">author: {post.author}</div>
            <button 
              className="btn"
              onClick={() => {
                setPostToUpdate({...post})
                setOpenUpdate(true);
              }}  
            >
              수정
            </button>
            <button
              className="btn"
              onClick={() => {
                axios
                  .delete(`http://localhost:8100/api/posts/${post.id}`)
                  .then(() =>
                    setPosts((prev) => prev.filter((now) => now.id !== post.id))
                  )
                  .catch((e) => console.log(e))
              }}
            >
              삭제
            </button>
          </div>
        )
      })}
    </div>
  )
}

export default Sample
