import React from "react"
import logo_inv from "./../../../assets/logo-inv.jpg"
import { useNavigate } from "react-router-dom"

const Header = () => {
  const navigation = useNavigate()
  return (
    <div className="flex justify-between items-center shadow-lg p-4 border rounded-lg">
      <button className="btn btn-primary btn-sm md:btn-md" onClick={() => navigation("/new")}>
        + New Idea
      </button>
      <h2 className="font-bold text-sm md:text-2xl">Top 20 Ideas</h2>
      <div className="flex gap-2 items-center">
        <img src={logo_inv} alt="" className="w-10 h-10 rounded-full" />
        <h2 className="font-bold text-sm hidden md:block">
          By <br /> InVeStOr.
        </h2>
      </div>
    </div>
  )
}

export default Header
