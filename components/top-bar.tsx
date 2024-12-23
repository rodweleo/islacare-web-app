"use client"

import useDonateModalStore from '@/hooks/use-donate-modal-store';
import { Button } from './ui/button';

export default function TopBar() {

  const { setOpen } = useDonateModalStore()

  return (
    <div className="w-full bg-[#2B5693] text-white px-4 py-1.5 text-sm">
      <div className="container mx-auto flex flex-wrap gap-5 justify-between items-center">
        <div className="flex items-center space-x-6">
          <a href="mailto:info@islacare.com" className="flex items-center hover:text-gray-200">
            <span>info@islacare.com</span>
          </a>
          <div className="flex items-center">
            <span>458 Oak Ave. Denver, CO</span>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <a href="#" className="hover:text-gray-200">
            <span className="sr-only">Facebook</span>
            <div className="w-4 h-4 bg-white rounded-full" />
          </a>
          <a href="#" className="hover:text-gray-200">
            <span className="sr-only">Twitter</span>
            <div className="w-4 h-4 bg-white rounded-full" />
          </a>
          <a href="#" className="hover:text-gray-200">
            <span className="sr-only">LinkedIn</span>
            <div className="w-4 h-4 bg-white rounded-full" />
          </a>
          <a href="#" className="hover:text-gray-200">
            <span className="sr-only">Instagram</span>
            <div className="w-4 h-4 bg-white rounded-full" />
          </a>
        </div>

        <ul>
          <li>
            <Button className="bg-orange-400 hover:bg-orange-500 font-medium" onClick={() => setOpen(true)}>DONATE NOW</Button>
          </li>
     
        </ul>
      </div>
    </div>
  )
}

