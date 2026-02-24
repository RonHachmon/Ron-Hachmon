"use client";

import { useState } from "react";
import ContactModal from "@components/ContactModal";

const Links = (props) => {
  const links = props.links;
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="mt-auto flex flex-row space-x-5 w-fit mx-2">
        {links.map((link, index) => (
          <div key={index}>
            <a href={link.href} target="_blank" rel="noopener noreferrer">
              <svg className="svg-link" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d={link.d} />
              </svg>
            </a>
          </div>
        ))}

        <div>
          <button
            onClick={() => setIsModalOpen(true)}
            aria-label="Open contact form"
            className="bg-transparent border-0 p-0 cursor-pointer"
          >
            <svg className="svg-link" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
              <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
            </svg>
          </button>
        </div>
      </div>

      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};

export default Links;
