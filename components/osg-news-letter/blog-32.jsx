"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { AnimatePresence, motion } from "motion/react";
import React, { useState } from "react";
import { ChevronRight } from "relume-icons";

const articles = [
  {
    url: "/osg-news-letter/new-safety-standards",
    image: {
      src: "https://images.unsplash.com/photo-1516245834210-c4c142787335?auto=format&fit=crop&w=1920&q=80",
      alt: "Safety standards on a scaffolding site",
    },
    category: "Industry News",
    readTime: "3 min read",
    title: "New Safety Standards Reshape the Scaffolding Industry",
    description: "SafeWork Queensland's updated scaffolding guidance has tightened classification requirements, load documentation, and engineer sign-off for suspended structures. If your scaffold is currently on-site, the 90-day transitional period may already be running. Here's what changed and what you're now responsible for.",
  },
  {
    url: "/osg-news-letter/major-commercial-project",
    image: {
      src: "https://images.unsplash.com/photo-1516245834210-c4c142787335?auto=format&fit=crop&w=1920&q=80",
      alt: "Commercial scaffolding on a high-rise building",
    },
    category: "Project Work",
    readTime: "4 min read",
    title: "O'Neill Scaffolding Group Completes Major Commercial Project",
    description: "Fourteen floors, a live neighbouring tenancy, and a narrow western laneway with no room for conventional ground support. OSG completed the Brisbane CBD retail and office project 3 weeks ahead of programme with zero recordable incidents. This is how we sequenced it.",
  },
  {
    url: "/osg-news-letter/labour-hire-expansion",
    image: {
      src: "https://images.unsplash.com/photo-1516245834210-c4c142787335?auto=format&fit=crop&w=1920&q=80",
      alt: "Certified scaffolders on site",
    },
    category: "Company News",
    readTime: "2 min read",
    title: "Expanding Our Labour Hire Capabilities Across Queensland",
    description: "Demand for certified scaffold labour in Southeast Queensland is outpacing what training institutions are producing. OSG has expanded its labour hire division to respond — adding HRWL-certified scaffolders and riggers available for short and long-term placement. What's included, what rates look like, and how to engage.",
  },
];

const tabs = ["All Posts", "Industry News", "Project Work", "Company News"];

export function Blog32() {
  const [activeTab, setActiveTab] = useState("All Posts");

  const filtered = activeTab === "All Posts"
    ? articles
    : articles.filter((a) => a.category === activeTab);

  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 scheme-1">
      <div className="container flex max-w-lg flex-col">
        {/* Tab filter buttons */}
        <div className="mb-10 flex flex-wrap gap-2">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`rounded-full px-4 py-1.5 text-sm font-semibold transition-colors ${
                activeTab === tab
                  ? "bg-punch text-white"
                  : "bg-neutral-lightest text-neutral-dark hover:bg-neutral-lighter"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
          >
            {filtered.length === 0 ? (
              <p className="py-16 text-center text-neutral-dark/50">No articles in this category yet.</p>
            ) : (
              <div className="grid grid-cols-1 gap-x-12 gap-y-12 md:gap-y-16">
                {filtered.map((article) => (
                  <div key={article.url} className="grid gap-x-8 gap-y-6 md:grid-cols-[.5fr_1fr] md:gap-x-10 md:gap-y-4">
                    <a href={article.url} className="w-full">
                      <img
                        src={article.image.src}
                        alt={article.image.alt}
                        className="aspect-square w-full rounded-image object-cover"
                      />
                    </a>
                    <div className="flex h-full flex-col items-start justify-center">
                      <div className="mb-3 flex w-full items-center justify-start md:mb-4">
                        <Badge className="mr-4">{article.category}</Badge>
                        <p className="inline text-small font-semibold">{article.readTime}</p>
                      </div>
                      <a className="mb-2 block" href={article.url}>
                        <h3 className="text-h5 font-bold">{article.title}</h3>
                      </a>
                      <p>{article.description}</p>
                      <a href={article.url}>
                        <Button
                          className="mt-5 flex items-center justify-center gap-x-2 md:mt-6"
                          variant="link"
                          size="link"
                        >
                          Read More
                          <ChevronRight className="text-punch" />
                        </Button>
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
