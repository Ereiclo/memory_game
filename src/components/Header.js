import '../styles/Header.css'

function Header(props){
    let {actualScore,maxScore} = props;



    return (
        <div className="header">
            <div className="page-name">CS:GO memory card</div>
            <div className="score">
                <div>Score actual: {actualScore}</div>
                <div>Score máximo: {maxScore}</div>
            </div>
        </div>
    )


}

export default Header;