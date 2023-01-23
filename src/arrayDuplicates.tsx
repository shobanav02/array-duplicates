import React, { useEffect, useState } from 'react';
import './App.css';
import { Layout, List, theme, Card } from 'antd';
const { Header, Content, Footer } = Layout;

const ArrayDuplicatesApp: React.FC = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const [data, setData] = useState<any>([]);
  useEffect(() => {
    duplicate();
  }, []);

  const duplicate = () => {
    const array = [2, 3, 1, 2, 3];

    let toFindDuplicates = array.filter((item, index) => array.indexOf(item) !== index);
    setData(toFindDuplicates);
  }

  return (
    <Layout className="layout">

      <Content style={{ padding: '0 50px' }}>
        <div className="site-layout-content" style={{ background: colorBgContainer, height: 500 }}>
          <Card title="Array Duplicates" bordered={false} style={{ width: '100%' }}>
            <List
              size="small"
              bordered
              header={<p>Following are the elements found more than once in an array</p>}
              dataSource={data}
              renderItem={(item: any) => (
                <List.Item>
                  {item}
                </List.Item>)}
            />
          </Card>
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>Ant Design ©2023 Created by Ant UED</Footer>
    </Layout>
  );
}

export default ArrayDuplicatesApp;
