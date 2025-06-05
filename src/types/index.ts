export interface Testimonial {
  id: string;
  name: string;
  location: string;
  rating: number;
  content: string;
  photoUrl: string;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  photoUrl: string;
  bio: string;
}

export interface LoanCalculation {
  amount: number;
  duration: number;
  interestRate: number;
  totalPayable: number;
  monthlyPayment: number;
}

export interface AppLink {
  platform: 'android' | 'ios';
  url: string;
}