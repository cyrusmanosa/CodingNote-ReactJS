import ProfilePic from "./assets/profile_image.jpeg";

function Card() {
    return (
        <div className="card">
            <img className="card-img" src={ProfilePic} alt="Proflie Image" />
            <h2 className="card-title">Cyrus Man</h2>
            <p className="card-text">I make Youtube Video and play video game</p>
        </div>
    );
}

export default Card