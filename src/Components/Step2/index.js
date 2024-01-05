import React from 'react';

function Step2({ formData, setFormData }) {
  return (
    <div>
      <h2>Step 2: Date of Birth & Gender</h2>
      <div className="mb-3">
        <label htmlFor="dob" className="form-label">
          Date of Birth
        </label>
        <input
          type="date"
          className="form-control"
          id="dob"
          value={formData.dob}
          onChange={(e) =>
            setFormData({ ...formData, dob: e.target.value })
          }
        />
      </div>
      <div className="mb-3">
        <label htmlFor="gender" className="form-label">
          Gender
        </label>
        <select
          className="form-select"
          id="gender"
          value={formData.gender}
          onChange={(e) =>
            setFormData({ ...formData, gender: e.target.value })
          }
        >
          <option value="">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
      </div>
    </div>
  );
}

export default Step2;