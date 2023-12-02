const svgFileList = import.meta.glob('../svg/**/*.svg', {
  import: 'default',
  eager: true
})

const svg = () => {
  const icons: { [key: string]: any } = {}
  for (const fileName in svgFileList) {
    const svgName = fileName.match(/([\w-]*)\.svg$/)?.[1]
    if (svgName) {
      icons[svgName] = svgFileList[fileName]
    }
  }
  console.log(icons)
  return icons
}

export default svg()
