function Header({ children }) {
    return (
      <>
        <h1 className="font-bold text-2xl pb-5 border-b-2 w-full text-center">
          {children}
        </h1>
      </>
    );
  }
  
  export default Header;
  
  Header.defaultProps = {
    children: "Your Page Header",
  };
  