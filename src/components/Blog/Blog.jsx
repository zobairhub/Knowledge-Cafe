
import PropTypes from 'prop-types';
import { FaBookmark } from 'react-icons/fa';

const Blog = ({blog , handleAddToBookmark, handleMarkAsRead}) => {

  const {id, title, cover_img, author, author_img, reading_time, posted_date, hashtags} = blog;

  return (
    <div>
      <img className='w-full mb-5 mt-5 rounded-lg' src={cover_img} alt={`cover pic of the title {title}`} />
      <div className='flex justify-between'>
        <div className='flex gap-4'>
          <img className='w-14' src={author_img} alt="" />
          <div>
            <h2 className='font-bold'>{author}</h2>
            <p className='text-xs font-bold'>{posted_date}</p>
          </div>
        </div>
        <div>
          <span>{reading_time} min read </span>
          <button 
            onClick={ () => handleAddToBookmark(blog)}
            className='text-purple-600 text-xl'>
            <FaBookmark />
          </button>
        </div>
      </div>
      <h2 className="text-4xl mt-4"> {title} </h2>
      <p>
        {
          hashtags.map((hash, idx) => <span key={idx}>
          <a href="" className='text-purple-500 font-bold text-sm'>{hash} </a></span>)
        }
      </p>
      <button
      onClick={()=>handleMarkAsRead(id, reading_time)}
        className='text-purple-800 text-lg font-bold underline'>
        Mark as read
      </button>
    </div>
  );
};

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
  handleAddToBookmark: PropTypes.func.isRequired,
  handleMarkAsRead: PropTypes.func.isRequired
}

export default Blog;