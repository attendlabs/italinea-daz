import Image from 'next/image'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'
import { Footer } from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

const HeroSection = () => {
  return (
    <section>
      <Image src={'/section-bg1.jpeg'} width={1400} height={800} sizes={"100vw"} />
    </section>
  )
};

const GallerySection = () => {
  return (
    <section className='mx-6 md:mx-24'>
      <div class="grid gap-1 md:gap-4">
        <div>
          <Image width={1400} height={800} src="/ambiente1.jpeg" alt="" className="h-auto max-w-full rounded-lg" />
        </div>
        <div class="grid grid-cols-4 gap-1 md:gap-4">
          <div>
            <Image width={400} height={300} src="/ambiente2.jpeg" alt="" className="h-auto max-w-full rounded-lg" />
          </div>
          <div>
            <Image width={400} height={300} src="/ambiente3.jpeg" alt="" className="h-auto max-w-full rounded-lg" />
          </div>
          <div>
            <Image width={400} height={300} src="/ambiente4.jpeg" alt="" className="h-auto max-w-full rounded-lg" />
          </div>
          <div>
            <Image width={400} height={300} src="/ambiente5.jpeg" alt="" className="h-auto max-w-full rounded-lg" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default function Home() {
  return (
    <>
      <main className="min-h-screen">
        <Navbar />
        <HeroSection />

        {/* Solicite seu orçamento */}
        <section id='orcamento' className='bg-[#0D3680] max-w-[80%] mx-auto my-10 rounded-2xl py-6 px-6 md:px-24 md:flex justify-between items-center'>
          <div className='md:w-1/2 font-thin tracking-wide'>
            <h2 className='text-white text-center text-xl md:text-2xl mb-6'>
              Solicitando um orçamento agora você garante uma condição especial em nossa loja.
            </h2>
            <h2 className='text-white text-center text-xl md:text-2xl'>
              Somos modernos como você, experimente nosso atendimento.
            </h2>
          </div>
          <div className='md:w-1/3'>
            <form>
              <div class="my-4">
                <input type="text" id="nome" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md block w-full p-2.5 " placeholder="Seu nome" required />
              </div>
              <div class="mb-4">
                <input type="tel" id="telefone" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md  block w-full p-2.5 " placeholder="Seu telefone" required />
              </div>
              <div class="mb-4">
                <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md  block w-full p-2.5 " placeholder="Seu e-mail para contato" required />
              </div>
              <div class="mb-4">
                <input type="text" id="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md  block w-full p-2.5" placeholder="Qual é o seu projeto?" required />
              </div>
              <button type="submit" className="flex items-center text-white bg-green-500 hover:bg-green-600 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">
                <span>Solicitar orçamento</span>
                <svg class="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                </svg>
              </button>
            </form>
          </div>
        </section>
        <GallerySection />

      </main>
    </>
  )
}
