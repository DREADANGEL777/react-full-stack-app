import React, { useContext } from "react"
import { ThemeContext } from "../../../context/ThemeContex"

const Hero = () => {
  const { theme, setTheme } = useContext(ThemeContext)
  return (
    <div className="my-10 flex flex-col items-center gap-5">
      <h2 className="text-3xl font-bold text-center">
        Top 20 Productive ideas for your next startup
      </h2>
      <h2 className="text-center my-3">
        <strong className="text-secondary">Like your favorites ideas.</strong> Write your best
        Ideas, No account needed!
      </h2>
      <div>
        <select
        onChange={(event) => setTheme(event.target.value)}
         defaultValue="Pick a color" className="select border-primary">
          <option disabled={true}>Select theme</option>
          <option>dark</option>
          <option>light</option>
          <option>cupcake</option>
          <option>bumblebee</option>
          <option>emerald</option>
          <option>corporate</option>
          <option>synthwave</option>
          <option>retro</option>
          <option>acid</option>
          <option>lemonade</option>
          <option>sunset</option>
          <option>winter</option>
        </select>
      </div>
    </div>
  )
}

export default Hero
