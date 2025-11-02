"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import HeroSection from "@/components/hero";
import {
Accordion,
AccordionContent,
AccordionItem,
AccordionTrigger,
} from "@/components/ui/accordion";
import { features } from "@/data/features";
import { testimonial } from "@/data/testimonial";
import { faqs } from "@/data/faqs";
import { howItWorks } from "@/data/howItWorks";

export default function LandingPage() {
return (
<> 

<HeroSection/>
  <section className="w-full py-20 bg-gray-50">
    <div className="container mx-auto px-4 md:px-6">
      <h2 className="text-3xl font-bold tracking-tight text-center mb-12 text-gray-800">
        Powerful Features for Your Career Growth
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {features.map((feature, index) => (
          <Card
            key={index}
            className="border-2 hover:border-[rgb(202,148,225)] transition-all duration-300 bg-white shadow-sm"
          >
            <CardContent className="pt-6 text-center flex flex-col items-center">
              <div className="flex flex-col items-center justify-center">
                {feature.icon}
                <h3 className="text-xl font-bold mb-2 text-gray-800">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  </section>

  <section className="w-full py-20 bg-white border-y border-gray-100">
    <div className="container mx-auto px-4 md:px-6">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto text-center">
        {[
          { label: "Industries Covered", value: "50+" },
          { label: "Interview Questions", value: "1000+" },
          { label: "Success Rate", value: "95%" },
          { label: "AI Support", value: "24/7" },
        ].map((stat, i) => (
          <div key={i} className="flex flex-col items-center space-y-2">
            <h3 className="text-4xl font-bold text-[rgb(202,148,225)]">
              {stat.value}
            </h3>
            <p className="text-gray-600">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  </section>

  <section className="w-full py-20 bg-gray-50">
    <div className="container mx-auto px-4 md:px-6">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h2 className="text-3xl font-bold mb-4 text-gray-800">How It Works</h2>
        <p className="text-gray-600">
          Four simple steps to accelerate your career growth
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {howItWorks.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center space-y-4 p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition"
          >
            <div className="w-16 h-16 rounded-full bg-[rgb(202,148,225)]/10 flex items-center justify-center">
              {item.icon}
            </div>
            <h3 className="font-semibold text-xl text-gray-800">
              {item.title}
            </h3>
            <p className="text-gray-600">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>

  <section className="w-full py-20 bg-white border-t border-gray-100">
    <div className="container mx-auto px-4 md:px-6">
      <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
        What Our Users Say
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {testimonial.map((testimonial, index) => (
          <Card
            key={index}
            className="bg-gray-50 border border-gray-200 hover:shadow-md transition"
          >
            <CardContent className="pt-6">
              <div className="flex flex-col space-y-4">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="relative h-12 w-12 flex-shrink-0">
                    <Image
                      width={40}
                      height={40}
                      src={testimonial.image}
                      alt={testimonial.author}
                      className="rounded-full object-cover border-2 border-[rgb(202,148,225)]/40"
                    />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">
                      {testimonial.author}
                    </p>
                    <p className="text-sm text-gray-600">
                      {testimonial.role}
                    </p>
                    <p className="text-sm text-[rgb(202,148,225)]">
                      {testimonial.company}
                    </p>
                  </div>
                </div>
                <blockquote>
                  <p className="text-gray-600 italic relative">
                    “{testimonial.quote}”
                  </p>
                </blockquote>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  </section>

  <section className="w-full py-20 bg-gray-50">
    <div className="container mx-auto px-4 md:px-6">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h2 className="text-3xl font-bold mb-4 text-gray-800">
          Frequently Asked Questions
        </h2>
        <p className="text-gray-600">
          Find answers to common questions about our platform
        </p>
      </div>

      <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-sm p-4">
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left text-gray-800 hover:text-[rgb(202,148,225)]">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  </section>

  <section className="w-full py-24 bg-gradient-to-r from-purple-100 via-pink-50 to-purple-100">
    <div className="mx-auto text-center max-w-3xl px-4">
      <h2 className="text-3xl font-bold mb-4 text-gray-800">
        Ready to Start Your Journey?
      </h2>
      <p className="text-gray-600 mb-8">
        Join thousands of professionals already using our platform to
        accelerate their careers.
      </p>
      <Button className="bg-[rgb(202,148,225)] text-white px-6 py-3 rounded-xl hover:bg-[rgb(184,125,210)] transition flex items-center mx-auto">
        Get Started <ArrowRight className="ml-2 h-4 w-4" />
      </Button>
    </div>
  </section>
</>


);
}
