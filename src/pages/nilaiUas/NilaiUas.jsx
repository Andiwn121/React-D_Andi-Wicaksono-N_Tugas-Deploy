import React from 'react';

import { Card, Space, Form, Input, Button } from 'antd';

const NilaiUas = () => {
    return (
        <div>
            <Card title='Form Penentuan Kelas' style={{ width: 400 }} align='center'>
                <Form layout='vertical'>
                    <Form.Item label='Nama' name='nama' rules={[{required: true, message: 'Field tidak boleh kosong!'}]}>
                        <Input placeholder='Masukkan Nama Anda'></Input>
                    </Form.Item>

                    <Form.Item label='Nilai Harian' name='nilaiHarian' rules={[{required: true, message: 'Field tidak boleh kosong!'}]}>
                        <Input placeholder='Masukkan Nilai Harian Anda' type='number'></Input>
                    </Form.Item>

                    <Form.Item label='Nilai UTS' name='nilaiUTS' rules={[{required: true, message: 'Field nama tidak boleh kosong!'}]}>
                        <Input placeholder='Masukkan Nilai UTS Anda' type='number'></Input>
                    </Form.Item>

                    <Form.Item label='Nilai UAS' name='nilaiUAS' rules={[{required: true, message: 'Field nama tidak boleh kosong!'}]}>
                        <Input placeholder='Masukkan Nilai UAS Anda' type='number'></Input>
                    </Form.Item>

                    <Form.Item style={{
                        marginTop: 30,
                        marginBottom: 0
                    }}>
                        <Button>Submit</Button>
                    </Form.Item>


                </Form>
            </Card>
        </div>
    );
}

export default NilaiUas;
