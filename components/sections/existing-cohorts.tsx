"use client";

import Section from "@/components/section";
import { motion } from "framer-motion";

import cohort1Image from "@/assets/existing-cohorts/cohort1.png";
import cohort2Image from "@/assets/existing-cohorts/cohort2.png";
import cohort3Image from "@/assets/existing-cohorts/cohort3.png";
import fullStackCohort from "@/assets/existing-cohorts/full-stack-cohort.png";

import { Course, CourseCard } from "./courses";
import Marquee from "@/components/ui/marquee";

const courseData = [
  {
    id: 1,
    link: "https://harkirat.classx.co.in/new-courses/6-live-0-1",
    image: cohort1Image,
  },
  {
    id: 2,
    link: "https://harkirat.classx.co.in/new-courses/7-live-1-100",
    image: cohort2Image,
  },
  {
    id: 3,
    link: "https://harkirat.classx.co.in/new-courses/8-live-0-100-complete",
    image: cohort3Image,
  },
  {
    id: 4,
    link: "https://harkirat.classx.co.in/new-courses/2-live-full-stack-open-source-cohort-1-finished",
    image: fullStackCohort,
  },
];

export default function ExistingCohorts() {
  return (
    <Section
      title="Existing Cohorts"
      subtitle="Our Existing Cohorts"
      className="max-w-8xl"
    >
      <MarqueeContent courses={courseData} />
      <MarqueeContent courses={courseData} reverse />
    </Section>
  );
}

type MarqueeContentProps = {
  courses: Course[];
  reverse?: boolean;
};

const MarqueeContent: React.FC<MarqueeContentProps> = ({
  courses,
  reverse = false,
}) => (
  <Marquee pauseOnHover reverse={reverse} className="[--duration:25s]">
    {courses.map((course) => (
      <motion.div
        key={course.id}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{
          delay: 0.8,
          duration: 1.2,
        }}
      >
        <CourseCard course={course} />
      </motion.div>
    ))}
  </Marquee>
);
