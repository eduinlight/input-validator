import rules from './rules'

export type RuleType = keyof typeof rules;

// eslint-disable-next-line no-unused-vars
export type LocaleType = {[K in (keyof typeof rules)]: string}

export type DataType = Record<string, any>;

export type RuleParamType = string | number | Date | object;

export type RuleFunctionType = (str: string, ...args: RuleParamType[]) => boolean

export interface IObjectRuleType {
  rule: RuleType;
  params?: RuleParamType[];
  message?: string;
}

export type SchemaType = Record<string, Array<RuleType | IObjectRuleType>>;

export class FieldError {
  field: string;
  error: string
  constructor (field: string, error: string) {
    this.field = field
    this.error = error
  }
}

export class PopulatedRule {
  rule: any = () => true;
  params: RuleParamType[] = [];
  message = '';

  constructor (rule: any = () => true, params: RuleParamType[] = [], message: string = '') {
    this.rule = rule
    this.params = params
    this.message = message
  }
}

export interface IValidationResponse {
  valid: boolean;
  errors: FieldError[];
  values: DataType;
}

export class InputError extends Error {
  errors: FieldError[]
  constructor (errors: FieldError[], errorStr: string = '') {
    super(errorStr)
    this.errors = errors
  }
}

export interface ValidateOptions {
  exact?: boolean;
}
