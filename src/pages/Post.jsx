import React, { Fragment, useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function App() {
  const [data, setData] = useState({ meta: {}, data: [] });
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(async () => {
    const result = await axios(
      'https://gorest.co.in/public/v1/posts',
    );

    setData(result.data);
    setIsLoaded(true);
  }, []);

  return (
    <Fragment>
      <div className="container">
        <div className="row">
            {isLoaded ? (
              <Fragment>
                {data.data.map((item) => (
                  <div className="col-lg-3 col-md-6 col-sm-12" key={item.id}>
                    <div className="card text-dark bg-light mb-3">
                      <div className="card-header">User Id: {item.user_id}</div>
                      <div className="card-body">
                        <h5 className="card-title">{item.title}</h5>
                        <Link to={`/posts/${item.id}`} className='btn btn-link'>Read more ...</Link>
                      </div>
                    </div>
                  </div>
                ))}
              </Fragment>
            ) : (
              <h3 className="h3">Loading ...</h3>
            )}
        </div>
      </div>
    </Fragment>
  );
}

export default App;