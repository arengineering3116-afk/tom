
export interface Service {
  title: string;
  description: string;
  items: string[];
  icon: string;
  category: 'General' | 'Restorative' | 'Cosmetic' | 'Implants' | 'Emergency';
}

export interface Testimonial {
  name: string;
  rating: number;
  text: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  content: string;
}
