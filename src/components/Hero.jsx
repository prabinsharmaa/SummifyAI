import React from "react";

import { logos } from "../assets";
const Hero = () => {
  return (
        <header className='w-full flex justify-center items-center flex-col'>
          {/* </header><nav className='flex justify-between items-center w-full mb-10 pt-3'> */}
          <nav className='flex justify-between items-center w-full mb-10 pt-3'>
          <img src={logos} alt='sumz_logo' className='w-28 object-contain' />

<button
  type='button'
  onClick={() =>
    window.open("https://github.com/prabinsharmaa/SummifyAI", "_blank")
  }
  className='black_btn'
>
  GitHub
</button>
</nav>
<h1 className='head_text'>
        Summarize Articles with <br className='max-md:hidden' />
        <span className='orange_gradient '>GPT-4</span>
      </h1>
      <h2 className='desc'>
        Simplify your reading with AI_summarizer, an open-source article summarizer
        that transforms lengthy articles into clear and concise summaries
      </h2>
      <h1 className='desc'> <span className='orange_gradient '>Developed by : Prabin Sharma </span></h1>

</header>
  )
}

export default Hero