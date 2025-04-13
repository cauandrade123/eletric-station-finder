import './index.scss'



export default function Header(){
    return(
        <header>
            <img className='searchLogo' src="" alt="" />
            <h1>Search to your location</h1>
            <input className='SearchLoactionInput' type="text" />
        </header>
    )
}