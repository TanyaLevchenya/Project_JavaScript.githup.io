import { printedText } from './printedText.js';

const root = document.querySelector('#root');
const main = document.createElement('main');
// section
const section = document.createElement('section');
const title = document.createElement('div');
const citation = document.createElement('div');
const pCitation = document.createElement('p');
//Форма заполнения Войти
const form = document.createElement('div');
const login = document.createElement('div');
const inputEmailLogin = document.createElement('input');
const inputPasswordLogin = document.createElement('input');
const messages = document.createElement('div');
const forgetPassword = document.createElement('a');
const buttonLogin = document.createElement('button');
const buttonRegister = document.createElement('button');
// Авторизациия
const signUp = document.createElement('div');
const inputNameSignUp = document.createElement('input');
const inputEmailSignUp = document.createElement('input');
const inputPasswordSignUp = document.createElement('input');
const inputCheckPasswordSignUp = document.createElement('input');
const message = document.createElement('div');
const buttonSignup = document.createElement('button');
const closeButton = document.createElement('button');
// Вторая страница
const wrapper = document.createElement('div');
const buttonOut = document.createElement('button');
const contentLogin = document.createElement('p');
const sliderImage = document.createElement('div');
const img1 = document.createElement('img');
const img2 = document.createElement('img');
const img3 = document.createElement('img');
const img4 = document.createElement('img');
const scrollForwardBackward = document.createElement('div');
const buttonBackward = document.createElement('button');
const buttonForward = document.createElement('button');
const text = document.createElement('div')
const p = document.createElement('p')

inputNameSignUp.placeholder = 'Name';
inputEmailSignUp.placeholder = 'E-mail:';
inputEmailSignUp.type = 'email';
inputPasswordSignUp.placeholder = 'Password:';
inputPasswordSignUp.type = 'password';
inputCheckPasswordSignUp.placeholder = 'Check Password:';
inputCheckPasswordSignUp.type = 'password';
inputPasswordLogin.type = 'password';
forgetPassword.href = '#';
inputEmailLogin.placeholder = 'E-mail:';
inputPasswordLogin.placeholder = 'Password:';
buttonLogin.type = 'submit';
buttonSignup.type = 'submit';
// Text content
title.textContent = 'Web developer';
pCitation.textContent = 'First teach the science of programming and all theory. Next, develop your programming style. Then forget everything and just program.';
forgetPassword.textContent = 'Forgot Password?';
buttonSignup.textContent = 'Sign Up';
buttonLogin.textContent = 'Login';
buttonRegister.textContent = 'Register';
closeButton.textContent = 'X';
buttonOut.textContent = 'OUT';
// Class
main.className = 'main';
section.className = 'section';
title.className = 'title';
pCitation.className = 'pDescription';
citation.className = 'citation';
signUp.className = 'signUp signUpAndLogin';
inputNameSignUp.className = 'inputNameSignUp inputSignUp inputForm';
inputEmailSignUp.className = 'inputEmail inputSignUp inputForm';
inputPasswordSignUp.className = 'inputPassword inputSignUp inputForm';
inputCheckPasswordSignUp.className = 'inputCheckPasswordSignUp inputSignUp inputForm';
buttonSignup.className = 'buttonSignup inputSignUp button';
login.className = 'login signUpAndLogin';
inputEmailLogin.className = 'inputLogin inputForm';
inputPasswordLogin.className = 'inputPasswordLogin inputLogin inputForm';
forgetPassword.className = 'pForget titleInput';
buttonLogin.className = 'buttonLogin inputLogin button';
buttonRegister.className = 'buttonRegister inputLogin button';
form.className = 'form';
closeButton.className = 'closeButton';
message.className = 'message'
messages.className = 'messages'
//слайдер
wrapper.className = 'wrapper';
buttonOut.className = 'buttonOut';
contentLogin.className = 'contentLogin'

