import "animate.css"; 
import { FaArrowRight } from "react-icons/fa";

export default function HowItWorks() {
  return (
    <section className="bg-gray-50 py-10 mt-10">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className=" animate__animated animate__rotateIn animate__infinite animate__delay-0s text-3xl font-bold mb-6 text-gray-800  ">
         How It Works
        </h2>
        <div className="flex justify-center gap-10 text-3xl font-bold text-yellow-600">
          <p className=" animate__animated animate__bounce animate__infinite animate__delay-0s">
         <FaArrowRight /> Swap 
          </p>
          <p className="animate__animated animate__bounce animate__infinite animate__delay-1s">
           <FaArrowRight /> Session
          </p>
          <p className="animate__animated animate__bounce animate__infinite animate__delay-2s">
           <FaArrowRight /> Exchange
            
          </p>
        </div>
      </div>
    </section>
  );
}
