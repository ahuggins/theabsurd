export default function Well({ children }: { children: React.ReactElement | string | null }) {
  return (
    <div className="bg-gray-100 border rounded-lg border-gray-200 p-6 max-w-3xl">{children}</div>
  );
}
