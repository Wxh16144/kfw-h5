export default function (imgList = [], callback = () => {
}) {
  const imgNode = new Image()
  const len = imgList.length
  let i = 0
  imgNode.src = imgList[i]
  i++
  imgNode.addEventListener('load', () => {
    if (i < len) {
      imgNode.src = imgList[i++]
      callback(i, Math.floor(i / imgList.length * 100))
    }
  })

  imgNode.addEventListener('error', () => {
    if (i < len) {
      imgNode.src = imgList[i++]
      callback(i, Math.floor(i / imgList.length * 100))
    }
  })
}
