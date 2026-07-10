import React from 'react'
//import url from './components/url.jsx'
const App = () => {
  return (
  <div className="w-full h-screen flex flex-col items-center mt-2">
      <div className=' '>
        <h1 className='text-2xl'>hello</h1>
        <p>hello helo</p>
        <div className=''> 
            <input 
        className='pl-2 py-2 border-2 rounded-2xl'
        type="text" placeholder="Enter the url" />
        <button className='pl-1 py-2 bg-green-500 rounded-2xl border-2'>
          shorten now
        </button>
        </div>
      
      </div>
      <div className=''>
            <table className='flex flex-row border w-200 h-100 justify-between '>
              <td>shortLink</td>
              <td>orginal link</td>
              <td>QR code</td>
              <td>click</td>
              <td>status</td>
              <td>date</td>
              
            </table>

      </div>
    </div>
      
   
  )
}

export default App
