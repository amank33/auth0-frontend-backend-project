import { useUser } from "@auth0/nextjs-auth0";

export default function Home() {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl font-bold">Next.js Auth0 Authentication</h1>
      {user ? (
        <div className="mt-4">
          <p>Welcome, {user.name}!</p>
          <a href="/api/auth/logout" className="text-red-500 underline">Logout</a>
        </div>
      ) : (
        <a href="/api/auth/login" className="text-blue-500 underline">Login</a>
      )}
    </div>
  );
}
