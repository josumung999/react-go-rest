import React, { Fragment, useState, useEffect } from 'react';
import ReactPaginate from 'react-paginate';
import ListItem from '../components/ListItem';
import axios from 'axios';


const Home = () => {
  const [users, setUsers] = useState({ meta: {}, data: [] });
  // const [pageCount, setPageCount] = useState(1);
  const [isLoaded, setIsLoaded] = useState(false);
  // const [currentPage, setCurrentPage] = useState(1);
  

  // base url
  const URL = `https://gorest.co.in/public/v1/users`;

  useEffect(async () => {
    const handleFetchData = async () => {
      const result = await axios.get(
        URL
      );
  
      setUsers(result.data);
      setIsLoaded(true)
    }

    handleFetchData();
  }, []);

  return (
    <Fragment>
      <div className="container py-6">
        <h1 className="h1">GO Rest</h1>
        {isLoaded ? (
          <Fragment>
            <table className="table">
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
          </Fragment>

        ) : (
          <p className="text-bold">Loading ...</p> 
        )}
      </div>
    </Fragment>
  )
}

export default Home
