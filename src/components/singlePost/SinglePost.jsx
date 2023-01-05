import "./SinglePost.css";

export const SinglePost = () => {
  return (
    <div className="singlepost">
      <div className="singlePostWrapper">
        <img src="./../images/single-page.jpeg" alt="" className="singlePostImg" />
        <h1 className="singlePostTitle">
          Lorem ipsum dolor sit amet consectetur.
          <div className="singlePostEdit">
            <i className="singlePostIcon fa-regular fa-pen-to-square"></i>
            <i className="singlePostIcon fa-solid fa-trash-can"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Autor: <b>Joshua</b>
          </span>
          <span className="singlePostDate">1 hour ago</span>
        </div>
        <p className="singlePostDesc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis ea
          cum dolorem unde commodi quo odio accusantium facere totam dolor,
          quasi optio, iste praesentium aliquid dicta laborum dolores iusto
          suscipit? Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Sequi sed praesentium modi recusandae possimus voluptatibus atque
          numquam. Asperiores sed, harum voluptatibus atque incidunt cupiditate?
          Quos beatae a quae illum aut! Lorem ipsum dolor sit amet consectetur,
          adipisicing elit. Minus quisquam nam consectetur explicabo aperiam
          quaerat dolore repellendus eligendi perspiciatis nesciunt sunt
          accusamus in itaque quidem provident cum, labore eos expedita!
        </p>
      </div>
    </div>
  );
};
