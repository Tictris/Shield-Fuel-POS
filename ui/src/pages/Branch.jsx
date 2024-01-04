import React, { useState } from 'react'

import Card from '../components/Card'
import BranchTable from '../components/BranchTable'
import CreateBranchButton from '../components/CreateBranchButton'
import SearchBranchInput from '../components/SearchBranchInput'
import Modal from '../components/Modal'
import RequestBranchTable from '../components/RequestBranchTable'

const Branch = ({ onClick, onClose }) => {

  const [isOpen, setisOpen] = useState(false)

  const [activeTab, setActiveTab] = useState('tab1')

  return (
    <>
      <div className="pb-4 flex justify-end gap-x-4">
        <div className="flex justify-between items-center w-full">
          <div className='flex justify-between gap-x-3'>
            <a href='#' className={`inline-block p-1 font-medium hover:text-color1 ${activeTab === 'tab1' ? 'border-b-2 border-color1 text-color1' : ''}`} onClick={() => setActiveTab('tab1')}>Branch List</a>
            <a href='#' className={`inline-block p-1 font-medium hover:text-color1 ${activeTab === 'tab2' ? 'border-b-2 border-color1 text-color1' : ''}`} onClick={() => setActiveTab('tab2')}>Request Branch</a>
          </div>

          <div className='flex justify-between gap-x-4'>
            <SearchBranchInput/>
            <CreateBranchButton onClick={() => setisOpen(true)}/>
            <Modal isOpen={isOpen} onClose={() => setisOpen(false)}/>
          </div>
        </div>
        
      </div>

     
      <Card>
        <div>
          {
            activeTab === "tab1" ? <BranchTable/> : <RequestBranchTable/>
          }
        </div>
      </Card>
    </>
    
  )
}

export default Branch