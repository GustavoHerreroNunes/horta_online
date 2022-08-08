const ButtonIcon = ({src, alt}) => {
    return(
        <img src={src} alt={alt} />
    );
}

const Button = ({children, className, icon}) => {
    let btnClass = `btn ${className}`;
    let btnIcon = <ButtonIcon src={icon} alt={children}/>
    return(
        <button className={btnClass}>
            {(icon) ? btnIcon : children}
        </button>
    );
}

export default Button;