export default function Option({ icon, name }: optionTypes) {
  return (
    <div className="flex items-center gap-2 cursor-pointer py-1">
      <span className="text-gray-600">{icon}</span>
      {name}
    </div>
  );
}
type optionTypes = { icon: any; name: string };
