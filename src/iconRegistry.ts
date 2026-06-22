
 export const modules: Record<string, string> = import.meta.glob('/src/assets/minecraft-items/*.png', {
 import: 'default',
 eager: true
})


export const icons: Record<string, string> = {}

for(const [name,url] of Object.entries(modules)) {
  const parts = name.split('/')
  const filename = parts[parts.length - 1]
  icons[filename] = url
}


