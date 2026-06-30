import ContactForm from "@/features/contact/ContactForm";
import ContactHeader from "@/features/contact/ContactHeader";
import ContactInfo from "@/features/contact/ContactInfo/ContactInfo";
import FAQSection from "@/features/contact/FAQSection";
import React from "react";

const page = () => {
  return (
    <section className="py-24">
      <ContactHeader />
      <div className="container">
        <div className="grid gap-16 lg:grid-cols-2 mb-12">
          <ContactForm />
          <ContactInfo />
        </div>
      </div>
      <FAQSection />
    </section>
  );
};

export default page;
