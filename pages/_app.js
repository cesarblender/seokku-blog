import MaterialProvider from '../components/MaterialProvider';

function MyApp({ Component, pageProps }) {
  return (
    <MaterialProvider>
      <Component {...pageProps} />
    </MaterialProvider>
  );
}

export default MyApp;
