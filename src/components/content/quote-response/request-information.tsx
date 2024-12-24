import { useState } from 'react'
import { format } from "date-fns"
import { CalendarIcon, Trash2 } from "lucide-react"
import { cn } from "@/lib/utils"
import { Calendar } from "@/components/ui/calendar"
import {Popover, PopoverContent, PopoverTrigger} from "@/components/ui/popover"
import { CustomSelect } from '@/components/ui/select/custom-select'
import { truncate } from '@/utils/helper'
import { CustomInput } from '@/components/ui/input/custom-input'
import { CustomTextarea } from '@/components/ui/textarea/custom-textarea'
import { Button } from '@/components/ui/button'

const RequestInformation = () => {
    const [date, setDate] = useState<Date>();

    return (
        <div>
            <h3 className="font-bold text-lg">Request for Quote</h3>
            <p className="text-sm text-muted mb-5">Fill out these details to send the RFQ</p>

            <form className='pb-4 border-b'>
                <div className="flex gap-10 items-center mb-6">
                    <div className="w-1/2">
                    <CustomInput
                        label="RFQ No"
                        name="rfq"
                        placeholder="RFQ-10234"
                    />
                    </div>
                    <div className="w-1/2">
                    <CustomInput
                        label="Title"
                        name="title"
                        placeholder="Request for Equipments"
                    />
                    </div>
                </div>
                <div className="flex gap-10 mb-6">
                    <div className="w-1/2">
                    <CustomInput
                        label="Department"
                        name="department"
                        placeholder="Maternity"
                    />
                    </div>
                    <div className="w-1/2 space-y-1">
                    
                    <label className="block text-sm font-medium">
                    Expected delivery date
                    </label>
                        <Popover>
                            <PopoverTrigger asChild>
                                <Button
                                variant={"outline"}
                                className={cn(
                                    " justify-start text-left font-normal bg-[#F0F2F5] h-9 w-full",
                                    !date && "text-muted-foreground"
                                )}
                                >
                                <CalendarIcon className='text-muted' />
                                {date ? format(date, "PPP") : <span className='text-muted'>Pick a date</span>}
                                </Button>
                            </PopoverTrigger>
                            <PopoverContent className="w-auto p-0">
                                <Calendar
                                mode="single"
                                selected={date}
                                onSelect={setDate}
                                initialFocus
                                />
                            </PopoverContent>
                            </Popover>
                            <p className="text-sm text-muted">Calculated based on lead time and issue date</p>
                    </div>
                </div>

                
                {/* TABLE */}
                <div className="border-t pt-4">
                    <h4 className="font-semibold text-lg">Add Items</h4>

                    <table className="table-auto border-collapse border-gray-300 w-full">
                    <thead>
                        <tr className="bg-[#F7F9FC] text-muted text-left">
                            <th className='p-3'>Items</th>
                            <th className='p-3'>Variant</th>
                            <th className='p-3'>Quantity</th>
                            <th className='p-3'>Price</th>
                            <th className='p-3'>{truncate("Expected delivery date", 15)}</th>
                            <th className='p-3'>Amount</th>
                            <th className='p-3'></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            Array.from({ length: 4 }).map((_, index) => (
                                <tr key={index}>
                            <td className="py-4 pr-5">
                                <CustomSelect
                                    name="oxygenConcentrator"
                                    type="select"
                                    defaultOption={index === 0 ? "Oxygen Concentrator" : index === 1 ? "Mechanical Ventilator" : index === 2 ? "Patient Monitor" : "Mechanical Ventilator"}

                                    options={[
                                        { value: "Oxygen Concentrator", label: "Oxygen Concentrator" },
                                        { value: "mechanical Ventilator", label: "Mechanical Ventilator" },
                                        { value: "patient Monitor", label: "Patient Monitor" },
                                        { value: "mechanical Ventilators", label: "Mechanical Ventilators" },
                                    ]}
                                />
                            </td>
                            <td className="py-4 pr-5">
                                <CustomSelect
                                    name="oxygenConcentrator"
                                    type="select"
                                    bgTransparent
                                    defaultOption='Blue'
                                    options={[
                                        { value: "blue", label: "Blue" },
                                        { value: "red", label: "Red" },
                                    ]}
                                />
                            </td>
                            <td className="py-4 pr-5 w-40">
                            <CustomInput
                                name="rfq"
                                iconRight
                                placeholder="100"
                                bgTransparent
                                icon={<p className='bg-[#F7F9FC] text-sm px-1 text-muted'>Pack</p>}
                            />
                            </td>
                            <td className="py-4 pr-5 w-40">
                                <CustomInput
                                    name="rfq"
                                    placeholder="100"
                                    bgTransparent
                                    icon={<p className='text-muted'>$</p>}
                                />
                            </td>
                            <td className="py-4 pr-5">
                                <Popover>
                                    <PopoverTrigger asChild>
                                        <Button
                                        variant={"outline"}
                                        className={cn(
                                            " justify-start text-left font-normal h-9 w-full",
                                            !date && "text-muted-foreground"
                                        )}
                                        >
                                        <CalendarIcon className='text-muted' />
                                        {date ? format(date, "PPP") : <span className='text-muted'>Pick a date</span>}
                                        </Button>
                                    </PopoverTrigger>
                                    <PopoverContent className="w-auto p-0">
                                        <Calendar
                                        mode="single"
                                        selected={date}
                                        onSelect={setDate}
                                        initialFocus
                                        />
                                    </PopoverContent>
                                </Popover>
                            </td>
                            <td className="py-4 pr-5">
                                $1200.00
                            </td>
                            <td className="py-4 pr-5">
                                <Trash2 className='text-[#98A2B3] h-5 cursor-pointer' />
                            </td>
                            </tr>
                            ))
                        }
                    </tbody>
                </table>
                </div>
            </form>

            <div className="flex my-4">
                <div className="w-1/4"></div>
                <div className="w-1/4"></div>
                <div className="w-1/4"></div>
                <div className="w-1/4 flex gap-16">
                    <div className="flex flex-col gap-4 text-[#475367]">
                        <p className="">Sub Total</p>
                    </div>
                    <div className="flex flex-col gap-4 text-[#475367]">
                    <p className="">$1200.00</p>
                    </div>
                </div>
            </div>

            <div className="w-[30rem] pb-6">
                <CustomTextarea
                    label="Note"
                    name="note"
                    placeholder="Enter note here"
                />
                <div className="flex justify-end text-muted text-sm mt-2">
                    0/200
                </div>
            </div>
        </div>
    )
}

export default RequestInformation
