import { CustomSelect } from '@/components/ui/select/custom-select'
import Image from 'next/image'
import React, { ChangeEvent, useState } from 'react'

const TermsAndAttachment = () => {
    const [imgPreview, setImgPreview] = useState<string | null>(null);

    const handleChange = async (e: ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files && e.target.files[0]
        if (file && !['image/jpeg', 'image/png'].includes(file.type)) {
            alert('Only images are allowed');
            return;
        }
        if (file && file?.size > 5242880) {
            alert('File too large');
            return;
        }
        const reader = new FileReader();
        reader.onload = () => {
            if (reader.result) {
                setImgPreview(reader.result as string);
            }
        };
        reader.readAsDataURL(file!);
    };

    return (
        <div>
            <h3 className="font-bold text-lg">Terms and Attachments</h3>
            <p className="text-sm text-muted mb-5">Provide detailed information on payment and delivery terms</p>

            <form>
                <div className="flex gap-10 items-center mb-6">
                    <div className="w-1/2">
                        <CustomSelect
                            name="oxygenConcentrator"
                            label='Payment Terms'
                            bgTransparent
                            defaultOption='Net 30'
                            options={[
                                { value: "net 40", label: "Net 40" },
                                { value: "net 20", label: "Net 20" },
                            ]}
                        />
                    </div>
                    <div className="w-1/2">
                        <CustomSelect
                            name="oxygenConcentrator"
                            label='Delivery Schedule'
                            bgTransparent
                            defaultOption='Immediate delivery'
                            options={[
                                { value: "Scheduled delivery", label: "Scheduled delivery" },
                                { value: "Immdiate delivery", label: "Immediate delivery" },
                            ]}
                        />
                    </div>
                </div>
                <div className="flex gap-10 mb-8">
                    <div className="w-1/2">
                        <CustomSelect
                            name="oxygenConcentrator"
                            label='Shipping Method'
                            bgTransparent
                            defaultOption='Courier service'
                            options={[
                                { value: "Courier service", label: "Blue" },
                                { value: "non-courier", label: "Non-courier" },
                            ]}
                        />
                    </div>

                    <div className="w-1/2">
                        <CustomSelect
                            name="oxygenConcentrator"
                            label='Lead Time'
                            bgTransparent
                            defaultOption='10 days'
                            options={[
                                { value: "10 days", label: "10 days" },
                                { value: "5 days", label: "5 days" },
                            ]}
                        />
                    </div>
                </div>

                <h3 className="font-bold">Attachments</h3>
                <p className="text-sm text-muted mb-5">Attach all necessary files or documents</p>
                {
                    imgPreview ? 
                    <div className="">
                        <Image src={imgPreview} width={400} height={500} alt="upload image" className="" />
                    </div>
                    :
                    <div className="border border-collapse mb-6 w-fit py-4 rounded-lg cursor-pointer">
                        <label htmlFor='banner' >
                            <Image src="/icons/upload.svg" width={400} height={500} alt="upload image" className="rounded-full" />
                        </label>
                    </div>
                }
                <input 
                    id='banner'
                    type="file" 
                    className='hidden'
                    accept="image/*"
                    onChange={handleChange}
                />
            </form>
        </div>
    )
}

export default TermsAndAttachment