import { Github } from 'lucide-react'
import { Button } from './ui/button'

export function Header() {

  return (
      <header 
      className='flex px-6 py-3 justify-between items-center border-b'
      >
        <h1 className='text-xl font-bold'>
          upload.ai
        </h1>
        <div className='flex items-center gap-3'>
          <p className='text-sm text-muted-foreground'>
            made with love on NLW !
          </p>
          <Button variant='secondary'>
            <Github
              className='w-4 h-4 mr-2'
            />
            Github
          </Button>
        </div>
      </header>
  )
}