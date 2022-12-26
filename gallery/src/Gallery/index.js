import React from 'react'
import './index.css'
function Gallery() {

    const mainfotoclick = () => {

        const mainfoto = document.getElementById('mainfoto')

        {

            mainfoto.src = 'https://i.pinimg.com/564x/42/dc/6d/42dc6df904ee807fcbd9e060c1bf28ce.jpg'

        }
    }

    const changephotofirst = () => {

        const mainfirst = document.getElementById('mainfoto').src = 'https://i.pinimg.com/564x/64/f9/ec/64f9ec01d8a8945df72a0a2d4ac4860a.jpg'
    }

    const changefotosecond = () => {

        const mainsecond = document.getElementById('mainfoto').src = 'https://i.pinimg.com/564x/40/b3/bf/40b3bf8161e1861c32d79dbf0eaa1a27.jpg'
    }

    const changefotothird = () => {

        const mainthird = document.getElementById('mainfoto').src = 'https://i.pinimg.com/564x/16/27/6a/16276a508905fec4c09251ccda60c151.jpg'
    }

    return (
        <>

            <img src='https://i.pinimg.com/564x/42/dc/6d/42dc6df904ee807fcbd9e060c1bf28ce.jpg' alt='' id='mainfoto' onClick={mainfotoclick}></img>

            <div className='divbig'>

                <img src='https://i.pinimg.com/564x/64/f9/ec/64f9ec01d8a8945df72a0a2d4ac4860a.jpg' alt='' id='first' onClick={changephotofirst}></img>

                <img src='https://i.pinimg.com/564x/40/b3/bf/40b3bf8161e1861c32d79dbf0eaa1a27.jpg' alt='' id='second' onClick={changefotosecond}></img>

                <img src='https://i.pinimg.com/564x/16/27/6a/16276a508905fec4c09251ccda60c151.jpg' alt='' id='third' onClick={changefotothird}></img>

            </div>

        </>

    )

}

export default Gallery