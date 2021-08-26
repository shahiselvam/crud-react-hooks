import React, { createContext, useReducer } from 'react';
import appReducer from './AppReducer';


const initialState = {
    Students: [
      {
        id: 1,
        name: "Shahi",
        Derpartment: "ECE",
        Email: "shahiselvam21@gmail.com",
      }
    ]
  };

  export const GlobalContext = createContext(initialState);

  export const GlobalProvider = ({children}) => {

    const [state , dispatch] = useReducer(appReducer , initialState);



    function addStudent(student){
        dispatch({

            type:"Add_Student",
            payload:student
        });

    }

    function editStudent(student){
         dispatch({

           type:"Edit_Student",
           payload:student


         });


    }
    function removeStudent(id){
        dispatch({

            type:"Remove_Student",
            payload:id
        });
    }
    return (
        <GlobalContext.Provider
          value={{
            Students: state.Students,
            addStudent,
            editStudent,
            removeStudent
          }}
        >
          {children}
        </GlobalContext.Provider>
      );

  };
