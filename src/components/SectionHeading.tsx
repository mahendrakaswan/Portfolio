interface SectionHeadingProps {
  label: string;
}

export default function SectionHeading({ label }: SectionHeadingProps) {
  return (
    <h2 className="font-mono text-sm tracking-wider text-[#8a8078] mb-8">
      // {label}
    </h2>
  );
}
