import React from 'react';
import { FaStar, FaEye } from "react-icons/fa";
import { BiShareAlt } from 'react-icons/bi';
import { BsBookmark } from 'react-icons/bs';

const NewsCard = ({ news }) => {
  const { title, rating, total_view, author, thumbnail_url, details, others } = news;

  return (
    <div className="card w-full bg-base-100 shadow-md rounded-xl hover:shadow-xl transition-all duration-300">
      {/* Author Section */}
      <div className="flex justify-between items-center px-5 pt-5 bg-base-300 ">
        <div className='flex items-center gap-3 '>
            <div className="avatar">
          <div className="w-10 rounded-full">
            <img src={author.img} alt={author.name} />
          </div>
        </div>
        <div>
          <h3 className="text-sm font-semibold">{author.name}</h3>
          <p className="text-xs text-gray-500">
            {new Date(author.published_date).toLocaleDateString()}
          </p>
        </div>
        </div>
        <div className='flex gap-5'>
            <BsBookmark/>
            <BiShareAlt/>
        </div>
      </div>

      {/* Title */}
      <div className="px-5 mt-3">
        <h2 className="card-title text-base leading-snug">{title}</h2>
        {others.is_trending && (
          <span className="badge badge-secondary badge-sm ml-2">Trending</span>
        )}
      </div>

      {/* Image */}
      <figure className="px-5 pt-3">
        <img
          src={thumbnail_url}
          alt={title}
          className="rounded-xl w-full h-48 object-cover"
        />
      </figure>

      {/* Details */}
      <div className="card-body p-5">
        <p className="text-sm text-gray-600">
          {details.slice(0, 200)}...
          <span className="text-primary font-medium cursor-pointer hover:underline">
            Read More
          </span>
        </p>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between px-5 pb-4 border-t pt-3 text-sm">
        <div className="flex items-center text-orange-400 gap-1">
          {[...Array(rating.number)].map((_, i) => (
            <FaStar key={i} />
          ))}
          <span className="ml-1 text-gray-700">{rating.number}</span>
        </div>
        <div className="flex items-center gap-1 text-gray-600">
          <FaEye />
          <span>{total_view.toLocaleString()}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
