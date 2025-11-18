import { Skeleton } from "@/components/ui/skeleton";

interface CarouselSkeletonProps {
  type: "experience" | "projects";
  count?: number;
}

const CarouselSkeleton = ({ type, count = 3 }: CarouselSkeletonProps) => {
  return (
    <div className="md:hidden">
      <div className="overflow-hidden">
        <div className="flex gap-4">
          {Array.from({ length: count }).map((_, index) => (
            <div
              key={index}
              className="flex-[0_0_85%] min-w-0 bg-card/40 backdrop-blur-sm border border-border/20 rounded-2xl p-6"
            >
              {type === "experience" ? (
                <div className="space-y-4">
                  <div className="flex flex-col gap-2">
                    <Skeleton className="h-3 w-24" />
                    <Skeleton className="h-6 w-48" />
                    <Skeleton className="h-4 w-32" />
                  </div>
                  <div className="space-y-2">
                    <Skeleton className="h-3 w-full" />
                    <Skeleton className="h-3 w-full" />
                    <Skeleton className="h-3 w-4/5" />
                    <Skeleton className="h-3 w-full" />
                    <Skeleton className="h-3 w-3/4" />
                  </div>
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="flex items-start justify-between gap-4">
                    <Skeleton className="h-6 w-48 flex-1" />
                    <Skeleton className="h-5 w-5 rounded-full flex-shrink-0" />
                  </div>
                  <div className="space-y-2">
                    <Skeleton className="h-3 w-full" />
                    <Skeleton className="h-3 w-full" />
                    <Skeleton className="h-3 w-4/5" />
                    <Skeleton className="h-3 w-full" />
                  </div>
                  <div className="flex flex-wrap gap-2 mt-4">
                    <Skeleton className="h-6 w-16 rounded-full" />
                    <Skeleton className="h-6 w-20 rounded-full" />
                    <Skeleton className="h-6 w-24 rounded-full" />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      
      {/* Pagination Dots Skeleton */}
      <div className="flex justify-center gap-2 mt-6">
        {Array.from({ length: count }).map((_, index) => (
          <Skeleton key={index} className="h-1.5 w-1.5 rounded-full" />
        ))}
      </div>
    </div>
  );
};

export default CarouselSkeleton;
