
export default async function Home() {
  const { prisma } = await import("../lib/prisma");

  const rabanoides = await prisma.rabanoide
    .findMany({
      take: 10,
      orderBy: { id: "desc" },
    })
    .catch(() => undefined);

  const items = await prisma.item
    .findMany({
      take: 10,
      orderBy: { id: "desc" },
    })
    .catch(() => undefined);

  return (
    <main className="shell">
      <div className="hero">
        <p className="eyebrow">Next.js + Prisma 7</p>
        <h1>Database records</h1>
        <p className="lede">
          This page reads from <code>src/app/page.tsx</code> using the Prisma instance in{" "}
          <code>src/lib/prisma.ts</code>.
        </p>
      </div>

      <section className="panel">
        <div className="panelHeader">
          <h2>Rabanoides</h2>
          <span>{rabanoides?.length ?? 0} total</span>
        </div>

        {!rabanoides ? (
          <p className="empty">
            Could not query rabanoides yet. Run <code>db:migrate</code>, then <code>db:seed</code>,
            then refresh.
          </p>
        ) : rabanoides.length === 0 ? (
          <p className="empty">No rabanoides yet. Run <code>db:seed</code> after your first migration.</p>
        ) : (
          <ul className="users">
            {rabanoides.map((r) => (
              <li key={r.id}>
                <div>
                  <strong>Rabanoide #{r.id}</strong>
                  <p>Color: {r.colorpiel}</p>
                </div>
              </li>
            ))}
          </ul>
        )}
      </section>

      <section className="panel">
        <div className="panelHeader">
          <h2>Items</h2>
          <span>{items?.length ?? 0} total</span>
        </div>

        {!items ? (
          <p className="empty">
            Could not query items yet. Run <code>db:migrate</code>, then <code>db:seed</code>,
            then refresh.
          </p>
        ) : items.length === 0 ? (
          <p className="empty">No items yet. Run <code>db:seed</code> after your first migration.</p>
        ) : (
          <ul className="users">
            {items.map((item) => (
              <li key={item.id}>
                <div>
                  <strong>Item #{item.id}</strong>
                  <p>ItemId: {item.itemId}</p>
                </div>
              </li>
            ))}
          </ul>
        )}
      </section>
    </main>
  );
}
