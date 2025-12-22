import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/Components/ui/table";
import { Button } from "@/Components/ui/button";
import { Delete, SquarePen, Trash2 } from "lucide-react";


const invoices = [
  {
    invoice: "INV001",
    paymentStatus: "Paid",
    totalAmount: "$250.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV002",
    paymentStatus: "Pending",
    totalAmount: "$150.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV003",
    paymentStatus: "Unpaid",
    totalAmount: "$350.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV004",
    paymentStatus: "Paid",
    totalAmount: "$450.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV005",
    paymentStatus: "Paid",
    totalAmount: "$550.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV006",
    paymentStatus: "Pending",
    totalAmount: "$200.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV007",
    paymentStatus: "Unpaid",
    totalAmount: "$300.00",
    paymentMethod: "Credit Card",
  },
];

export function ProductTable({ columns, rows, handleOpenModal }) {
  return (
    <div className=" rounded-lg border overflow-hidden mt-5 border-[#ddcfc1] shadow-md">
      <Table className=" bg-white  ">
        <TableHeader className="bg-[#F5F1ED]">
          <TableRow>
            <TableHead>Product</TableHead>
            <TableHead>SKU</TableHead>
            <TableHead>Category</TableHead>
            <TableHead>Stock</TableHead>
            <TableHead>Imported</TableHead>
            <TableHead>Exported</TableHead>
            <TableHead>Price</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {rows.map((item, index) => (
            <TableRow key={index}>
              <TableCell className="flex items-center gap-2">
                <img className="w-8" src={item.image} alt="" />
                {item.name}
              </TableCell>
              <TableCell>{item.sku ? item.sku : "-"}</TableCell>
              <TableCell>{item.category.name}</TableCell>
              <TableCell>{item.quantity}</TableCell>
              <TableCell>-</TableCell>
              <TableCell>-</TableCell>
              <TableCell>{item.price_out}</TableCell>
              <TableCell>
                <span className="border px-2 py-0.5 border-[#18ae18] rounded-2xl text-green-600">
                  {" "}
                  active
                </span>
              </TableCell>
              <TableCell className="text-right">
                <Button
                  onClick={() => handleOpenModal("edit", item.id && "")}
                  className="cursor-pointer"
                  variant="ghost"
                  size="sm"
                >
                  <SquarePen />
                </Button>
                <Button
                  onClick={() => handleOpenModal("delete", item.id && "")}
                  className="cursor-pointer"
                  variant="ghost"
                  size="sm"
                >
                  <Trash2 color="red" />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={3}>Total</TableCell>
            <TableCell className="text-right">$2,500.00</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </div>
  );
}
