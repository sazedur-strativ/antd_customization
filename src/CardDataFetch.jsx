import { Button, Card, Col, Row } from 'antd';
import axios from 'axios';
import { useQuery } from 'react-query';

const fetchUsers  = async ()=>{
  const res = await axios.get('https://jsonplaceholder.typicode.com/users')
  return res.data;
}

const CardDataFetch = () => {
  // const [users, setUsers] = useState([]);

  // useEffect(() => {
  //   axios.get('https://jsonplaceholder.typicode.com/users')
  //     .then(response => {
  //       setUsers(response.data);
  //     })
  //     .catch(error => {
  //       console.error('There was an error fetching the users!', error);
  //     });
  // }, []);
  const {isLoading, data} = useQuery('user-list', fetchUsers)
  if(isLoading){
    return (
    <>
    
    <Button type="primary" loading style={{width:'100%'}} >
            Loading
      </Button>
    </>
    )
  }

  return (
  
   <div>
    <h1>Fetch Data Cards</h1>
     <Row gutter={[16, 16]}>
    {data?.slice(0,6).map(user => (
      <Col key={user.id} xs={24} sm={12} md={8} lg={6} xl={4}>
        <Card 
          title={user.name}    
          
          style={{ width: '100%',textAlign:'center' }}
        >
          <p style={{textAlign:'start'}}>{user.username}</p>
          <p style={{textAlign:'start'}}>{user.email}</p>
          <p style={{textAlign:'start'}}>{user.phone}</p>
        </Card>
      </Col>
    ))}
  </Row>
   </div>
  );
};

export default CardDataFetch;
