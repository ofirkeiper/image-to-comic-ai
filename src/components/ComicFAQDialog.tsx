
import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const faqs = [
  {
    q: "How does the comic creation process work?",
    a: "It’s simple! Upload a photo, add a short description or dialogue, and our AI will generate a unique comic based on your input. You’ll be able to preview the result and either download it digitally or print it as a physical comic book.",
  },
  {
    q: "What kind of images can I upload?",
    a: "You can upload JPG, PNG, or WebP images. Make sure your image is clear and appropriate for all audiences. The better the quality, the better your comic will look!",
  },
  {
    q: "Can I choose the style of the comic?",
    a: "In the initial version, the comic style is automatically selected by the AI. In future updates, we plan to add style options (manga, cartoon, sketch, etc.).",
  },
  {
    q: "How long does it take to generate a comic?",
    a: "On average, it takes about 30–60 seconds for the AI to generate your comic after you upload your image and enter your text.",
  },
  {
    q: "Can I print my comic as a real book?",
    a: "Absolutely! Once your comic is ready, you’ll have the option to print it using our integration with Lulu. You’ll be able to choose your shipping location and see real-time pricing and delivery options.",
  },
  {
    q: "How much does it cost?",
    a: "You can try out comic creation for free (limited previews). Full-resolution downloads and printed copies are priced based on page count and shipping location. Visit our Pricing page for full details.",
  },
  {
    q: "Will I receive an invoice after payment?",
    a: "Yes. A detailed receipt and invoice will be emailed to you automatically after purchase.",
  },
  {
    q: "Can I edit my comic after it’s generated?",
    a: "Currently, editing is limited. You can regenerate your comic by uploading a new photo or adjusting the text. Full editing tools are coming soon.",
  },
  {
    q: "Who owns the rights to the comic I create?",
    a: "You own the rights to the comic you create, including the uploaded image and text. However, we may request permission to showcase your creation on our site (optional and opt-in only).",
  },
  {
    q: "Is the content safe for children?",
    a: "We aim to provide a safe and fun platform for all ages. However, AI content is generated based on user input, so we ask all users to follow our content guidelines and refrain from uploading offensive material.",
  },
  {
    q: "Can I use the comic commercially?",
    a: "Yes, as long as you own the image and the content you upload. Please ensure any uploaded content does not infringe on third-party rights.",
  },
  {
    q: "What languages do you support?",
    a: "The site is in English by default, but we support multiple languages depending on your location. You can also switch languages manually from the menu.",
  },
  {
    q: "Can I get a refund if I’m not happy with my comic?",
    a: "Digital products are non-refundable. For printed books, please contact our support if your order arrives damaged or there’s an issue with printing or delivery.",
  },
  {
    q: "I’m a teacher/parent/organization. Can I use this for a group?",
    a: "Yes! We love working with schools and organizations. Please contact us for bulk licensing or classroom tools.",
  },
  {
    q: "How can I contact support?",
    a: "You can reach us through the Contact Us page, where you can fill out a form or use the live chat (when available). We usually respond within 24 hours.",
  },
];

const comicColors = [
  "from-yellow-200 via-pink-100 to-blue-100",
  "from-blue-100 via-yellow-200 to-pink-100",
  "from-pink-100 via-blue-200 to-yellow-100",
  "from-yellow-200 via-blue-100 to-pink-200",
];

const ComicFAQDialog = () => (
  <Dialog>
    <DialogTrigger asChild>
      <button className="hover:text-yellow-500 underline transition bg-transparent border-none cursor-pointer p-0 m-0">
        Questions and Answers
      </button>
    </DialogTrigger>
    <DialogContent className="max-h-[85vh] overflow-y-auto w-full bg-gradient-to-br from-yellow-50 via-blue-50 to-pink-50 border-blue-200 rounded-3xl border-8 shadow-xl comic-outline p-0">
      <DialogHeader>
        <DialogTitle className="mb-4 text-2xl md:text-4xl font-bold text-center text-blue-800 bg-gradient-to-r from-yellow-100 via-pink-200 to-blue-200 px-6 py-2 rounded-xl inline-block shadow comic-outline animate-text-glow font-bangers">
          <span className="mr-2">❓</span> Frequently Asked Questions (FAQ)
        </DialogTitle>
      </DialogHeader>
      <ul className="space-y-6 px-4 pb-2">
        {faqs.map((faq, i) => (
          <li
            key={faq.q}
            className={`bg-gradient-to-r ${comicColors[i % comicColors.length]} rounded-xl border-4 border-pink-300 px-6 py-5 shadow comic-outline relative group transition-all duration-200`}
          >
            <div className="flex items-start gap-2">
              <span className="text-pink-500 font-bangers text-3xl drop-shadow comic-outline">Q.</span>
              <span className="font-bangers text-2xl text-blue-900 mb-1 drop-shadow comic-outline">{faq.q}</span>
            </div>
            <div className="mt-2 flex items-start gap-2">
              <span className="text-blue-400 font-bangers text-3xl drop-shadow comic-outline">A.</span>
              <span className="text-lg text-pink-800 font-semibold bg-white/60 px-3 py-2 rounded-lg border-2 border-yellow-200 comic-outline">{faq.a}</span>
            </div>
            <span className="absolute -top-4 -right-4 w-14 h-8 bg-pink-300 text-yellow-50 text-xs font-bangers rounded-full border-2 border-blue-400 shadow comic-outline flex items-center justify-center rotate-6 animate-bounce-x group-hover:scale-110 transition">
              WOW!
            </span>
          </li>
        ))}
      </ul>
      <div className="flex justify-center mt-8 pb-2">
        <span className="text-yellow-600 text-2xl rotate-[-12deg] font-bangers comic-outline animate-pop-text bg-pink-100 px-3 py-1 rounded-xl border-2 border-blue-200 shadow">
          Still have questions?{" "}
          <a href="#" className="text-blue-700 underline hover:text-yellow-600 font-bangers transition">
            Contact us!
          </a>
        </span>
      </div>
    </DialogContent>
  </Dialog>
);

export default ComicFAQDialog;
