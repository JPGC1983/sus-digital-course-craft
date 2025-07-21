import CourseHero from "@/components/CourseHero";
import CourseModules from "@/components/CourseModules";
import CourseTargetAudience from "@/components/CourseTargetAudience";
import CourseFeatures from "@/components/CourseFeatures";
import CourseCallToAction from "@/components/CourseCallToAction";
import CourseFooter from "@/components/CourseFooter";

const Index = () => {
  return (
    <div className="min-h-screen">
      <CourseHero />
      <CourseTargetAudience />
      <CourseModules />
      <CourseFeatures />
      <CourseCallToAction />
      <CourseFooter />
    </div>
  );
};

export default Index;
