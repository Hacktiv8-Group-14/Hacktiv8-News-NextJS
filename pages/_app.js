import '../styles/globals.css'
import { wrapper } from '../store';
import { MakeStore } from 'next-redux-wrapper';
import { makeStore } from '../store';
import { Provider } from 'react-redux';

function MyApp({ Component, pageProps }) {
  return(
    // <Provider store={makeStore}>
    //   <CacheProvider value={emotionCache}>
    //     <Component {...pageProps} />
    //   </CacheProvider>
    // </Provider>
    <Component {...pageProps} />
  ) 
}

// export default MyApp

export default wrapper.withRedux(MyApp)
