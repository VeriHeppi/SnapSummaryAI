import { useState, useEffect } from 'react'

import { copy, linkIcon, loader, tick } from '../assets'

const Demo = () => {
  const [article, setArticle] = useState({
    url: '',
    summary: '',
  })

  const handeSubmit = async () => {
    alert('submitted')
  }

  return (
    <section className='mt-16 w-full max-w-xl'>
      {/*Search */}
      <div className='flex flex-col w-full gap-2'>
        <form
          className='relative flex justify-center items-center'
          onSubmit={handeSubmit}>

          <img
              src={linkIcon}
              alt='link_icon'
              className='absolute left-3 top-1/2 transform -translate-y-1/2 w-5'
            />

          <input
            type='url'
            placeholder='Enter a URL to your article'
            value={article.url}
            onChange={(e)=>{setArticle({...article, url: e.target.value})}}
            required
            className='url_input peer'
            />

            <button type='submit' className='submit_btn peer-focus:border-gray-700 peer-focus:text-gray-700'>↵</button>
        </form>

        {/* Browse URL History */}
      </div>

      {/* Display Result */}
    </section>
  )
}

export default Demo