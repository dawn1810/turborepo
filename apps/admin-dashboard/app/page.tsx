import { ButtonClient } from "./components/ButtonClient";

export default function Admin() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-4xl font-bold mb-4">
        {process.env.NEXT_PUBLIC_APP_NAME}
      </h1>
      <p className="mb-4">API URL!!!: {process.env.NEXT_PUBLIC_API_URL}</p>
      <ButtonClient />
    </div>
  );
}
