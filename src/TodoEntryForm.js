import React, { useState } from 'react';

export default function TodoEntryForm( { adder }) {
  const [content, setContent] = useState('');
  function submit(e) {
    e.preventDefault();
    if (content.trim()) {
      adder({ id: Math.random(), content });
    }
    setContent('');
  }
  return (
    <form onSubmit={submit}>
      <input value={content} onChange={e => setContent(e.target.value)} />
    </form>
  )
}
