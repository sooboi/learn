import Profile from "./components/Profile";
import "./App.css";
import Avatar from "./components/Avatar";

function App() {
  return (
    <div className="App">
      <Avatar image="https://images.unsplash.com/photo-1692732164798-4c1d389382c1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2126&q=80" />
      <Avatar
        isNew={true}
        image="https://images.unsplash.com/photo-1692732164798-4c1d389382c1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2126&q=80"
      />
      <Profile
        image="https://images.unsplash.com/photo-1692732164798-4c1d389382c1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2126&q=80"
        name="Soo"
        title="공부중"
        isNew={true}
      />
      <Profile
        image="https://plus.unsplash.com/premium_photo-1692833837064-c3fb26296a4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
        name="Lee"
        title="쉬는중"
        isNew={false}
      />
      <Profile
        image="https://images.unsplash.com/photo-1692581380353-c30f6f0d9c1f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
        name="Boo"
        title="자는중"
        isNew={false}
      />
    </div>
  );
}

export default App;
