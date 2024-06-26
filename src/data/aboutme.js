//src/data/aboutme.js
import contacts from './contacts';
import technologies from './technologies';

const aboutme = {
    technologies: Object.values(technologies),
    contacts : contacts,
    profilephoto: 'project media/jp.png',
    title: "About Me",
    paragraph: 
    `I am a second year student at the University of Minnesota, in the College of Science and Engineering. I have a passion for computer science and software engineering, and am looking to build a professional career in the field. I am currently interning at Graco as a software engineer.`
};

export default aboutme;
