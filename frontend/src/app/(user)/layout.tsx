import { Header } from "@/src/components/user/Header";
import { RequireAuth } from "@/src/components/auth/RequireAuth";

export default function UserLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <RequireAuth>
      <Header />
      <div className="mx-auto w-full max-w-5xl px-4 py-6">
        <div className="rounded-3xl bg-white/90 p-6 shadow-xl border border-purple-100">
          {children}
        </div>
      </div>
    </RequireAuth>
  );
}