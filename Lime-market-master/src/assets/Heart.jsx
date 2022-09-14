const Heart = ({liked}) => {
    return (
        <svg width="19" height="16" viewBox="0 0 19 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.5 5.27426C0.5 2.6055 2.81205 0.5 5.59143 0.5C6.98552 0.5 8.23589 1.16576 9.15067 2.05906C9.34493 2.24876 9.65507 2.24876 9.84933 2.05906C10.7641 1.16576 12.0145 0.5 13.4086 0.5C16.188 0.5 18.5 2.6055 18.5 5.27426C18.5 7.16599 17.6305 8.78404 16.4215 10.1649C15.214 11.544 13.6439 12.7141 12.1904 13.714L9.67306 15.4458C9.56805 15.5181 9.43195 15.5181 9.32694 15.4458L6.80959 13.714C5.35608 12.7141 3.78601 11.544 2.57855 10.1649C1.36953 8.78404 0.5 7.16599 0.5 5.27426Z" fill={liked ? '#74CD97' : 'none'} stroke={liked ? '#74CD97' : '#5A5A5A'} stroke-width='2px' stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
    )
}

export default Heart