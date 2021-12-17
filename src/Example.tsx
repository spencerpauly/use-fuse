import { useFuse } from "./useFuse";

const exampleData = [
    {
        name: 'Tommy',
        location: {
            city: 'Minneapolis',
            state: 'Minnesota'
        }

    },
    {
        name: 'Johnny',
        location: {
            city: 'Los Angelos',
            state: 'California'
        }
    },
    {
        name: 'Alex',
        location: {
            city: 'Austin',
            state: 'Texas'
        }
    },
    {
        name: 'James',
        location: {
            city: 'Austin',
            state: 'Texas'
        }
    },
    {
        name: 'Tim',
        location: {
            city: 'Minneapolis',
            state: 'Minnesota'
        }
    },
    {
        name: 'Madison',
        location: {
            city: 'Raleigh',
            state: 'North Carolina'
        }
    },
    {
        name: 'Janice',
        location: {
            city: 'Seattle',
            state: 'Washington'
        }
    },
    {
        name: 'Alice',
        location: {
            city: 'New York',
            state: 'New York'   
        }
    },
    {
        name: 'Alberto',
        location: {
            city: 'Cleveland',
            state: 'Ohio'
        }
    },
    
]


export default function Example() {
    const { results, search, setSearch } = useFuse<typeof exampleData[0]>({
        data: exampleData,
        keys: [
            {
                name: 'name',
                weight: 1,
            },
            {
                name: 'location.city',
                weight: 0.5,
            },
            {
                name: 'location.state',
                weight: 0.1,
            },
        ]
    })
    return (
      <div>
        <input type='search' onChange={(e) => setSearch(e.target.value)} value={search} />
        {results.map((r) => (
            <div key={r.refIndex}>
{r.item.name} - from {r.item.location.city}, {r.item.location.state}
                </div>
        ))}
      </div>
    );
  }
  