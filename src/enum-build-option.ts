export type EnumBuildOption<T> = Partial<{ 
  app: string, 
  areaNo: number ,
  ctor: (new () => T),
  nameOrCtor: string 
}>