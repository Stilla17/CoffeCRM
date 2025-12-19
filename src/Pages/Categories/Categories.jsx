import { Plus } from "lucide-react";
import Button from "../../Components/Button/Button";
import Nav from "../../Components/Nav/Nav";
import { CategoryCard } from "./components/CategoryCard";
import { useQuery } from "@tanstack/react-query";
import { getAllCategoriesQuery } from "../../queries";
import AddCategoryModal from "./components/CreateCategory";
import { useState } from "react";

const Categories = () => {
  const [openModal, setOpenModal] = useState(false);

  const { data: categories } = useQuery({ ...getAllCategoriesQuery() });

  return (
    <div>
      <Nav
        title={"Categories"}
        description={"Organize your products into categories"}
      >
        <Button
          text={"Add Category"}
          className={"bg-[#2d5f3f] text-white hover:bg-[#264f35]"}
          onClick={() => setOpenModal(true)}
        >
          <Plus size={18} />
        </Button>
      </Nav>
      <AddCategoryModal open={openModal} onClose={setOpenModal} />

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-5">
        {categories?.data?.results?.map((item, index) => (
          <CategoryCard key={index} name={item.name} />
        ))}
      </div>
    </div>
  );
};

export default Categories;
