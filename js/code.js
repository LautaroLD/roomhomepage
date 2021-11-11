let btn = document.getElementById("btn-header")
let list = document.getElementById("listId")
let btn_left = document.getElementById("change-img-left")
let btn_right = document.getElementById("change-img-right")
let picture = document.getElementById("picture")
let text_id = document.getElementById("text-id")
let title_id = document.getElementById("title-id")

btn.addEventListener('click', () => {
    if (btn.classList == 'bx bx-menu') {
        btn.classList.replace('bx-menu', 'bx-x')
        list.classList.replace('list-disable', 'list')

    } else {
        btn.classList.replace('bx-x', 'bx-menu')
        list.classList.replace('list', 'list-disable')
    }
})
btn_right.addEventListener('click', () => {
    if (picture.classList == 'back-img1') {
        picture.classList.replace("back-img1", "back-img2")
        title_id.innerHTML = 'We are available all across the globe'
        text_id.innerHTML = "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today."
    } else if (picture.classList == 'back-img2') {
        picture.classList.replace('back-img2', 'back-img3')
        title_id.innerHTML = 'Manufactured with the best materials'
        text_id.innerHTML = "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office."
    } else if (picture.classList == 'back-img3') {
        picture.classList.replace('back-img3', 'back-img1')
        title_id.innerHTML = 'Discover innovative ways to decorate'
        text_id.innerHTML = "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love."
    }
})
btn_left.addEventListener('click', () => {
    if (picture.classList == 'back-img3') {
        picture.classList.replace('back-img3', 'back-img2')
        title_id.innerHTML = 'We are available all across the globe'
        text_id.innerHTML = "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today."
    } else if (picture.classList == 'back-img2') {
        picture.classList.replace('back-img2', 'back-img1')
        title_id.innerHTML = 'Discover innovative ways to decorate'
        text_id.innerHTML = "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love."
    } else if (picture.classList == 'back-img1') {
        picture.classList.replace('back-img1', 'back-img3')
        title_id.innerHTML = 'Manufactured with the best materials'
        text_id.innerHTML = "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office."
    }
})