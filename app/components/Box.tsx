export default function Box({ children }: childrenType) {
  return (
    <div className="rounded-xl w-full max-w-lg mx-auto shadow-[0_0_10px_-4px_rgba(0,0,0,0.3)] p-4">
      {children}
    </div>
  );
}

type childrenType = { children: React.ReactNode };
