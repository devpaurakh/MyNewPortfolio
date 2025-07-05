import React from 'react'
import { assets } from '../assets/assets'
import { GithubIcon, Linkedin } from 'lucide-react'

const Footer = () => {
  return (
     <footer className="px-6 pt-8 md:px-16 lg:px-36 w-full bg-black text-gray-300">
            <div className="flex flex-col md:flex-row justify-between w-full gap-10 border-b border-gray-500 pb-10">
                <div className="md:max-w-96">
                    <img className="w-36 h-auto" src={assets.logo} alt="logo" />
                    <p className="mt-6 text-sm">
                        I am a dedicated mobile app developer currently pursuing a bachelor's degree at Islington College. With a genuine passion for technology, they specialize in both iOS and Android app development
                    </p>
                    <div className="flex items-center gap-2 mt-4">
                        <img src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/refs/heads/main/assets/appDownload/googlePlayBtnBlack.svg" alt="google play" className="h-10 w-auto border border-white rounded" />
                        <img src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/refs/heads/main/assets/appDownload/appleStoreBtnBlack.svg" alt="app store" className="h-10 w-auto border border-white rounded" />
                    </div>
                </div>
                <div className="flex-1 flex items-start md:justify-end gap-20 md:gap-40">
                    <div>
                        <h2 className="font-semibold mb-5">Company</h2>
                        <ul className="text-sm space-y-2">
                            <li><a href="#home">Home</a></li>
                            <li><a href="#services">About us</a></li>
                            <li><a href="#contact">Contact us</a></li>
                            <li><a href="#about">Experience</a></li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="font-semibold mb-5">Get in touch</h2>
                        <div className="text-sm space-y-2">
                            <p>paurakhsaud2019@gmail.com</p>
                            <div className="flex flex-wrap justify-center gap-8 text-xl">
                    <a href="https://www.linkedin.com/in/paurakh-saud-17b4021a3/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-blue-600 hover:underline"> <Linkedin /> LinkedIn </a>

                    <a href="https://github.com/devpaurakh" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-white hover:underline"><GithubIcon /> GitHub </a>
                    </div>
                    </div>
                    </div>
                </div>
            </div>
            <p className="pt-4 text-center text-sm pb-5">
                Copyright {new Date().getFullYear()} © Paurakh Saud. All Right Reserved.
            </p>
        </footer>
  )
}

export default Footer
