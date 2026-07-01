import MemeHeader from '../assets/meme.png'

export default function Navbar() {
    return (
        <nav>
            <img className='headerImg' src={MemeHeader} alt="Meme Header" />
            <h1>MEME GENERATOR</h1>
        </nav>
    )
}