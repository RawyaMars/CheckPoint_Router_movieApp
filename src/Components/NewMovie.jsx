import React, { useState } from 'react'
import Modal from 'react-modal';
import StarRating from './StarRating';

const NewMovie = ({len,handleAdd}) => {
    const [title, setTitle] = useState("")
    const [image, setImage] = useState("")
    const [rating, setRating] = useState(1)
    const [publishDate, setPublishDate] = useState("")
    const [genre, setGenre] = useState("")
    const handleRating=(x)=>setRating(x)
const handleSubmit=(e)=>{
    e.preventDefault()
    const newItem={
        id:len,title,image,publishDate,rating,genre
    }
    handleAdd(newItem)
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
    <div> <button id='btn-add' onClick={openModal}>Add New Movie</button>
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Example Modal"
    >
      
      <form id="add-movie" onSubmit={handleSubmit}>
       <div id="div-1">
       <h2> Add New Movie</h2>
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
        <button id='btn-add' type='submit'>Add</button>
      <button onClick={closeModal} id='btn-close'>close</button>

       </div>
      </form>
    </Modal></div>
  )
}

export default NewMovie