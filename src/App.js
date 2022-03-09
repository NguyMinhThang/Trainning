import { useState } from "react";
import { useEffect } from "react";
function App() {
  const [memJava, setJava] = useState([
    {
      id: 1,
      name: "Nguyễn Anh Thư",
      age: 20,
      type: "Java"
    },
    {
      id: 2,
      name: "Nguyễn Văn Cường",
      age: 20,
      type: "Jave"
    },
    {
      id: 3,
      name: "Phan Đinh Tùng",
      age: 20,
      type: "Java"
    }
  ]);
  const [memReact, setReact] = useState([
    {
      id: 4,
      name: "Ngụy Minh Thắng",
      age: 20,
      type: "React"
    },
    {
      id: 5,
      name: "Nguyễn Đăng Quý",
      age: 20,
      type: "React"
    },
    {
      id: 6,
      name: "Đinh Tuấn Anh",
      age: 20,
      type: "React"
    }
  ]);
  const [change, setChange] = useState("React");
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [id, setId] = useState(1);

  const handleAdd = () => {
    // if(change === 'React') {
    //     setReact([...memReact, {
    //         id,
    //         type:'React',
    //         name,
    //         age: Number(age)
    //     }])
    // } if(change==='Java'){
    //     setJava([...memJava, {
    //         id,
    //         type:'Java',
    //         name,
    //         age: Number(age)
    //     }])
    // }
    if (id !== "" && change === "React") {
      const state = [...memReact];
      console.log("mem react", memReact);
      const index = memReact.findIndex((item) => item.id === id);
      if (index < 0) {
        alert("WARNING: member not in React class");
      }
      state[index] = { ...memReact[index], name: name, age: age };
      setReact(state);
      console.log(memReact);
    }

    if (id !== "" && change === "Java") {
      const state = [...memJava];
      const index = memJava.findIndex((item) => item.id === id);
      if (index < 0) {
        alert("WARNING: member not in Java class");
      }
      state[index] = { ...memJava[index], name: name, age: age };
      setJava(state);
      console.log(memReact);
    }

    // console.log(change)
    // setName('')
    // setAge('')

    // let ids = id+1
    // setId(ids)
    // console.log(memReact)
    console.log("id", id);

    console.log("change", change);
    console.log("name", name);
    console.log("age", age);
  };
  const hanleChange = (e) => {
    setChange(e.target.value);
  };
  useEffect(() => {
    if (memJava.length === 0) {
      alert("WARNING: java class is empty now");
    } else if (memReact.length === 0) {
      alert("WARNING: react class is empty now");
    }
  }, [memReact.length, memJava.length]);
  const handleTranfer = (user) => {
    if (user.type === "React") {
      let newList = memReact.filter((item) => item.id !== user.id);

      setReact([...newList]);
      setJava([
        ...memJava,
        {
          id: user.id,
          name: user.name,
          age: user.age,
          type: "Java"
        }
      ]);
    }
    if (user.type === "Java") {
      let newList = memJava.filter((item) => item.id !== user.id);
      setJava([...newList]);
      setReact([
        ...memReact,
        {
          id: user.id,
          name: user.name,
          age: user.age,
          type: "React"
        }
      ]);
    }
  };
  const handleEdit = (user) => {
    setName(user.name);
    setAge(user.age);
    setId(user.id);
  };
  return (
    <div>
      <h1>List member of React</h1>
      <ul>
        {memReact.map((member, index) => (
          <li key={index}>
            name: {member.name} -age: {member.age}
            <button onClick={() => handleTranfer(member)}>Tranfer</button>
            <button onClick={() => handleEdit(member)}>Edit</button>
          </li>
        ))}
      </ul>
      <h1>List member of Java</h1>
      <ul>
        {memJava.map((member, index) => (
          <li key={index}>
            name: {member.name} - age: {member.age}
            <button onClick={() => handleTranfer(member)}>Tranfer</button>
            <button onClick={() => handleEdit(member)}>Edit</button>
          </li>
        ))}
      </ul>
      <input
        placeholder="Enter name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        placeholder="Enter age"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />
      <select onChange={hanleChange}>
        <option value="React">React</option>
        <option value="Java">Java</option>
      </select>
      <br />
      <button onClick={handleAdd}>Add member</button>
    </div>
  );
}

export default App;
