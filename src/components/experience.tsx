export function ExperienceList() {
  return (
    <div>
      <ol className="group/list"></ol>
    </div>
  );
}

export function ExperienceItem() {
  return (
    <li className="mb-12">
      <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50"></div>
    </li>
  );
}
