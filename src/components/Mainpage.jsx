import react from 'react'
import { Button, Card, Input } from "@nextui-org/react";
// import { BiQuestionMark } from 'lucide-react';
import {Textarea} from "@nextui-org/react";


const Main = () => {
  return (
    <>
      <main className='mt-4 md:mt-0 ml-9 mr-9'>
        <h2 className=" text-2xl md:text-3xl font-bold md:mb-6">Generate your invoice with AI</h2>

        <h3 className="text-2xl font-semibold bg-slate-800 text-white p-4 rounded-3xl">Hello! Welcome to Tuaneka. How can we help you today?</h3>

        <div className='flex justify-start items-center gap-1 pt-6 md:pt-0 md:py-6'>
          <h4 className="font-semibold b-2">Suggested Prompts </h4>
          <h6 className='text-sm bg-pink-600 rounded-full w-2 h-2 flex justify-center p-2 text-white items-center'>?</h6>
        </div>

        <div className='border  md:h-[53vh] rounded-2xl p-3'>
          <div className="flex space-x-4">
            <Button className='text-sm bg-pink-600 rounded-full text-white'>I need a new invoice</Button>
            <Button className='hidden md:block text-sm bg-pink-600 rounded-full text-white'>send an invoice to teamafly ltd for 300.00 for webdesign services</Button>
          </div>
          <textarea
            className="w-full h-[28vh] md:h-[38vh] border-none focus:border-none focus:outline-none focus:ring-0 p-2 align-top"
          />
          <div className='pr-5 text-end'>
          <Button className='text-sm bg-pink-600 rounded-xl w-44 text-white'>Generate</Button>
          </div>
        </div>

      </main>
    </>
  )
}

export default Main;