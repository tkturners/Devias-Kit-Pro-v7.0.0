export interface Env {
  // App
  NEXT_PUBLIC_SITE_URL?: string;
  NEXT_PUBLIC_SITE_VERSION?: string;
  NEXT_PUBLIC_VERCEL_URL?: string;

  // Logger
  NEXT_PUBLIC_LOG_LEVEL?: string;

  // Auth
  NEXT_PUBLIC_AUTH_STRATEGY?: string;

  // Auth0
  AUTH0_SECRET?: string;
  AUTH0_ISSUER_BASE_URL?: string;
  AUTH0_BASE_URL?: string;
  AUTH0_CLIENT_ID?: string;
  AUTH0_CLIENT_SECRET?: string;

  // AWS Cognito
  NEXT_PUBLIC_COGNITO_IDENTITY_POOL_ID?: string;
  NEXT_PUBLIC_COGNITO_USER_POOL_CLIENT_ID?: string;
  NEXT_PUBLIC_COGNITO_USER_POOL_ID?: string;

  // Firebase
  NEXT_PUBLIC_FIREBASE_API_KEY?: string;
  NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN?: string;
  NEXT_PUBLIC_FIREBASE_PROJECT_ID?: string;
  NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET?: string;
  NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID?: string;
  NEXT_PUBLIC_FIREBASE_APP_ID?: string;

  // Supabase
  NEXT_PUBLIC_SUPABASE_REF_ID?: string;
  NEXT_PUBLIC_SUPABASE_URL?: string;
  NEXT_PUBLIC_SUPABASE_ANON_KEY?: string;

  // Mapbox
  NEXT_PUBLIC_MAPBOX_API_KEY?: string;

  // Google Tag Manager
  NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID?: string;
}

declare global {
  namespace NodeJS {
    interface ProcessEnv extends Env {}
  }
}
