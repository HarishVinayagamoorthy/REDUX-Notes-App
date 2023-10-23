import React from 'react'
import {  useRef,useEffect,useState } from 'react'
import { useParams,useNavigate } from 'react-router'
import { useSelector, useDispatch } from 'react-redux'
import { edit } from "../Redux/notesSlice";
 
 import { toast } from 'react-toastify'

 import { Formik } from 'formik'

function Edit() {
const params = useParams()


let data = useSelector((state)=>state.notes)
let ref1 = useRef()
let ref2 = useRef()
let dispatch = useDispatch()



const [initialValues, setInitialValues] = useState({
  title: '',
  notes: ''

})

let navigate =useNavigate()
let handleDelete = (i)=>{
dispatch(remove(i))
}

const getData =  (index) => {
let newValues = {...initialValues}
newValues.title = data[index].title
newValues.notes = data[index].notes
setInitialValues(newValues)
 
}


useEffect(() => {
  ref1.current.focus()
  if  (Number(params.id)<data.length) {
    getData(Number(params.id))
  }
  else {
    navigate('/notes')
  }
 
},[])

const handleEdit =(values,params) => {
 
  dispatch(edit({values,params}))
  toast.success("Notes Edited successfully")

  navigate("/notes")
}
 







  return <>
  <div className="col-sm-9  notes-body">
      <div className="well notes-text ">
        <h4 className="notes-titel">Edit a Note</h4>



        <Formik
          initialValues={initialValues}
          enableReinitialize={true}
          onSubmit={(values)=>{
              handleSubmit(values,params.id)
              }}>

          {({ values, handleBlur, handleSubmit, handleChange }) => (
            <form onSubmit={(e)=>{ 
              e.preventDefault();
              handleSubmit();
              }}>
              <div className="form-outline">
                <input
                  type="text"
                  ref={ref1}
                  value={values.title}
                  name='title'
                  id="typeText"

                  placeholder="Title"
                  className="form-control"
                  onBlur={handleBlur} onChange={handleChange} />


                <textarea
                  className="form-control"
                  value={values.notes}
                  name='notes'
                  ref={ref2}
                  placeholder="Take a note..."
                  id="textAreaExample"
                  rows="4"
                  onBlur={handleBlur} onChange={handleChange}>
                </textarea>

                <button type="submit" className="btn CE-button" onClick={()=>{handleEdit(values,params.id)}} >
                  Edit
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
        {
          data.map((e, i) => {
            return <><div className="col-sm-4" key={i} >
              <div className="well notes-cards" >
              
               
                  <h1 className='cards-title'>{e.title}</h1>
                  <div className="curd-icons">
                    <i className="fa-solid fa-pen" onClick={()=>{
                
                                
                                 navigate(`/edit/${i}`)
                      
                      

                        

                        }}></i>

                    <i className= 'fa-solid fa-trash-can'onClick={()=>handleDelete(i)}></i>
                  </div>
                  <div class="overflow-auto  cards-overflow">
               
               
                <p>{e.notes}</p>
               </div>
                </div>
              </div>
         
         
            </>

          })
        }
      </div>


</div>


  
  
  </>
}
export default Edit