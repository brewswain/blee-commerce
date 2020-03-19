import React from "react";
import { Skeleton } from "react-loading-skeleton-placeholders";

import "./loading-skeleton.styles.scss";

const LoadingSkeleton = WrappedComponent => {
  const SkeletonComponent = ({ isLoading, ...otherProps }) => {
    return isLoading ? (
      <div className="skeleton-container">
        <Skeleton skull={true} amount={5} bigBone={true} />
        <div className="padding"></div>
        <Skeleton skull={true} amount={5} bigBone={true} />
      </div>
    ) : (
      <WrappedComponent {...otherProps} />
    );
  };
  return SkeletonComponent;
};

export default LoadingSkeleton;