main.append(section);
section.append(title, citation, pCitation, form);
citation.append(pCitation);
form.append(login, signUp);
login.append(inputEmailLogin, inputPasswordLogin, messages, forgetPassword, buttonLogin, buttonRegister);
signUp.append(closeButton, inputNameSignUp, inputEmailSignUp, inputPasswordSignUp, inputCheckPasswordSignUp, message, buttonSignup);
// Печатающийся текст
printedText (pCitation, citation);
// Button войти
buttonRegister.addEventListener('click', () => {
    login.style.display = 'none';
    signUp.classList.toggle('visible');
    signUp.style.display = 'flex';
    inputEmailLogin.value = '';
    inputPasswordLogin.value = '';
});
//Button закрыть
closeButton.addEventListener('click',  () => {
  if  (signUp.style.display = 'none') {
        login.style.display = 'flex'
        inputPasswordSignUp.value = '';
        inputCheckPasswordSignUp.value = '';
        inputNameSignUp.value = ''
        inputEmailSignUp.value = ''
  }
});
//LocalStorage
function addUser() {
  function User(inputNameSignUp, inputEmailSignUp, inputPasswordSignUp) {
    this.inputNameSignUp = inputNameSignUp;
    this.inputEmailSignUp = inputEmailSignUp;
    this.inputPasswordSignUp = inputPasswordSignUp
  }
  const newUser = new User(inputNameSignUp.value, inputEmailSignUp.value, inputPasswordSignUp.value);
  const usersLocal = localStorage.getItem('users');
  
  if(!usersLocal) {
    localStorage.setItem('users', JSON.stringify([newUser]));
  }
  if(usersLocal) {
    const users = JSON.parse(usersLocal);
    const checkUser = users.findIndex(user => {
    return user.inputEmailSignUp === newUser.inputEmailSignUp;
  });
  if (checkUser !== -1) {
    return
  }
  localStorage.setItem('users', JSON.stringify([...users, newUser]));
  }
}
buttonSignup.addEventListener('click', addUser);
//переход страниц
function logIn(event) {
  event.preventDefault();
  const usersLocal = localStorage.getItem('users');
  const users = JSON.parse(usersLocal);
  const email = users.map(elem => elem.inputEmailSignUp);
  const pass = users.map(elem => elem.inputPasswordSignUp);
  
  for (let i = 0; i < pass.length; i++) {
    if (inputEmailLogin.value === '' && inputPasswordLogin.value === '') {
        inputEmailLogin.style.border = '2px solid red' 
        inputPasswordLogin.style.border = '2px solid red';
        messages.style.visibility = 'visible';
        messages.innerHTML = 'Fill in the fields'; 
        setTimeout (() => {
        inputEmailLogin.style.border = 'none';
        inputPasswordLogin.style.border = 'none';
        messages.innerHTML = '';
        }, 3000)
    } else if (inputPasswordLogin.value === '') {
        inputPasswordLogin.style.border = '2px solid red';
        messages.style.visibility = 'visible';
        messages.innerHTML = 'Enter password'; 
        setTimeout (() => {
        inputPasswordLogin.style.border = 'none';
        messages.innerHTML = '';
      }, 3000)
    } else if (inputEmailLogin.value === '') {
      inputEmailLogin.style.border = '2px solid red';
      messages.style.visibility = 'visible';
      messages.innerHTML = 'Enter your email'; 
      setTimeout (() => {
      inputEmailLogin.style.border = 'none';
      messages.innerHTML = '';
    }, 3000)
      } else if (pass[i] === inputPasswordLogin.value && email[i] === inputEmailLogin.value) {
        section.remove();
        main.style.backgroundImage = 'none';
        main.style.boxShadow = 'none';
        main.append(wrapper);
        wrapper.append(buttonOut, contentLogin, sliderImage, img1, img2, img3, img4, scrollForwardBackward, buttonBackward, buttonForward, text, p); 
        contentLogin.textContent = `Hello!!! We are glad to see you, ${users[i].inputNameSignUp}.`;
    } else if (email[i] !== inputEmailLogin.value && pass[i] !== inputPasswordLogin) {
      messages.style.visibility = 'visible';
      messages.innerHTML = 'User with this email and password was not found';
      setTimeout (() => {
        messages.innerHTML = '';
        inputEmailLogin.value = '';
        inputPasswordLogin.value = '';
      }, 3000)
    } else if (email[i] === inputEmailLogin.value && pass[i] !== inputPasswordLogin) {
        messages.style.visibility = 'visible';
        messages.innerHTML = 'Incorrect password or email';
        console.log('Incorrect password or email')
        setTimeout (() => {
          messages.innerHTML = '';
          inputPasswordLogin.value = '';
        }, 3000)
        console.log('Invalid password');
      break
    } 
  }
}
buttonLogin.addEventListener('click', logIn);
buttonSignup.addEventListener('click', logIn);
//Вернутся на главную страницу
function backToHomePage () {
  wrapper.remove() ;
  main.append(section);
  section.append(title, citation, pCitation, form);
  main.style.backgroundImage = 'url(./image/14.jpg)';
  main.style.boxShadow = 'inset 0 0 6px #bb9c66cc';
  inputEmailLogin.value = '';
  inputPasswordLogin.value = '';
  inputNameSignUp.value = '';
  inputEmailSignUp.value = '';
  inputPasswordSignUp.value = '';
  inputCheckPasswordSignUp.value = '';
}
buttonOut.addEventListener('click', backToHomePage);

