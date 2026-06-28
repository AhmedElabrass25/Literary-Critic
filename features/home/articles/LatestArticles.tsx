import ArticleCard from "@/components/article-card/ArticleCard";
import { articlesData } from "@/components/article-card/articledata";
import SectionHeader from "@/components/common/SectionHeader";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
const LatestArticles = () => {
  return (
    <>
      <div className="mb-12">
        <SectionHeader
          title="أحدث المقالات"
          description="استكشف أحدث المقالات والقراءات المختارة"
          buttonText="عرض المزيد"
          buttonHref="/articles"
        />
        <Carousel
          opts={{
            direction: "rtl",
            loop: false,
            slidesToScroll: 1,
          }}
          className="w-full px-10"
        >
          <CarouselContent className="-ml-4">
            {articlesData.map((article) => (
              <CarouselItem
                key={article.id}
                className="pl-4 basis-full sm:basis-1/2 lg:basis-1/3 xl:basis-1/4"
              >
                <ArticleCard article={article} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="-right-3 left-auto bg-white/80 dark:bg-dark-bg/80 backdrop-blur-sm h-10 w-10 [&>svg]:h-5 [&>svg]:w-5 transform-[translateY(-50%)_rotate(180deg)] active:scale-100 transition-none" />
          <CarouselNext className="-left-3 right-auto bg-white/80 dark:bg-dark-bg/80 backdrop-blur-sm h-10 w-10 [&>svg]:h-5 [&>svg]:w-5 transform-[translateY(-50%)_rotate(180deg)] active:scale-100 transition-none" />
        </Carousel>
      </div>
    </>
  );
};

export default LatestArticles;
