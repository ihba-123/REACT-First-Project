import  {useState} from 'react'

function App() {
  const[Color,setColor] = useState("black");
  return (
    <div className="w-full duration-200 h-screen flex flex-wrap justify-center" style={{backgroundColor:Color}}>
        <div className='bg-white p-2  mx-40 flex flex-wrap absolute top-85 bottom-20 rounded-lg gap-2'>
      <button onClick={() => setColor("red") } className='bg-red-500 p-2 pl-5 pr-5 rounded-lg font-bold '>Red</button>
      <button onClick={() => setColor("Green") } className='bg-green-300 p-2 pl-5 pr-5 rounded-lg font-bold '>Green</button>
      <button onClick={() => setColor("Blue") } className='bg-blue-950 p-2 pl-5 pr-5 rounded-lg font-bold '>Blue</button>
      <button  onClick={() => setColor("Purple") } className='bg-purple-800 p-2 pl-5 pr-5 rounded-lg font-bold '>Purple</button>
      <button onClick={() => setColor("Yellow") } className='bg-yellow-300 p-2 pl-5 pr-5 rounded-lg font-bold '>Yellow</button>
      <button onClick={() => setColor("Orange") } className='bg-orange-500 p-2 pl-5 pr-5 rounded-lg font-bold '>Orange</button>
      <button onClick={() => setColor("pink") } className='bg-pink-500 p-2 pl-5 pr-5 rounded-lg font-bold '>Pink</button>
     

        </div>
    </div>
  )
}

export default App
