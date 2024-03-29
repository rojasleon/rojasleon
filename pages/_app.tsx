import '@fortawesome/fontawesome-free/css/all.min.css';
import { AppProps } from 'next/app';
import Layout from '../components/Layout';
import '../styles/index.css';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
};

export default MyApp;
