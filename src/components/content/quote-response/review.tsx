import Image from 'next/image'
import React from 'react'
import ItemsTable from '../quote/items-table'
import Terms from '../quote/terms'

const Review = () => {
    return (
        <div>
            <div className="border rounded-lg p-5 mb-6">
                <div className="flex justify-between items-center mb-5">
                    <h5 className="font-bold text-md">Request Information</h5>
                    <Image className='cursor-pointer' src="/icons/pencil-edit.svg" width={18} height={18} alt='edit icon' />
                </div>

                <div className="flex w-full text-sm">
                    <div className="w-1/3 flex flex-col gap-4 text-muted-soft">
                        <p>Title</p>
                        <p>RFQ No</p>
                        <p>Requestor</p>
                        <p>Status</p>
                        <p>Department</p>
                    </div>

                    <div className="w-1/3 flex flex-col gap-4 text-muted-dark font-medium">
                        <p>Request for Equipments</p>
                        <p>RQ #01234</p>
                        <p><span className="bg-[#FFECE5] rounded-full p-1">JD</span> Jane Doe <span className="text-[#98A2B3]"> Head Nurse, Paediatrics</span></p>
                        <p className="text-[#F56630] bg-[#FFECE5] px-1 rounded-full w-fit">Awaiting</p>
                        <p>Maternity</p>
                    </div>
                </div>
            </div>
            <ItemsTable />
            <Terms />
        </div>
    )
}

export default Review
