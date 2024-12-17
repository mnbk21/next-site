import Image from "next/image";
import Link from "next/link";
import React from "react";
import { HiMiniBars3 } from "react-icons/hi2";

import { headers } from "next/headers"

const NavigationMenu = [
  {
    href: '#home',
    label: 'ホーム',
  },
  {
    href: '#service',
    label: 'サービス',
  },
  {
    href: '#solution',
    label: 'ソリューション',
  },
  {
    href: '#testimonials',
    label: 'カスタマー',
  },
  {
    href: '#blog',
    label: 'ブログ・ニュース',
  }
]

const Navigation = () => {
  return (
    <>
      {/* WEBメニュー */}
      <header className="py-7">
        <div className="container px-4 mx-auto">
          <div className="flex justify-between items-center">
            {/* ロゴ */}
            <div>
              <Link href={"/"}> 
                <Image src={'/assets/logo.png'} width={90} height={60} alt='ロゴ'/>
              </Link>
            </div>
            {/* メニュー */}
            <div className="hidden lg:block text-center">
              <ul className="flex space-x-7">
                {NavigationMenu.map((item, index) => {
                  return <li key={index} className="text-body">
                            <Link href={item.href}>{item.label}</Link>
                          </li>
                })}

              </ul>
            </div>
            {/* ボタン */}
            <div>
              <Link href={''} className="btnBlue inline-flex lg:inline-block">
                申し込み
              </Link>

              {/* モバイル用 */}
              <button className="block lg:hidden">
                <HiMiniBars3 className="text-4xl"/>
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default Navigation