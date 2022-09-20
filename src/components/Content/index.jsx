const Content = ({children, titlePage}) => {
    return(
        <>
            <div className="container-flex bg-success p-4 mb-4">
                <div className="container">
                    <h1 className="text-light">{titlePage}</h1>
                </div>
            </div>
            <div className="container">
                {children}
            </div>
        </>
    );
}

export default Content;
