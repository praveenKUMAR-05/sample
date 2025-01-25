import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
      <header>
        <div className="profile-img">
        <img src="C:\Users\hp-pc\Downloads\WhatsApp Image 2024-12-21 at 14.24.14_77adb207.png" alt="Praveen Kumar" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        </div>

        <h1>Praveen Kumar Mohan</h1>
        <p>Electronics and Communication Engineer | IoT Enthusiast</p>
        <a href="#contact" class="btn">Contact Me</a>
    </header>

    <div class="main-content">
        <section class="section">
            <h2>About Me</h2>
            <p>Currently enhancing skills in Embedded Systems, IoT, Signals and Systems, and Verilog coding.</p>
        </section>

        <section class="section">
            <h2>Skills</h2>
            <ul>
                <li>Programming Languages: Python, Java, C++</li>
                <li>Tools: Arduino, Tinkercad, Raspberry Pi Pico</li>
                <li>Soft Skills: Collaboration, Time Management</li>
            </ul>
        </section>

        <section class="section">
            <h2>Projects</h2>
            <ul>
                <li>Grocery Management System using Python and MySQL</li>
                <li>LED Detection System using Arduino</li>
                <li>Gas Sensor Simulation with Tinkercad</li>
            </ul>
        </section>
    </div>

    <footer class="footer">
        <p>© 2024 Praveen Kumar Mohan. All Rights Reserved.</p>
    </footer>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
