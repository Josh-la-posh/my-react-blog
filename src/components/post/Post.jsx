import "./Post.css";
import { Link } from "react-router-dom";

export const Post = () => {
  return (
    <div className="post">
      <img src="./images/post.png" alt="" className="postImg" />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">Music</span>
          <span className="postCat">Life</span>
        </div>
        <Link className="link" to='/post/1'>
          <span className="postTitle">
            Lorem ipsum dolor sit amet consectetur
          </span>
        </Link>
        <hr />
        <span className="postDate">1 hour ago</span>
      </div>
      <p className="postDesc">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas quas
        sed corrupti voluptatem iusto atque molestias esse rem praesentium? Ipsa
        cupiditate impedit labore sint non nam quos sapiente architecto aliquam.
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas quas
        sed corrupti voluptatem iusto atque molestias esse rem praesentium? Ipsa
        cupiditate impedit labore sint non nam quos sapiente architecto aliquam.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas quas
        sed corrupti voluptatem iusto atque molestias esse rem praesentium? Ipsa
        cupiditate impedit labore sint non nam quos sapiente architecto aliquam.
      </p>
    </div>
  );
};
