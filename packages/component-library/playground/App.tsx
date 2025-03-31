import React from 'react'
import { Button, Input, Modal } from '../src' // 直接引入组件库的源码

export default function App() {
  return (
    <div>
      <h1>Component Library Playground</h1>
      <Button>Click Me</Button>
      <Input placeholder="Type here..." />
      <Modal
        title={''}
        isOpen={false}
        onClose={function (): void {
          throw new Error('Function not implemented.')
        }}
      >
        Modal Content
      </Modal>
    </div>
  )
}
