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
      <div className="container py-6">
        <h1 className="h1">GO Rest</h1>
        <Fragment>
          <input
            type="text"
            value={query}
            onChange={event => setQuery(event.target.value)} 
          />
          <button
            type='button'
            onClick={() => setSearch(query)}
          >
            Search
          </button>
        </Fragment>
        {isLoaded ? (
          <Fragment>
            <div className="table-responsive">
              <table className="table table-hover">
                <thead>
                  <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Gender</th>
                    <th scope="col">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {users.data.map((item) => (
                    <ListItem 
                      id={item.id}
                      name={item.name}
                      email={item.email}
                      gender={item.gender}
                      status={item.status}
                      key={item.id}
                    />
                  ))}
                </tbody>
              </table>
            </div>
          </Fragment>

        ) : (
          <p className="text-bold">Loading ...</p> 
        )}
      </div>
    </Fragment>
  )
}

export default Home
