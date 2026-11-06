import React from 'react'
import ReactDOM from 'react-dom/client'
import InputQuiz from './input_quiz.jsx'
import TambahKurang from './tambah_kurang.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div>
      <TambahKurang/>
      <InputQuiz/>
    </div>
  </React.StrictMode>,
)
