import styles from '../styles/home.module.css';
import propTypes from 'prop-types';
import Loader from '../component/Loader'
import { useState,useEffect } from 'react';
import { getPosts } from '../api';
import { Link } from 'react-router-dom';

 export const Home = () => {
  const [posts,setPosts] = useState([]);
  const [loading,setLoadiing] = useState(true);
    useEffect(() => {
      const fetchPosts = async () => {
        const response = await getPosts();
        console.log('response', response);
        if(response.success){
        setPosts(response.data.posts)
        }
        setLoadiing(false);
      };
  
      fetchPosts();
    }, []);
    if(loading)
    {
      return <Loader />
    }
    
  return (
    <div className={styles.postsList}>
      {posts.map((post) => (
        <div className={styles.postWrapper} key={`post-${post._id}`}>
          <div className={styles.postHeader}>
            <div className={styles.postAvatar}>
              <img
                src="https://cdn.dribbble.com/users/2199928/screenshots/11532918/media/5a7273b592ea860e6d0ff2931ecab4f3.png?compress=1&resize=400x300"
                alt="user-pic"
              />
              <div>
                <Link to={`/user/${post.user._id}`}
                  state={{user:post.user}}
                  className={styles.postAuthor}>
                  {post.user.name}
                 </Link>
                <span className={styles.postTime}>a minute ago</span>
              </div>
            </div>
            <div className={styles.postContent}>{post.conent}</div>

            <div className={styles.postActions}>
              <div className={styles.postLike}>
                <img
                  src="https://png.pngtree.com/png-clipart/20190516/original/pngtree-facebook-like-icon-png-image_3584862.jpg"
                  alt="likes-icon"
                />
                <span>5</span>
              </div>

              <div className={styles.postCommentsIcon}>
                <img
                  src="https://icon-library.com/images/comment-icon-png/comment-icon-png-7.jpg"
                  alt="comments-icon"
                />
                <span>2</span>
              </div>
            </div>
            <div className={styles.postCommentBox}>
              <input placeholder="Start typing a comment" />
            </div>

            <div className={styles.postCommentsList}>
              <div className={styles.postCommentsItem}>
                <div className={styles.postCommentHeader}>
                  <span className={styles.postCommentAuthor}>Bill</span>
                  <span className={styles.postCommentTime}>a minute ago</span>
                  <span className={styles.postCommentLikes}>22</span>
                </div>

                <div className={styles.postCommentContent}>Random comment</div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
Home.propTypes={
  posts:propTypes.array.isRequired
}
// export default Home;





