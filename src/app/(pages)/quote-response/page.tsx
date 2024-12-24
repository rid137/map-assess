"use client"

import { useState } from 'react';
import { toast } from 'sonner';
import RequestInformation from '@/components/content/quote-response/request-information';
import Review from '@/components/content/quote-response/review';
import TermsAndAttachment from '@/components/content/quote-response/terms-and-attachment';
import Breadcrumb from '@/components/shared/breadcrumb';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { ResponseSteps } from '@/utils/enum';

// Step texts for the response steps
const stepTexts = [
  {   
    step: ResponseSteps.RequestInformation, 
    title: "Request Information",
    description: "Provide details about the RFQ"

  },
  {   
    step: ResponseSteps.TermsAndAttachments, 
    title: "Terms and Attachments",
    description: "Payment and delivery terms"
  },
  {   
    step: ResponseSteps.Review, 
    title: "Review",
    description: "Confirm all information provided"
  },
];
  
  // Component mapping
const stepComponents: Record<ResponseSteps, React.FC> = {
  [ResponseSteps.RequestInformation]: RequestInformation,
  [ResponseSteps.TermsAndAttachments]: TermsAndAttachment,
  [ResponseSteps.Review]: Review,
};

const QuoteResponse = () => {
  const [currentStep, setCurrentStep] = useState<ResponseSteps>(ResponseSteps.RequestInformation);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Handle cancel button click
  const handleBack = () => {
    const currentIndex = stepTexts.findIndex((step) => step.step === currentStep);
    if (currentIndex > 0) {
      setCurrentStep(stepTexts[currentIndex - 1].step);
    }
  };

  // Get the component for the current step
  const CurrentComponent = stepComponents[currentStep];

  // Handle next button click
  const handleNext = () => {
    if (currentStep === ResponseSteps.Review) {
      setIsModalOpen(true);
    } else {
      const currentIndex = stepTexts.findIndex((step) => step.step === currentStep);
      if (currentIndex < stepTexts.length - 1) {
      setCurrentStep(stepTexts[currentIndex + 1].step);
    }
    }
  };

  // Handle submit button click and simulate endpoint call
  const handleSubmit = async () => {
    setIsLoading(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      toast.success("RFQ ID sent successfully!")
    } catch (error) {
      toast.error("An error occurred during submission.");
    } finally {
      setIsLoading(false);
      setIsModalOpen(false);
    }
  };

    return (
        <section className='p-6'>
            <Breadcrumb
              parent="Quotes"
              current="Quote Response"
            />
            {/* Steps */}
            <div className="border rounded-lg p-5 flex items-center mb-6 w-full my-6">
              {stepTexts.map((step, index) => (
                <div className="flex gap-4 items-center w-1/3" key={index}>
                  <div 
                    className={`flex items-center justify-center rounded-full size-10 ${currentStep === step.step ? "text-white bg-primary": stepTexts.findIndex((s) => s.step === currentStep) > stepTexts.findIndex((s) => s.step === step.step) ? "text-[#0F973D] bg-[#E7F6EC]" : "border"}`}>
                    {index + 1}
                  </div>
                  <div className="">
                    <h5 className="font-semibold text-sm text-[101928]">{step?.title}</h5>
                    <p className="text-sm text-[#475367]">{step?.description}</p>
                  </div>
                </div>
              ))}
            </div>
              
            <div className="border rounded-lg p-5 w-full">
              {/* Dynamic components */}
                <CurrentComponent />

                {/* Control buttons */}
                <div className="border-t py-4 flex justify-end">
                  <div className="flex items-center gap-2">
                      <Button variant="ghost" onClick={handleBack}>Cancel</Button>
                      <Button variant="outline" >Save as draft</Button>
                      <Button  className='bg-primary' onClick={handleNext}>{currentStep === ResponseSteps.Review ? "Submit" : "Continue"}</Button>
                  </div>
                </div>
            </div>

            {/* Confirmantion modal */}
            <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Confirmation</DialogTitle>
                  <DialogDescription className='text-[#475367]'>
                  You are about to submit this quote in response to RFQ ID, this will immediately be sent to the client “Westend Clear Hospital”. Are you sure you want to proceed?
                  </DialogDescription>
                </DialogHeader>
                <DialogFooter>
                  <Button variant="ghost" onClick={() => setIsModalOpen(false)}>Cancel</Button>
                  <Button onClick={handleSubmit} loading={isLoading}>
                    Continue
                  </Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
        </section>
    )
}

export default QuoteResponse
