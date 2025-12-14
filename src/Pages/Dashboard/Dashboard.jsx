import { FolderOpen, Plus, TrendingDown, TrendingUp } from 'lucide-react'
import React from 'react'
import Button from '../../Components/Button/Button'
import Nav from '../../Components/Nav/Nav'
import TotalCard from '../../Components/TotalCard/TotalCard'
import { Package } from 'lucide-react'
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
      <div className='grid grid-cols-4 mt-8 gap-6'>
        <TotalCard title={"Total Products"} total={"2"} description={"2 active"}>
          <Package size={26} className="text-[#2d5f3f]" />
        </TotalCard>
        <TotalCard title={"Total Stock"} total={"213231.0"} description={"units in inventory"}>
          <TrendingUp size={26} color='#3e2723' className="text-[#2d5f3f]" />
        </TotalCard>
        <TotalCard title={"Total Imported"} total={"21.0"} description={"units received"}>
          <TrendingUp size={26} className="text-[#2d5f3f]" />
        </TotalCard>
        <TotalCard title={"Total Exported"} total={"213.0"} description={"units shipped"}>
          <TrendingDown size={26} color='#8d6e63' className="text-[#2d5f3f]" />
        </TotalCard>
      </div>
    </>
  )
}

export default Dashboard