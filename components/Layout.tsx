import Footer from './Footer';
import Header from './Header';

const Layout: React.FC = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-neutral-900 text-black dark:text-white">
      <Header />
      <main className="flex-grow mt-8">
        <div className="w-11/12 xl:w-10/12 lg-w/12 md:w-10/12 m-auto flex justify-center flex-col">
          {children}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
