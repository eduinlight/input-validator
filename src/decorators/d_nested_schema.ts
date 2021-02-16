const NestedSchema = (schema: any) =>
  (target: any, key: string) => {
    const current = target[key] || []
    target[key] = [...current, { rule: schema }]
  }

export default NestedSchema
