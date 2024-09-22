import react from 'react'
import { Button, Card, Divider, Input } from "@nextui-org/react";
// import { BiQuestionMark } from 'lucide-react';
import {Textarea} from "@nextui-org/react";
import frame129 from '../images/frame129.png'


const Invoice2 = () => {
  return (
    <>
      <main className='ml-9 mr-9'>
        <h2 className="text-3xl font-bold mb-6">Generate your invoice with AI</h2>

        <h3 className="md:text-xl bg-slate-800 text-white p-2 md:p-4 rounded-3xl md:pl-12">
        Got it! An invoice for Zuludesk Ltd. Since we have your business details on file, we'll use those for the invoice. What specific items or services are we invoicing Zuludesk Ltd for this time?
        </h3>

        <div className='flex justify-start items-center gap-1 pt-5 md:pt-0 md:py-6'>
          <h4 className="text-lg"> Items or services </h4>
          <h6 className='text-sm bg-pink-600 rounded-full w-3 h-3 flex justify-center p-2 text-white items-center'>?</h6>
        </div>

        <div className='border h-[17vh] rounded-2xl p-3'>
          <textarea
            className="w-full h-[8vh] border-none focus:border-none focus:outline-none focus:ring-0 p-2 align-top"
          />
          <img className='w-40' src={frame129}/>
        </div>
          <div className='md:pr-5 text-end py-5'>
          <Button className='text-sm bg-pink-600 rounded-xl w-[100%] md:w-44 text-white'>Generate</Button>
          </div>
        <Divider />


        <h6 className="text-center mt-9 md:mb-2 text-sm font-semibold italic">Invoice 1.0 generating</h6>
        <div className='bg-pink-700 py-3 md:py-0 md:pt-4 md:mx-40 px-16 md:px-60 h-52'>
          <div className='bg-white h-full'>
ss
          </div>
        </div>

      </main>
    </>
  )
}

export default Invoice2;