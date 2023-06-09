import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { ADD_POST, DELETE_POST } from "../store/postReducer";

import './Home.css'

const Home = () => {
  const dispath = useDispatch();
  const post = useSelector(state => state.post.posts);

  const addPost = () => {
    dispath({
      type: ADD_POST,
      payload: {
        id: Math.ceil(Math.random() * 1000),
        title: inputTitle,
        body: inputBody,
      }
    })
  }

  const deletePost = (postId) => {
    dispath({
      type: DELETE_POST,
      payload: postId,
    })
  }

  const [data, setData] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(resp => resp.json())
      .then(data => {
        setData(data.filter(el => el.id < 11))
      })
  }, []);

  const [inputTitle, setInputTitle] = useState('');
  const [inputBody, setInputBody] = useState('');
  const handleDataInput = () => {
    setInputTitle('');
    setInputBody('');
  }

  const handleDeletePost = (postId) => setData(prevState => prevState.filter(el => el.id !== postId));

  return (
    <>
      <div>
        <input type="text" value={inputTitle} onChange={(event => setInputTitle(event.target.value))} />
        <input type="text" value={inputBody} onChange={(event => setInputBody(event.target.value))} />
        <button onClick={() => { handleDataInput, addPost() }}>Add post</button>
      </div>
      {
        (!post.length) ? (
          <p>Add posts</p>
        ) : (
          post.map(el => (
            <div key={el.id} className="wrapper-posts">
              <p>{`${el.id}.`}</p>
              <h3>{el.title}</h3>
              <p>{el.body}</p>
              <button onClick={() => deletePost(el.id)}>Delete post</button>
            </div>
          ))
        )
      }
      <div>
        {
          (!data.length) ? (
            <p>Loading...</p>
          ) : (
            data.map(el => (
              <div key={el.id} className="wrapper-posts">
                <p>{`${el.id}.`}</p>
                <h3>{el.title}</h3>
                <p>{el.body}</p>
                <button onClick={() => handleDeletePost(el.id)}>Delete post</button>
              </div>))
          )
        }
      </div>
    </>
  )
};
export default Home