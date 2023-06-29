import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import BlogForm from '../../../components/BlogForm'
import { useNavigate } from 'react-router-dom'
import { updateBlog } from '../../../redux/action/blogAction'

const EditBlog = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  
    const blogdata = useSelector((state) => state);
    const linkpathcount = window.location.pathname.length - 36;
    const link = window.location.pathname.slice(linkpathcount, 9999);
    const filterblog = blogdata.find((p) => p.id === link);

  return (
    <div>
      <h1>Edit Blog</h1>

      <BlogForm
        editblog={filterblog}
        onFormSubmited={(item) => {
          dispatch(updateBlog(filterblog.id, item));
                          navigate("/admin/dashboard");

        }}
      />
    </div>
  );
}



export default EditBlog