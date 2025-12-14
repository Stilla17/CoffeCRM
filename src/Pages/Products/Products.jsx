import React from 'react'
import Nav from '../../Components/Nav/Nav'
import { Plus } from 'lucide-react'
import Button from '../../Components/Button/Button'
const Products = () => {
  return (
    <div>
      <Nav title={"Products"} description={"Manage your coffee inventory"} >
        <Button text={"Add Product"} className={"bg-[#2d5f3f] text-white hover:bg-[#264f35]"}>
          <Plus size={18} />
        </Button>
      </Nav>
    </div>
  )
}

export default Products