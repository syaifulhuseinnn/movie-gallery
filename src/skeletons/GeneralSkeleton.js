import React from "react";
import ContentLoader from "react-content-loader";

export default function GeneralSkeleton(props) {
  return (
    <ContentLoader
      speed={2}
      width={"100vw"}
      height={"100vh"}
      viewBox="0 0 100% 100"
      backgroundColor="#1b1a1a"
      foregroundColor="#0f0f0f"
      {...props}
    >
      <rect x="0" y="0" rx="9" ry="9" width="100%" height="40%" />
      <rect x="2%" y="45%" rx="9" ry="9" width="15%" height="32%" />
      <rect x="19%" y="45%" rx="9" ry="9" width="15%" height="32%" />
      <rect x="36%" y="45%" rx="9" ry="9" width="15%" height="32%" />
      <rect x="53%" y="45%" rx="9" ry="9" width="15%" height="32%" />
      <rect x="70%" y="45%" rx="9" ry="9" width="15%" height="32%" />
      <rect x="2%" y="79%" rx="9" ry="9" width="10%" height="2%" />
      <rect x="19%" y="79%" rx="9" ry="9" width="10%" height="2%" />
      <rect x="36%" y="79%" rx="9" ry="9" width="10%" height="2%" />
      <rect x="53%" y="79%" rx="9" ry="9" width="10%" height="2%" />
      <rect x="70%" y="79%" rx="9" ry="9" width="10%" height="2%" />

      <rect x="2%" y="85%" rx="9" ry="9" width="15%" height="32%" />
      <rect x="19%" y="85%" rx="9" ry="9" width="15%" height="32%" />
      <rect x="36%" y="85%" rx="9" ry="9" width="15%" height="32%" />
      <rect x="53%" y="85%" rx="9" ry="9" width="15%" height="32%" />
      <rect x="70%" y="85%" rx="9" ry="9" width="15%" height="32%" />
      <rect x="2%" y="119%" rx="9" ry="9" width="10%" height="2%" />
      <rect x="19%" y="119%" rx="9" ry="9" width="10%" height="2%" />
      <rect x="36%" y="119%" rx="9" ry="9" width="10%" height="2%" />
      <rect x="53%" y="119%" rx="9" ry="9" width="10%" height="2%" />
      <rect x="70%" y="119%" rx="9" ry="9" width="10%" height="2%" />
    </ContentLoader>
  );
}
