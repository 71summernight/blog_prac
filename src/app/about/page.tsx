import Hero from '@/components/Hero';
import React from 'react';

const TITLE_CLASS = 'text-2x; font-bold text-gray-800 my-2'
export default function AboutPage() {
  return (
    <>
      <Hero />
      <section className='bg-gray-100 shadow-lg p-8 m-8 text-center'>
        <h2 className={TITLE_CLASS}>Who Am I?</h2>
        <p>
          개발을 사랑하는 프론트엔드 개발자
          <br />
          사람과 디자인을 담는 웹앱을 만들고 있음
        </p>
        <h2 className={TITLE_CLASS}>Career</h2>
        <p>TideSquare (2022-01~)</p>
        <h2 className={TITLE_CLASS}>Skills</h2>
        <p>React, Next.js, Vue, JavaScript, TypeScript...</p>
      </section>
    </>
  );
}
