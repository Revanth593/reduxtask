import React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { add } from './noteSlice'
import { remove } from './noteSlice'
import { edit } from './noteSlice'
import { update } from './noteSlice'
import description from './images/description.svg'
import description1 from './images/description1.svg'
import editIcon from './images/editIcon.svg'
import removeIcon from './images/removeIcon.svg'

function App() {
  let note = useSelector(state => state.note)

  let dispatch = useDispatch();

  let [title, setTitle] = useState("")
  let [text, setText] = useState("")

  let [editIndex, setEditIndex] = useState()
  let handleEdit = (i) => {
    setText(note[i].text)
    setTitle(note[i].title)
    setEditIndex(i)
    dispatch(edit(i))
  }


  return (

    <>
      <div className='container-fluid-notes d-flex'>
        <div className='sidebar'>
          <h1>Notes App</h1>
          <button className='sidebar__button'>Notes</button>
        </div>

        <div className='container-fluid mainbar'>
          <div className="card input-area__card">
            <div className="card-body input-area__card-body">
              <h5 className="card-title input-area__heading">Add a Note</h5>
              <textarea type='text' className='form-control' id='input-area__title' placeholder='Title' rows="1" value={title} autoFocus onChange={(e) => setTitle(e.target.value)}></textarea>
              <br></br>
              <textarea type='text' className='form-control' id='input-area__text' placeholder='Take a note...' value={text} rows="4" autoFocus onChange={(e) => setText(e.target.value)}></textarea>
              <button className='btn-primary' onClick={() => dispatch(add({ title, text }))}>save</button>
              <button className='btn-primary' onClick={() => dispatch(update({ text, title }))}>update</button>
            </div>
          </div>

          <div className='notes-area'>
            <div className='notes-area__heading'>
              <h6><span className='description1-icon'><img src={description1}></img></span>My Notes</h6>
              <p>Recently viewed</p>
            </div>
            <div className='container-fluid d-flex card-collection row row-cols-1 row-cols-md-3 g-4'>
              {note.map((value, i) => {
                return (
                  <div className='col'>
                    <div className="card" key={i}>
                      <div className="card-body">
                        <h5 className="card-title notes-area__title"> {value.title} &nbsp;
                          <span className='edit-icon'><img src={editIcon} onClick={(key = { i }) => handleEdit(i)}></img></span>
                          <span className='remove-icon'><img src={removeIcon} onClick={() => dispatch(remove(i))}></img></span></h5>
                        <p className="card-text notes-area__text">{value.text}</p>
                        <p>5 days ago</p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </>

  )
}

export default App