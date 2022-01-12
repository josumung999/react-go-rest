import axios from "axios";
import { Fragment, useState } from "react";

const CreateUser = (props) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    gender: '',
    status: '',
  })

  const { name, email, gender, status } = formData;

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
      const res = await axios.post(`https://gorest.co.in/public/v1/users`, formData, config);

      window.alert('Account Created Successfully');
      window.location.href = 'http://localhost:3000/'
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <Fragment>
      <div className="container">
        <h3 className="h3">Create User Account</h3>
        <p className="my-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi sequi exercitationem fugiat dolore ex obcaecati. Molestias voluptatibus amet vero fugit! Aut aliquid tempora natus sint commodi laudantium perferendis necessitatibus tempore</p>
        <form onSubmit={e => onSubmit(e)}>
          <div className="form-group mb-2">
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
          <div className="form-group mb-2">
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
          <div className="row g-3 mb-4">
            <div className="col">
              <select
                name="gender"
                value={gender}
                onChange={e => onChange(e)}
                className="form-select"
                required
              >
                <option value="0">Select your gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>
            <div className="col">
            <select
                name="status"
                value={status}
                onChange={e => onChange(e)}
                className="form-select"
                required
              >
                <option value="0">Select your Status</option>
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
              </select>
            </div>
          </div>
          <input
            type="submit"
            className="btn btn-primary"
            value ="Create User Account"
          />
        </form>
      </div>
    </Fragment>
  )
}

export default CreateUser

