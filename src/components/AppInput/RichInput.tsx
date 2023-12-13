import { useEffect, useState } from 'react'
import { RichTextEditor } from '@mantine/tiptap'
import { useEditor } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import classes from './RichInput.module.scss'

export const RichtTextInput = ({ ...props }) => {
  const [content, setContent] = useState<string>('')
  const editor = useEditor({
    extensions: [StarterKit],
    content
  })

  const onBlur = (event: any) => {
    const test = editor?.getHTML()
    setContent(test as string)
  }

  // const onUpdateRichText = (data: string) => {
  //   const test = editor?.getHTML();
  //   console.log(test, 'test...');
  //   setContent(test as string)
  // }

  return (
    <RichTextEditor
      editor={editor}
      classNames={{ root: classes.rich__container }}
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
