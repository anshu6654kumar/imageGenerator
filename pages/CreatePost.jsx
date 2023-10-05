import React from 'react'
import { useState } from 'react'
import {useNavigate} from 'react-router-dom';

import {preview} from '../assets';
import {getRandomPrompt} from '../utils'
import {FormField,Loader} from '../components'

const CreatePost = () => {
  const navigate = useNavigate();
  const [form, setForm]= useState({name:'',prompt:'',photo:''});
  const [generatingImg, setGeneratingImg]=useState(false);
  const [loading, setLoading]=useState(false);
 
  const generateImage= async()=>{
    if (form.prompt) {
      try {
        setGeneratingImg(true);
        const response = await fetch('https://dalle-arbb.onrender.com/api/v1/dalle', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            prompt: form.prompt,
          }),
        });

        const data = await response.json();
        setForm({ ...form, photo: `data:image/jpeg;base64,${data.photo}` });
      } catch (err) {
        alert(err);
      } finally {
        setGeneratingImg(false);
      }
    } else {
      alert('Please provide proper prompt');
    }
  }

 const handleSubmit=()=>{

 }
 const handleChange=(e)=> {setForm({ ...form, [e.target.name]: e.target.value }); //this function used for forms invokes when 
// there is change in input of NAME input, so in parameter of form is change the name what is gets from the 
// e.target.value and through setForm name is updated
  }
const handleSurpriseMe=()=>{  const randomPrompt = getRandomPrompt(form.prompt);
  setForm({ ...form, prompt: randomPrompt });

}

  return (
  <section className='max-w-7xl mx-auto'>
     <div>
        <h1 className='font-extrabold text-[#222328] text-[32px]'>
         Create
        </h1>
        <p className="mt-2 text-[#666e75] text-[14px] max-w-[500px]">Create through a collection of imaginative and visually stunning images through by WALL-E AI and share them with your community</p>
      </div>


      <form className='mt-16 max-w-3xl' onSubmit={handleSubmit}>
       <div className='flex flex-col gap'>
       <FormField 
       labelName= "Your Name"
       type = "text"
       name = "name"
       placeholder = "Anshu"
       value = {form.name}
       handleChange={handleChange}// all these are props
       />


    
      <FormField
       labelName= "Prompt"
       type = "text"
       name = "name"
       placeholder = "A plush toy robot sitting against a yellow wall"
       value = {form.prompt}
       handleChange={handleChange}
       isSurpriseMe
       handleSurpriseMe={handleSurpriseMe}// handleSurpriseMe invokes when Surprise button is pressed 
       />


         {/* Image Rendering part */}


            <div className="relative my-8 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500           focus:border-blue-500 w-64 p-3 h-64 flex justify-center items-center">
              { form.photo ? (
              <img
                src={form.photo}
                alt={form.prompt}
                className="w-full h-full object-contain"
              />
             ) : (
              <img
                src={preview}
                alt="preview"
                className="w-9/12 h-9/12 object-contain opacity-40"
              />
             )}

            {generatingImg && (  //the meaning of this dynamic code is that when image is generating(or while generating)Loader will start
              <div className="absolute inset-0 z-0 flex justify-center items-center bg-[rgba(0,0,0,0.5)] rounded-lg ">
                <Loader />
              </div>
            )}
          </div> 
       </div>


       {/* Generate button  */}


       <div className="mt-5 flex gap-5">
          <button
            type="button"
            onClick={generateImage}
            className=" text-white bg-green-700 font-medium rounded-md text-sm w-full sm:w-auto px-5 py-2.5 text-center"
          >
            {generatingImg ? 'Generating...' : 'Generate'}
          </button>
        </div>
   

         {/* Share button part */}

          <div className="mt-10">
          <p className="mt-2 text-[#666e75] text-[14px]">** Once you have created the image you want, you can share it with others in the community **</p>
          <button
            type="submit"
            className="mt-3 text-white bg-[#6469ff] font-medium rounded-md text-sm w-full sm:w-auto px-5 py-2.5 text-center"
          >
            {loading ? 'Sharing...' : 'Share with the Community'}
          </button>
         </div>





      </form>
     


  </section>
  )
}

export default CreatePost
