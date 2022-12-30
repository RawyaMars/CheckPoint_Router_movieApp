import React, { useState } from 'react'
import Modal from 'react-modal';
import StarRating from './StarRating';

const EditMovie = ({movieToEdit,handleEdit}) => {
    const [title, setTitle] = useState(movieToEdit.title)
    const [image, setImage] = useState(movieToEdit.image)
    const [rating, setRating] = useState(movieToEdit.rating)
    const [publishDate, setPublishDate] = useState(movieToEdit.publishDate)
    const [genre, setGenre] = useState(movieToEdit.genre)
    const handleRating=(x)=>setRating(x)
const handleSubmit=(e)=>{
    e.preventDefault()
    const editedMovie={
        id:movieToEdit.id,title,image,publishDate,rating,genre
    }
    handleEdit(editedMovie)
    setTitle("")
    setImage("")
    setRating(1)
    setPublishDate("")
    setGenre("")
}
    const customStyles = {
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
        },
      };
      
      // Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
      Modal.setAppElement('#root');
      let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  return (
    <div> <button id='btn-edit' onClick={openModal}>Edit</button>
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Example Modal"
    >
      
      <form id="add-movie" onSubmit={handleSubmit}>
       <div id="div-1">
       <h2> Edit Movie</h2>
       <div style={{margin:"20px"}}>
       <label style={{width:"80px", height:"40px"}}> <h3> Title </h3></label>
        <input type="text" style={{width:"300px", height:"40px"}} value={title} onChange={e=>setTitle(e.target.value)}/>
       </div>
        <div>
        <label style={{width:"80px", height:"40px"}}> <h3> Poster </h3> </label>
        <input type="text" style={{width:"300px", height:"40px"}} value={image} onChange={e=>setImage(e.target.value)}/>
        </div>
        <div style={{margin:"20px",width:"400px", height:"50px"}}> 
        <StarRating rating={rating} handleRating={handleRating}> </StarRating>
        </div>
        <div>
        <label htmlFor="genre">Genre</label>
  <select title="genre" id="genre" onChange={e=>setGenre(e.target.value)}>
    <option value="action">Action</option>
    <option value="thriller">Thriller</option>
    <option value="comedy">Comedy</option>
  </select>
        </div>
        <label style={{width:"80px", height:"40px"}}> <h3>Date </h3></label>
        <input type="date" style={{margin:"20px",width:"300px", height:"40px"}} value={publishDate} onChange={e=>setPublishDate(e.target.value.toString())}/>
        <button id='btn-edit' type='submit'>Edit</button>
      <button onClick={closeModal} id='btn-close'>close</button>

       </div>
      </form>
    </Modal></div>
  )
}

export default EditMovie