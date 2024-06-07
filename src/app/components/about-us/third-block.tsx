"use client";
import Image from "next/image";

//? 해야할일
//~ 스페이싱
//~ 폰트
//~ 박스 스타일링
//~ 포멧팅

export default function ThirdBlock() {
  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-base text-blue-900 font-semibold tracking-wide uppercase">
            Team Member
          </h2>
          <h1 className="text-4xl font-bold mb-4">
            우리의 전문가들을 만나보세요
            <br />
            <span className="text-blue-900">Korean Manager</span>
          </h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <div className="bg-white rounded-lg shadow-lg p-4 text-center">
            <Image
              src="/Abigail-Do.png"
              alt="Abigail Do"
              width={300}
              height={400}
              className="rounded-t-lg"
            />
            <h3 className="text-xl font-semibold mt-4">Abigail Do</h3>
            <p className="text-gray-600">Corporate Services Manager</p>
            <p className="text-gray-600">3+ Years Of Experience</p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-4 text-center">
            <Image
              src="/Chris-Kim.png"
              alt="Chris Kim"
              width={300}
              height={400}
              className="rounded-t-lg"
            />
            <h3 className="text-xl font-semibold mt-4">Chris Kim</h3>
            <p className="text-gray-600">Business Consulting Manager</p>
            <p className="text-gray-600">9+ Years Of Experience</p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-4 text-center">
            <Image
              src="/Sophia-Kim.png"
              alt="Sophia Kim"
              width={300}
              height={400}
              className="rounded-t-lg"
            />
            <h3 className="text-xl font-semibold mt-4">Sophia Kim</h3>
            <p className="text-gray-600">Secretarial Services Manager</p>
            <p className="text-gray-600">7+ Years Of Experience</p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-4 text-center">
            <Image
              src="/Ryan-Kim.png"
              alt="Ryan Kim"
              width={300}
              height={400}
              className="rounded-t-lg"
            />
            <h3 className="text-xl font-semibold mt-4">Ryan Kim</h3>
            <p className="text-gray-600">CEO & Business Consultant</p>
            <p className="text-gray-600">11+ Years Of Experience</p>
          </div>
        </div>
      </div>
    </div>
  );
}