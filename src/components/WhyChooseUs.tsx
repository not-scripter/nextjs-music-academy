"use client";
import Image from "next/image";
import { StickyScroll } from "./ui/sticky-scroll-reveal";

export default function WhyChooseUs() {
  const musicSchoolContent = [
    {
      title: "Discover Your Sound with Us: A Personal Journey in Music Mastery",
      description:
        "Embark on a musical journey that’s uniquely yours. Our personalized instruction adapts to your individual needs, setting the stage for unparalleled growth and creativity. At our music school, your aspirations meet our dedicated support, creating a harmonious path to mastery.",
      content: (
        <div className="h-full w-full  flex items-center justify-center">
          <Image
            src="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            width={300}
            height={300}
            className="h-full w-full object-cover"
            alt="missing"
          />
        </div>
      ),
    },
    {
      title: "Discover Your Sound with Us: A Personal Journey in Music Mastery",
      description:
        "Embark on a musical journey that’s uniquely yours. Our personalized instruction adapts to your individual needs, setting the stage for unparalleled growth and creativity. At our music school, your aspirations meet our dedicated support, creating a harmonious path to mastery.",
      content: (
        <div className="h-full w-full  flex items-center justify-center">
          <Image
            src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            width={300}
            height={300}
            className="h-full w-full object-cover"
            alt="missing"
          />
        </div>
      ),
    },
    {
      title: "Discover Your Sound with Us: A Personal Journey in Music Mastery",
      description:
        "Embark on a musical journey that’s uniquely yours. Our personalized instruction adapts to your individual needs, setting the stage for unparalleled growth and creativity. At our music school, your aspirations meet our dedicated support, creating a harmonious path to mastery.",
      content: (
        <div className="h-full w-full  flex items-center justify-center">
          <Image
            src="https://images.unsplash.com/photo-1485579149621-3123dd979885?q=80&w=1031&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            width={300}
            height={300}
            className="h-full w-full object-cover"
            alt="missing"
          />
        </div>
      ),
    },
    {
      title: "Live Feedback & Engagement",
      description:
        "Immerse yourself in an interactive learning experience where feedback is immediate, just like real-time changes in a collaborative project. This approach enhances your understanding and mastery of music concepts and performance techniques.",
      content: (
        <div className="h-full w-full  flex items-center justify-center">
          <Image
            src="https://images.unsplash.com/photo-1468164016595-6108e4c60c8b?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            width={300}
            height={300}
            className="h-full w-full object-cover"
            alt="missing"
          />
        </div>
      ),
    },
    {
      title: "Cutting-Edge Curriculum",
      description:
        "Our curriculum is continuously updated to include the latest music education trends and technologies, ensuring you’re always learning with the most current and effective methods. Say goodbye to outdated materials and welcome an education that evolves with the industry.",
      content: (
        <div className="h-full w-full  flex items-center justify-center">
          <Image
            src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            width={300}
            height={300}
            className="h-full w-full object-cover"
            alt="missing"
          />
        </div>
      ),
    },
    {
      title: "Limitless Learning Opportunities",
      description:
        "With our expansive resource library and dynamic course offerings, you’ll never find yourself without something new to explore. Our platform provides continuous opportunities for growth, ensuring your musical skills are always advancing.",
      content: (
        <div className="h-full w-full  flex items-center justify-center">
          <Image
            src="https://images.unsplash.com/photo-1477233534935-f5e6fe7c1159?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            width={300}
            height={300}
            className="h-full w-full object-cover"
            alt="missing"
          />
        </div>
      ),
    },
  ];
  return (
    <div>
      <StickyScroll content={musicSchoolContent} />
    </div>
  );
}
