
import { SignUpForm } from "./SignUpForm.jsx";
import Image from "next/image";

export default function SignUpPage() {
  return (
    <div className="flex flex-col md:flex-row min-h-[calc(100vh-4rem)]">
      {/* Left side: Form */}
      <div className="w-full md:w-2/5 flex items-center justify-center p-6 md:p-12 bg-background order-1 md:order-none">
        <SignUpForm />
      </div>
      {/* Right side: Image */}
      <div className="md:w-3/5 hidden md:flex relative order-2 md:order-none">
        <Image 
          src="https://placehold.co/800x1200.png" 
          alt="Stack of colorful books" 
          layout="fill" 
          objectFit="cover" 
          data-ai-hint="books stack"
          priority
        />
      </div>
    </div>
  );
}
