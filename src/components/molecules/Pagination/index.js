import ReactPagination from "rc-pagination";
import { AiOutlineDoubleLeft, AiOutlineDoubleRight } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { fetchNews } from "../../../features/newsSlice";
import Button from "../../atoms/Button";
// import "./Pagination.css";

export default function Pagination(props) {

  const dispatch = useDispatch()

  const { setSize, size, current, setCurrent, news, totalResult } = props;

  const PerPageChange = (value) => {
    setSize(value);
    const newPerPage = Math.ceil(news.length / value);
    if (current > newPerPage) {
      setCurrent(newPerPage);
    }
  };

  const PaginationChange = (page) => {
    setCurrent(page);
    dispatch(fetchNews(`${process.env.NEXT_PUBLIC_REACT_APP_API_URL}/top-headlines?country=id&pageSize=24&page=${page}&apiKey=${process.env.NEXT_PUBLIC_REACT_APP_API_KEY}`))
  };

  const PrevNextArrow = (current, type, originalElement) => {
    if (type === "prev") {
      return (
        <Button>
          <AiOutlineDoubleLeft />
        </Button>
      );
    }
    if (type === "next") {
      return (
        <Button>
          <AiOutlineDoubleRight />
        </Button>
      );
    }
    return originalElement;
  };

  return (
    <>
      {!!news.length ? (
        <ReactPagination
          className="p-5 mt-5"
          onChange={PaginationChange}
          total={totalResult}
          current={current}
          pageSize={size}
          showTotal={(total, range) =>
            `Showing ${range[0]}-${range[1]} of ${total}`
          }
          showSizeChanger={false}
          itemRender={PrevNextArrow}
          onShowSizeChange={PerPageChange}
        />
      ) : (
        <></>
      )}
    </>
  );
}
