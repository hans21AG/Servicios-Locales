'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function FaqAccordion({ faqs, title }) {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <div className="bg-card rounded-2xl shadow-card p-8">
      <h2 className="font-display text-2xl font-bold text-foreground mb-6">
        {title}
      </h2>
      <div className="space-y-3">
        {faqs.map((faq, i) => {
          const isOpen = openFaq === i;
          return (
            <div
              key={i}
              className={`border-l-4 ${isOpen ? 'border-accent' : 'border-border'} rounded-xl transition-colors`}
            >
              <button
                onClick={() => setOpenFaq(isOpen ? null : i)}
                className="w-full flex items-center justify-between px-5 py-4 text-left"
              >
                <span className="font-bold text-foreground pr-4">{faq.q}</span>
                <ChevronDown
                  size={18}
                  className={`text-muted-foreground shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                />
              </button>
              {isOpen && (
                <div className="px-5 pb-4 text-muted-foreground">{faq.a}</div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
