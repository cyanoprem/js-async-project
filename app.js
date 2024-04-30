const postId = document.getElementById('postId')
const getPostBtn = document.getElementById('getPostBtn')
const showTitle = document.getElementById('showTitle')

let tempPostId = 0

const savePostId = (event) => {
  tempPostId = event.target.value
}

const displayPostTitle = async () => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${tempPostId}`)
  const data = await response.json()
  const {title} = data
  showTitle.innerText = `Post title: ${title}`
}

postId.addEventListener('change', savePostId)
getPostBtn.addEventListener('click', displayPostTitle)
