const loadCommentsBtn = document.getElementById('load-comments-btn')
const commentsSection = document.getElementById('comments')
const commentsForm = document.querySelector('#comments-form form')
const commentTitle = document.getElementById('title')
const commentText = document.getElementById('text')

function createCommentsList(comments){
  const commentList = document.createElement('ol')
  for (const comment of comments){
    const commentElement = document.createElement('li')
    commentElement.innerHTML = `
<article class="comment-item">
  <h2>${comment.title}</h2>
  <p>${comment.text}</p>
</article>`
commentList.append(commentElement )
  }
  return commentList
}

async function fetchComments(){
  if (!response.ok){ 
    alert('Comment was not saved')
    return }
  const postId = loadCommentsBtn.dataset.postid
  const response = await fetch(`/posts/${postId}/comments`)
  const responseData = await response.json();

  if (responseData && responseData.length > 0){
  const commentList = createCommentsList(responseData)
  commentsSection.innerHTML= ''
  commentsSection.appendChild(commentList)
  }
  else {
    commentsSection
    commentsSection.firstElementChild.textContent = 
    `We could not find any comment. Please add some.`
  }

}

async function saveComment (event){
  event.preventDefault()

  const postId = commentsForm.dataset.postid
  const enteredTitle = commentTitle.value
  const enteredText = commentText.value

  const comment = {"title": enteredTitle, "text": enteredText}

  try {
    const response = await fetch(`/posts/${postId}/comments`, {
    method: 'POST',
    body: JSON.stringify(comment),
    headers: {
      'Content-Type' : 'application/json'
    }
  } )
  if (response.ok){
    fetchComments()
  }
  else {
    alert('Comment was not saved')
  } 
  } catch (error){
    alert('Comment was not saved')  
  }
  

   
}

//console.dir(loadCommentsBtn)
loadCommentsBtn.addEventListener('click',fetchComments)
commentsForm.addEventListener('submit',saveComment)