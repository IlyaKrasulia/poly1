import React, { useState } from 'react';

import AboutUs from './components/AboutUs';
import Header from './components/Header';
import Vacancies from './components/Vacancies';
import Tutorial from './components/Tutorial';
import Footer from './components/Footer';

import './global-style.css';
import './stylesheet.css'

function App() {

  const [ vacationModalType, setVacationModalType ] = useState('')
  const [ leaveRequestType, setLeaveRequestType ] = useState('')

  const vacancies = [
    {
      title: 'Упаковування одягу на фабриці уasd Польщі',
      site: 'Польща, Щецин',
      salary: 7,
      description: 'Потрібні працівники на завод по виготовленню одягу для упаковки готового товару. Шукаємо жінок та чоловіків віком від 18 д...',
      date: '12.09.22',
      country: 'en',
      img: '../images/vac-1.png'
    },
    {
      title: 'Упаковуванasdня одягу на фабриці у Польщі',
      site: 'Польща, Щецин',
      salary: 7,
      description: 'Потрібні працівники на завод по виготовленню одягу для упаковки готового товару. Шукаємо жінок та чоловіків віком від 18 д...',
      date: '12.09.22',
      country: 'en',
      img: '../images/vac-1.png'
    },
    {
      title: 'Упаковування одягу на фабриці у Польщі',
      site: 'Польща, Щецин',
      salary: 7,
      description: 'Потрібні працівники на завод по виготовленню одягу для упаковки готового товару. Шукаємо жінок та чоловіків віком від 18 д...',
      date: '12.09.22',
      country: 'en',
      img: '../images/vac-1.png'
    },
    {
      title: 'Упаковування одягу на фабриці у Польщі',
      site: 'Польща, Щецин',
      salary: 7,
      description: 'Потрібні працівники на завод по виготовленню одягу для упаковки готового товару. Шукаємо жінок та чоловіків віком від 18 д...',
      date: '12.09.22',
      country: 'en',
      img: '../images/vac-1.png'
    },
    {
      title: 'Упаковування одягу на фабриці у Польщі',
      site: 'Польща, Щецин',
      salary: 7,
      description: 'Потрібні працівники на завод по виготовленню одягу для упаковки готового товару. Шукаємо жінок та чоловіків віком від 18 д...',
      date: '12.09.22',
      country: 'pl',
      img: '../images/vac-2.png'
    },
    {
      title: 'Упаковування одягу на фабриці у Польщі',
      site: 'Польща, Щецин',
      salary: 7,
      description: 'Потрібні працівники на завод по виготовленню одягу для упаковки готового товару. Шукаємо жінок та чоловіків віком від 18 д...',
      date: '12.09.22',
      country: 'au',
      img: '../images/vac-3.png'
    },
    {
      title: 'Упаковування одягу на фабриці у Польщі',
      site: 'Польща, Щецин',
      salary: 7,
      description: 'Потрібні працівники на завод по виготовленню одягу для упаковки готового товару. Шукаємо жінок та чоловіків віком від 18 д...',
      date: '12.09.22',
      country: 'en',
      img: '../images/vac-4.png'
    },
    {
      title: 'Упаковування одягу на фабриці у Польщі',
      site: 'Польща, Щецин',
      salary: 7,
      description: 'Потрібні працівники на завод по виготовленню одягу для упаковки готового товару. Шукаємо жінок та чоловіків віком від 18 д...',
      date: '12.09.22',
      country: 'pl',
      img: '../images/vac-1.png'
    },
    {
      title: 'Упаковування одягу на фабриці у Польщі',
      site: 'Польща, Щецин',
      salary: 7,
      description: 'Потрібні працівники на завод по виготовленню одягу для упаковки готового товару. Шукаємо жінок та чоловіків віком від 18 д...',
      date: '12.09.22',
      country: 'de',
      img: '../images/vac-2.png'
    },
    {
      title: 'Упаковування одягу на фабриці у Польщі',
      site: 'Польща, Щецин',
      salary: 7,
      description: 'Потрібні працівники на завод по виготовленню одягу для упаковки готового товару. Шукаємо жінок та чоловіків віком від 18 д...',
      date: '12.09.22',
      country: 'de',
      img: '../images/vac-3.png'
    },
    {
      title: 'Упаковування одягу на фабриці у Польщі',
      site: 'Польща, Щецин',
      salary: 7,
      description: 'Потрібні працівники на завод по виготовленню одягу для упаковки готового товару. Шукаємо жінок та чоловіків віком від 18 д...',
      date: '12.09.22',
      country: 'nl',
      img: '../images/vac-1.png'
    },
  ]

  return (
    <div className="App">
      <Header 
        vacancies={vacancies} 
        vacationModalType={vacationModalType} 
        setVacationModalType={setVacationModalType} 
        leaveRequestType={leaveRequestType} 
        setLeaveRequestType={setLeaveRequestType} 
      />
      <AboutUs 
        setLeaveRequestType={setLeaveRequestType}
        leaveRequestType={leaveRequestType}
      />
      <Tutorial />
      <Vacancies 
        vacancies={vacancies} 
        vacationModalType={vacationModalType} 
        setVacationModalType={setVacationModalType}  
        leaveRequestType={leaveRequestType} 
        setLeaveRequestType={setLeaveRequestType} 
      />
      <Footer />
    </div>
  );
}

export default App;
