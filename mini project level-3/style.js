// data
const asabenehChallenges2020 = {
    description: 'Asabeneh Yetayeh challenges',
    challengeTitle: 'Asabeneh Yetayeh challenges',
    challengeSubtitle: '30DaysOfJavaScript Challenge',
    challengeYear: 2020,
    keywords: [
        'HTML',
        'HTML5',
        'CSS',
        'CSS3',
        'JS',
        'JavaScript',
        'ES6',
        'Promise',
        'async await',
        'Database',
        'React',
        'React Hooks',
        'Context API',
        'React Router',
        'Web Storage',
        'localStorage',
        'sessionStorage',
        'Redux',
        'Node',
        'MongoDB',
        'SQL',
        'API',
        'DOM',
        'data science',
        'MERN',
        'Python',
        'Flask',
        'Statistics',
        'Linear Algebra',
        'Numpy',
        'Pandas',
        'Scipy',
        'Scikit-learn',
        'Visualization',
        'D3.js'
    ],
    author: {
        firstName: 'Asabeneh',
        lastName: 'Yetayeh',
        titles: [
            ['🌱', 'Educator'],
            ['💻', 'Programmer'],
            ['🌐', 'Developer'],
            ['🔥', 'Motivator'],
            ['📔', 'Content Creator']
        ],
        qualifications: [
            'MSc. Computer Science Ongoing',
            'BSc. Information and Communication Eng.',
            'MSc. Food Technology',
            'BSc.Food Technology'
        ],
        socialLinks: [
            {
                social: 'LinkedIn',
                url: 'https://www.linkedin.com/in/asabeneh/',
                fontawesomeIcon: '<i class="fab fa-linkedin">'
            },
            {
                social: 'Twitter',
                url: 'https://twitter.com/Asabeneh',
                fontawesomeIcon: '<i class="fab fa-twitter-square"></i>'
            },
            {
                social: 'Github',
                fontawesomeIcon: '<i class="fab fa-github-square"></i>',
                url: 'https://github.com/Asabeneh'
            },
            {
                social: 'DEV.to',
                fontawesomeIcon: '',
                url: 'https://dev.to/asabeneh'
            }
        ],
        skills: [
            'Web Development',
            'Data Analysis',
            'Data Visualization',
            'Programming',
            'Databases',
            'Developing API'
        ],
        bio:
            'I am an educator, developer, motivator and content creator. I am a life-long learner. If you like to know more about me checkout my LinkedIn or Github profile. Thank you so much for joining in my quest of changing everyone to developer.'
    },
    challenges: [
        {
            name: '30 Days Of Python',
            topics: [
                'Python',
                'Flask',
                'Numpy',
                'Pandas',
                'Statistics',
                'API',
                'MongoDB'
            ],
            days: 30,
            summary: "Python",
            status: 'Done',
            questions: 'Above 500',
            projects: 'Two',
            interviewQns: '',
            githubUrl: 'https://github.com/Asabeneh/30-Days-Of-Python'
        },
        {
            name: '30 Days Of JavaScript',
            topics: ['JavaScript', 'ES6', 'Promise', 'async and await', 'DOM'],
            days: 30,
            summary: "JavaScript",
            status: 'Ongoing',
            questions: 'Above 500',
            projects: 'About 30',
            interviewQns: '',
            githubUrl: 'https://github.com/Asabeneh/30DaysOfJavaScript'
        },
        {
            name: '30 Days Of HTML & CSS',
            topics: ['CSS', 'Flex', 'Grid', 'CSS Animation'],
            days: 30,
            summary: "HTML & CSS",
            status: 'Coming',
            questions: 'Above 500',
            projects: 'Two',
            interviewQns: '',
            githubUrl: ''
        },
        {
            name: '30 Days Of React',
            topics: [
                'React',
                'React Router',
                'Redux',
                'Context API',
                'React Hooks',
                'MERN'
            ],
            days: 30,
            summary: "React",
            status: 'Coming',
            questions: '',
            projects: '',
            interviewQns: '',
            githubUrl: ''
        },
        {
            name: '30 Days Of ReactNative',
            topics: ['ReactNative', 'Redux'],
            days: 30,
            summary: "React Native",
            status: 'Coming',
            questions: '',
            projects: 'Two',
            interviewQns: '',
            githubUrl: ''
        },
        {
            name: '30 Days Of Fullstack',
            topics: ['React', 'Redux', 'MongoDB', 'Node', 'MERN'],
            days: 30,
            summary: "Fullstack",
            status: 'Coming',
            questions: '',
            projects: '',
            interviewQns: '',
            githubUrl: ''
        },
        {
            name: '30 Days Of Data Analysis',
            topics: ['Python', 'Numpy', 'Pandas', 'Statistics', 'Visualization'],
            days: 30,
            summary: "Data Analysis",
            status: 'Coming',
            questions: '',
            projects: '',
            interviewQns: '',
            githubUrl: ''
        },
        {
            name: '30 Days Of Machine Learning',
            topics: [
                'Python',
                'Numpy',
                'Pandas',
                'Scikit-learn',
                'Scipy',
                'Linear Algebra',
                'Statistics',
                'Visualization'
            ],
            days: 30,
            summary: "Machine Learning",
            status: 'Coming',
            questions: '',
            projects: '',
            interviewQns: '',
            githubUrl: ''
        }
    ]
}

