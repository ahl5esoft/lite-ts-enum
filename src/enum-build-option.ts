export type EnumBuildOption<T> = { 
  nameOrCtor: string | (new () => T),
  app?: string, 
  areaNo?: number 
}