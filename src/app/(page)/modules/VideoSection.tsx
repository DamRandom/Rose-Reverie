"use client";

import React from "react";
import { AiOutlineLike, AiOutlineComment, AiOutlineShareAlt } from "react-icons/ai";

const VideoSection = () => {
  const videos = [
    {
      id: 1,
      videoSrc: "/videos/video1.mp4",
      title: "Lorem ipsum dolor sit amet",
      description: "Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
    },
    {
      id: 2,
      videoSrc: "/videos/video2.mp4",
      title: "Ut enim ad minim veniam",
      description: "Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.",
    },
    {
      id: 3,
      videoSrc: "/videos/video3.mp4",
      title: "Duis aute irure dolor",
      description: "In reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla.",
    },
  ];

  return (
    <section className="bg-[#1c1c1c] text-[#f0eae0] py-10">
      <div className="container mx-auto px-6">
        <h2 className="text-2xl font-bold text-center text-[#a07855] mb-8">
          Lorem ipsum dolor sit amet
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {videos.map((video) => (
            <div
              key={video.id}
              className="relative group overflow-hidden rounded-lg shadow-lg bg-[#2a2a2a] border border-[#333333] transition-transform duration-300 hover:scale-105"
            >
              {/* Video */}
              <div className="relative w-full h-56">
                <video
                  src={video.videoSrc}
                  className="w-full h-full object-cover rounded-t-lg"
                  controls
                />
              </div>
              {/* Content */}
              <div className="p-4">
                <h3 className="text-lg font-semibold text-[#f0eae0]">
                  {video.title}
                </h3>
                <p className="text-sm text-[#a5a5a5] mt-2">{video.description}</p>
                {/* Buttons */}
                <div className="flex justify-between items-center mt-4">
                  <button className="flex items-center text-[#a07855] hover:text-[#916744]">
                    <AiOutlineLike className="text-xl mr-2" />
                    <span className="text-sm font-medium">Like</span>
                  </button>
                  <button className="flex items-center text-[#a07855] hover:text-[#916744]">
                    <AiOutlineComment className="text-xl mr-2" />
                    <span className="text-sm font-medium">Comment</span>
                  </button>
                  <button
                    onClick={() =>
                      navigator.share
                        ? navigator.share({ url: video.videoSrc, title: video.title })
                        : alert("Sharing not supported on this browser")
                    }
                    className="flex items-center text-[#a07855] hover:text-[#916744]"
                  >
                    <AiOutlineShareAlt className="text-xl mr-2" />
                    <span className="text-sm font-medium">Share</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
