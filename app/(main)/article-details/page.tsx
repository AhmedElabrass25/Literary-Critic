import Book from "@/components/ui/Book";
import ArticleDetails from "@/features/article-details/ArticleDetails";
import Review from "@/features/article-details/Review";
import UserReviews from "@/features/article-details/UserReviews";

export default function page() {
  return <section className="py-16">
    <ArticleDetails/>
    <Book />
    <Review/>
    <UserReviews/>
  </section>;
}
