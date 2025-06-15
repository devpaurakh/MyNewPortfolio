

const BlurCircle = ({top= "auto", left = "auto", right="auto", bottom = "auto"}) => {
  return (
    <div className=" absolute -z-50 h-30 w-30 aspect-square rounded-full bg-primary blur-3xl" style={{top: top, left: left, right: right, bottom: bottom}}>
      
    </div>
  )
}

export default BlurCircle
