import React, { useState } from "react";
import Banner from "./Banner";

function HeroSection() {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabChange = (tabIndex) => {
    setActiveTab(tabIndex);
  };
  return (
    <>
      {activeTab === 1 && (
        <div className="video-background">
          <video className="video" autoPlay loop muted>
            <source
              src="https://strapi-cms.nyc3.digitaloceanspaces.com/content/a85fe703399f6a78b8f9d5f34a92af74/Pre-Recv2.mp4?updated_at=2023-10-30T17:28:05.439Z"
              type="video/mp4"
            />
          </video>
          <div className="content">
            <Banner handleTabChange={handleTabChange} activeTab={activeTab} />
          </div>
        </div>
      )}
      {activeTab === 2 && (
        <div className="video-background">
          <video className="video" autoPlay loop muted>
            <source
              src="https://nyc3.digitaloceanspaces.com/strapi-cms/content/22f7df5cf1fedc11ea0c13a57b1d33d4/Scheduling.mp4?updated_at=2023-10-30T17:28:05.257Z"
              type="video/mp4"
            />
          </video>
          <div className="content">
            <Banner handleTabChange={handleTabChange} activeTab={activeTab} />
          </div>
        </div>
      )}
      {activeTab === 3 && (
        <div className="video-background">
          <video className="video" autoPlay loop muted>
            <source
              src="https://nyc3.digitaloceanspaces.com/strapi-cms/content/a30eb8889d11374c11e02f1dc597fd83/Structuredv6.mp4?updated_at=2023-10-30T17:28:05.332Z"
              type="video/mp4"
            />
          </video>
          <div className="content">
            <Banner handleTabChange={handleTabChange} activeTab={activeTab} />
          </div>
        </div>
      )}
      {activeTab === 4 && (
        <div className="video-background">
          <video className="video" autoPlay loop muted>
            <source
              src="https://strapi-cms.nyc3.digitaloceanspaces.com/content/1a1dc23c60a609e0a6780dd8b3d76d73/LiveV3.mp4?updated_at=2023-10-30T17:28:04.532Z"
              type="video/mp4"
            />
          </video>
          <div className="content">
            <Banner handleTabChange={handleTabChange} activeTab={activeTab} />
          </div>
        </div>
      )}
      {activeTab === 5 && (
        <div className="video-background">
          <video className="video" autoPlay loop muted>
            <source
              src="https://strapi-cms.nyc3.digitaloceanspaces.com/content/1a1dc23c60a609e0a6780dd8b3d76d73/LiveV3.mp4?updated_at=2023-10-30T17:28:04.532Z"
              type="video/mp4"
            />
          </video>
          <div className="content">
            <Banner handleTabChange={handleTabChange} activeTab={activeTab} />
          </div>
        </div>
      )}
    </>
  );
}

export default HeroSection;
