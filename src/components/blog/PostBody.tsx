import type { Block } from "@/content/blog-types";

export function Blocks({ blocks }: { blocks: Block[] }) {
  return (
    <>
      {blocks.map((b, i) => {
        if (b.kind === "p")
          return (
            <p key={i} className="mt-4 text-[17px]/[1.7] text-text-muted">
              {b.text}
            </p>
          );

        if (b.kind === "ul")
          return (
            <ul key={i} className="mt-5 flex list-none flex-col gap-3 p-0">
              {b.items.map((it) => (
                <li key={it} className="flex items-start gap-3">
                  <span
                    aria-hidden="true"
                    className="mt-[10px] block size-2 flex-none rounded-full bg-bleu"
                  />
                  <span className="text-[17px]/[1.65] text-text-muted">{it}</span>
                </li>
              ))}
            </ul>
          );

        if (b.kind === "takeaway")
          return (
            <div
              key={i}
              role="note"
              className="mt-7 rounded-[18px] border border-line bg-surface-2 p-6"
            >
              <p className="label-meta m-0">De reținut</p>
              <ul className="mt-3 flex list-none flex-col gap-2.5 p-0">
                {b.items.map((it) => (
                  <li key={it} className="text-[16px]/[1.6]">
                    {it}
                  </li>
                ))}
              </ul>
            </div>
          );

        return (
          <figure key={i} className="m-0 mt-7">
            <div className="table-scroll overflow-x-auto rounded-[18px] border border-line">
              <table className="w-full border-collapse text-left text-[15px]">
                <caption className="sr-only">{b.caption}</caption>
                <thead>
                  <tr className="bg-surface-2">
                    {b.head.map((h) => (
                      <th
                        key={h}
                        scope="col"
                        className="border-b border-line px-4 py-3 font-display text-[15px] font-extrabold"
                      >
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {b.rows.map((r, ri) => (
                    <tr key={ri} className="align-top">
                      {r.map((c, ci) => (
                        <td
                          key={ci}
                          className={`border-b border-line px-4 py-3 ${
                            ci === 0
                              ? "font-medium text-indigo"
                              : "text-text-muted"
                          }`}
                        >
                          {c}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <figcaption className="mt-2.5 text-[13px] text-text-label">
              {b.caption}
            </figcaption>
          </figure>
        );
      })}
    </>
  );
}
