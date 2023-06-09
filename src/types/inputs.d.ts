// This file is for importing typescript types for the inputs

declare interface InputConfig {
  name: string
  vModel: any;
  placeholder?: string,
  [key: string]: any;
}

declare interface LoginConfig extends InputConfig {
  vModel: string;
}