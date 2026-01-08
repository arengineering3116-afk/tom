
import React from 'react';
import { Service } from './types';

export const PRACTICE_INFO = {
  name: "Aspen Dental – Fort Myers",
  tagline: "Comprehensive, Comfortable, Modern Dental Care",
  address: "9330 Ben Pratt / 6 Mile Cypress Pkwy, Fort Myers, FL 33966",
  phone: "+1 (239) 337-1008",
  email: "contact@aspendentalfortmyers.com",
};

export const SERVICES: Service[] = [
  {
    title: "General & Preventive",
    description: "Protect your smile and prevent future dental issues with routine care.",
    icon: "🦷",
    category: "General",
    items: ["Dental exams & cleanings", "Digital X-rays", "Oral cancer screenings", "Gum disease treatment", "Fluoride treatments", "Sealants"]
  },
  {
    title: "Restorative Dentistry",
    description: "Restore the function and appearance of your teeth.",
    icon: "🛠️",
    category: "Restorative",
    items: ["Tooth-colored fillings", "Dental crowns", "Dental bridges", "Dentures & partials", "Root canal therapy"]
  },
  {
    title: "Cosmetic Dentistry",
    description: "Enhance your smile with modern cosmetic solutions.",
    icon: "✨",
    category: "Cosmetic",
    items: ["Professional teeth whitening", "Dental veneers", "Cosmetic bonding", "Smile makeovers"]
  },
  {
    title: "Dental Implants",
    description: "A long-lasting solution for missing teeth.",
    icon: "💎",
    category: "Implants",
    items: ["Implant-supported crowns", "Implant dentures", "Full-arch restorations", "Treatment planning"]
  },
  {
    title: "Emergency Care",
    description: "Dental emergencies don’t wait—and neither do we.",
    icon: "🚨",
    category: "Emergency",
    items: ["Tooth pain & infections", "Broken or chipped teeth", "Swelling or abscesses", "Same-day appointments"]
  }
];

export const SYSTEM_PROMPT = `
You are a helpful and professional virtual assistant for Aspen Dental in Fort Myers, FL. 
Your goal is to answer patient questions about the dental practice based on the following info:
Practice: ${PRACTICE_INFO.name}
Location: ${PRACTICE_INFO.address}
Phone: ${PRACTICE_INFO.phone}
Services: ${SERVICES.map(s => `${s.title}: ${s.items.join(', ')}`).join('. ')}
Accepts new patients and same-day emergency appointments.
Most PPO plans accepted. Flexible financing available.

If a patient asks for medical advice, kindly remind them that you are an AI assistant and they should consult with our dentists for a formal diagnosis.
Keep your responses concise, friendly, and encouraging.
`;
