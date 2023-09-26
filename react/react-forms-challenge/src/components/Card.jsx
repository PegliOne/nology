const Card = ({ name, email, role, company, imageUrl }) => {
  return (
    <section className="card">
      <div class="card-contents">
        <p>
          <strong>Name:</strong> {name}
        </p>
        <p>
          <strong>Email:</strong> {email}
        </p>
        <p>
          <strong>Role:</strong> {role}
        </p>
        <p>
          <strong>Company:</strong> {company}
        </p>
      </div>
      <img src={imageUrl} alt={name} />
    </section>
  );
};

export default Card;
