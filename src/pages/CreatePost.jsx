import axios from "axios";
import { Fragment, useState } from "react";

const CreatePost = (props) => {
  const [formData, setFormData] = useState({
    user_id: 0,
    title: '',
    body: ''
  })
  const background = "https://github.com/StartBootstrap/startbootstrap-clean-blog/blob/master/dist/assets/img/post-bg.jpg?raw=true"

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
      <header className="masthead" style={{ backgroundImage: `url(${background})` }} >
        <div className="container position-relative px-4 px-lg-5">
          <div className="row gx-4 gx-lg-5 justify-content-center">
            <div className="col-md-10 col-lg-8 col-xl-7">
              <div className="site-heading">
                <h1>New Post</h1>
                <span className="subheading">What's on your mind ?</span>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className="container my-4">
        <div className="row gx-4 gx-lg-5 justify-content-center">
          <div className="col-md-10 col-lg-8 col-xl-7">
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
        </div>
      </div>
    </Fragment>
  )
}

export default CreatePost;

