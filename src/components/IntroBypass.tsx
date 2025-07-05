
import { useEffect } from "react";

interface IntroBypassProps {
  onFinish: () => void;
}

const IntroBypass = ({ onFinish }: IntroBypassProps) => {
  useEffect(() => {
    console.log("IntroBypass: Immediately calling onFinish");
    const timeout = setTimeout(() => {
      onFinish();
    }, 100);
    
    return () => clearTimeout(timeout);
  }, [onFinish]);

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-gradient-to-br from-yellow-200 via-pink-200 to-blue-300">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-blue-800 mb-4">Loading...</h1>
        <div className="animate-spin w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full mx-auto"></div>
      </div>
    </div>
  );
};

export default IntroBypass;
