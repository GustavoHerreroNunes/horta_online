const ButtonImage = ({children ,src, alt}) => {
    return(
        <>
            <img src={src} alt={alt} widht="30" height="30" />
            {children}
        </>
    );
}

const Button = ({children, className, image, alt, onClick}) => {
    let btnClass = `btn ${(className)? className : ""}`;
    let btnInner = (image) ? <ButtonImage src={image} alt={alt}>{children}</ButtonImage> : children 
    return(
        <button className={btnClass} onClick={onClick}>
            {btnInner}
        </button>
    );
}

export default Button;