"use client";

import Link from "next/link";
import { HoverEffect } from "./ui/card-hover-effect";

interface Webinar {
  title: string;
  description: string;
  slug: string;
  isFeatured: boolean;
}

const featuredWebinars = [
  {
    title: "Understanding Music Theory",
    description:
      "Dive deep into the fundamentals of music theory and enhance your musical skills.",
    slug: "understanding-music-theory",
    isFeatured: true,
  },
  {
    title: "The Art of Songwriting",
    description:
      "Learn the craft of songwriting from experienced musicians and songwriters.",
    slug: "the-art-of-songwriting",
    isFeatured: true,
  },
  {
    title: "Mastering Your Instrument",
    description:
      "Advanced techniques to master your musical instrument of choice.",
    slug: "mastering-your-instrument",
    isFeatured: true,
  },
  {
    title: "Music Production Essentials",
    description:
      "Get started with music production with this comprehensive overview.",
    slug: "music-production-essentials",
    isFeatured: true,
  },
  // Added two more webinars
  {
    title: "Live Performance Techniques",
    description:
      "Enhance your live performance skills with expert tips and strategies.",
    slug: "live-performance-techniques",
    isFeatured: true,
  },
  {
    title: "Digital Music Marketing",
    description:
      "Learn how to promote your music effectively in the digital age.",
    slug: "digital-music-marketing",
    isFeatured: true,
  },
];

export default function UpcomingWebinars() {
  return (
    <div className="">
      <div className="px-4">
        <div className="text-center">
          <h2 className="font-semibold text-sm tracking-wide uppercase">
            Featured Webinars
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight">
            Enhance your musical journey
          </p>
        </div>
        <div className="mt-10 w-full">
          <HoverEffect
            className="w-full"
            items={featuredWebinars.map((webinar: Webinar) => ({
              title: webinar.title,
              description: webinar.description,
              link: webinar.slug,
            }))}
          />
        </div>
        <div className="my-10 text-center">
          <Link
            href={"/"}
            className="px-4 py-2 rounded-full bg-surface2/60 transition duration-200"
          >
            View All webinars
          </Link>
        </div>
      </div>
    </div>
  );
}
