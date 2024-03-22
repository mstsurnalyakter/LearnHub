
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import placeholderImg from '../assets/not_fund.jpg'

const BlogCard = ({ blog }) => {
    const { cover_image, title, description, published_at } = blog;
  return (
    <div className="flex relative">
      <Link
        to={`/blog/${blog.id}`}
        className="group hover:no-underline focus:no-underline card bg-base-100 shadow-xl transition border-2 p-2 hover:scale-105 border-opacity-30 border-primary hover:border-secondary "
      >
        <img
          role="presentation"
          className="object-cover w-full rounded h-44 bg-gray-500"
          src={cover_image || placeholderImg}
        />
        <div className="p-6 space-y-2">
          <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
            {title}
          </h3>
          <span className="text-xs text-gray-400">
            {new Date(published_at).toLocaleDateString()}
          </span>
          <p>{description}</p>
        </div>
      </Link>
    </div>
  );
};

BlogCard.propTypes = {
    blog:PropTypes.object.isRequired
}

export default BlogCard