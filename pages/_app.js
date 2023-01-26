import MaterialProvider from '../components/MaterialProvider';
import '../styles/globals.css';
import 'prismjs/themes/prism-tomorrow.css';

function MyApp({ Component, pageProps }) {
  return (
    <MaterialProvider>
      <span className="theme-bejamas" />
      <Component {...pageProps} />
    </MaterialProvider>
  );
}

export default MyApp;
