import { cn } from "@/lib/utils";

interface LoadingUiProps {
  dotSize?: number;
  gap?: number;
  className?: string;
}

const LOADING_DOT_BASE = "animate-loading-bounce bg-primary-500 rounded-full";

function LoadingUi({ dotSize = 8, gap = 8, className = "" }: LoadingUiProps) {
  return (
    <div style={{ gap }} className={cn("flex", className)}>
      <span
        style={{ width: dotSize, height: dotSize }}
        className={LOADING_DOT_BASE}
      ></span>
      <span
        style={{ width: dotSize, height: dotSize }}
        className={cn(LOADING_DOT_BASE, "animation-delay-200")}
      ></span>
      <span
        style={{ width: dotSize, height: dotSize }}
        className={cn(LOADING_DOT_BASE, "animation-delay-400")}
      ></span>
    </div>
  );
}

export default LoadingUi;
