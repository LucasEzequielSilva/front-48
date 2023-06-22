import ClassComponent from './ClassComponent'

function App() {
    
  return (
    <div className="w-full min-h-screen flex flex-col justify-center gap-4 bg-[#F0F2F5]">
      {/* DETAIL */}
      <div className='flex flex-col md:flex-row  items-center px-4 gap-2'>
        <img className='w-full h-1/2 md:h-full md:w-1/2 object-cover' src="https://cdn0.ecologiaverde.com/es/posts/8/0/8/ficus_lyrata_cuidados_2808_600_square.jpg" alt="lyrata" />
        {/* EL OTRO FRAME */}
        <div className='md:w-1/2 flex flex-col gap-2  items-start justify-center'>
          <p className='text-parraph'>ÁRBOL</p>
          <h1 className='font-medium text-3xl text-secondary'>Ficus Lyrata</h1>
          <p className='text-sm font-medium text-secondary'>$70</p>
          <hr className='w-full py-4'/>
          <p className='text-sm font-medium text-secondary'>Only 6 items in stock</p>
          <p className='font-semibold underline text-secondary'>DESCRIPTION</p>
          <p className='text-secondary text-xs'>your own terrarium, and then walk you through the process step-by-step to create your miniature environment with unique plants to take home.
We’re excited to welcome you into our brand new workshop space located at 5-2501 Alyth Road SE, where you’ll enjoy a 1.5 – 2 hour interactive class. Please see the map for location details as all workshops are held at Plant Plant (our sister shop) just minutes away from our mainstreet Inglewood location.</p>
        </div>
      </div>
      <div className='bg-gradient-to-r from-[#566270] to-[#283444] h-28 w-full flex justify-center items-center text-primary'>
        footer
      </div>
    </div>
  );
}

export default App;
