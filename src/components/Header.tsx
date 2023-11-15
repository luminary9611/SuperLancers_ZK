// @ts-nocheck
import React, { useState, useEffect, useContext, useCallback } from 'react';
import Image from 'next/legacy/image';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import Button from './Button';
import { connect, disconnect } from 'starknetkit';
import { truncateStr } from './../utils.js';

const Header = () => {
  const [connection, setConnection] = useState('');

  const [account, setAccount] = useState('');

  const [address, setAddress] = useState('');

  const [provider, setProvider] = useState('');

  const connectWallet = async () => {
    console.log('test');

    const connection = await connect();

    if (connection && connection.isConnected) {
      setConnection(connection);

      setProvider(connection.account);

      setAddress(connection.selectedAddress);
    }
  };

  const disconnectWallet = async () => {
    await disconnect();

    setConnection(undefined);

    setProvider(undefined);

    setAddress('');
  };

  useEffect(() => {
    (async () => {
      const connection = await connect({
        modalMode: 'neverAsk',
        webWalletUrl: 'https://web.argent.xyz',
      });

      if (connection && connection.isConnected) {
        setConnection(connection);

        setProvider(connection.account);

        setAddress(connection.selectedAddress);
      }
    })();
  }, []);

  return (
    <header className='sticky top-0 z-40 scrolled-header  bg-black'>
      <div className='py-4 flex items-center justify-between'>
        <Link href='/'>
          <div className='flex items-center'>
            <Image width={200} height={60} src='/superlancers.png' className='w-20 md:w-15' alt='logo' />
          </div>
        </Link>

        <div className='flex items-center'>
          {' '}
          {/* Added "items-center" class */}
          <Link href='/'>
            <div className='items-center' style={{ height: '40px' }}>
              <p className='text-xl font-bold ml-2 nav-text pr-2 z-10'>Home</p>
            </div>
          </Link>
          <Link href='/projects'>
            <div className='items-center' style={{ height: '40px' }}>
              <p className='text-xl font-bold ml-2 nav-text pr-2 z-10'>Projects</p>
            </div>
          </Link>
          <Link href='/dashboard'>
            <div className='items-center' style={{ height: '40px' }}>
              <p className='text-xl font-bold ml-2 nav-text pr-2 z-10'>Dashboard</p>
            </div>
          </Link>
          <Link href='/profile'>
            <div className='items-center' style={{ height: '40px' }}>
              <p className='text-xl font-bold ml-2 nav-text pr-2 z-10'>Profile</p>
            </div>
          </Link>
          <div className='items-center'>
            {address ? (
              <Button onClick={disconnectWallet}>{truncateStr(address)}</Button>
            ) : (
              <Button onClick={connectWallet}>Connect Wallet</Button>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default dynamic(() => Promise.resolve(Header), { ssr: false });
