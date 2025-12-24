import Navbar from '../Navbar/Navbar';

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <>
      <Navbar />
      <main className="app-content">
        {children}
      </main>
    </>
  );
};

export default Layout;
