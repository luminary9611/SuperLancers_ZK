// @ts-nocheck
import React, { useState, useEffect, useContext, useCallback } from 'react';
import Image from 'next/legacy/image';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import Button from './Button';
import { truncateStr } from './../utils.js';
import { ethers } from 'ethers';

const defaultChainId = '5';

const Header = () => {
  const [address, setAddress] = useState(undefined);
  const [chainId, setChainId] = useState(defaultChainId);

  const connectWallet = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const accounts = await provider.send('eth_requestAccounts', []);

    setAddress(accounts[0]);
  };

  const disconnectWallet = async () => {
    setAddress('');
  };

  const getChainId = async () => {
    const chainId = ethereum.networkVersion;

    if (chainId !== defaultChainId) {
      await window.ethereum
        .request({
          method: 'wallet_switchEthereumChain',
          params: [
            {
              chainId: '0x' + defaultChainId,
            },
          ],
        })
        .then(() => {
          setChainId(defaultChainId);
          return;
        })
        .catch((e) => {
          console.log('wallet_switchEthereumChain error: ', e);
          setChainId('');
          return;
        })
        .finally(() => {});
    }
  };

  useEffect(() => {
    (async () => {
      await getChainId();
      connectWallet();

      ethereum.on('networkChanged', getChainId);

      ethereum.on('accountsChanged', function (accounts) {
        setAddress(accounts[0]);
      });
    })();
  }, []);

  return (
    <header className='sticky top-0 z-40 scrolled-header py-2 text-white bg-black'>
      <div className='py-4 flex items-center justify-between mx-12'>
        <Link href='/'>
          <div className='flex items-center'>
            <Image width={36} height={36} src='/superlancers.png' className='w-20 md:w-15' alt='logo' />
            {/* <p className="text-2xl font-bold ml-2 text-gradient z-10">
              SuperLancers
            </p> */}
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
          {!address ? (
            <></>
          ) : (
            <Link href='/profile'>
              <div className='items-center' style={{ height: '40px' }}>
                <p className='text-xl font-bold ml-2 nav-text pr-2 z-10'>Profile</p>
              </div>
            </Link>
          )}
          {chainId === defaultChainId ? (
            <></>
          ) : (
            <div className='items-center' style={{ marginRight: '10px' }}>
              <Button onClick={getChainId}>Error Network</Button>
            </div>
          )}
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
