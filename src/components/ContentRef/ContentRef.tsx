import { FC, useCallback, useEffect, useRef, useState } from 'react'

type Size = {
  width: number,
  height: number,
}

const ContentRef: FC = () => {
  const contentRef = useRef<HTMLDivElement>(null)
  const [dimensions, setDimensions] = useState<Size>({ width: 0, height: 0 })
  const [increment, setIncrement] = useState<number>(16)

  const onResize = useCallback(() => {
    if (contentRef.current) {
      return setDimensions({
        width: contentRef.current?.offsetWidth,
        height: contentRef.current?.offsetHeight
      })
    }
    console.log('Rendering')
  }, [contentRef])

  const handleClickBtn = () => {
    setIncrement(prevValue => prevValue + 1)
  }

  useEffect(() => {
    onResize()
    window.addEventListener('resize', onResize)

    return () => window.removeEventListener('resize', onResize)
  }, [onResize])

  return (
    <div className="square" ref={contentRef}>
      <div className="squareWidth" id="width">Width: {dimensions.width}</div>
      <div className="squareHeight" id="height">Height: {dimensions.height}</div>

      <div className="increment">
        <div>{increment}</div>
        <button onClick={handleClickBtn}>+1</button>
      </div>
    </div>
  )
}

export default ContentRef
