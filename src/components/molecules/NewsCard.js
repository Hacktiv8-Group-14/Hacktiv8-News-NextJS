import PropTypes from "prop-types";
import Button from "../atoms/Button";
import { FaRegBookmark } from "react-icons/fa";
import { BsFillBookmarkHeartFill } from "react-icons/bs";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import { addSavedNews, deleteSavedNews } from "../../features/savedSlice";
import notImg from "../../Asset/img/notimg.jpg"

function NewsCard(props) {
    const { source, title, author, description, url, urlToImage } = props;
    const [save, setSave] = useState(false);
    const dispatch = useDispatch();
    const savedNews = useSelector((state) => state.saved.savedNews);
  
    const newsPage = (url) => {
      const newtab = window.open(url);
      return newtab;
    };
  
    useEffect(() => {
      savedNews.some((e) => e.title === title) && setSave(true);
    }, [save]);
  
    const clickSave = () => {
      if (save === false) {
        dispatch(addSavedNews(props));
        setSave(!save);
        Swal.fire({
          icon: "success",
          title: "News has been Saved",
          timer: 1500,
        });
      } else if (save === true) {
        Swal.fire({
          title: "Unsave News?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes",
        }).then((result) => {
          if (result.isConfirmed) {
            dispatch(deleteSavedNews(props));
            setSave(!save);
            Swal.fire({
              title: "News has been Unsaved!",
              icon: "success",
            });
          }
        });
      }
    };
  
    return (
      <div className="border-2 p-2 rounded-lg break-words flex flex-col">
        <header className="border-b-2">
          <div className="relative">
            <div className="rounded-tl-lg rounded-br-lg bg-orange absolute p-1 truncate text-sm text-white">
              {source}
            </div>
            <img
              src={urlToImage ? urlToImage : notImg}
              alt="img"
              className="h-40 w-full rounded-t-lg"
            />
          </div>
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="line-clamp-2 sm:text-base text-xl font-semibold hover:underline"
          >
            {title}
          </a>
          <h3 className="mb-2 truncate sm:text-sm">
            {!author || author === "" ? "-" : author}
          </h3>
        </header>
        <div className="mt-2 mb-4">
          <p className="line-clamp-2 sm:text-xs">{description}</p>
        </div>
        <div className="flex justify-between items-end h-full sm:text-sm">
          <Button
            children="Read more.."
            className="text-sky-600 hover:underline"
            onClick={() => newsPage(url)}
          />
          <Button onClick={clickSave}>
            {save ? (
              <BsFillBookmarkHeartFill size={20} color="#FF3030" />
            ) : (
              <FaRegBookmark size={20} />
            )}
          </Button>
        </div>
      </div>
    );
  }
  
  export default NewsCard;
  
  NewsCard.propTypes = {
    source: PropTypes.string,
    url: PropTypes.string,
    title: PropTypes.string,
    author: PropTypes.string,
    description: PropTypes.string,
  };
  
  NewsCard.defaultProps = {
    source: "-",
    url: "https://",
    title: "-",
    author: "-",
    description: "-",
  };