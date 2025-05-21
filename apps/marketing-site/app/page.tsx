import { ButtonClient } from "./components/button-client";

export default function MarketingSite() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-4xl font-bold mb-4">
        Marketing Site
      </h1>
      <p className="mb-4">API URL: {process.env.NEXT_PUBLIC_API_URL || 'no url set'}</p>
      <ButtonClient />
    </div>
  );
}
