'use client'
import React, {useEffect} from 'react';
import Image from 'next/image';
import { useForm } from "react-hook-form";
import axios from 'axios';

export const Footer = () => {
  const [success, setSuccess] = React.useState(false)
  const { register, handleSubmit, reset, formState: { errors, isSubmitSuccessful  } } = useForm();


  const formId = "1cc8d420-11f1-497f-bb83-23077bfe9c52"
  const portalId = '43976843'

const onSubmit = async (data) => {
  try {
    const response = await axios.post(
      `https://api.hsforms.com/submissions/v3/integration/submit/${portalId}/${formId}`,
      {
        fields: [
          {
            "objectTypeId": "0-1",
            "name": "firstname",
            "value": data.nome
          },
          {
            "objectTypeId": "0-1",
            "name": "phone",
            "value": data.telefone
          },
          {
            "objectTypeId": "0-1",
            "name": "email",
            "value": data.email
          },
          {
            "objectTypeId": "0-1",
            "name": "project",
            "value": data.project
          }
        ],
        "context": {
          "pageUri": "https://www.italineadaz.com.br/form",
          "pageName": "Página DAZ"
        },
      }
    );
    if (response.status === 200) {
      setSuccess(response.data.inlineMessage)
    }
  } catch (error) {
    console.error(error);
  }
};

useEffect(() => {
  if (isSubmitSuccessful) {
    reset({
    nome: '',
    telefone: '',
    email: '',
    project: '',
  })
}

}, [isSubmitSuccessful, reset])

  return (
    <footer className="bg-[#0D3680] shadow mt-4 w-full bottom-0 left-0 text-white">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <div className='gap-4 flex flex-col md:ml-4'>
            <span className="md:text-xl tracking-wider font-semibold">
              Contato
            </span>
            <div className='text-xs md:text-sm font-thin tracking-wide leading-tight'>
              <p className='uppercase font-light'>Italínea Daz</p>
              <p>Móveis planejados em Uberlândia</p>
              <p>Avenida Afonso Pena, 3013 Brasil</p>
              <p>Uberlândia - MG</p>
              <p>Telefone: (34) 3277-3791</p>
            </div>
          </div>
          <div className='min-w-[30%]'>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="my-4">
                <input {...register("nome")} type="text" id="nome" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md block w-full p-2.5 " placeholder="Seu nome" required />
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
              {success && <p className='text-lg font-bold'>{success}</p>}
            </form>
          </div>
        </div>
        <hr className="my-6 border-white border-1 opacity-25 sm:mx-auto lg:my-8" />
        <span className="block text-xs text-gray-400 sm:text-center">© 2023 <a href="#" className="hover:underline">Italínea Daz Uberlândia</a>. Todos os direitos reservados.</span>
      </div>
    </footer>


  )
}
