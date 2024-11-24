import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqs } from "@/constants/data";
import { FAQ } from "@/types/types";

const FrequentlyAskedQuestions = () => {
  return (
    <div className="p-8 bg-white shadow-lg rounded-lg">
      <h1 className="text-2xl font-semibold text-center text-primaryColor mb-4">
        Frequently Asked Questions
      </h1>
      <Accordion type="single" collapsible className="w-full">
        {faqs.map(({ id, question, answer }: FAQ) => (
          <AccordionItem key={id} value={id}>
            <AccordionTrigger>{question}</AccordionTrigger>
            <AccordionContent>{answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default FrequentlyAskedQuestions;
