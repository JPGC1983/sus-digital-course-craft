import CourseHero from "@/components/CourseHero";
import CourseModules from "@/components/CourseModules";
import CourseTargetAudience from "@/components/CourseTargetAudience";
import CourseFeatures from "@/components/CourseFeatures";
import CourseCallToAction from "@/components/CourseCallToAction";
import CourseEpilogue from "@/components/CourseEpilogue";
import CourseFooter from "@/components/CourseFooter";

const Index = () => {
  return (
    <div className="min-h-screen">
      <CourseHero />
      <CourseCallToAction />
      <CourseEpilogue />
      <CourseTargetAudience />
      <CourseModules />
      <CourseFeatures />
      <CourseFooter />
    </div>
  );
};

export default Index;
