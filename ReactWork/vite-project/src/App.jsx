import './App.css';
import logo from "./assets/college_logo.png";
import Mani from "./ImageManipulation";
const App=() => {

  const myStyle={
    color:'red',
    fontSize:40
  }

  const studentData=[{
    college: "ABES ENGINEERING COLLEGE",
    pic: `${logo}`,
    name: "MAYANK",
    roll: "18",
    branch: "CSE",
    section: "A"
  },{
    college: "ABES ENGINEERING COLLEGE",
    pic: `${logo}`,
    name: "JALAJ",
    roll: "79",
    branch: "CSE",
    section: "A"
  },{
    college: "ABES ENGINEERING COLLEGE",
    pic: `${logo}`,
    name: "CHITZZ",
    roll: "92",
    branch: "CSE",
    section: "A"
  }
]

  return (
    <>
      <div style={{background:""}} className='app'>
        {/* <h1 style={{color: "blue"}}>Mayank Srivastava</h1>
        <h2 style={myStyle}>Zakirrrr</h2>
        <div className='cards' style={{display:'flex'}}> */}
          {/* <Student pic={logo} name="Mayank" roll="18" branch="CSE" section="A" />
        <Student college="ABES Engineering College" pic={logo} name="Mayank" roll="18" branch="CSE" section="A" />
        <Student college="ABES Engineering College" pic={logo} name="Mayank" roll="18" branch="CSE" section="A" /> */}
        {/* <Student data={studentData[0]} />
        <Student data={studentData[1]} />
        <Student data={studentData[2]} /> */}
        {/* <StudentState/> */}
        <Mani/>
      </div>
    </>
  )
}

export default App
