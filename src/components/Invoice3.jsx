import react from 'react'
import { Button, Card, Divider, Input } from "@nextui-org/react";
// import { BiQuestionMark } from 'lucide-react';
import { Textarea } from "@nextui-org/react";
import group20 from '../images/Group.png'
import Backgroudrack from '../images/Background track.png'


const Invoice3 = () => {
  return (
    <>
      <main className='ml-9 mr-9'>
        <h2 className="text-3xl font-bold mb-6">Generate your invoice with AI</h2>

        <div className='bg-pink-700 md:mx-40 px-5 md:px-60 h-[68vh] md:h-[72vh] py-12 md:py-16'>
          <div className='bg-white h-full p-12'>
            <img className='' src={group20} />
            <img className='mt-9 mb-1' src={Backgroudrack} />
            <div className='flex justify-between'>
              <h1>Progress</h1>
              <h1>40%</h1>
            </div>
          </div>

        </div>

      </main>
    </>
  )
}

export default Invoice3;