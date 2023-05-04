export const NestedSchema = (schema: any) =>
  (target: any, key: any) => {
    const current = target[key] || []
    target[key] = [...current, { rule: schema }]
  }
