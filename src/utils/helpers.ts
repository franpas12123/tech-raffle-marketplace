import { DashboardMenu } from "@/types/dashboardMenus";

const textToRoute = (text: string) => {
  return text.toLowerCase().split(' ').join('-');
}

const addRoutesFromText = (template: Array<DashboardMenu>) => template.map((menu, i) => {
  if (i === 0) {
    return { ...menu, route: '' }
  }
  return { ...menu, route: textToRoute(menu.title) }
})

const addIconSrc = (template: Array<DashboardMenu>, src: string) => template.map((menu) => {
  if (menu.icon.includes('.svg')) {
    return { ...menu, icon: src + menu.icon }
  }
})

export { textToRoute, addRoutesFromText, addIconSrc };