import Navbar from "../../src/components/molecules/Navbar"
import PageContainer from "../../src/components/container/PageContainer"
import Header from "../../src/components/atoms/Header"
import NewsCardContainer from "../../src/components/container/NewsCardContainer";
import NewsCard from "../../src/components/molecules/NewsCard";
import Pagination from "../../src/components/molecules/Pagination";
import Footer from "../../src/components/molecules/Footer";
import NavCategory from "../../src/components/molecules/NavCategory";
import { useSelector } from "react-redux";
import { useState } from "react";
import Head from 'next/head'
import { fetchNews } from "../../src/features/newsSlice";
import { wrapper } from "../../store";

export default function Indonesia() {
    const indonesiaNews = useSelector((state) => state.news.newsList);
    const totalResult = useSelector((state) => state.news.totalResult);
    const [size, setSize] = useState(24);
    const [current, setCurrent] = useState(1);
    
    return (
        <>  
            <Head>
                <title>Indonesia | News Site</title>
            </Head>
            <Navbar />
            <PageContainer>
                <Header>Indonesia News</Header>
                <NavCategory />
                <NewsCardContainer>
                    {indonesiaNews.map((item) => (
                        <NewsCard
                            key={item.url}
                            source={item.source.name}
                            title={item.title}
                            author={item.author}
                            description={item.description}
                            url={item.url}
                            publishedAt={item.publishedAt}
                            urlToImage={item.urlToImage}
                        />
                    ))}
                </NewsCardContainer>
                <Pagination
                    setSize={setSize}
                    size={size}
                    current={current}
                    setCurrent={setCurrent}
                    news={indonesiaNews}
                    totalResult={totalResult}
                />
            </PageContainer>
            <Footer />
        </>
    )
}

Indonesia.getInitialProps = wrapper.getInitialPageProps(
    ({ dispatch }) =>
        async () => {
            await dispatch(fetchNews(`${process.env.NEXT_PUBLIC_REACT_APP_API_URL}/top-headlines?country=id&pageSize=24&page=1&apiKey=${process.env.NEXT_PUBLIC_REACT_APP_API_KEY}`))
        }
)

// export async function getServerSideProps(context) {
//     const dispatch = useDispatch();
//     dispatch(
//         fetchNews(
//             `${process.env.REACT_APP_API_URL}/top-headlines?country=id&pageSize=${size}&page=${current}&apiKey=${process.env.REACT_APP_API_KEY}`
//         )
//     );
//     const indonesiaNews = useSelector((state) => state.news.newsList);
//     const totalResult = useSelector((state) => state.news.totalResult);
//     return {
//       props: { indonesiaNews, totalResult }, // will be passed to the page component as props
//     }
// }