import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/legacy/image';
import Header from '../components/Header';
import { useRouter } from 'next/router';
import { Modal, Form, Input, Button, DatePicker, message, Select } from 'antd';
import type { FormInstance } from 'antd/es/form';
import dayjs from 'dayjs';
type FieldType = {
  title?: string;
  to?: string;
  date?: string;
  desc?: string;
  tokenType?: number;
};
const { TextArea } = Input;
const ProfilePage: React.FC = () => {
  const router = useRouter(); // Initialize the router

  const [mintList, setMintList] = useState<any>([
    {
      orgId: 1,
      tokenType: 1,
      to: '0x814E8B823E96604f99892B98C45317495B698F12',
      date: 1698682408,
      title: 'asdasdasd',
      desc: '',
    },
    {
      orgId: 2,
      tokenType: 1,
      to: '0x814E8B823E96604f99892B98C45317495B698F12',
      date: 1698682408,
      title: 'asdasdasd',
      desc: '',
    },
  ]);

  const formRef = useRef<FormInstance>(null);

  const [isIssueCredentialsDialogShow, setisIssueCredentialsDialogShow] = useState<boolean>(false);

  const openIssueCredentials = () => {
    setisIssueCredentialsDialogShow(true);
  };

  const getCredentials = () => {};

  const submitCredentials = async () => {
    try {
      await formRef?.current?.validateFields();

      const formdata = formRef?.current?.getFieldsValue(true) || {};

      const { title, to, date, desc, tokenType } = formdata;

      const timestamp = dayjs(date).unix();

      console.log(formdata);

      //   TODO:提交

      formRef?.current?.resetFields();

      setisIssueCredentialsDialogShow(false);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (false) {
      router.replace('/');
    }
  }, []);

  return (
    <div className='bg-black text-white min-h-screen '>
      <Header />

      <main className='container mx-auto p-4'>
        <section className='text-center mb-10'>
          <div className='inline-block relative'>
            <img src='/availability.jpg' alt='' className='' />
          </div>
        </section>

        <section className='text-center mb-10'>
          {mintList && mintList.length ? (
            <div className='flex '>
              {mintList.map((item: any, index: number) => {
                return (
                  <div className='text-left text-xs w-[400px] bg-slate-700 mr-2 mb-1 p-4 rounded-sm' key={item.orgId}>
                    <div className='mb-1'>Title: {item.title}</div>
                    <div className='mb-1'>Date Completed:{dayjs.unix(item.date).format('YYYY-MM-DD')}</div>
                    <div className=''>To {item.to}</div>
                  </div>
                );
              })}
            </div>
          ) : (
            <>
              <div className='text-4xl'>You have not issued Credentials yet.</div>
              <div className='mt-2 text-md'>Go to your Dashboard and issuing credentials to your community!</div>
            </>
          )}

          <img
            className='cursor-pointer inline-block mt-16 w-72 h-12'
            src='/createCredentialsBtn.jpg'
            alt=''
            onClick={openIssueCredentials}
          />
        </section>

        <footer className='flex flex-col items-center justify-between py-10'>
          <div className='text-center mb-6'>
            <p>SuperLancersAI</p>
            <p>A freelancer network built on trust and verifiable credentials</p>
          </div>
          <div className='mb-6'>
            <Image src='/socials.png' alt='Social Links' width={120} height={40} />
          </div>
          <p>&copy; 2023 CredLancers, All rights reserved.</p>
        </footer>
      </main>

      <Modal title='Issue Credentials' width={800} open={isIssueCredentialsDialogShow} closeIcon={null} footer={null}>
        <Form
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          style={{ maxWidth: 600 }}
          ref={formRef}
          initialValues={{
            tokenType: 1,
            title: '',
            to: '',
            date: '',
            desc: '',
          }}
          autoComplete='off'>
          <Form.Item<FieldType> label='Type' name='tokenType'>
            <Select>
              <Select.Option value={0}>Certificate</Select.Option>
              <Select.Option value={1}>Membership</Select.Option>
              <Select.Option value={2}>Project</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item<FieldType> label='Title' name='title' rules={[{ required: true, message: 'Please input title' }]}>
            <Input />
          </Form.Item>

          <Form.Item<FieldType>
            label='Desc'
            name='desc'
            rules={[{ required: true, message: 'Please input description  ' }]}>
            <TextArea rows={4} />
          </Form.Item>

          <Form.Item<FieldType>
            label='To Whom'
            name='to'
            rules={[{ required: true, message: 'Please input to whom address' }]}>
            <Input />
          </Form.Item>

          <Form.Item<FieldType>
            label='date'
            name='date'
            rules={[{ type: 'object' as const, required: true, message: 'Please select time!' }]}>
            <DatePicker />
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button onClick={submitCredentials}>Submit</Button>
            <Button className='ml-2' onClick={submitCredentials}>
              Cancel
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default ProfilePage;
