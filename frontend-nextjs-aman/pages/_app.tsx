import { Auth0Provider } from "@auth0/nextjs-auth0";
import type { AppProps } from "next/app";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Auth0Provider
      domain={process.env.NEXT_PUBLIC_AUTH0_ISSUER_BASE_URL as string}
      clientId={process.env.NEXT_PUBLIC_AUTH0_CLIENT_ID as string}
      authorizationParams={{
        redirect_uri: process.env.NEXT_PUBLIC_AUTH0_BASE_URL,
      }}
    >
      <Component {...pageProps} />
    </Auth0Provider>
  );
}
