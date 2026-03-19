import { useState, useEffect } from 'react'

export function useTyper(words) {
  const [idx, setIdx] = useState(0)
  const [txt, setTxt] = useState('')
  const [del, setDel] = useState(false)

  useEffect(() => {
    const word = words[idx]
    const t = setTimeout(() => {
      if (!del && txt === word) { setTimeout(() => setDel(true), 1800); return }
      if (del && txt === '') { setDel(false); setIdx(i => (i + 1) % words.length); return }
      setTxt(del ? word.slice(0, txt.length - 1) : word.slice(0, txt.length + 1))
    }, del ? 42 : 88)
    return () => clearTimeout(t)
  }, [txt, del, idx, words])

  return txt
}
