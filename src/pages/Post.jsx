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
      <header className="masthead" style={{ backgroundImage: `url(https://raw.githubusercontent.com/StartBootstrap/startbootstrap-clean-blog/master/dist/assets/img/home-bg.jpg')` }} >
        <div className="container position-relative px-4 px-lg-5">
          <div className="row gx-4 gx-lg-5 justify-content-center">
            <div className="col-md-10 col-lg-8 col-xl-7">
              <div className="site-heading">
                <h1>Go Blog</h1>
                <span className="subheading">Get the latest users posts</span>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className="container px-4 px-lg-5">
        <div className="row gx-4 gx-lg-5 justify-content-center">
            {isLoaded ? (
              <Fragment>
                {data.data.map((item) => (
                  <div className="col-md-10 col-lg-8 col-xl-7">
                    <div className="post-review">
                      <Link to={`/posts/${item.id}`}>
                        <h2 className="post-title">
                          {item.title}
                        </h2>
                      </Link>
                      <p className="post-meta">
                        Posted By <Link to={`/users/${item.user_id}`}>User {item.user_id}</Link>
                      </p>
                    </div>
                    <hr className="my-4"/>
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