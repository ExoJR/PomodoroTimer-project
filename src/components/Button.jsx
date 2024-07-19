function Button({nameIcon}){

    return(
        <>
    <button className="btn-btn" role="button"><i className={`fa-solid ${nameIcon}`}></i></button>
    </>
    )
}

export default Button