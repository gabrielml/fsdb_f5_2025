import "./Card.css";

// const user = {
//   name: "Hedy Lamarr",
//   title: "Actress & Inventor",
//   about:
//     "Hedy Lamarr was an Austrian-born American actress and inventor. After a brief early film career in Czechoslovakia, including the controversial erotic romantic drama Ecstasy, she fled from her first husband, Friedrich Mandl, and secretly moved to Paris.",
//   imageUrl: "https://i.imgur.com/yXOvdOSs.jpg",
//   imageSize: 125,
// };

export default function Card({name, title, about, imageUrl, imageSize, isDarkMode}) {
  const handleClick = () => {
    alert(`You clicked on the card for ${name}!`);
  }

  // Conditionally apply a class based on isDarkMode prop
  const cardClassName = isDarkMode ? "profile-card dark-mode" : "profile-card";
  
  return (
    <>
      <div className={cardClassName}>
        <img
          className="profile-img"
          src={imageUrl}
          alt={"Photo of " + name}
          style={{
            width: imageSize,
            height: imageSize,
          }}
        />
        <div className="profile-info">
          <h1 className="profile-name">{name}</h1>
          <h2 className="profile-title">{title}</h2>
          <p className="profile-about">{about}</p>
          <button className="card-button" onClick={handleClick}>Learn More</button>
        </div>
      </div>
    </>
  );
}
