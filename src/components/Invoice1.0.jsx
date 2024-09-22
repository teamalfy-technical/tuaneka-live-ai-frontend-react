import react from 'react'
import { Button, Card, Divider, Input } from "@nextui-org/react";
// import { BiQuestionMark } from 'lucide-react';
import {Textarea} from "@nextui-org/react";


const Invoice1 = () => {
  return (
    <>
      <main className='ml-9 mr-9'>
        <h2 className="text-3xl font-bold mb-6">Generate your invoice with AI</h2>

        <h3 className="text-xl bg-slate-800 text-white p-4 rounded-3xl pl-12">Fantastic! Let's get started on your invoice. Could you tell me the name of the client this invoice is for?</h3>

        <div className='flex justify-start items-center gap-1 py-6'>
          <h4 className="text-lg mb-2">Suggested Prompts </h4>
          <h6 className='text-sm bg-pink-600 rounded-full w-3 h-3 flex justify-center p-2 text-white items-center'>?</h6>
        </div>

        <div className=''>
          <textarea
            className="w-full h-[15vh] rounded-2xl border-slate-300 border-2 focus:border-none focus:outline-none  p-2 align-top"
          />
          <div className=' text-end'>
          <Button className='text-sm bg-pink-600 rounded-xl w-44 text-white mt-5'>Generate</Button>
          </div>
        </div>
        <Divider />


        <h6 className="text-center mt-9 mb-2 text-sm font-semibold italic">Invoice 1.0 generating</h6>
        <div className='bg-pink-700 pt-4 mx-40 px-60 h-52'>
          <div className='bg-white h-full'>
ss
          </div>
        </div>

      </main>
    </>
  )
}

export default Invoice1;