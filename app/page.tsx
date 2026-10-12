import Image from 'next/image';

export default function Home() {
  return (
    <div className="h-screen flex justify-center items-center p-6">
      <div className="text-center">
        <Image
          className="rounded-2xl mx-auto"
          alt="Logo"
          src="/logo.jpeg"
          width="170"
          height="55"
        />

        <h2 className="opacity-70 font-extrabold mb-3 mt-6"><span className="text-[#fc8b7a]">Cheraphs</span> Farms</h2>
        <p className="mb-10 opacity-70">Engaged in general agricultural business.</p>

        <div className="flex gap-3 flex-wrap  justify-center">
          <div className="flex-[40%] sm:flex-2 rounded-2xl bg-[#fc8b7a] p-3 items-center flex">
            <Image src="/grain.png" alt="Grane" width="200" height="100" className="block" />
          </div>
          <div className="flex-[40%] sm:flex-4 bg-[#c05749] rounded-2xl p-3">
            <Image src="/cow.png" alt="" width="250" height="209" />
          </div>
          <div className="py-20 flex-[80%] sm:flex-6 rounded-2xl"
          
          style={{
            backgroundImage: `url("/maize.png")`, 
            backgroundSize: 'cover', 
            backgroundPosition: 'top'
          }}
          >
          </div>
        </div>

        <div className='mt-10 text-[#c05749] flex justify-center'>
          This site is <span className="block rounded-2xl px-2 ml-1 text-white bg-[#c05749]">Under Construction</span>
        </div>


      </div>
    </div>
  );
}
