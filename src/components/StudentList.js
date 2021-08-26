import React, { useContext } from 'react';

import { GlobalContext } from '../context/GlobalState';
import { Link } from 'react-router-dom';

export const StudentList = () => {

    const { Students, removeStudent } = useContext(GlobalContext);
    return (
        <>  
        
        <Link to={`/Add`}> 
            <button class="btn btn-primary btn-round">Add Student<div class="ripple-container"></div></button>
            </Link>
       
      

            <div class="wrapper ">
         
                <div class="col-md-12 table-content">


                    <div class="content">

                        <div class="container-fluid">

                            <div class="row">
                                <div class="col-md-12">
                                    <div class="card">
                                        <div class="card-header card-header-primary">
                                            <h4 class="card-title ">Students</h4>

                                        </div>
                                        <div class="card-body">
                                            <div class="table-responsive">
                                                <table class="table">
                                                    <thead class=" text-primary">
                                                        <th>
                                                            ID
                                                        </th>
                                                        <th>
                                                            Name
                                                        </th>
                                                        <th>
                                                            Derpartment
                                                        </th>
                                                        <th>
                                                            Email
                                                        </th>
                                                        <th>
                                                            Edit
                                                        </th>
                                                        <th>
                                                            Delete
                                                        </th>

                                                    </thead>
                                                    <tbody>
                                                        {Students.map((student) => {
                                                            return (
                                                                <tr>
                                                                    <td>
                                                                        {student.id}
                                                                    </td>
                                                                    <td>
                                                                        {student.name}
                                                                    </td>
                                                                    <td>
                                                                        {student.Derpartment}
                                                                    </td>
                                                                    <td>
                                                                        {student.Email}
                                                                    </td>
                                                                    <td>
                                                                        <Link to={`/edit/${student.id}`}>
                                                                           
                                                                            <i class="fa fa-edit"></i>
                                                                        </Link>
                                                                    </td>

                                                                    <td>
                                                                      <a href="#"> <i class="fa fa-trash" onClick={ () => removeStudent(student.id)} ></i></a>
                                                                    </td>

                                                                </tr>
                                                            )
                                                        })}


                                                    </tbody>
                                                </table>
                                            </div>
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