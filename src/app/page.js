'use client'
import Image from 'next/image'
import Navbar from '@/components/Navbar'
import { useForm } from "react-hook-form";

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
      <div className="grid gap-1 md:gap-4">
        <div>
          <Image width={1400} height={800} src="/ambiente1.jpeg" alt="" className="h-auto max-w-full rounded-lg" />
        </div>
        <div className="grid grid-cols-4 gap-1 md:gap-4">
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
};

const InfoSection = () => {
  return (
    <section className="py-24 lg:py-32 overflow-hidden px-4 md:px-0 md:my-24 bg-gray-100">
      <div className="container px-4 mx-auto">
        <div className="flex flex-wrap md:items-start -m-8">
          <div className="w-full md:w-1/2 p-4">
            <Image width={800} height={500} className="mx-auto rounded-lg transform hover:-translate-y-1 transition duration-500" src="/info-mock.jpeg" alt="" />
          </div>
          <div className="w-full md:w-1/2 p-8">
            <div className="max-w-xl">
              <div className="flex flex-wrap -m-6">
                <div className="w-full p-6">
                  <div className="flex flex-col flex-wrap -m-2">
                    <div className="w-auto">
                      <div className="flex items-center justify-center text-xl text-white tracking-wide px-4 py-2 bg-[#0d3886] rounded-se-3xl rounded-md">5 anos de garantia</div>
                    </div>
                    <div className="flex-1">
                      <p className="font-light text-center md:text-left">Os produtos Italínea são fabricados com materiais de alta qualidade visando máxima durabilidade.</p>
                    </div>
                  </div>
                </div>
                <div className="w-full p-6">
                  <div className="flex flex-col flex-wrap -m-2">
                    <div className="w-auto">
                      <div className="flex items-center justify-center text-xl text-white tracking-wide px-4 py-2 bg-[#0d3886] rounded-se-3xl rounded-md">Líder no Mercado</div>
                    </div>
                    <div className="flex-1">
                      <p className="font-light text-center md:text-left">Somos a maior fábrica de móveis planejados da América Latina com anos de atuação e milhares de projetos entregue..</p>
                    </div>
                  </div>
                </div>
                <div className="w-full p-6">
                  <div className="flex flex-col flex-wrap -m-2">
                    <div className="w-auto">
                      <div className="flex items-center justify-center text-xl text-white tracking-wide px-4 py-2 bg-[#0d3886] rounded-se-3xl rounded-md">Financeira própria</div>
                    </div>
                    <div className="flex-1">
                      <p className="font-light text-center md:text-left">Na compra dos produtos Italínea, você pode contar com a ItalíneaCredi. Assim, você pode mobiliar toda a sua casa com facilidade de pagamento..</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
};

const Banner = () => {
  return (
    <section className="py-8 tracking-wide">
      <div className="container px-4 mx-auto">
        <div className="relative py-24 px-16 text-center rounded overflow-hidden bg-cover bg-center" style={{ backgroundImage: "url('/ambiente4.jpeg')" }}>
          <div className="absolute inset-0 bg-[#0D3680] bg-opacity-90"></div>
          <div className="relative">
            <span className='text-white font-light text-center'>Móveis Planejados</span>
            <h3 className="my-2 text-2xl font-medium text-white">
              PAGUE EM ATÉ 36X COM
              A PRIMEIRA PARCELA PARA ATÉ 150 DIAS
            </h3>
            <p className="mb-4 text-md font-light text-blue-100">Fale agora direto com o projetista.</p>
            <a className="inline-flex items-center" href="#orcamento">
              <button type="submit" className="flex items-center text-white bg-green-500 hover:bg-green-600 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">
                <span>Solicitar orçamento</span>
                <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                </svg>
              </button>
            </a>
          </div>
        </div>
      </div>
    </section >
  )
}

export default function Home() {

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => console.log(data)

  return (
    <>
      <main className="min-h-screen m-auto max-w-7xl	">
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
            <form onSubmit={handleSubmit(onSubmit)}> 
              <div className="my-4">
                <input {...register("nome")}  type="text" id="nome" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md block w-full p-2.5 " placeholder="Seu nome" required />
              </div>
              <div className="mb-4">
                <input {...register("telefone", { required: true })} type="tel" id="telefone" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md  block w-full p-2.5 " placeholder="Seu telefone" required />
              </div>
              <div className="mb-4">
                <input {...register("email", { required: true })} type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md  block w-full p-2.5 " placeholder="Seu e-mail para contato" required />
              </div>
              <div className="mb-4">
                <input {...register("project", { required: true })} type="text" id="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md  block w-full p-2.5" placeholder="Qual é o seu projeto?" required />
              </div>
              <button type="submit" className="flex items-center text-white bg-green-500 hover:bg-green-600 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">
                <span>Solicitar orçamento</span>
                <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                </svg>
              </button>
            </form>
          </div>
        </section>
        <InfoSection />
        <Banner />
        <GallerySection />
      </main>
    </>
  )
}
