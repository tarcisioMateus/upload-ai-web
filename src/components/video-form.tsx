import { FileVideo, Upload } from "lucide-react"

import { Separator } from "./ui/separator"
import { Label } from "./ui/label"
import { Textarea } from "./ui/textarea"
import { Button } from "./ui/button"


export function VideoForm() {
  return (
    <form  className="space-y-6">
      <label htmlFor="video" 
        className="flex flex-col gap-2 items-center justify-center border border-dashed rounded-md aspect-video cursor-pointer text-sm text-muted-foreground hover:bg-primary-foreground"
      >
        <FileVideo className="w-4 h-4 "/>
        Select a video
      </label>
      <input 
        type="file" id="video" accept="video/mp4" className="sr-only"
      />
      <Separator/>
      <div
        className="flex flex-col space-y-2"
      >
        <Label
          className="flex"
        >
          Description Prompt
        </Label>
        <Textarea
          className="h-8 resize-none leading-relaxed"
        />
      </div>
      <Button type="submit" className="w-full ">
        Loading video
        <Upload className="w-4 h-4 ml-2"/>
      </Button>
    </form>
  )
}