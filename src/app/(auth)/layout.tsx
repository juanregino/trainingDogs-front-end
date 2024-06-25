export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="w-dvw min-h-svh overflow-x-hidden bg-[#222] text-white ">
      {children}
    </main>
  );
}
