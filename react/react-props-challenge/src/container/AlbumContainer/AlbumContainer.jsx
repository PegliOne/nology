import albums from "../../data/albums.json";
import Album from "../../components/Album/Album";
import styles from "./AlbumContainer.module.scss";

const AlbumContainer = () => {
  return (
    <main className={styles.container}>
      {albums.map((album) => (
        <Album
          title={album.title}
          band={album.band}
          rating={album.rating}
          imageUrl={album.imageUrl}
        />
      ))}
    </main>
  );
};

export default AlbumContainer;
