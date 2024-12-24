const Headings = ({children, className}) => {
    return (
        <h2 className={`${className} text-center text-4xl pb-5 font-bold uppercase border-b-4 border-my-red`}>
          {children}  
        </h2>
    );
};

export default Headings;