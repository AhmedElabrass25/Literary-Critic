export interface Article {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  category: string;
  author: string;
  publishedAt: string;
  slug: string;
}
export interface LibraryItem {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  category: string;
  author: string;
  readingTime: string;
  type: "saved" | "analysis" | "notes";
}
