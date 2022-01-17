import { Fragment, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import Comments from './Comments';
import AddComment from './AddComment';


const PostItem = () => {
  const location = useLocation();
  const id = location.pathname.split('/')[2];
  const [post, setPost] = useState({ meta: {}, data: {} });
  const [isLoaded, setIsLoaded] = useState(false);
  const background = "https://github.com/StartBootstrap/startbootstrap-clean-blog/blob/master/dist/assets/img/post-bg.jpg?raw=true"

  useEffect(() => {
    const getPost = async () => {
        const res = await axios(`https://gorest.co.in/public/v1/posts/${id}`);
        setPost(res.data);
        setIsLoaded(true);
    };
    getPost()
  }, [id])
  return (
    <Fragment>
        {isLoaded ? (
          <Fragment>
            <header 
              className="masthead"
              style={{ backgroundImage: `url(${background})` }}  
            >
              <div className="container position-relative px-4 px-lg-5">
                <div className="row gx-4 gx-lg-5 justify-content-center">
                  <div className="col-md-10 col-lg-8 col-xl-7">
                    <div className="post-heading">
                      <h1>
                        {post.data.title}
                      </h1>
                    </div>
                    <span className="meta text-white">
                      Posted by User:  {post.data.user_id}
                    </span>
                  </div>
                </div>
              </div>
            </header>
            <article className="container mb-4">
              <div className="row gx-4 gx-lg-5 justify-content-center">
                <div className="col-md-10 col-lg-8 col-xl-7">
                  <p>
                    {post.data.body}
                  </p>
                </div>
              </div>
            </article>

            <div className="container my-4">
              <div className="row gx-4 gx-lg-5 justify-content-center">
                <div className="col-md-10 col-lg-8 col-xl-7">
                  <hr className="my-4" />
                  <AddComment postId={post.data.id} />
                  <hr className="my-4" />
                  <h3 className="h3 mb-4">Latest Comments</h3>
                  <Comments postId={post.data.id} />
                </div>
              </div>
            </div>
          </Fragment>
          ) : (
            <h3 className="h3" style={{ paddingTop: "4rem" }}>Loading ...</h3>
        )}
    </Fragment>
  )
}

export default PostItem
