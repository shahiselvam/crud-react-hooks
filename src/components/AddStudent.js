import React, { useState, useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';

import { GlobalContext } from '../context/GlobalState';


export const AddStudent = () => {

    let history = useHistory();

    const { addStudent, Students } = useContext(GlobalContext);

  const [name, setName] = useState("");
  const [Derpartment, setDerpartment] = useState("");
  const [Email, setEmail] = useState("");


    const handleSubmit = event =>{
 
   event.preventDefault();

const newStudent = {
 id: Students.length + 1,
 name,
 Email,
 Derpartment    
};

addStudent(newStudent);
history.push("/");
         
    }

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
                  <h4 class="card-title">Add Student</h4>
                </div>
                <div class="card-body">
                  <form onSubmit={handleSubmit}>
                    <div class="row">
                      
                      <div class="col-md-12">
                        <div class="form-group">
                          <label class="bmd-label-floating">Name</label>
                          <input type="text" name="name"  class="form-control" onChange={(e) => setName(e.target.value)} />
                        </div>
                      </div>
                      <div class="col-md-12">
                        <div class="form-group">
                          <label class="bmd-label-floating">Email address</label>
                          <input type="email" name="Email" onChange={(e) => setEmail(e.target.value)} class="form-control" />
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-md-12">
                        <div class="form-group">
                          <label class="bmd-label-floating">Derpartment</label>
                          <input type="text" name="Derpartment"  onChange={(e) => setDerpartment(e.target.value)}  class="form-control" />
                        </div>
                      </div>
                     
                    </div>
                    <button type="submit" class="btn btn-primary pull-right">Add Student</button>
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