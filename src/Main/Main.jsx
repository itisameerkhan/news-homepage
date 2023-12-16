import './Main.css';
import '../../assets/images/image-web-3-desktop.jpg';

const Main = () => {
    return (
        <div className="main-container">
            <div className="main-left-upper"></div>
            <div className="main-left-lower-left">
                <h1>The Bright Future of Web 3.0?</h1>
            </div>
            <div className="main-left-lower-right">
                <p>We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. But is it really fulfilling its promise?</p>
                <button>READ MORE</button>
            </div>
            <div className="main-right">
                <h2 className='new'>New</h2>
                <div className="main-right-in">
                    <div className="main-right-inner">
                        <h2>Hydrogen VS Electric Cars</h2>
                        <p>Will hydrogen-fueled cars ever catch up to EVs?</p>
                    </div>
                    <div className="main-right-inner">
                        <h2>The Downsides of AI Artistry</h2>
                        <p>What are the possible adverse effects of on-demand AI image generation?</p>
                    </div>
                    <div className="main-right-inner">
                        <h2>Is VC Funding Drying Up?</h2>
                        <p>Private funding by VC firms is down 50% YOY. We take a look at what that means.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main;