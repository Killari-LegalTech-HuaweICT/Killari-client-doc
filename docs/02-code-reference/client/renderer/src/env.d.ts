// Ambient env types placeholder

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV?: 'development' | 'production';
    }
  }
}