import autoInsImg from '../../images/projectsFoto/auto-insW.webp'
import quizMasterImg from '../../images/projectsFoto/quiz-masterW.webp'
import reactNativeImg from '../../images/projectsFoto/reactNativeW.webp'
import moneyGuardImg from '../../images/projectsFoto/money-guardW.webp'
import bookShelfImg from '../../images/projectsFoto/book-shelfW.webp'
import freshBoxImg from '../../images/projectsFoto/freshBoxW.webp'
import cubeImg from '../../images/projectsFoto/cubeW.webp'
import imageFinderImg from '../../images/projectsFoto/image-finderW.webp'
import {skills} from './skills'
// console.log('skills: ', skills);

export const projects = [
    {        
        id: 1,
        name: "Auto Insurance",
        skills:[skills[7], skills[15], skills[12]],//Vite, Axios, MUI
        img: autoInsImg,
        imgAlt: "Auto insurance",
        descriptionEng: "An application in which you can issue auto insurance online. Adopted for desktop, tablet, mobile.",
        descriptionSk: "Aplikácia, v ktorej môžete vybaviť poistenie auta online. Prispôsobene pre desktop, tablet, mobil.",
        descriptionUa: "Застосунок, в якому можна оформити автоцивілку онлайн. Адаптовано для десктопів, планшетів, мобільних пристроїв.",
        roleEng: "Role: Devepoler",
        roleSk: "Rola: Vývojár ",
        roleUa: "Роль: Розробник",
        web: 'https://www.auto-ins.com.ua/',
        gitHub: 'https://github.com/apazient/auto-ins'
    },
    {        
        id: 2,
        name: "Quiz Master",
        skills:[skills[2], skills[10], skills[20]],//Node.js, MongoDB, Swagger        
        img: quizMasterImg,
        imgAlt: "Quiz Master",
        descriptionEng: "Application where you can try any quiz or create own quiz. Adopted for desktop, tablet, mobile.",
        descriptionSk: "Aplikácia, kde si môžete vyskúšať akýkoľvek kvíz alebo vytvoriť vlastný kvíz. Prispôsobene pre desktop, tablet, mobil.",
        descriptionUa: "Застосунок, в якому Ви можете спробувати будь-який квіз або створити власний. Адаптовано для десктопів, планшетів, мобільних пристроїв.",
        roleEng: "Role: Devepoler",
        roleSk: "Rola: Vývojár ",
        roleUa: "Роль: Розробник",
        web: 'https://stepaniuk-den.github.io/quiz-master/',
        gitHub: 'https://github.com/Stepaniuk-Den/quiz-master'
    },
    {        
        id: 3,
        name: "React Native",
        skills:[skills[6], skills[5], skills[21]],//ReactNative, Redux, Firebase
        img: reactNativeImg,
        imgAlt: "Money guard image",
        descriptionEng: "Register, make a photo, add gps coordinates, write a comment, like a photo!",
        descriptionSk: "Zaregistrujte sa, urobte fotku, pridajte gps súradnice, napíšte komentár, lajkujte fotku!",
        descriptionUa: "Зареєструйся, зроби фото, додай gps координати, напиши коментар, лайкни фото!",
        roleEng: "Role: Developer",
        roleSk: "Rola: Vývojár",
        roleUa: "Роль: Розробник",
        web: 'https://github.com/GKastet/goit-Native',
        gitHub: 'https://github.com/GKastet/goit-Native'
    },
    {        
        id: 4,
        name: "Money Guard",
        skills:[skills[20], skills[3], skills[5]],//Swagger, React, Redux
        img: moneyGuardImg,
        imgAlt: "Money guard image",
        descriptionEng: "Application which helps to control your incomes and expenses, see statistics etc. Adopted for desktop, tablet, mobile.",
        descriptionSk: "Aplikácia, ktorá pomáha kontrolovať vaše príjmy a výdavky, vidieť štatistiky atď. Prispôsobene pre desktop, tablet, mobil.",
        descriptionUa: "Застосунок, який допомагає контролювати Ваші надходження та витрати, бачити статистику. Адаптовано для десктопів, планшетів, мобільних пристроїв.",
        roleEng: "Role: Team lead and developer",
        roleSk: "Rola: Veduci tímu a vývojár",
        roleUa: "Роль: Тім лід та розробник",
        web: 'https://gkastet.github.io/ITArt/register',
        gitHub: 'https://github.com/GKastet/ITArt'
    },
    {        
        id: 5,
        name: "Book shelf",
        skills:[skills[4], skills[21], skills[9]],//JS, FireBase, JSON
        img: bookShelfImg,
        imgAlt: "Book shelf image",
        descriptionEng: "A website where you can choose a book, read short description, and visit a shop for buying. Adopted for desktop, tablet, mobile.",        
        descriptionSk: "Web, kde si môžete vybrať knihu, prečítať si krátky popis a navštíviť obchod, kde si môžete kúpiť. Prispôsobene pre desktop, tablet, mobil.",
        descriptionUa: "Вебсайт, на якому можна обрати книгу, прочитати короткий опис, відвідати крамницю для покупки. Адаптовано для десктопів, планшетів, мобільних пристроїв.",        
        roleEng: "Role: Team lead and developer",
        roleSk: "Rola: Veduci tímu a vývojár",
        roleUa: "Роль: Тім лід та розробник",
        web: 'https://gkastet.github.io/Bookshelf/',
        gitHub: 'https://github.com/GKastet/Bookshelf'
    },
    {        
        id: 6,
        name: "Fresh box",
        skills:[skills[0], skills[1], skills[16]],//HTML, CSS, Responsive
        img: freshBoxImg,
        imgAlt: "Fresh box image",
        descriptionEng: "Fresh harvest box is your one-stop place for a delicious fruit basket. Adopted for desktop, tablet, mobile.",        
        descriptionSk: "Fresh harvest box je miestom, kde si na jednom mieste nájdete košík s lahodným ovocím. Prispôsobene pre desktop, tablet, mobil.",
        descriptionUa: "Кошик, у який в одному місці можна зібрати найкращі фрукти. Адаптовано для десктопів, планшетів, мобільних пристроїв.",
        roleEng: "Role: Developer",
        roleSk: "Rola: Vývojár",
        roleUa: "Роль: Розробник",
        web: 'https://superstasss.github.io/bigfatapp/',
        gitHub: 'https://github.com/SuperStasss/bigfatapp'
    },
    {        
        id: 7,
        name: "Cube",
        skills:[skills[3], skills[7], skills[13]],//React, Vite, StyledComponents
        img: cubeImg,
        imgAlt: "Cube image",
        descriptionEng: "Try to collect all smiles 😉",
        descriptionSk: "Skúste si pozbierať všetky úsmevy 😉",
        descriptionUa: "Спробуй зібрати усі смайліки 😉",
        roleEng: "Role: Developer",
        roleSk: "Rola: Vývojár",
        roleUa: "Роль: Розробник",
        web: 'https://gkastet.github.io/test-eh/',
        gitHub: 'https://github.com/GKastet/test-eh'
    },
    {        
        id: 8,
        name: "Image finder",
        skills:[skills[3], skills[15], skills[13]],//React, Axios, StyledComponents
        img: imageFinderImg,
        imgAlt: "Image finder image",
        descriptionEng: "Type a word - get a set of great pictures 😎!",
        descriptionSk: "Napíšte slovo – získajte sadu obrázkov 😎",
        descriptionUa: "Введи слово - отримуй набір картинок 😎!",
        roleEng: "Role: Developer",
        roleSk: "Rola: Vývojár",
        roleUa: "Роль: Розробник",
        web: 'https://gkastet.github.io/goit-react-hw-04-images/',
        gitHub: 'https://github.com/GKastet/goit-react-hw-04-images'
    },
]
