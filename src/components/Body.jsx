
import boyPng from '../assets/black.png'
import React from 'react'
export default function Body() {

    const [meme, setMeme] = React.useState({
        topText: "One does not simply",
        bottomText: "Finished Morder",
        imageUrl: boyPng
    })

    function handleTopChange(event) {
        const { value } = event.currentTarget
        setMeme(prevchange => ({
            ...prevchange,
            topText: value
        }))
    }

    function handleBottomChange(event) {
        const { value } = event.currentTarget
        setMeme(prevchange => ({
            ...prevchange,
            bottomText: value
        }))
    }

    return (
        <main className="user-input-form">
            <div className="form">
                <label htmlFor="top-text">Top Text
                    <input type="text"
                        onChange={handleTopChange}
                        id="top-text"
                        name="top-text"
                        placeholder="One does not simply" />
                </label>

                <label htmlFor="bottom-text">Bottom Text
                    <input type="text"
                        onChange={handleBottomChange}
                        id="bottom-text"
                        name="bottom-text"
                        placeholder="Walk into Mordor" />
                </label>

                <button className="btn">Get a new  meme image</button>
            </div>
            <div className="meme">
                <img src={meme.imageUrl}
                    className='boy'
                    alt="Starring boy" />
                <span className="top">{meme.topText}</span>
                <span className="bottom">{meme.bottomText}</span>
            </div>

        </main>
    )
}