import type { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
    overwrite: true,
    schema: "https://nodejs.softwaretributario.com:3054/graphql",
    documents: ['src/domain/graphql/**/*.graphqls'],
    generates: {
        './src/domain/graphql/index.ts': {
            // preset: "client",
            plugins: ['typescript', 'typescript-operations', 'typescript-react-apollo'],
            config: {
              withHooks: true
            }
          }
    }
}

export default config