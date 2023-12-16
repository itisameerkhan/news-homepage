import './Section.css';
import PCImg from '../../assets/images/image-retro-pcs.jpg';
import Laptop from '../../assets/images/image-top-laptops.jpg';
import Console from '../../assets/images/image-gaming-growth.jpg';

const Section = () => {
    return (
        <div className="section">
            <div className="section-inner">
                <img src={PCImg} alt="" />
                <div className="section-inner-desc">
                    <h1>01</h1>
                    <h2>Reviving Retro PCsReviving Retro PCs</h2>
                    <p>What happens when old PCs are given modern upgrades?</p>
                </div>
            </div>
            <div className="section-inner">
                <img src={Laptop} alt="" />
                <div className="section-inner-desc">
                    <h1>02</h1>
                    <h2>Top 10 Laptops of 2022</h2>
                    <p>Our best picks for various needs and budgets.</p>
                </div>
            </div>
            <div className="section-inner">
                <img src={Console} alt="" />
                <div className="section-inner-desc">
                    <h1>03</h1>
                    <h2>The Growth of Gaming</h2>
                    <p>How the pandemic has sparked fresh opportunities.</p>
                </div>
            </div>
        </div>
    )
}

export default Section;