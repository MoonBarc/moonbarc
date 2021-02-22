import Wrapper from '../comps/wrapper'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return <Wrapper><Component {...pageProps} /></Wrapper>
}

export default MyApp
