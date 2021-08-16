import React, { useEffect, useState } from 'react';
import { getUsers } from '../Services/list.js'

const Main = () => {
    const [users, setUsers] = useState([]);

    useEffect(()=>{
        let mounted = true;
        getUsers()
        .then(items => {
            if(mounted) {
            setUsers(items);
            }
        });
        return () => mounted = false;
    }, []);

    function doAdd() {
      alert('Add');
    }
    

    return (
      <div className='container'>
        <div className='row'>
          <div className='col-lg-5'>
            <label><b>Users</b></label>
            <table className='table table-bordered table-striped'>
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Name</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
              <tr>
                <td>1</td>
                <td>Kevin</td>
                <td><button className='btn btn-primary' onClick={doAdd}>Add</button></td>
              </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    )

};

export default Main;