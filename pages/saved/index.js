// import Header from "../../src/components/atoms/Header";
// import PageContainer from "../../src/components/container/PageContainer";
// import NewsCardContainer from "../../src/components/container/NewsCardContainer";
// import NewsCard from "../../src/components/molecules/NewsCard";
// import Navbar from "../../src/components/molecules/Navbar";
// import { useDispatch, useSelector } from "react-redux";
// import { useEffect } from "react";
// import Footer from "../../src/components/molecules/Footer";
// import { resetErrorMessage } from "../../src/features/newsSlice";
// import Head from "next/head";
// import { wrapper } from "../../store";

// export default function Saved() {
//     const dispatch = useDispatch();
  
//     const savedNews = useSelector((state) => state.saved.savedNews);
  
//     return (
//       <>
//         <Head>
//             <title>Saved | News Site</title>
//         </Head>
//         <Navbar />
//         <PageContainer>
//           <Header>Saved</Header>
//           {savedNews?.length === 0 ? (
//             <span className="mt-8 text-lg font-medium h-80">No Saved News</span>
//           ) : (
//             <NewsCardContainer>
//               {savedNews?.map((item) => (
//                 <NewsCard
//                   key={item.url}
//                   source={item.source}
//                   title={item.title}
//                   author={item.author}
//                   description={item.description}
//                   url={item.url}
//                   urlToImage={item.urlToImage}
//                 />
//               ))}
//             </NewsCardContainer>
//           )}
//         </PageContainer>
//         <Footer />
//       </>
//     );
// }

// Saved.getStatic = wrapper.getStaticProps(
//     ({ dispatch }) =>
//         () => {
//             dispatch(resetErrorMessage())
//         }
// )