import "./Card.css";

const user = {
  name: "Hedy Lamarr",
  title: "Actress & Inventor",
  about:
    "Hedy Lamarr was an Austrian-born American actress and inventor. After a brief early film career in Czechoslovakia, including the controversial erotic romantic drama Ecstasy, she fled from her first husband, Friedrich Mandl, and secretly moved to Paris.",
  imageUrl: "https://i.imgur.com/yXOvdOSs.jpg",
  imageSize: 125,
};

export default function Card() {
  return (
    <>
      <div className="profile-card">
        <img
          className="profile-img"
          src={user.imageUrl}
          alt={"Photo of " + user.name}
          style={{
            width: user.imageSize,
            height: user.imageSize,
          }}
        />
        <div className="profile-info">
          <h1 className="profile-name">{user.name}</h1>
          <h2 className="profile-title">{user.title}</h2>
          <p className="profile-about">{user.about}</p>
        </div>
      </div>
    </>
  );
}
