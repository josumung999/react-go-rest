import { Fragment, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';


const PostItem = () => {
  const location = useLocation();
  const id = location.pathname.split('/')[2];
  const [post, setPost] = useState({ meta: {}, data: {} });
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const getPost = async () => {
        const res = await axios(`https://gorest.co.in/public/v1/posts/${id}`);
        setPost(res.data);
        setIsLoaded(true);
    };
    getPost()
    console.log(post);
  }, [id])

  return (
    <Fragment>
      <div className="container my-6">
        {isLoaded ? (
          <Fragment>
            <h2 className="h2">
              {post.data.title}
            </h2>
            <hr className="my-4" />
            <span className="bg-info">By user: {post.data.user_id}</span>
            <p className="lead">
              {post.data.body}
            </p>
          </Fragment>
        ) : (
          <h3 className="h3">Loading ...</h3>
        )}
      </div>
    </Fragment>
  )
}

export default PostItem
