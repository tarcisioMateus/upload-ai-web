import { Wand2 } from 'lucide-react'

import { Header } from './components/header'
import { VideoForm } from './components/video-form'
import { SelectPrompt } from './components/select-prompt'

import { Textarea } from './components/ui/textarea'
import { Separator } from './components/ui/separator'
import { Label } from './components/ui/label'
import { Slider } from './components/ui/slider'
import { Button } from './components/ui/button'
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from './components/ui/select'


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
          <VideoForm/>
          <Separator/>
          <form className='space-y-6'>
            <SelectPrompt/>

            <div className="space-y-2">
              <Label>Model</Label>

              <Select disabled defaultValue='gpt3.5'>
                <SelectTrigger>
                  <SelectValue/>
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="gpt3.5">GPT 3.5-turbo 16k</SelectItem>
                </SelectContent>
              </Select>
              
              <p className='text-muted-foreground italic text-sm'>
                pretty soon you'll be able to edit it.
              </p>
            </div>
            <Separator/>

            <div className='space-y-3'>
              <Label>Temperature</Label>
              <Slider
                min={0} max={1} step={0.1}
              />

              <p className='text-muted-foreground text-sm italic'>
                higher values turns it more creative, but more likely to make mistakes
              </p>
            </div>
            <Separator/>

            <Button className='w-full' type='submit'>
              Execute
              <Wand2 className='w-4 h-4 ml-2'/>
            </Button>
          </form>
        </aside>
      </main>
    </div>
  )
}
