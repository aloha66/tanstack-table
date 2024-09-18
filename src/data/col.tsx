import { Person } from '../fetchData';
import { Column } from '../main';

export const col: Column<Person> = [
  {
    header: 'Name',
    columns: [
      {
        key: 'firstName',
        render: (val, row) => {
          return (
            <div>
              <strong>{row.firstName}</strong> {val}
            </div>
          );
        },
        footer: (props) => props.column.id,
      },
      {
        key: 'lastName',
        header: () => <span>Last Name</span>,
      },
    ],
  },
  {
    header: 'Info',
    footer: (props) => props.column.id,
    columns: [
      {
        key: 'age',
        header: () => 'Age',
        footer: (props) => props.column.id,
      },
      {
        header: 'More Info',
        columns: [
          {
            key: 'visits',
            header: () => <span>Visits</span>,
            footer: (props) => props.column.id,
          },
          {
            key: 'status',
            header: 'Status',
            footer: (props) => props.column.id,
          },
          {
            key: 'progress',
            header: 'Profile Progress',
            footer: (props) => props.column.id,
          },
        ],
      },
    ],
  },
  {
    header: 'fullName',
    key: 'fullName',
  },
];


export const col2 = [
  {
    key: 'firstName',
    render: (val, row) => {
      return (
        <div>
          <strong>{row.firstName}</strong> {val}
        </div>
      );
    },
  },
  {
    header: 'lastName',
    key: 'lastName',
  },
  {
    header: 'fullName',
    key: 'fullName',
  }
]