function randomColor() {
    const char = 'abcdef1234567890';
    let hex = '#';
    for (let i = 0; i < 6; i++) {
        const rand = Math.floor(Math.random() * char.length);
        hex += char[rand];
    }
    return hex;
}


const date = new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
}).format(new Date());


const wrapper = document.createElement('div');
wrapper.className = 'wrapper';
wrapper.style.width = '70%';
wrapper.style.marginInline = 'auto';
wrapper.style.textAlign = 'center';
document.body.appendChild(wrapper);

const h1 = document.createElement('h1');
// const span = document.createElement('span');
// span.textContent = `${new Date().getFullYear()}`;
h1.innerHTML = `Asabeneh Yatayeh challenges in <span class='year'>${new Date().getFullYear()}</span>`;
const year = h1.querySelector('.year');
year.style.fontSize = '60px';

const h2 = document.createElement('h2');
h2.textContent = '30daysOfJavaScript Challenges';
h2.style.textDecoration = 'underline';
h2.style.color = '#000';
h2.style.fontSize = '1rem';

const time = document.createElement('h3');
time.textContent = date;
time.style.width = '25%';
time.style.marginInline = 'auto';
time.style.padding = '0.5rem';

setInterval(() => {
    year.style.color = randomColor();
    time.style.backgroundColor = randomColor();
}, 1000);

wrapper.appendChild(h1);
wrapper.appendChild(h2);
wrapper.appendChild(time);

const ul = document.createElement('ul');
ul.style.width = '60%';
ul.style.marginInline = 'auto';
ul.style.listStyle = 'none';

wrapper.appendChild(ul);


asabenehChallenges2020.challenges.forEach(list => {
    const li = document.createElement('li');

    li.innerHTML = `
    <a class="challenge-link" href="${list.githubUrl}">${list.name}</a>
    <details class="detail">
    <summary>${list.summary}</summary>
    </details>
    <p>${list.status}</p>`;

    li.classList.add(list.status);
    const tag = li.querySelector('.detail');
    list.topics.forEach(topic => {
        const p = document.createElement('p');
        p.textContent = topic;

        tag.appendChild(p);
    })
    ul.appendChild(li);
});


// adding styles to the list elements
const lists = document.querySelectorAll('li');
lists.forEach(list => {
    list.style.display = 'flex';
    list.style.alignItems = 'center';
    list.style.padding = '0.3rem';
    list.style.justifyContent = 'space-between';
    list.style.borderBottom = '2px solid #fff';
});

document.querySelector('.Done').style.backgroundColor = 'limegreen';
document.querySelector('.Ongoing').style.backgroundColor = 'yellow';
document.querySelectorAll('.Coming').forEach(li => {
    li.style.backgroundColor = '#c05757';
    li.querySelectorAll('.challenge-link').forEach(link => link.style.textDecoration = 'none');
})

document.querySelectorAll('.challenge-link').forEach(link => link.style.color = '#000');