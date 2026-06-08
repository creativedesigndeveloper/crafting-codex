import logo from '@/assets/Crafting Codex Logo.png'

const Header = () => {
  return (
    <div className='bg-bg-header w-full'>
      <img className='w-55 flex items-center justify-center text-center mx-auto p-5 md:w-80 md:block md:mx-0' src={logo} alt="Crafting Codex" />
    </div>
  )
}

export default Header