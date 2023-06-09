export const getLoginConfig = (name: string, config: Array<LoginConfig>) => config.find(c => c.name === name)
