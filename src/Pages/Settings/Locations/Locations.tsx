import { Button, Select, Space, Table, Modal, Form, Radio, Input } from "antd"
import  React,{useState} from 'react'
import { PageTitle } from "../../../components/pageTitle"
import { AppstoreAddOutlined, DeleteOutlined, DownloadOutlined, EditOutlined, FundProjectionScreenOutlined, GooglePlusOutlined, PlusOutlined, UserAddOutlined } from "@ant-design/icons"
import Search from "antd/es/input/Search"






interface Values {
    title: string;
    description: string;
    modifier: string;
  }
  
  interface CollectionCreateFormProps {
    open: boolean;
    onCreate: (values: Values) => void;
    onCancel: () => void;
  }

  interface CollectionEditFormProps {
    EditOpen: boolean;
    onEdit: (values: Values) => void;
    onEditModalCancel: () => void;
  }
  
  const CollectionCreateForm: React.FC<CollectionCreateFormProps> = ({
    open,
    onCreate,
    onCancel,
  }) => {
    const [form] = Form.useForm();
    return (
      <Modal
        style={{minWidth: 700}}
        open={open}
        title="Create New User"
        okText="Create User"
        cancelText="Cancel"
        onCancel={onCancel}
        onOk={() => {
          form
            .validateFields()
            .then((values) => {
              form.resetFields();
              onCreate(values);
            })
            .catch((info) => {
              console.log('Validate Failed:', info);
            });
        }}
      >
        {/* <CreateItem/> */}

      </Modal>
    );
  };


  const CollectionEditForm: React.FC<CollectionEditFormProps> = ({
    EditOpen,
    onEdit,
    onEditModalCancel,
  }) => {
    const [form] = Form.useForm();
    return (
      <Modal
        style={{minWidth: 700}}
        open={EditOpen}
        title="Edit User"
        okText="Edit User"
        cancelText="Cancel"
        onCancel={onEditModalCancel}
        onOk={() => {
          form
            .validateFields()
            .then((values) => {
              form.resetFields();
              onEdit(values);
            })
            .catch((info) => {
              console.log('Validate Failed:', info);
            });
        }}
      >
        {/* <EditItem/> */}

      </Modal>
    );
  };








export const Locations = () => {
    const [open, setOpen] = useState(false);
    const [EditOpen, setEditOpen] = useState(false);

    const onCreate = (values: any) => {
        console.log('Received values of form: ', values);
        setOpen(false);
      };


    const onEdit = (values: any) => {
      console.log('Recieved values of form: ', values)
      setEditOpen(false);
    }



    const [data, setData] = useState([
        {id: '1',
        category: 'test category',
        model: 'tesla',
        item: 'Ts-001',
        total: '233',
        remaining: '3545',
    
    }
    ])


    const columns = [
        {
            key: '1',
            title: 'ID',
            dataIndex: 'id'
        },
        {
            key: '2',
            title: 'Location Name',
            dataIndex: 'locname'
        },
        {
            key: '3',
            title: 'Consumables',
            dataIndex: 'noOfConsumables'
        },
        {
            key: '4',
            title: 'Users',
            dataIndex: 'users'
        }, {
            key: '5',
            title: 'Address',
            dataIndex: 'address'
        }
        , {
            key: '6',
            title: 'Island',
            dataIndex: 'island'
        } ,
     {
            key: '13',
            title: 'Actions',
            dataIndex: 'actions',
            render: (_ : any, record:any) => (
                     <div>
                        <Button
                      icon = { <EditOutlined />}
                      style={{marginRight:5, color: "green"}}
                      onClick={ ()=> setEditOpen(true)}
                     />
                      <span />
                     <Button icon ={<DeleteOutlined />} style={{color: "red"}} /> 
                     
                     </div>
                     
                     
            )
                  
            

          
        }
    ]

    const options = [{ value: 'gold' }, { value: 'lime' }, { value: 'green' }, { value: 'cyan' }];
    const onSearch = (value: string) => 2;

    return (

        <div>

        <PageTitle> Locations </PageTitle>

      

        <div style={{display:"flex", justifyContent: "flex-end", marginRight: 20, marginBottom: 5}}><Search placeholder="Enter consumable details" onSearch={onSearch} style={{width: 400}} 
             allowClear /></div>
            
        <Space size={200} style={{display: "flex", justifyContent: "space-between", marginBottom: 10, marginRight: 20}}>
        <Button
         type="primary"
         shape="round"
         onClick={() => {
            setOpen(true);
          }}
         style={{paddingInline:20, marginLeft: 20, height: 40}}  
         icon={<PlusOutlined/>}
        >Location</Button>
             <Select
    mode="multiple"
    
    defaultValue={['gold', 'cyan']}
    style={{ width: '100%', minWidth: 200, }}
    options={options}
  />
  </Space>



  <div>
      
      <CollectionCreateForm
        open={open}
        onCreate={onCreate}
        onCancel={() => {
          setOpen(false);
        }}
      />

 <CollectionEditForm
        EditOpen={EditOpen}
        onEdit={onEdit}
        onEditModalCancel={() => {
          setEditOpen(false);
        }}
      /> 

    </div>


        <Table
        columns={columns}
        dataSource={data}
        >


        </Table>

        </div>
       


    )
}