import React from 'react'
import { Posts } from '../../components/posts/Posts';
import { Sidebar } from '../../components/sidebar/Sidebar';
import { Header } from '../../components/header/Header';
import './Home.css';

export const Home = () => {
  return (
    <>
      <Header />
      <div className='home'>
          <Posts />
          <Sidebar />
      </div>
    </>
  )
}