// Проверка на заполнение полей 
function CheckingFillingFieldsSignUp () {
const usersLocal = localStorage.getItem('users');
const users = JSON.parse(usersLocal); 
const name = users.map(elem => elem.inputNameSignUp); 
for (let i = 0; i < name.length; i++) { 
    if (inputNameSignUp.value === '') {
      inputNameSignUp.style.border = '2px solid red';
    } else if (inputEmailSignUp.value === '') {
      inputEmailSignUp.style.border = '2px solid red';
    } else if (inputPasswordSignUp.value === '') {
      inputPasswordSignUp.style.border = '2px solid red';
    } else if (inputCheckPasswordSignUp.value === '') {
        inputCheckPasswordSignUp.style.border = '2px solid red';
        message.style.visibility = 'visible';
        message.innerHTML = 'Fill in all the fields'; 
    } else { 
      section.remove();
      main.style.backgroundImage = 'none';
      main.style.boxShadow = 'none';
      main.append(wrapper);
      wrapper.append(buttonOut, contentLogin, sliderImage, img1, img2, img3, img4, scrollForwardBackward, buttonBackward, buttonForward, text, p);
      contentLogin.textContent = `Hello!!! We are glad to see you, ${users[i].inputNameSignUp}.`;
    }
    setTimeout (() => {
      inputNameSignUp.style.border = 'none';
      inputEmailSignUp.style.border = 'none';
      inputPasswordSignUp.style.border = 'none';
      inputCheckPasswordSignUp.style.border = 'none';
    }, 3000) 
  }
}
buttonSignup.addEventListener('click', CheckingFillingFieldsSignUp)
// Проверка паролей
inputCheckPasswordSignUp.addEventListener('keyup',  ()  => {
  let a = inputPasswordSignUp.value
  let b = inputCheckPasswordSignUp.value
     for (let i = 0; i < b.length; i++){
     if(a[i] != b[i]) {
        inputPasswordSignUp.style.border = '2px solid red';
        inputCheckPasswordSignUp.style.border = '2px solid red';
        message.style.visibility = 'visible';
        message.innerHTML = 'Password mismatch';
          setTimeout(() => {
            inputPasswordSignUp.style.border = 'none';
            inputCheckPasswordSignUp.style.border = 'none';
            inputPasswordSignUp.value = '';
            inputCheckPasswordSignUp.value = '';
            message.innerHTML = '';
           
          }, 3000);
        break
      }
    }
});
//Слайдер
let images = [img1, img2, img3, img4];
let counter = 0;
wrapper.className = 'wrapper';
sliderImage.className = 'slider';
img1.className = 'img1 img';
img2.className = 'img2 img';
img3.className = 'img3 img';
img4.className = 'img4 img';
p.className = 'text'
scrollForwardBackward.className = 'scrollForwardBackward';
buttonBackward.className = 'backward rewind';
buttonForward.className = 'forward rewind';
buttonBackward.textContent = 'Backward';
buttonForward.textContent = 'Forward';

function slider() {
    for (let i = 0; i < images.length; i++) {
      images[i].classList.add('sliderImageOpacity');
    }
    images[counter].classList.remove('sliderImageOpacity');
}
slider()
buttonBackward.addEventListener('click', () => {
  if (counter - 1 === - 1) {
    p.style.visibility = 'visible';
    p.innerHTML = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores, necessitatibus neque est mollitia earum porro, repudiandae itaque nulla animi rem provident! Id hic impedit, placeat dolorum incidunt iusto dignissimos asperiores? Molestias, quaerat id tenetur, sapiente ipsa error doloribus suscipit laborum fugit dolorem dolor neque reiciendis nobis quo cum repellat vitae iusto excepturi reprehenderit earum doloremque ullam?';
    counter = images.length - 1;
    } else {
      counter--
    }
    slider()
});
buttonForward.addEventListener('click', () => {
  if (counter + 1 === images.length) {
    counter = 0;
} else {
  counter++
}
slider()
});
wrapper.append(sliderImage, scrollForwardBackward, text);
text.append(p);
sliderImage.append(img1, img2, img3, img4);
// p.textContent = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores, necessitatibus neque est mollitia earum porro, repudiandae itaque nulla animi rem provident! Id hic impedit, placeat dolorum incidunt iusto dignissimos asperiores? Molestias, quaerat id tenetur, sapiente ipsa error doloribus suscipit laborum fugit dolorem dolor neque reiciendis nobis quo cum repellat vitae iusto excepturi reprehenderit earum doloremque ullam? Eos voluptate doloremque quibusdam non, sequi incidunt maiores asperiores consectetur nulla ut modi ipsam sed consequuntur quam enim quis libero quae quisquam hic. Modi qui ipsum distinctio tempora magni beatae aspernatur. Voluptate perspiciatis ab quo laudantium illo vel fugiat quibusdam, quaerat similique facere ut!'
scrollForwardBackward.append(buttonForward, buttonBackward);

root.append(main);