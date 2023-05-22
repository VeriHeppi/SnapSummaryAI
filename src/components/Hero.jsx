import { logo } from '../assets/'

const Hero = () => {
  return (
    <header className='w-full flex justify-center items-center flex-col'>
        <nav className='flex justify-between items-center w-full mb-10 pt-3'>
            <img src={logo} alt='SnapSummary_logo' className='w-28 object-contain'/>
            <button type='button'
                onClick={()=> {window.open('https://github.com/VeriHeppi/SnapSummaryAI')}}
                className='black_btn'> Github </button>
        </nav>
        <h1 className='head_text'>
            <span className='blue_gradient'>Summarize</span> Articles with <br className='max-md:hidden' />
            <span>GPT 4</span>
        </h1>
        <h2 className='desc'>
            Unlock the power of efficient reading, enhance your productivity, 
            and stay ahead of the information overload. 
            SnapSummary.AI: Your shortcut to knowledge at the speed of thought!
        </h2>
    </header>
  )
}

export default Hero