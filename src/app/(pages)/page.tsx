"use client"

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ItemsTable from '@/components/content/quote/items-table';
import Terms from '@/components/content/quote/terms';

const Quote = () => {
    const router = useRouter();
    const handleResponseClick = () => {
        router.push("/quote-response")
    };

    return (
        <section className='p-6'>
            <div className="flex items-center justify-between w-full mb-6">
                <div className="">
                    <h3 className="font-bold text-lg">Quote details</h3>
                    <p className="text-sm text-muted">Created on Wed, 12th June 2022, 08:00am</p>
                </div>
                <div className="flex items-center gap-2">
                    <Button  className='bg-primary' onClick={handleResponseClick}>Respond</Button>
                    <Button  className='bg-red-500' variant="destructive">
                        <X className='text-white' />
                        Reject
                    </Button>
                </div>
            </div>

            <div className="border rounded-lg p-5 mb-6">
                <div className="flex justify-between items-center mb-5">
                    <h5 className="font-bold text-md">Quote Information</h5>
                    <p className="text-sm text-muted">Expected delivery date : 2024-12-02</p>
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

                    <div className="border rounded-lg w-1/3 p-4">
                        <div className="flex items-center gap-2">
                            <Image src="/icons/client.svg" width={22} height={22} alt='client' />
                            <p className="text-[#475367]">Client</p>
                        </div>

                        <div className="flex gap-4 items-center mt-6">
                            <div className="bg-[#FFECE5] flex items-center justify-center rounded-full size-10">
                                W
                            </div>
                            <div className="">
                                <h5 className="font-medium text-sm text-[101928]">Westend Hospital</h5>
                                <p className="text-sm text-[#475367]">Clear street</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ItemsTable />
            <Terms />
        </section>
    )
}

export default Quote
