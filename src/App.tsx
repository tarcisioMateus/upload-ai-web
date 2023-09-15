import { Header } from './components/header'
import { Textarea } from './components/ui/textarea'

export function App() {

  return (
    <div
      className='min-h-screen flex flex-col'
    >
      <Header/>

      <main
        className='flex-1 p-6 flex gap-6'
      >
        <div
          className='flex flex-col flex-1 gap-4'
        >
          <div
            className='grid grid-rows-2 gap-4 flex-1'
          >
            <Textarea
              className='resize-none p-4 leading-relaxed'
              placeholder='add prompt for AI...'
            />
            <Textarea
              className='resize-none p-4 leading-relaxed'
              placeholder='AI result...'
              readOnly={true}
            />
          </div>
          <p
            className='text-muted-foreground text-sm'
          >
            remember: you can use the variable 
            <code
              className='text-violet-300'
            >{' {transcription} '}</code>
            on your prompt to add content to the video transcription. 
          </p>
        </div>

        <aside
          className='w-60 space-y-6'
        >

        </aside>
      </main>
    </div>
  )
}
