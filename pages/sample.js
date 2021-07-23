import React from "react";
import axios from "axios";

const API_URL = 'http://localhost:8100/api/posts';

const Sample = () => {
    const [posts, setPosts] = React.useState([])
    const [form, setForm] = React.useState({ id: '', title: '', author: '', content: '' })
    const [isChanged, setIsChanged] = React.useState(false);

    React.useEffect(() => {
        axios({ url: API_URL, method: 'GET' })
            .then(({ data }) => setPosts(data))
    }, [isChanged])

    return (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{ padding: 20, fontSize: '30px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
                <div style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                    <div style={{ marginRight: 10 }}>제목: </div><input type="text" style={{ color: 'black', width: `100px` }} onChange={(e) => { setForm((prev) => ({ ...prev, title: e.target.value })) }} />
                    <div style={{ marginRight: 10 }}>작성자: </div><input type="text" style={{ color: 'black', width: `100px` }} onChange={(e) => { setForm((prev) => ({ ...prev, author: e.target.value })) }} />
                    <div style={{ marginRight: 10 }}>내용: </div><input type="text" style={{ color: 'black', width: `100px` }} onChange={(e) => { setForm((prev) => ({ ...prev, content: e.target.value })) }} />
                    <button onClick={() => {
                        axios({
                            url: API_URL,
                            method: "POST", data: form
                        }).then((isChanged) => setIsChanged(prev => !prev))
                    }} style={{ margin: '10px' }}>글 작성</button>
                </div>
                {posts.map(post => {
                    return (
                        <div key={`post_${post.id}`} style={{ display: "flex", alignItems: "center", flexDirection: "column", border: '1px solid grey', width: "500px", margin: "15px", padding: "10px", borderRadius: '30px' }}>
                            <div style={{ marginRight: 10 }}>{post.author}님이 작성한 {post.id}번글</div>
                            <div style={{ display: 'flex' }}>
                                <div style={{ marginRight: 10 }}></div>
                                <div style={{ marginRight: 10 }}>{post.title}</div>
                            </div>
                            <div style={{ marginRight: 10, fontSize: '30px' }}> {post.content}</div>
                            <div>
                                <button onClick={() => {
                                    const data = {
                                        title: prompt(`수정할 제목을 입력해주세요!`),
                                    };
                                    if (data.title)
                                        axios({
                                            url: `${API_URL}/${post.id}`,
                                            method: "PATCH",
                                            data: data
                                        }).then((isChanged) => setIsChanged(prev => !prev)).then(alert(`${post.id}번 글의 제목이 수정되었습니다.`))
                                }}
                                    style={{ fontSize: '30px', margin: '10px' }}>수정</button>
                                <button onClick={() => {
                                    alert('PUT으로 수정합니다! 전체를 갈아끼워 입력하지 않은 프로퍼티는 날라갑니다.')
                                    const data = {
                                        title: prompt(`수정할 제목을 입력해주세요!`),
                                    };
                                    if (data.title)
                                        axios({
                                            url: `${API_URL}/${post.id}`,
                                            method: "PUT",
                                            data: data
                                        }).then((isChanged) => setIsChanged(prev => !prev)).then(alert(`${post.id}번 글의 제목이 수정되었습니다. 그러나 나머지가 날라갔습니다.`))
                                }}
                                    style={{ fontSize: '30px', margin: '10px' }}>PUT 수정</button>
                                <button onClick={() => {
                                    const deleteConfirm = confirm('정말로 삭제하시겠습니까?');
                                    if (deleteConfirm)
                                        axios({
                                            url: `${API_URL}/${post.id}`,
                                            method: "DELETE"
                                        }).then((isChanged) => setIsChanged(prev => !prev)).then(alert(`${post.id}번 글이 삭제되었습니다.`))
                                }} style={{ fontSize: '30px', margin: '10px' }}>삭제</button>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>)
}

export default Sample;