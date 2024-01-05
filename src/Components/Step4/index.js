import React from 'react';

function Step4({ formData }) {
  return (
    <div>
      <h2>Step 4: Preview</h2>
      <div>
        <strong>First Name:</strong> {formData.firstName}
      </div>
      <div>
        <strong>Last Name:</strong> {formData.lastName}
      </div>
      <div>
        <strong>Date of Birth:</strong> {formData.dob}
      </div>
      <div>
        <strong>Gender:</strong> {formData.gender}
      </div>
      <div>
        <strong>Email:</strong> {formData.email}
      </div>
    </div>
  );
}

export default Step4;