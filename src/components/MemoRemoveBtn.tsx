import React from 'react'
import { HiOutlineTrash } from 'react-icons/hi'

export default function MemoRemoveBtn() {
  return (
    <button className="text-red-400">
      <HiOutlineTrash size={24} />
    </button>
  )
}
