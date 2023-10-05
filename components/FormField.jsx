import React from 'react'

const FormField = ({  labelName,
  type,
  name,
  placeholder,
  value,
  handleChange,
  isSurpriseMe,
  handleSurpriseMe,}) => {
  return (
    <div>
   <div className="flex items-center gap-3 mb-2 my-5">
      <label
        htmlFor={name}
        className="block text-m font-medium text-gray-900"
      >
        {labelName}
      </label>
      {isSurpriseMe && (  //the parameter or props (isSurpriseMe) is present so that only suprise me button can be present beside the prompt(labelName) as in formfield we pass the parameter isSurpriseMe
        <button
          type="button"
          onClick={handleSurpriseMe}
          className="font-semibold text-xs bg-[#EcECF1] py-1 px-2 rounded-[9px] text-black"
        >
          Surprise me
        </button>
      )}

    </div>





    <div>
    <input
      type={type}
      id={name}
      name={name}
      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#6469ff] focus:border-[#6469ff] outline-none block w-full p-3"
      placeholder={placeholder}
      value={value}
      onChange={handleChange}
      required
    />
   </div>

    </div>
  )
}

export default FormField
