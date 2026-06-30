import AcademicCard from "./AcademicCard";
import { academicData } from "./academicData";

export default function AcademicSection() {
  return (
    <section className="py-24 bg-(--color-bg-secondary) mb-16">
      <div className="container">
        <h2 className="mb-14 text-center text-5xl font-bold">
          المسيرة الأكاديمية
        </h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {academicData.map((item) => (
            <AcademicCard key={item.id} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}
