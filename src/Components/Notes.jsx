import React, { useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'
import { Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { toast } from 'react-toastify'
import { add, remove } from "../Redux/notesSlice";

const validationSchema = Yup.object().shape({
  title: Yup.string().required("Title is required"),
  notes: Yup.string().required("Notes are required"),
});

function Notes() {
  const data = useSelector((state) => state.notes);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const ref1 = useRef(null);
  const ref2 = useRef(null);

  const handleDelete = (index) => {
    dispatch(remove(index));
    toast.success("Note deleted successfully");
  };

  const handleAddUser = (values, formikBag) => {
    dispatch(add(values));
    toast.success("Note created successfully");
    formikBag.resetForm();
    ref1.current.focus();
  };

  useEffect(() => {
    ref1.current.focus();
  }, []);

  const date = new Date();
  const showTime = date.getMinutes();

  return (
    <div className="col-sm-9 notes-body">
      <div className="well notes-text">
        <h4 className="notes-title">Add a Note</h4>
        <Formik
          initialValues={{
            title: "",
            notes: "",
          }}
          validationSchema={validationSchema}
          onSubmit={(values, formikBag) => {
            handleAddUser(values, formikBag);
          }}
        >
          {({ handleSubmit }) => (
            <form onSubmit={handleSubmit}>
              <div className="form-outline">
                <Field
                  type="text"
                  name="title"
                  id="typeText"
                  placeholder="Title"
                  className="form-control"
                  innerRef={ref1}
                />
                <ErrorMessage name="title" component="div" className="error-message" />

                <Field
                  as="textarea"
                  name="notes"
                  id="textAreaExample"
                  placeholder="Take a note..."
                  className="form-control"
                  rows="4"
                  innerRef={ref2}
                />
                <ErrorMessage name="notes" component="div" className="error-message" />

                <button type="submit" className="btn CE-button">
                  Create
                </button>
              </div>
            </form>
          )}
        </Formik>
      </div>

      <div className="row content">
        <div className="overflow-auto total-cards-overflow">
          {data.map((note, index) => (
            <div className="col-sm-4" key={index}>
              <div className="well notes-cards">
                <h1 className="cards-title">{note.title}</h1>
                <div className="curd-icons">
                  <i
                    className="fa-solid fa-pen"
                    onClick={() => navigate(`/edit/${index}`)}
                  ></i>
                  <i
                    className="fa-solid fa-trash-can"
                    onClick={() => handleDelete(index)}
                  ></i>
                </div>
                <div className="overflow-auto cards-overflow">
                  <p className="notes-para">{note.notes}</p>
                </div>
                <h5 className="date-time">{showTime} minutes ago</h5>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Notes;
