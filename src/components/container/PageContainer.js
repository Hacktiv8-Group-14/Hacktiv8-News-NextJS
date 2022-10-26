function PageContainer({ children }) {
    return (
      <div className="container mx-auto sm:px-4 mt-20 mb-10 w-full flex flex-col items-center">
        {children}
      </div>
    );
  }
  
  export default PageContainer;
  