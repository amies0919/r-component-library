import React, { useEffect } from 'react'
import { Button, Input, Modal, debounce, throttle } from '../src' // 直接引入组件库的源码

export default function App() {
  useEffect(() => {
    const handleSay = throttle(() => {
      console.log('must be slowly...')
    }, 60000)

    const sayOk = debounce(() => {
      console.log('ok, i will be more slowly...')
    }, 1000)
    const a = setInterval(handleSay, 100)
    const b = setInterval(sayOk, 60000)

    return () => {
      clearInterval(a)
      clearInterval(b)
    }
  }, [])
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
