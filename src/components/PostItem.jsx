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
      <div className="container my-6"  style={{ paddingTop: "72px" }}>
        {isLoaded ? (
          <Fragment>
            <h2 className="h2">
              {post.data.title}
            </h2>
            <hr className="my-4" />
            <span className="bg-info mb-4">By user: {post.data.user_id}</span>
            <p className="lead">
              {post.data.body}
            </p>
            <hr className="my-4" />
            <AddComment postId={post.data.id} />
            <hr className="my-4" />
            <h3 className="h3 mb-4">Latest Comments</h3>
            <Comments postId={post.data.id} />
          </Fragment>
        ) : (
          <h3 className="h3">Loading ...</h3>
        )}
      </div>
    </Fragment>
  )
}

export default PostItem
