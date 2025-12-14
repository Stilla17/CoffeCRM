import { FolderOpen, Plus } from 'lucide-react'
import React from 'react'
import Button from '../../Components/Button/Button'
import Nav from '../../Components/Nav/Nav'

const Dashboard = () => {
  return (
    <>
      <Nav title={"Dashboard"} description={"Overview of your coffee inventory"}>
        <Button text={"Categories"} className={"bg-white hover:bg-[#fafafa]"}>
          <FolderOpen size={18} />
        </Button>
        <Button text={"Add Product"} className={"bg-[#2d5f3f] text-white hover:bg-[#264f35]"}>
          <Plus size={18} />
        </Button>
      </Nav>
    </>
  )
}

export default Dashboard