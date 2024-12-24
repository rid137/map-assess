import Image from "next/image";
import { ColumnDef } from "@tanstack/react-table";
import { Checkbox } from "../ui/checkbox";
import { IQuoteItem } from "@/types";

export const columns: ColumnDef<IQuoteItem>[] = [
    {
      id: "select",
      header: ({ table }) => (
        <Checkbox
          checked={
            table.getIsAllPageRowsSelected() ||
            (table.getIsSomePageRowsSelected() && "indeterminate")
          }
          onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
          aria-label="Select all"
        />
      ),
      cell: ({ row }) => (
        <Checkbox
          checked={row.getIsSelected()}
          onCheckedChange={(value) => row.toggleSelected(!!value)}
          aria-label="Select row"
        />
      ),
      enableSorting: false,
      enableHiding: false,
    },
    {
      accessorKey: "itemName",
      header: "Items",
      cell: ({ row }) => (
        <div className="flex gap-2 items-center">
            <div className="">
                <Image src="/images/item.svg" width={40} height={40} alt="profile image" className="rounded-lg" />
            </div>
            <div className="">
                <h5 className="font-semibold text-sm">{row.original.itemName?.name}</h5>
                <p className="text-sm">{row.original?.itemName?.color}</p>
            </div>
        </div>
      ),
    },
    {
      accessorKey: "variant",
      header: "Variant",
      cell: ({ row }) => <div className="">{row.original?.variant}</div>,
    },
    {
        accessorKey: "quatity",
        header: "Quantity",
        cell: ({ row }) => <div className="">{row.original?.quantity}</div>,
      },
      {
        accessorKey: "price",
        header: "Price",
        cell: ({ row }) => {
          const price = parseFloat(row.getValue("price"))
          const formatted = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
          }).format(price)
     
          return <div className="">{formatted}</div>
        },
      },
    {
      accessorKey: "amount",
      header: "Amount",
      cell: ({ row }) => {
        const amount = parseFloat(row.getValue("amount"))
        const formatted = new Intl.NumberFormat("en-US", {
          style: "currency",
          currency: "USD",
        }).format(amount)
   
        return <div className="">{formatted}</div>
      },
    },
    {
        accessorKey: "expectedDeliveryDate",
        header: "Expected Delivery Date",
        cell: ({ row }) => <div className="">{row.original?.expectedDeliveryDate}</div>,
      },
  ]