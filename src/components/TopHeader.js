import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const TopHeader = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

  return (
    <div className="top">
      <div className="container d-flex topHeader justify-content-between align-items-center">
        <h3 className="logo"><Link to="/">Logo</Link></h3>
        <div className="navigator">
            <button><Link to="/photo">Photo</Link></button>
            <button><Link to="/video">Video</Link></button>
            <button><Link to="/blog">Blog</Link></button>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
            <input placeholder="Search" {...register("search", { required: false })} />
            {/* {errors.exampleRequired && <span>This field is required</span>} */}
            <button type="submit"><i className="fa-solid fa-magnifying-glass"></i></button>
        </form>
      </div>
    </div>
  );
};

export default TopHeader;
