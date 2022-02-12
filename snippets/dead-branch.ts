interface Bike {
  broken: boolean
  country: string
}

function getBike(){
  let bike: Bike | undefined;
  if (!bike){
    throw new Error('It is not bike!')
  }
  return bike // ✅ Bike
}

const myBike = getBike();