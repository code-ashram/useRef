import { useCallback, useEffect, useState } from 'react'

const enum THEME {
  DARK = 'dark',
  LIGHT = 'light',
}

const useTheme = (): THEME => {
  const [theme, setTheme] = useState<THEME>(THEME.LIGHT)

  const onChange = useCallback(() => window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
    return event.matches ? THEME.DARK : THEME.LIGHT
  }), [])

  useEffect(() => {
    onChange()
    setTheme(window.matchMedia('(prefers-color-scheme: dark)').matches ? THEME.DARK : THEME.LIGHT)
  }, [onChange])

  return theme
}

export default useTheme
