import NewsCardSkeleton from "../molecules/NewsCardSkeleton";

import { useSelector } from "react-redux";

function NewsCardContainer({ children }) {
  const isPending = useSelector((state) => state.news.isPending);
  const errorMessage = useSelector((state) => state.news.errorMessage);

  return (
    <>
      {errorMessage && (
        <span className="mt-8 w-full text-center text-lg font-medium">
          {errorMessage}
        </span>
      )}
      <div className="mt-4 w-11/12 grid sm:grid-cols-2 md:grid-cols-4 gap-4">
        {isPending ? (
          <>
            <NewsCardSkeleton />
            <NewsCardSkeleton />
            <NewsCardSkeleton />
            <NewsCardSkeleton />
          </>
        ) : (
          children
        )}
      </div>
    </>
  );
}

export default NewsCardContainer;
