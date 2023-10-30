export default function employeesReducer(employees, action){
    switch(action.type){
        case 'changed': {
            return employees.map((t) => {
                if (t.id === action.employees.id) {
                  return action.employees;
                } else {
                  return t;
                }
            })
        }
        case 'deleted': {
          return employees.filter((t) => t.id !== action.id);
        }
        case 'added': {
          return [
            ...employees,
            {
              id: action.id,
              text: action.text,
              done: false,
            },
          ];
        }
        default: {
            throw Error('Unknown action: ' + action.type);
          }
    }
}