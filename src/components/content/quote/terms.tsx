import Image from 'next/image'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'

const Terms = () => {
    return (
        <div className="border p-6 rounded-lg">
            <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1" className='border-none'>
                    <AccordionTrigger className='hover:no-underline'>
                        <div className="flex gap-2 items-center">
                            <div className="">
                                <Image src="/icons/sign-doc.svg" width={30} height={30} alt="profile image" className="rounded-full" />
                            </div>
                            <div className="">
                                <h5 className="font-semibold text-[#1D2739]">Terms and Attachments</h5>
                                <p className="text-sm text-[#475367]">Review payment and delivery terms</p>
                            </div>
                        </div>
                    </AccordionTrigger>
                    <AccordionContent>
                        <div className="flex items-center gap-16">
                            <div className="w-1/ flex flex-col gap-3 text-muted-soft">
                                <p>Payment terms</p>
                                <p>Shipping method</p>
                                <p>Delivery schedule</p>
                                <p>Lead time</p>
                            </div>

                            <div className="w-1/ flex flex-col gap-3 text-muted-dark">
                                <p>Net 30</p>
                                <p>Courier sevices</p>
                                <p>Immediate delivery</p>
                                <p>10 days</p>
                            </div>
                        </div>
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </div>
    )
}

export default Terms
