import { Fragment, useEffect, useState } from 'react';
import axios from 'axios';


const Comments = () => {
  const [comments, setComments] = useState({ meta: {}, data: [] });
  const [isLoaded, setIsLoaded] = useState(false);
   const postId = 2;
  useEffect(() => {
    const getComments = async () => {
      const res = await axios(`https://gorest.co.in/public/v1/posts/${postId}/comments`);
      setComments(res.data);
      setIsLoaded(true);
    };
    getComments();
  }, [postId]);

  return (
    <div>
      {isLoaded ? (
        <Fragment>
          {comments.data.map(item => (
            <div className="card" key={item.id}>
              <div className="card-header">
                Comment by {item.name}
              </div>
              <div className="card-body">
                <blockquote className="blockquote mb-0">
                  <p>
                    {item.body}
                  </p>
                  <footer className="blockquote-footer">
                    {item.email}
                  </footer>
                </blockquote>
              </div>
            </div>
          ))}
        </Fragment>

      ) : (
        <h3 className="h3">Loading comments ...</h3>
      )}
    </div>
  )
}

export default Comments
