"use client"
import React, { useState } from 'react'
import { Navbar } from "@/components/Navbar";
import SearchSection from '@/components/content/SearchSection'
import TemplateListSection from '@/components/content/TemplateListSection'

function Dashboard() {
  const [userSearchInput,setUserSearchInput]=useState<string>()
  return (
    
    <div>
        <div className="bg-black text-gray-100 h-20">
        <Navbar/>
    </div>
        {/* Search Section  */}
        <SearchSection onSearchInput={(value:string)=>setUserSearchInput(value)} />

        {/* Template List Section  */}
        <TemplateListSection userSearchInput={userSearchInput} />
    </div>
  )
}

export default Dashboard