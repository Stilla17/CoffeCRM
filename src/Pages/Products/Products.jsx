import React, { useState } from "react";
import Nav from "../../Components/Nav/Nav";
import { Funnel, Plus } from "lucide-react";
import Button from "../../Components/Button/Button";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import { SearchIcon } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CustomTable } from "../../Components/table/CustomTabel";
import { ProductTable } from "./components/ProductTable";
import { useQuery } from "@tanstack/react-query";
import { getAllProductsQuery } from "../../queries";
import { ProductModal } from "./components/ProductModal";

const Products = () => {
  const [openModal, setOpenModal] = useState({open:false, type:""});

  const { data: products } = useQuery({ ...getAllProductsQuery() });
const handleOpenModal = (text, id) => {
  setOpenModal({open:true, type:text, id:id})
}
  return (
    <div>
      <ProductModal
        open={openModal}
        onClose={setOpenModal}
      />
      <Nav title={"Products"} description={"Manage your coffee inventory"}>
        <Button
          onClick={() => handleOpenModal("add")}
          text={"Add Product"}
          className={"bg-[#2d5f3f] text-white hover:bg-[#264f35]"}
        >
          <Plus size={18} />
        </Button>
      </Nav>
      <div className="flex items-center gap-6 mt-5">
        <InputGroup>
          <InputGroupInput placeholder="Search..." />
          <InputGroupAddon>
            <SearchIcon />
          </InputGroupAddon>
        </InputGroup>

        <Select>
          <SelectTrigger className="w-[300px]">
            <Funnel color="#6b6969" className="w-[20px]" />
            <SelectValue placeholder="Select a fruit" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Fruits</SelectLabel>
              <SelectItem value="apple">Apple</SelectItem>
              <SelectItem value="banana">Banana</SelectItem>
              <SelectItem value="blueberry">Blueberry</SelectItem>
              <SelectItem value="grapes">Grapes</SelectItem>
              <SelectItem value="pineapple">Pineapple</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <ProductTable
        handleOpenModal={handleOpenModal}
        rows={products?.data?.results ? products?.data?.results : []}
      />
    </div>
  );
};

export default Products;
