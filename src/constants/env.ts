const getEnv = (key: string, defaultValue?: string): string => {
  const value = process.env[key] || defaultValue

  if (!value) {
    throw new Error(`Missing String environment variable for ${key}`)
  }

  return value
}

export const NODE_ENV = getEnv('NODE_ENV', 'development')
export const PORT = getEnv('PORT', '4004')
export const APP_ORIGIN = getEnv('APP_ORIGIN')
