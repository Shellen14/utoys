import React, { useState } from "react";
import "../SubmissionForm/FormSubmission.css";

function FormSubmission({ closeModal }) {
  return (
    <div className="modal-overlay" onClick={closeModal}>
      <div
        className="modal-box"
        onClick={(e) => e.stopPropagation()}
      >
        <button className="close-modal-btn" onClick={closeModal}>
          &times;
        </button>
        <h2>Submission Form</h2>
        <form>
          <label>
            Nama:
            <input type="text" name="nama" placeholder="Masukkan nama Anda" />
          </label>
          <label>
            Nama Mainan:
            <input type="text" name="namaMainan" placeholder="Masukkan nama mainan" />
          </label>
          <label>
            Category:
            <select name="category">
              <option value="Action Figures">Action Figures</option>
              <option value="Diorama">Diorama</option>
              <option value="Vehicles">Vehicles</option>
              <option value="Educational">Educational</option>
            </select>
          </label>
          <label>
            Description:
            <textarea name="description" placeholder="Tambahkan deskripsi"></textarea>
          </label>
          <label className="file-upload">
            Drag and Drop your file:
            <input type="file" />
          </label>
          <button type="submit" className="submit-btn">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default FormSubmission;