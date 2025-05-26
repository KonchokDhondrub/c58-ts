export interface IProducts {
  id: number;
  title: string;
  category: string;
  price: number;
  description: string;
  images: string[];
  thumbnail: string;
  brand: string;
  reviews: {
    rating: number;
    comment: string;
    date: number;
    reviewerName: string;
    reviewerEmail: string;
  };
  tags: string[];
}
