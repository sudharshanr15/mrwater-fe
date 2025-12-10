import { AiOutlineWhatsApp } from "react-icons/ai";

export default function WhatsappContact() {
  return (
    <a
      className="fixed z-[200] bottom-10 right-10 inline-block bg-green-500 rounded-full aspect-square p-4 group transition"
      href="https://wa.me/918111011008?text=Hi, I want to place a bulk order for Mr. Water. Please share the details and price."
      target="_blank"
    >
      <AiOutlineWhatsApp className="text-white h-8 w-8" />
      <span className="inline-block w-max rounded-lg font-semibold bg-slate-50 text-xs text-black p-4 absolute bottom-[110%] right-0 group-hover:visible group-hover:animate-none shadow-lg tooltip-fade-in">
        Hello there 👋, chat with us!
      </span>
    </a>
  );
}
