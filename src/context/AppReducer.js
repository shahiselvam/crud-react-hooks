export default function appReducer(state, action) {

    switch (action.type) {

        case "Add_Student":

            return {
                ...state,
                Students: [...state.Students, action.payload]

            };

        case "Edit_Student":

            const updatedStudent = action.payload;

            const updatedStudents = state.Students.map((student) => {
                if (student.id === updatedStudent.id) {
                    return updatedStudent;
                }
                return student;
            });
            return {
                ...state,
                Students: updatedStudents,
            };

        case "Remove_Student":
            return {

                ...state,
                Students: state.Students.filter(

                    (student) => student.id != action.payload
                ),
            };

        default:
            return state;

    }


};