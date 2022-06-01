import axios from "axios";
import React, { useState } from "react";



const Modal = (props) => {
  const [showModal, setShowModal] = useState(false);
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [releaseDate, setReleaseDate] = useState('');
  const [pages, setPages] = useState('');
  const [image, setImage] = useState(null);


  const handleSubmit = e => {
    e.preventDefault()

    // axios.post("https://localhost:44341/api/books",
    // {
    //     "title": title,
    //     "author": author,
    //     "releaseDate": releaseDate,
    //     "totalPages": pages,
    //     "description": "this is a great book"
    // },{
    //     headers: {
    //         'content-type': 'text/json',
    //         'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3QxQHRlc3QuY29tIiwiZXhwIjoxNjg1NDcxMjg5fQ.5_Jx629olt22g8QcSzAGwpZhr1v-huhXQOwhoV2hJ2k'
    //       }
    // }).then(response => {
    //     if(response.status === 200){
    //         props.close(false)
    //     }
    // })


    var bodyFormData = new FormData();
    bodyFormData.append('title', title);
    bodyFormData.append('author', author);
    bodyFormData.append('releaseDate', releaseDate);
    bodyFormData.append('totalPages', pages);
    bodyFormData.append('description', "this is a great book");
    bodyFormData.append('image', image[0]);


    //console.log(image, "image")
    axios({
      method: "post",
      url: "https://localhost:44341/api/books",
      data: bodyFormData,
      headers: { 
        'Content-Type': 'multipart/form-data',
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3QxQHRlc3QuY29tIiwiZXhwIjoxNjg1NDcxMjg5fQ.5_Jx629olt22g8QcSzAGwpZhr1v-huhXQOwhoV2hJ2k' },
    })
      .then(function (response) {
        //handle success
        console.log(response);
      })
      .catch(function (response) {
        //handle error
        console.log(response);
      });
  }


  return (
    <>
          <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t ">
                  <h3 className="text-3xl font=semibold">New book</h3>
                </div>
                <div className="relative p-6 flex-auto">
                  <form onSubmit={handleSubmit} className="shadow-md rounded px-8 pt-6 pb-8 w-full">
                    <label className="block text-black text-sm font-bold mb-1">Title</label>
                    <input 
                        className="shadow appearance-none border rounded w-80 py-2 px-1 text-black" 
                        onChange={e => setTitle(e.target.value)}
                        value={title}/>
                    
                    <label className="block text-black text-sm font-bold mb-1">Author Name</label>
                    <input 
                        className="shadow appearance-none border rounded w-80 py-2 px-1 text-black"
                        onChange={e => setAuthor(e.target.value)}
                        value={author}/>

                    <label className="block text-black text-sm font-bold mb-1">Release Date</label>
                    <input 
                        className="shadow appearance-none border rounded w-80 py-2 px-1 text-black"
                        onChange={e => setReleaseDate(e.target.value)}
                        value={releaseDate}/>

                    <label className="block text-black text-sm font-bold mb-1">Cantity Pages</label>
                    <input 
                        className="shadow appearance-none border rounded w-80 py-2 px-1 text-black"
                        onChange={e => setPages(e.target.value)}
                        value={pages}/>

                    <label className="block text-black text-sm font-bold mb-1">Upload Image</label>
                    <input 
                        className="shadow appearance-none border rounded w-80 py-2 px-1 text-black"
                        type="file"
                        onChange={e => setImage(e.target.files)}
                    />

                    <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                        <button
                            className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
                            type="button"
                            onClick={() => props.close(false)}
                        >
                            Close
                        </button>
                        
                        <button
                        className="text-white bg-blue-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                        type="submit"
                        >
                            Submit
                        </button>
                    </div>
                  </form>
                </div>
                
              </div>
            </div>
          </div>
        </>
  );
};

export default Modal;