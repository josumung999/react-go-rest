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
      await axios.post(`https://gorest.co.in/public/v1/posts/${postId}/comments`, formData, config);

      window.alert('Comment added successfully');
      window.location = window.location.href;
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <Fragment>
      <h3 className="h3">Add a Comment</h3>
      <p className="my-4">What's on your mind ?</p>
      <form id="contactForm" onSubmit={e => onSubmit(e)}>
        <div className="form-floating">
          <input
            type="text"
            className="form-control"
            name="name"
            placeholder="Name"
            value={name}
            onChange={e => onChange(e)}
            required
          />
          <label htmlFor="name">Name</label>
        </div>
        <div className="form-floating">
          <input
            type="email"
            className="form-control"
            name="email"
            placeholder="Email"
            value={email}
            onChange={e => onChange(e)}
            required
          />
          <label htmlFor="email">Email</label>
        </div>
        <div className="form-floating">
          <textarea
            name="body"
            value={body}
            className="form-control"
            onChange={e => onChange(e)}
            style={{ height: "12rem" }}
            required
            placeholder="Your Comment ..."
          ></textarea>
          <label htmlFor="body">Your Comment ...</label>
        </div>
        <input
          type="submit"
          className="btn btn-primary my-2"
          value ="Add Comment"
        />
      </form>
    </Fragment>
  )
}

export default AddComment
