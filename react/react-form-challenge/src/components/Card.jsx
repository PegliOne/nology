const Card = ({ name, email, role, company }) => {
  return (
    <section className="card">
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
    </section>
  );
};

export default Card;
