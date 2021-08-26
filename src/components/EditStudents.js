import React, { useState, useContext, useEffect } from 'react';
import { useHistory, Link } from 'react-router-dom';

import { GlobalContext } from '../context/GlobalState';

export const EditStudent = (route) => {
    let history = useHistory();

    const { Students, editStudent} = useContext(GlobalContext);

    const [selectedUser , setSelectedUser] = useState({
        id: null,
        name: "",
        Derpartment: "",
        Email: "",
      });
      const currentUserId = route.match.params.id;

      useEffect(() => {
        const studentid = currentUserId;
        const selectedUser = Students.find(
          (currentEmployeeTraversal) => currentEmployeeTraversal.id === parseInt(studentid)
        );
        setSelectedUser(selectedUser);
      }, [currentUserId, Students]);


    
      const handleSubmit = (e) => {
        e.preventDefault();
        debugger
        editStudent(selectedUser);
        history.push("/");
      };

      const handleOnChange = (userKey, newValue) =>
      setSelectedUser({ ...selectedUser, [userKey]: newValue });

      return(


        <>

<div class="wrapper "> 
<div class="col-md-12 table-content">
<div class="content">
        <div class="container-fluid">
          <div class="row">
            <div class="col-md-8">
              <div class="card">
                <div class="card-header card-header-primary">
                  <h4 class="card-title">Edit Student</h4>
                </div>
                <div class="card-body">
                  <form onSubmit={handleSubmit}>
                    <div class="row">
                      
                      <div class="col-md-12">
                        <div class="form-group">
                          <label class="bmd-label-floating">Name</label>
                          <input type="text" name="name"  class="form-control" value={selectedUser.name} onChange={(e) => handleOnChange("name", e.target.value)} />
                        </div>
                      </div>
                      <div class="col-md-12">
                        <div class="form-group">
                          <label class="bmd-label-floating">Email address</label>
                          <input type="email" name="Email"  value={selectedUser.Email} onChange={(e) => handleOnChange("Email", e.target.value)} class="form-control" />
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-md-12">
                        <div class="form-group">
                          <label class="bmd-label-floating">Derpartment</label>
                          <input type="text" name="Derpartment" value={selectedUser.Derpartment}  onChange={(e) => handleOnChange("Derpartment", e.target.value)}  class="form-control" />
                        </div>
                      </div>
                     
                    </div>
                    <button type="submit" class="btn btn-primary pull-right">Edit Student</button>
                    <div class="clearfix"></div>
                  </form>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>



</div>
</div>
        </>
      )
}