// Real customer testimonials. Add entries here and the Testimonials section
// will appear on the homepage automatically. Leave the array empty until
// there is genuine review content: never invent testimonials.
export type Testimonial = {
  name: string;
  location: string;
  quote: string;
  project: string;
  rating: number; // 1-5
};

export const testimonials: Testimonial[] = [];
