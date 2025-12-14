import { Plus } from 'lucide-react'
import React from 'react'
import Button from '../../Components/Button/Button'
import Nav from '../../Components/Nav/Nav'

const Categories = () => {
  return (
    <div>
      <Nav title={"Categories"} description={"Organize your products into categories"}>
        <Button text={"Add Category"} className={"bg-[#2d5f3f] text-white hover:bg-[#264f35]"}>
          <Plus size={18} />
        </Button>
      </Nav>
    </div>
  )
}

export default Categories