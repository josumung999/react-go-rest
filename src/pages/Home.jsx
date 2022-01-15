import React, { Fragment, useState, useEffect } from 'react';
import ListItem from '../components/ListItem';
import axios from 'axios';

const Home = () => {
  const [users, setUsers] = useState({ meta: {}, data: [] });
  const [isLoaded, setIsLoaded] = useState(false);
  const [query, setQuery] = useState('');
  const [search, setSearch] = useState('');
  

  useEffect(async () => {
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
  }, [search]);

  return (
    <Fragment>
      <header className="bg-dark py-5">
        <div className="container px-5">
          <div className="row gx-5 justify-content-center">
            <div className="col-lg-6">
              <div className="text-center my-5">
                <h1 className="display-5 fw-bolder text-white mb-2">
                  GO REST
                </h1>
                <p className="lead text-white-50 mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea officia aut sunt itaque minima velit sint ipsum.</p>
                <div className="d-grid gap-3 d-sm-flex justify-content-sm-center">
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
                <div className="col-md-6 col-sm-12">
                  <ListItem 
                    id={item.id}
                    name={item.name}
                    email={item.email}
                    gender={item.gender}
                    status={item.status}
                    key={item.id}
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
