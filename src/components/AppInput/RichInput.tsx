import { useEffect, useState } from 'react'
import { RichTextEditor } from '@mantine/tiptap'
import { useEditor } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import Highlight from '@tiptap/extension-highlight'
import Underline from '@tiptap/extension-underline'
import classes from './RichInput.module.scss'

type TRichTextInput = {
  value: any
  field: string
  update: (data: string) => void
}

export const RichtTextInput = ({
  value,
  field,
  update,
  ...props
}: TRichTextInput) => {
  const [content, setContent] = useState<string>(value)
  const editor = useEditor({
    extensions: [StarterKit, Highlight, Underline],
    content
  })

  const onBlur = () => {
    setContent(editor?.getHTML() as string)
    update(editor?.getHTML() as string)
  }

  useEffect(() => {
    setContent(value)
    editor?.commands.clearContent()
    editor?.commands.insertContent(value)
  }, [value])

  return (
    <RichTextEditor
      classNames={{ root: classes.rich__container }}
      editor={editor}
      onBlur={onBlur}
    >
      <RichTextEditor.Toolbar
        sticky
        stickyOffset={60}
        classNames={{ toolbar: classes.rich__toolbar }}
      >
        <RichTextEditor.ControlsGroup
          classNames={{ controlsGroup: classes['toolbar-group'] }}
        >
          <RichTextEditor.H1 classNames={{ control: classes['btn-control'] }} />
          <RichTextEditor.H2 classNames={{ control: classes['btn-control'] }} />
          <RichTextEditor.H3 classNames={{ control: classes['btn-control'] }} />
          <RichTextEditor.H4 classNames={{ control: classes['btn-control'] }} />
        </RichTextEditor.ControlsGroup>
        <RichTextEditor.ControlsGroup
          classNames={{ controlsGroup: classes['toolbar-group'] }}
        >
          <RichTextEditor.Bold
            classNames={{ control: classes['btn-control'] }}
          />
          <RichTextEditor.Italic
            classNames={{ control: classes['btn-control'] }}
          />
          <RichTextEditor.Underline
            classNames={{ control: classes['btn-control'] }}
          />
          <RichTextEditor.Strikethrough
            classNames={{ control: classes['btn-control'] }}
          />
          <RichTextEditor.ClearFormatting
            classNames={{ control: classes['btn-control'] }}
          />
          <RichTextEditor.Highlight
            classNames={{ control: classes['btn-control'] }}
          />
        </RichTextEditor.ControlsGroup>
      </RichTextEditor.Toolbar>
      <div className={classes.rich__content}>
        <RichTextEditor.Content />
      </div>
    </RichTextEditor>
  )
}
