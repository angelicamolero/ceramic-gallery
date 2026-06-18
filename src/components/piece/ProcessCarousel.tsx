import Image from "next/image";
import { ProcessStep } from "@/lib/pieces";
import Carousel from "@/components/ui/Carousel";

type Props = {
  steps: ProcessStep[];
  pieceName: string;
  totalSteps: number;
};

function StepSlide({ step, index, total }: { step: ProcessStep; index: number; total: number }) {
  return (
    <div>
      <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden mb-8">
        <Image src={step.image} alt={step.title} fill className="object-cover" />
        <div className="absolute bottom-4 left-4 bg-[#7A2533] text-white text-[10px] uppercase tracking-widest px-3 py-1 rounded-full">
          Step {index + 1} of {total}
        </div>
      </div>
      <div className="min-h-[72px]">
        <h3 className="text-2xl font-medium italic text-black mb-2">{step.title}</h3>
        <p className="text-sm text-black/60 leading-6">{step.description}</p>
      </div>
    </div>
  );
}

export default function ProcessCarousel({ steps, pieceName, totalSteps }: Props) {
  return (
    <div className="px-6 py-10 max-w-2xl mx-auto">
      <p className="text-[10px] uppercase tracking-widest text-black/40 mb-8">
        {pieceName} — Process
      </p>
      <Carousel
        items={steps}
        renderItem={(step, index) => (
          <StepSlide step={step} index={index} total={totalSteps} />
        )}
      />
    </div>
  );
}
