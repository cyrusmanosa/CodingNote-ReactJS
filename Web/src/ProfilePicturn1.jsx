

function ProfilePicturn1() {

    const Img = './assets/profile_image.jpeg'
    const handleClick = (e) => e.target.style.display = "none"

    return (
        <img onClick={(e) => handleClick(e)} src={Img} alt="Profile Picturn" />
    );
}
export default ProfilePicturn1