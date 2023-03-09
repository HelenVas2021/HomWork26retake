import { useEffect, useState } from 'react';
import './App.css';
import Button from './components/Button';
import ListPage from './components/ListPage';
import AddUsers from './components/AddUser/AddUsers';

function App() {
    let [list, setList] = useState([]);
    let [showList, setShowList] = useState(false);
    let [showAddUser, setShowAddUser] = useState(false);

    const showAllList = function(data){
        if (Array.isArray(data)) {
           setList(data);
          } else if(typeof data === "object" && data !== null) {
            setList([...list, data]);
          } 
    }

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((res) => res.json())
            .then((data) => setList(data));
    }, []);

    function showAllUser() {
        showList === false ? setShowList(true) : setShowList(false);
    }

    const showAddUserForm = function () {
        setShowAddUser(!showAddUser);
    };

    return (
        <div className='App'>
            <div className='btnWrap'>
                <Button value='Show all list' showAllUser={showAllUser} />
                <Button value='Add the user' showAddUserForm={showAddUserForm} />
            </div>
            {showAddUser && <AddUsers showAllList={showAllList} />}
            {showList && <ListPage list={list} showAllList={showAllList} />}

            {/* {typeof list !=="string" ? list.map((obj,index)=><p key={index}>{obj.name}</p>):<p>go loading</p>} */}
            {/* {list.map((obj,index)=><p key={index}>{obj.name}</p>)} */}
        </div>
    );
}

export default App;
