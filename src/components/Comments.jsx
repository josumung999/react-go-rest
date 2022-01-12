import { Fragment, useEffect, useState } from 'react';
import axios from 'axios';


const Comments = (props) => {
  const [comments, setComments] = useState({ meta: {}, data: [] });
  const [isLoaded, setIsLoaded] = useState(false);
   const postId = props.postId;
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
            <div className="card mb-2" key={item.id}>
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
        <h6 className="h6">Loading comments ...</h6>
      )}
    </div>
  )
}

export default Comments
