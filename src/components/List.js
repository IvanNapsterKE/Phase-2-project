import React from "react";

const Contact = () => {
  return (
    <div className="container">
      <div className="py-4">
        <h1>List</h1>
        <form>
          <div class="form-group">
          <label for="name">Name</label>
            <input
              type="text"
              class="form-control"
              id="name"
            />

          </div>
          <div class="form-group">
            <label for="position">Position</label>
            <input
              type="text"
              class="form-control"
              id="position"
            />
          
          </div>
          <div class="form-group">
            <label for="county">County</label>
            <input
              type="text"
              class="form-control"
              id="county"
            />
             <div class="form-group">
          <label for="age">Age</label>
            <input
              type="text"
              class="form-control"
              id="age"
            />

          </div>
          <div class="form-group">
          <label for="gender">Gender</label>
            <input
              type="text"
              class="form-control"
              id="gender"
            />

          </div>
          
          </div>
          <button type="submit" class="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
