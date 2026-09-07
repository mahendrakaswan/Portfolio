interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  github?: string;
  live?: string;
}

export default function ProjectCard({ title, description, tags, github, live }: ProjectCardProps) {
  return (
    <div className="group p-6 bg-white rounded-lg border border-[#e8e2d9] hover:border-[#c26a3f]/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-[#c26a3f]/5">
      <h3 className="text-lg font-medium text-[#1a1816] mb-2 group-hover:text-[#c26a3f] transition-colors">
        {title}
      </h3>
      <p className="text-sm text-[#8a8078] mb-4 leading-relaxed">
        {description}
      </p>
      <div className="flex flex-wrap gap-2 mb-4">
        {tags.map((tag) => (
          <span
            key={tag}
            className="font-mono text-xs px-2 py-1 bg-[#faf7f2] text-[#8a8078] rounded"
          >
            {tag}
          </span>
        ))}
      </div>
      {(github || live) && (
        <div className="flex gap-4">
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="link-underline font-mono text-xs text-[#c26a3f] hover:text-[#a85630] transition-colors"
            >
              source
            </a>
          )}
          {live && (
            <a
              href={live}
              target="_blank"
              rel="noopener noreferrer"
              className="link-underline font-mono text-xs text-[#c26a3f] hover:text-[#a85630] transition-colors"
            >
              live
            </a>
          )}
        </div>
      )}
    </div>
  );
}
