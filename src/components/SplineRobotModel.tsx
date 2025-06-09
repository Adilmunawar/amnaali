
import { Suspense, lazy } from "react";

// Lazy load Spline for better performance
const Spline = lazy(() => import('@splinetool/react-spline'));

const SplineLoader = () => (
  <div className="w-full h-full flex items-center justify-center bg-transparent rounded-3xl">
    <div className="w-16 h-16 border-4 border-gray-300 border-t-transparent rounded-full animate-spin" />
  </div>
);

export const SplineRobotModel = () => {
  return (
    <div className="relative w-full h-[450px] md:h-[550px]">
      {/* Clean Spline container without any effects */}
      <div className="relative w-full h-full overflow-hidden rounded-3xl">
        <Suspense fallback={<SplineLoader />}>
          <Spline 
            scene="https://prod.spline.design/R38OhL5fGW5DocGh/scene.splinecode"
            style={{ 
              width: '100%', 
              height: '100%',
              background: 'transparent'
            }}
          />
        </Suspense>
      </div>
    </div>
  );
};
