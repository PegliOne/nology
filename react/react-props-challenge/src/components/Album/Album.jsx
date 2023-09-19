import styles from "./Album.module.scss";

const Album = ({ title, band, rating, imageUrl }) => {
  const isTopRated = rating === 5;

  return (
    <section
      className={styles.album}
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      {isTopRated && <div className={styles.banner}>Top Rating</div>}
      <h2>{title}</h2>
      <p>
        <strong>Artist:</strong> {band}
      </p>
      <p>
        <strong>Rating:</strong> {rating}
      </p>
    </section>
  );
};

export default Album;
