import { FC, useEffect, useRef, useState } from 'react'

type Size = {
  width: number,
  height: number,
}

const calculateSize = (refElement) => {
  return {
    width: refElement.current?.offsetWidth,
    height: refElement.current?.offsetHeight
  }
}

const Square: FC = () => {
  const contentRef = useRef<HTMLDivElement>(null)
  const [dimensions, setDimensions] = useState<Size>(calculateSize(contentRef))

  const onResize = () => {
    if (contentRef.current) {
      setDimensions({
        width: contentRef.current?.offsetWidth,
        height: contentRef.current?.offsetHeight
      })
    }
  }



  useEffect(() => {
    window.addEventListener('resize', onResize)

    return () => window.removeEventListener('resize', onResize)
  }, [])

  return (
    <div className="square" ref={contentRef}>
      <div className="squareWidth" id="width">Width: {dimensions.width}</div>

      <div className="squareHeight" id="height">Height: {dimensions.height}</div>
    </div>
  )
}

export default Square
