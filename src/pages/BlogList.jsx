import {  Row } from "react-bootstrap";
import SingleCard from "../components/SingleCard";
import { useSelector } from "react-redux";


const BlogList = () => {

  const blog = useSelector(state => state);
  return (
    <div>
      
      <Row className="g-5 py-2 ">
        {blog.slice(0, 3).map((i) => (
          <SingleCard photo={i.photo} title={i.title} key={i.id} id={i.id} col={4}/>
        ))}
        <h1 className="text-center my-5"> Last Blogs</h1>
        {blog.slice(2, 6).map((i) => (
          <SingleCard
            photo={i.photo}
            title={i.title}
            key={i.id}
            id={i.id}
            col={6}
          />
        ))}
      </Row>
    
    </div>
  );
};

export default BlogList;
