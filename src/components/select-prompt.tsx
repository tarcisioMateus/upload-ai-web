import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select"
import { Label } from "./ui/label"

export function SelectPrompt() {
  return (
    <div className="space-y-2">
      <Label>Prompt</Label>

      <Select>
        <SelectTrigger>
          <SelectValue placeholder='select a prompt'/>
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="title">YouTube title</SelectItem>
          <SelectItem value="description">YouTude description</SelectItem>
        </SelectContent>
      </Select>
    </div>
  )
}