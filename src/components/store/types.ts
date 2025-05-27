interface Review {
  rating: number;
  comment: string;
  date: number;
  reviewerName: string;
  reviewerEmail: string;
}

export interface IProducts {
  id: number;
  title: string;
  category: string;
  price: number;
  description: string;
  images: string[];
  thumbnail: string;
  brand: string;
  reviews: Review[];
  tags: string[];
}
