import logo from '@/assets/Crafting Codex Logo.png'

const Header = () => {
  return (
    <div className='bg-bg-header'>
      <img className='w-80 p-5' src={logo} alt="Crafting Codex" />
    </div>
  )
}

export default Header