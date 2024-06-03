export const revalidate = 0

export default async function AuthImage() {
  const resp = await fetch('https://source.unsplash.com/random', {cache: 'no-store'})
  let randomURL = ''
  if(resp.status === 200) {
    randomURL = resp.url
  }

  return (
    <div 
      className="hidden md:block w-1/2"
    >
      <img 
        src={randomURL || '/bg-default-auth.jpg'}
        alt="Uma imagem aleatória" 
        className="h-screen w-full object-cover transition-all"
      />
    </div>
  )
}