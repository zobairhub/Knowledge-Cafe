import PropTypes from 'prop-types';
import Bookmark from '../Bookmark/Bookmark';

const Bookmarks = ({bookmarks,readingTime}) => {
  
  return (
    <div className='md:w-1/3 bg-gray-300 ml-4 mt-2 pt-4 rounded-xl'>
      <div>
        <h3 className='text-3xl text-center border-b-2'>Reading time : {readingTime}</h3>
      </div>
      <h2 className='font-bold text-center '>Bookmarks : {bookmarks.length}</h2>
      {
        bookmarks.map(bookmark => <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>)
      }
    </div>
  );
};

Bookmarks.propTypes = {
  bookmarks: PropTypes.array,
  readingTime: PropTypes.number
}
export default Bookmarks;