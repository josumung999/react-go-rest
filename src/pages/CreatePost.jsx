import axios from "axios";
import { Fragment, useState } from "react";

const CreatePost = (props) => {
  const [formData, setFormData] = useState({
    user_id: 0,
    title: '',
    body: ''
  })

  const {user_id, title, body } = formData;

  const config = {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer 4ccfa9af69e6cd4f7b54aa9eddb85ea775bc42c750dc726ea262ed169026c415`
    }
  }

  const onChange = e => setFormData({ ...formData, [e.target.name] : e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    try {
      const res = await axios.post(`https://gorest.co.in/public/v1/users/${user_id}/posts`, formData, config);

      window.alert('Post Created Successfully');
      window.location.href = `http://localhost:3000/posts/${res.data.data.id}`
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <Fragment>
      <div className="container" style={{ paddingTop: "72px" }}>
        <h3 className="h3">Create New Post</h3>
        <p className="my-4 lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi sequi exercitationem fugiat dolore ex obcaecati. Molestias voluptatibus amet vero fugit! Aut aliquid tempora natus sint commodi laudantium perferendis necessitatibus tempore</p>
        <form onSubmit={e => onSubmit(e)}>
          <div className="form-group mb-2">
          <label htmlFor="user_id" className="text-secondary">Post Author ID</label>
            <input
              type="number"
              className="form-control"
              name="user_id"
              placeholder="Your user_id"
              value={user_id}
              onChange={e => onChange(e)}
              required
            />
          </div>
          <div className="form-group mb-2">
            <label htmlFor="title" className="text-secondary">Post Title</label>
            <input
              type="text"
              className="form-control"
              name="title"
              value={title}
              onChange={e => onChange(e)}
              placeholder="Post Title"
              required
            />
          </div>
          <div className="form-group my-2">
            <label htmlFor="floatingTextarea" className="text-secondary">Share your thoughts !</label>
            <textarea
              name="body"
              value={body}
              className="form-control"
              onChange={e => onChange(e)}
              style={{ height: "150px" }}
              required
            ></textarea>
          </div>
          <input
            type="submit"
            className="btn btn-success"
            value ="Create New Post"
          />
        </form>
      </div>
    </Fragment>
  )
}

export default CreatePost;

