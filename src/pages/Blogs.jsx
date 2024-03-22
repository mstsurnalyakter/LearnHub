import { useLoaderData } from "react-router";
import BlogCard from "../components/BlogCard";



const Blogs = () => {
  const blogs = useLoaderData();

  return (
    <section className="container  mx-auto mt-4 mb-12 p-6 lg:px-8 xl:px-10">
      <div className="space-y-6 sm:space-y-12 ">
        <a
          rel="noopener noreferrer"
          href="#"
          className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 card bg-base-100 shadow-xl transition border-2 p-2 hover:scale-105 border-opacity-30 border-primary hover:border-secondary"
        >
          <img
            src={blogs[0]?.cover_image}
            alt=""
            className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 bg-gray-500"
          />
          <div className="p-6 space-y-2 lg:col-span-5">
            <h3 className="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline">
              {blogs[0]?.title}
            </h3>
            <span className="text-xs text-gray-400">
              {new Date(blogs[0]?.published_at).toLocaleDateString()}
            </span>
            <p>{blogs[0]?.description}</p>
          </div>
        </a>

        <div className="grid grid-cols-1 gap-5 lg:gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {blogs.slice(1).map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </div>

        {/* <div className="flex justify-center">
          <button
            type="button"
            className="px-6 py-3 text-sm rounded-md hover:underline  text-gray-400"
          >
            Load more posts...
          </button>
        </div> */}
      </div>
    </section>
  );
}

Blogs.propTypes = {}

export default Blogs