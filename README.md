### Estudo de Classes, Interfaces e Enums no Typescript
1. Instalar Typescript
```bash
npm install -g typescript
```

2. Instalar ts-node-dev
```bash
npm install -g ts-node-dev
```
3. Iniciar o tsconfig.json
```typescript
tsc --init
```

4. Compilar
```typescript
tsc file.ts
```

5. Executar
```typescript
ts-node-dev --respawn --transpile-only file.ts
// Ou apenas
ts-node-dev file.ts
```