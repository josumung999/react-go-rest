import React, { Fragment, useState, useEffect } from 'react';
import ListItem from '../components/ListItem';
import axios from 'axios';

const Home = () => {
  const [users, setUsers] = useState({ meta: {}, data: [] });
  const [isLoaded, setIsLoaded] = useState(false);
  const [query, setQuery] = useState('');
  const [search, setSearch] = useState('');
  const background = "https://github.com/StartBootstrap/startbootstrap-clean-blog/blob/master/dist/assets/img/home-bg.jpg?raw=true"

  useEffect(() => {
    const handleFetchData = async () => {
      let result = null;
      if (!query) {
        result = await axios.get('https://gorest.co.in/public/v1/users');
      } else {
        result = await axios.get(`https://gorest.co.in/public/v1/users?name=${search}`)
      }
  
      setUsers(result.data);
      setIsLoaded(true);
    }

    handleFetchData();
  }, [query, search]);

  return (
    <Fragment>
      <header className="masthead" style={{ backgroundImage: `url(${background})` }} >
        <div className="container position-relative px-4 px-lg-5">
          <div className="row gx-4 gx-lg-5 justify-content-center">
            <div className="col-md-10 col-lg-8 col-xl-7">
              <div className="site-heading">
                <h1>GO REST</h1>
                <span className="subheading">Lorem ipsum dolor sit amet consectetur.</span>
              </div>
              <div className="d-grid gap-3 d-sm-flex my-3 justify-content-sm-center">
                  <div className="input-group mb-3">
                    <input
                      type="text"
                      value={query}
                      className="form-control"
                      onChange={event => setQuery(event.target.value)}
                      placeholder="Type user name ..."
                    />
                    <button
                      type='button'
                      onClick={() => setSearch(query)}
                      className="btn btn-secondary text-white"
                    >
                      Search
                    </button>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </header>
      
      <div className="container py-4">
        <div className="row">
          <div className="col">
            <h1 className="display-4 fw-bolder">Popular Profiles</h1>
          </div>
        </div>
        {isLoaded ? (
          <div className="row my-4">
            <Fragment>
                {users.data.map((item) => (
                <div className="col-md-6 col-sm-12" key={item.id}>
                  <ListItem 
                    id={item.id}
                    name={item.name}
                    email={item.email}
                    gender={item.gender}
                    status={item.status}
                  />
                </div>
                ))}
            </Fragment>
          </div>

        ) : (
          <p className="text-bold">Loading ...</p> 
        )}
      </div>
    </Fragment>
  )
}

export default Home
