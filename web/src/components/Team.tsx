import { ImagePlaceholder } from "./ImagePlaceholder";
import { team } from "@/content/site";

export function Team() {
  return (
    <section id="echipa" className="section bg-surface">
      <div className="shell">
        <div className="text-center">
          <h2 className="h2">{team.title}</h2>
          <p className="prose-cap mx-auto mt-5 text-lg/[1.65] text-text-muted">
            {team.sub}
          </p>
        </div>

        <div
          className="mx-auto mt-13 grid max-w-[900px] gap-6"
          style={{
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          }}
        >
          {team.members.map((member) => (
            <article
              key={member.name}
              className="overflow-hidden rounded-[22px] bg-white"
            >
              <ImagePlaceholder
                caption={member.imageCaption}
                src={member.image}
                alt={member.imageAlt}
                sizes="(max-width: 900px) 100vw, 440px"
                aspect="4 / 5"
              />
              <div className="p-[26px]">
                <h3 className="h3 text-[23px]">{member.name}</h3>
                <p className="mt-1.5 text-[15px] text-text-label">
                  {member.specialty}
                </p>
                <p className="mt-3.5 text-base/[1.6] text-text-muted">
                  {member.bio}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
