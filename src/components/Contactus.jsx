import React, { useEffect, useState } from 'react';

const Contactus = () => {
  const [data, setData] = useState({
    UserName: '',
    Email: '',
    Password: ''
  });

  const [error, setError] = useState('');

  const change = (event) => {
    const { name, value } = event.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const submit = (event) => {
    event.preventDefault();
    console.log(data);

     setData({UserName: '',Email: '', Password: ''});
  };

  useEffect(() => {
    if (data.Password && data.Password.length < 6) {
      setError('Password must be at least 6 characters');
    } else {
      setError('');
    }
  }, [data.Password]);

  

  return (
    <div className='form-container'>
      <form onSubmit={submit} className='form'>
        <label>UserName</label>
        <input
          type="text"
          name="UserName"
          value={data.UserName}
          placeholder="Enter Your UserName"
          onChange={change}
        />

        <br></br>

        <label>Email</label>
        <input
          type="email"
          name="Email"
          value={data.Email}
          placeholder="Enter Your Email"
          onChange={change}
        />
        <br></br>

        <label>Password</label>
        <input
          type="password"
          name="Password"
          value={data.Password}
          placeholder="Enter Your Password"
          onChange={change}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Contactus;
