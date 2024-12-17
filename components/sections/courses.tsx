"use client";

import Section from "@/components/section";
import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import { Card, CardFooter } from "../ui/card";
import ShinyButton from "@/components/ui/shiny-button";

import webdevImage from "@/assets/course/webdev.png";
import webDevOpsImage from "@/assets/course/webDevOps.png";
import web3CohortImage from "@/assets/course/web3Cohort.png";
import cohort3Image from "@/assets/course/cohort3.0.png";
import devOpsCohortImage from "@/assets/course/devOpsCohort.png";
import Link from "next/link";

const courseData = [
  {
    id: 1,
    link: "https://harkirat.classx.co.in/new-courses/15-complete-web-development-cohort",
    image: webdevImage,
  },
  {
    id: 2,
    link: "https://harkirat.classx.co.in/new-courses/12-complete-web-development-devops-cohort",
    image: webDevOpsImage,
  },
  {
    id: 3,
    link: "https://harkirat.classx.co.in/new-courses/13-complete-web3-blockchain-cohort",
    image: web3CohortImage,
  },
  {
    id: 4,
    link: "https://harkirat.classx.co.in/new-courses/14-complete-web-development-devops-blockchain-cohort",
    image: cohort3Image,
  },
  {
    id: 5,
    link: "https://harkirat.classx.co.in/new-courses/16-complete-devops-cohort",
    image: devOpsCohortImage,
  },
];

export interface Course {
  id: number;
  link: string;
  image: StaticImageData;
}

type CourseCardProps = {
  course: Course;
};

export const CourseCard: React.FC<CourseCardProps> = ({ course }) => {
  return (
    <Card className="w-full">
      <Image src={course.image} alt="Course Image" className="w-full" />
      <CardFooter className="py-2">
        <Link href={course.link} className="w-full">
          <ShinyButton className="w-full">Buy Now</ShinyButton>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default function Courses() {
  return (
    <Section
      title="Courses"
      subtitle="What You'll Learn with us"
      className="max-w-8xl"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {courseData.map((course) => (
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
      </div>
    </Section>
  );
}
