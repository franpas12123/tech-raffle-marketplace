
const localAssetUrl = (name: string) => {
  const assetFolder = './assets/test/'

  return assetFolder + name.toLowerCase() + '.png'
}

// const paymentMethodType = ()

export { localAssetUrl };