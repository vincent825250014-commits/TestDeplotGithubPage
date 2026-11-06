import React, { useState } from 'react';

function InputQuiz() {
  const [nama, setNama] = useState('');
  const [email, setEmail] = useState('');
  const [alamat, setAlamat] = useState('');

  return (
    <div>
      <h2>Input Data</h2>
      <p>
        Nama:{' '}
        <input
          type="text"
          value={nama}
          onChange={(e) => setNama(e.target.value)}
          placeholder="Masukkan Nama ..."
        />
      </p>
      <p>
        Email:{' '}
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Masukkan Email ..."
        />
      </p>
      <p>
        Alamat:{' '}
        <input
          type="text"
          value={alamat}
          onChange={(e) => setAlamat(e.target.value)}
          placeholder="Masukkan Alamat ..."
        />
      </p>

      <h3>Hasil Inputan:</h3>
      <p><b>Nama:</b> {nama}</p>
      <p><b>Email:</b> {email}</p>
      <p><b>Alamat:</b> {alamat}</p>
    </div>
  );
}

export default InputQuiz;