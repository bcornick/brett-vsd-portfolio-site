declare global {
  namespace NodeJS {
    interface ProcessEnv {
      WEBHOOK_API_KEY: string
      WEBHOOK_ID: string
    }
  }
}

export {}
