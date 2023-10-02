const Form = ({ handleFormSubmit }) => {
  return (
    <form onSubmit={(e) => handleFormSubmit(e)}>
      <div>
        <label htmlFor="nameInput">Name: </label>
        <input id="nameInput" type="text" name="name" />
      </div>
      <div>
        <label htmlFor="emailInput">Email: </label>
        <input id="emailInput" type="email" name="email" />
      </div>
      <div>
        <label htmlFor="roleInput">Role: </label>
        <input id="roleInput" type="text" name="role" />
      </div>
      <div>
        <label htmlFor="companyInput">Company: </label>
        <input id="companyInput" type="text" name="company" />
      </div>
      <div>
        <label htmlFor="imageInput">Profile Image: </label>
        <input id="imageInput" type="file" name="image" />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
