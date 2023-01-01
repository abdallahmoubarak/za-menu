export default function Search({ search, setSearch }: searchTypes) {
  return (
    <div className="p-2">
      <input
        placeholder="Search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="px-4 py-1 rounded-3xl w-full shadow-[0_0_10px_-3px_rgba(0,0,0,0.3)]"
      />
    </div>
  );
}

type searchTypes = { search: string; setSearch: Function };
