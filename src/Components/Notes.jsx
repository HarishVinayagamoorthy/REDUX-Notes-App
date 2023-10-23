import React, { useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'
import { Formik } from "formik";
import { toast } from 'react-toastify'
import { add, remove } from "../Redux/notesSlice";

function Notes() {

  let data = useSelector((state) => state.notes)

  let dispatch = useDispatch()

  let ref1 = useRef()
  let ref2 = useRef()
  const navigate = useNavigate()



  let handleDelete = (i) => {

    dispatch(remove(i))
    toast.success("Notes Deleted successfully")

  }

  let handleAddUser = (values) => {
    dispatch(add(values))
    toast.success("notes Created ")
    ref1.current.value = ""
    ref2.current.value = ""

  }


  useEffect(() => {


    ref1.current.focus()
  }, [])

  const date = new Date();
  const showTime = date.getMinutes();




  return (
    <><div className="col-sm-9  notes-body">
      <div className="well notes-text ">
        <h4 className="notes-titel">Add a Note</h4>
        <Formik
          initialValues={{
            title: "",
            notes: "",

          }}
          onSubmit={(values) => {
            handleAddUser(values)

          }}
        >

          {({ handleBlur, handleSubmit, handleChange }) => (
            <form onSubmit={handleSubmit}>
              <div className="form-outline">
                <input
                  type="text"
                  ref={ref1}
                  name='title'
                  id="typeText"
                  placeholder="Title"
                  className="form-control"
                  onBlur={handleBlur} onChange={handleChange}

                />


                <textarea
                  className="form-control"
                  name='notes'
                  ref={ref2}
                  placeholder="Take a note..."
                  id="textAreaExample"
                  rows="4"
                  onBlur={handleBlur} onChange={handleChange}

                ></textarea>
                <button type="submit" className="btn CE-button" >
                  Create
                </button>
              </div>
            </form>
          )}
        </Formik>


      </div>




      <div className="row">
        <div className="col-sm-3">
          <ul className="nav nav-pills nav-stacked nav-ul notes-ul">
            <li className="notesbtn">
              <a href="#section1">
                <i className="fa-solid fa-file-lines"></i> MY Notes
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="row ">
        <div className="col-sm-3 ">
          <div className=" sub-title ">
            <p>Recently viewed</p>
          </div>
        </div>
      </div>

      <div className="row content">
        <div class="overflow-auto   total-cards-overflow">
          {
            data.map((e, i) => {
              return <><div className="col-sm-4" key={i}>

                <div className="well notes-cards"  >


                  <h1 className='cards-title'>{e.title}</h1>
                  <div className="curd-icons">
                    <i className="fa-solid fa-pen" onClick={() => {


                      navigate(`/edit/${i}`)
                    }}></i>

                    <i className='fa-solid fa-trash-can' onClick={() => handleDelete(i)}></i>
                  </div>


                  <div class="overflow-auto  cards-overflow">
                    <p className="notes-para">{e.notes}</p>
                  </div>
                  <h5 className="date-time">{showTime} minutes ago</h5>
                </div>

              </div>
              </>

            })
          }
        </div>
      </div>
    </div>

    </>
  );



}






export default Notes;