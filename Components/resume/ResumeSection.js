import React from "react";

export default function ResumeSection({ title, content }) {
  return (
    <div className="border-b border-slate-200 pb-6 last:border-b-0">
      <h2 className="text-2xl font-bold text-slate-900 mb-4">{title}</h2>
      {content}
    </div>
  );
}