import type { ReactElement } from "react";

export default function FrontendLayout({
  children,
}: {
  children: ReactElement;
}) {
  return (
    <>
      <div>
        <h2>Frontend Layout</h2>
        {children}
      </div>
    </>
  );
}
