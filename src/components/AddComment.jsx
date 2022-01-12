import axios from "axios";
import { Fragment, useState } from "react";

const AddComment = (props) => {
  const postId = props.postId;
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    body: ''
  })

  const { name, email, body } = formData;

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
      const res = await axios.post(`https://gorest.co.in/public/v1/posts/${postId}/comments`, formData, config);

      window.alert('Comment added successfully');
      window.location.href = window.location.href;
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <Fragment>
      <h3 className="h3">Add a Comment</h3>
      <p className="my-4">What's on your mind ?</p>
      <form onSubmit={e => onSubmit(e)}>
        <div className="row g-3">
          <div className="col">
            <input
              type="text"
              className="form-control"
              name="name"
              placeholder="Your Name"
              value={name}
              onChange={e => onChange(e)}
              required
            />
          </div>
          <div className="col">
            <input
              type="email"
              className="form-control"
              name="email"
              value={email}
              onChange={e => onChange(e)}
              placeholder="Your email adress"
              required
            />
          </div>
        </div>
        <div className="form-group my-2">
          <label htmlFor="floatingTextarea">Your comment</label>
          <textarea
            name="body"
            value={body}
            className="form-control"
            onChange={e => onChange(e)}
            style={{ height: "100px" }}
            required
          ></textarea>
        </div>
        <input
          type="submit"
          className="btn btn-primary"
          value ="Add Comment"
        />
      </form>
    </Fragment>
  )
}

export default AddComment
