"use client";

import { Form } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

import { Service } from "@/types/types";
import { apiService, postData } from "@/utilis/apiService";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import { toast } from "sonner";
import { z } from "zod";
import { Button } from "../ui/button";
import ReusableFormField from "./ReusableFormField";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Invalid email address." }),
  number: z
    .string()
    .min(10, { message: "Phone number must be at least 10 digits." }),
  service: z.string().min(1, { message: "Please select a service." }),
  message: z
    .string()
    .min(10, { message: "Message must be at least 10 characters." }),
});

function ContactForm() {
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [services, setServices] = useState<{ value: string; label: string }[]>(
    []
  );

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      number: "",
      service: "",
      message: "",
    },
  });

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const data: Service[] = await apiService("service");
        const formattedServices = data.map((service) => ({
          value: service.title,
          label: service.title,
        }));
        setServices(formattedServices);
      } catch (err: any) {
        console.error("Error fetching services:", err);
      }
    };

    fetchServices();
  }, []);

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const [contactResponse] = await Promise.all([
        postData("https://api.allroundbd.com/allround/contact", values),
      ]);

      setSuccessMessage(contactResponse.message);

      setErrorMessage("");
      form.reset();
      toast("Message Send Sucessfully");
    } catch (error: any) {
      setErrorMessage(error.message || "An unexpected error occurred.");
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <ReusableFormField
            name="name"
            placeholder="Your Name"
            description="Type your name"
            inputType="input"
          />
          <ReusableFormField
            name="email"
            placeholder="Your Email"
            description="Type your email address"
            inputType="input"
          />
          <ReusableFormField
            name="number"
            placeholder="Your Phone Number"
            description="Type your phone number"
            inputType="input"
          />
          <ReusableFormField
            name="service"
            placeholder="Specify the services you need"
            description="Select a service"
            inputType="select"
            selectOptions={services} // Pass formatted options
          />
        </div>

        <ReusableFormField
          name="message"
          placeholder="Your Message"
          description="Type your message"
          inputType="textarea"
        />

        <SubmitButton />
      </form>
    </Form>
  );
}

const SubmitButton = () => (
  <Button
    type="submit"
    className="flex items-center justify-center w-1/4 text-white bg-primaryColor hover:bg-primaryColor"
  >
    <span>Send Now</span>
    <ArrowRightIcon className="ml-2" />
  </Button>
);

export default ContactForm;
