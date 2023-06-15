import { DashboardMenu } from "@/types/dashboardMenus";
import dayjs from "dayjs";

const textToRoute = (text: string) => {
  return text.toLowerCase().split(' ').join('-');
}

const addRoutesFromText = (template: Array<DashboardMenu>) => template.map((menu, i) => {
  // if (i === 0) {
  //   return { ...menu, route: '' }
  // }
  return { ...menu, route: textToRoute(menu.title) }
})

const addIconSrc = (template: Array<DashboardMenu>, src: string) => template.map((menu) => {
  if (menu.icon.includes('.svg')) {
    return { ...menu, icon: src + menu.icon }
  }
})

const getVModel = (obj: any) => obj.vModel

const getConfig = (name: string, config: Array<any>) => config.find(c => c.name === name)

// a function to convert a js date to dayjs date in this format('DD/MM/YYYY')
const formatDate = (date: Date) => {
  return dayjs(date).format('MM/DD/YYYY')
}

export { textToRoute, addRoutesFromText, addIconSrc, getVModel, getConfig, formatDate };