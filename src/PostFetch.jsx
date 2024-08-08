import { Button, Card, Col, Row } from 'antd';
import axios from 'axios';
import React from 'react';
import { useQuery } from 'react-query';


const fetchPosts = async ()=>{
    const res =await axios.get("https://jsonplaceholder.typicode.com/posts");
    return res.data;
}

const PostFetch = () => {
    const {isLoading,data}= useQuery('posts',fetchPosts);
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
        <h1>Fetching Posts</h1>
        <Row gutter={[16, 16]}>
    {data?.slice(0,12).map(posts => (
      <Col key={posts.id} xs={24} sm={12} md={8} lg={6} xl={4}>
        <Card 
           title={<div style={{ whiteSpace: 'normal', wordBreak: 'break-word',textAlign:'start'}}>{posts.title}</div>} 
      >
          
          <p style={{textAlign:'start'}}>{posts.body}</p>
          
        </Card>
      </Col>
    ))}
  </Row>
    </div>
  )
}

export default PostFetch