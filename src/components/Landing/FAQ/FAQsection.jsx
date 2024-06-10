"use client";

import { useState } from "react";
import Accordion from "./accordion";

export default function FAQ() {
  const [open, setOpen] = useState(false);

  const toggle = (index) => {
    if (open == index) {
      return setOpen(null);
    }
    setOpen(index);
  };

  const accordionData = [
    {
      number: "01",
      title: "How do I register on Plantopia?",
      answer:
        "You can register through the Plantopia app. First, download the Plantopia app. Select the Register option when you first open the Plantopia app. You can register using two options: either with your email or with your Google account.",
    },
    {
      number: "02",
      title: "How can I manually change reminder notifications?",
      answer:
        "Open the Plantopia app, then tap the notification icon. Next, select the plant reminder option. After that, tap the “change reminder” button. Finally, you can adjust the reminder time as desired and don’t forget to press the “save” button to confirm.",
    },
    {
      number: "03",
      title: "How do I add plants?",
      answer:
        "Adding to your plant collection is very easy. First, you can access the “My Plant” page, or if you don’t have any plants yet, you can press the “Add Plant” button on the Home screen. Then, you can search for the desired plant using the Search Bar or Filter. After finding and selecting the plant you want, scroll down until you find the “Add Plant” button. This will automatically add the plant to your list.",
    },
    {
      number: "04",
      title: "How can I view the watering history of my plants?",
      answer:
        "To view your plant watering history, go to the “My Plant” page and select the plant you want to check. Once the plant’s detailed information screen appears, tap the history icon in the top right corner of the page, and the watering history for the selected plant will be displayed. You can also sort your plant list by pressing the filter icon in the top right corner of the page and selecting your preferred sorting option.",
    },
    {
      number: "05",
      title: "How do I view the planting history of my plants?",
      answer:
        "Viewing your plant watering history is very easy. First, go to the “My Plant” page and press the history button. This will take you to your plant watering history page. There, you can also sort your plant list by pressing the filter icon in the top right corner of the page and selecting your preferred sorting option.",
    },
  ];

  return (
    <div className="px-[25px] lg:px-[70px] mt-[65px]" id="faq">
      <h3 className="text-black font-nunito-bold text-xl md:text-2xl lg:text-4xl leading-normal">
        Frequently Asked Questions
      </h3>
      <div className="mt-4 md:mt-8 lg:mt-[77px]">
        {accordionData.map((item, index) => (
          <Accordion
            key={index}
            number={item.number}
            title={item.title}
            answer={item.answer}
            open={index === open}
            toggle={() => toggle(index)}
          />
        ))}
      </div>
    </div>
  );
}
