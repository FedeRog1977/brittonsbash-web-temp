import { PageBackgroundProps } from '@libs/components-basics/page-background';
import { ArticleTileProps } from '@libs/components-blocks/article-tile';
import { TitleTileProps } from '@libs/components-blocks/title-tile';

type AcademiaProps = {
  background: PageBackgroundProps;
  tileOne: TitleTileProps;
  tileTwo: ArticleTileProps;
  tileThree: ArticleTileProps;
  tileFour: ArticleTileProps;
  tileFive: ArticleTileProps;
};

export const academiaContent: AcademiaProps = {
  background: { content: 'Academia' },
  tileOne: {
    titleItems: [
      {
        content: 'M.Sc. Software Development',
        subContent: '2022 – Distinction',
      },
      {
        content: 'B.A. Finance (Honours)',
        subContent: '2021 – First Class',
      },
    ],
  },
  tileTwo: {
    type: 'clear',
    heading: 'Overview',
    sections: [
      {
        component: 'body',
        content: {
          body: 'I’m a Master of Science with Distinction graduate of Software Development and Bachelor of Arts with First Class Honours graduate of Finance from the University of Strathclyde. In first and second year, my additional studies in my BA included Business Law, Business Analysis & Technology, Management, Marketing, and Mathematics (Algebra & Calculus). I achieved distinction in third year when my course was spread across just Finance and Economics. Honours year Finance study focused on asset pricing, quantitative methods, corporate investment, and corporate financing. In fifth year, my MSc, topics focussed on database development, object oriented programming, software engineering, and cyber security and ethics.',
        },
      },
    ],
  },
  tileThree: {
    type: 'clear',
    heading: 'M.Sc. in Software Development',
    subHeading: 'Masters',
    sections: [
      {
        component: 'body',
        content: {
          body: [
            {
              variant: 'h3',
              children: 'Masters Dissertation',
            },
            {
              variant: 'body',
              children:
                'My masters project displays all of my best software and code-based skills to its date of completion. This includes a functional website/application built using barebones HTML, CSS and JavaScript, and various testing components; version control using Git with GitHub and GitHub CLI; and a comprehensive write-up using my second language spoken at home, TeX (LaTeX). The site, Burning Roots, is essentially based enhancing and combining features of Walkhighlands and Strava. It provides multiple useful components which are relevant to hiking and walking route planning, including various informational elements based on displaying data from a JSON file; a weather application which uses the OpenWeather API and Geolocation to provide current and forecasted weather data; a layer-toggle map which uses the Ordnance Survey API; and many map overlay features and toggles which use data from a JSON file, the Leaflet JavaScript library, and Geolocation.',
            },
            {
              variant: 'h3',
              children: 'Database Development',
            },
            {
              variant: 'body',
              children:
                'The two classes in this course on databases, CS990 and CS992, explored the design and implementation of databases using Structured Query Language (SQL) with basic querying; and more abstract concepts of database implementation such as the structure and efficiency of relational vs. non-relational vs. hybrid databases, and further querying; respectively. Both classes involved regular lab sessions in which databases were to be built and queried; an assignment for the former which involved taking information and formulating a logical database design with appropriate relationships and tables which was then constructed and queried accordingly; and an assignment for the latter which explored theory behind the history and use of relational databases, the rise of non-relational systems, and the concept and design of hybrid ones.',
            },
            {
              variant: 'h3',
              children: 'Object Oriented Programming',
            },
            {
              variant: 'body',
              children:
                'This aspect also involved two classes, CS994 and CS995. These were based on Python and Java, respectively. As well as the regular lab sessions which were structured around providing the fundamentals of Python and Java, both of these classes involved basic assignments which put these developments into practice. The Python assignment involved the construction of a miniature weather application using JSON data. The Java one involved building various components of a functional library system.',
            },
            {
              variant: 'h3',
              children: 'Software Engineering',
            },
            {
              variant: 'body',
              children:
                'The two classes associated with this aspect, CS991 and CS993, were both more open-ended and focussed more so on the software design and engineering process. Although it could be argued that the first of the two could also have been related to object oriented programming as it involved mobile application development. I, however, chose to go down the route of HTML, CSS and JavaScript in this case. As I most commonly do when presented with the option. The second was bases more so on standards and principals of project panning, design, workflow and management. These two classes were, once again, based on the delivery of assignments. The assignment for CS991 essentially involved the design and prototyping process of an application. This included elements such as working demonstrations and documentation, etc. There were two assignments for CS993 however, they both followed the same general framework: requirements gathering and ranking; user stories; project management, including software and team management; front-end (user interface) design and functionality; back-end design and functionality; test-driven development; and testing elements.',
            },
            {
              variant: 'h3',
              children: 'Cyber Security & Ethics',
            },
            {
              variant: 'body',
              children:
                'This involved two classes, CS808 and CS978, which loosely tie together from an ethical point of view. The cyber security class involved structured elements of cryptography, steganography and authentication, malware, human security, network attacks, network defense, and threat modelling. There was a routine examination based on these topics. The class also involved an assignment based on the concept of steganography and the Least Significant Bit (LSB) approach; and the engineering of a command line based program using python which: encodes a message in a 24bit Bitmap (.bmp) image using the Pillow Image Library (PIL); decodes the message from the image by: requesting a text file; reading, extracting and storing text within the file; checking the image size against the target text file size to ensure there is sufficient space to store the text; identify errors returning the user with a sufficient path; and fulfilling the PEP 8 standards. Furthermore, the ethics class involved an essay exploring ethical theory, values, principals, and their implementation; morals of accessibility including restrictions, malware and external intrusive action; privacy and regulation, data misuse and privacy, government and non-government intervention, and corporate responsibility.',
            },
          ],
        },
      },
    ],
  },
  tileFour: {
    type: 'clear',
    heading: 'B.A. in Finance',
    subHeading: 'Bachelors',
    sections: [
      {
        component: 'body',
        content: {
          body: [
            {
              variant: 'h3',
              children: 'Honours Dissertation',
            },
            {
              variant: 'body',
              children:
                'My honours is titled as follows: New York’s Seasonal Effect: Further Analysis of New York’s Interlinking and Turn-of-the-Year Seasonal Stock Return Fluctuations with Evidence from the NYSE, NASDAQ and S&P 500. It focuses on time-series analysis of US stock returns, in search of Seasonal Patterns in the Weekend Effect, January Effect and Holiday Effect which contradict Efficient Market Hypothesis. Utilising mathematical and statistical methods such as regression analysis.',
            },
            {
              variant: 'h3',
              children: 'Theoretical Finance (Corporate & Investment)',
            },
            {
              variant: 'body',
              children:
                'The second-year class AG215 explored topics including capital budgeting, capital depreciation, leasing, inventory optimisation, and corporate risk. The third year class AG312 focused on asset backed securities, real options, the Black & Scholes model, and international financial management. These classes involved an Excel and Visual Basic-based capital budgeting project and a written project based on the 2008 financial crisis which focused on mortgage-backed securities. The fourth year classes AG430 and AG431 explored various topics in mergers and acquisitions, payout policies, agency theories, capital structure, market timing, IPOs, SEOs and debt. These included projects on payout policy of Tesco and Cineworld during the China Plague, and the 2017 merger of Standard Life and Aberdeen Asset Management.',
            },
            {
              variant: 'h3',
              children: 'Empirical Finance (Securities & Derivatives)',
            },
            {
              variant: 'body',
              children:
                'The second year class AG217 focused on portfolio management and security analysis, extending to mean variance analysis, Sharpe testing, general asset pricing and bond pricing. This class also involved factor testing methods. The third year class AG313 focused on international risk and exchange and options/future derivative pricing. These classes involved a MATLAB-based portfolio optimisation project and a written international exchange risk project. The fourth year classes AG428 and AG432 primarily involved empirical methods in logistic regression, linear factor models and more extensive portfolio testing. Both projects again involved MATLAB ‘BloatLAB’.',
            },
            {
              variant: 'h3',
              children: 'Microeconomics with Econometrics',
            },
            {
              variant: 'body',
              children:
                'Second year microeconomics EC215 introduced budget constraints, preferences, cost minimisation, profit maximisation, advanced economic algebra and calculus, supply, demand, technology and monopolistic/oligopolistic operations. The third year expansion of this class EC315 focused on more specific topics such as game theory; exploring dominating corporate strategies and further profit optimisation. Furthermore, topics in public economics included equity distribution, commodity tax, cost benefit analysis, fiscal federalism, program/policy analysis and crime and punishment. This class included a Gretl project accounting for the cross-sectional econometric regregression portion of this class.',
            },
            {
              variant: 'h3',
              children: 'Macroeconomics with Econometrics',
            },
            {
              variant: 'body',
              children:
                'The second year class of this variety EC216 introduced the models of consumption and GDP, labour, and monetary and fiscal policy. The class gave a brief introduction to econometric statistics and data analysis. The third year class EC316 expanded upon these theories and analyses; exploring economic growth, saving, capital and output, technological progress, expectations and investment/consumption, econometric GARCH models, time-series correlation, cointegration and error correction. The econometric portion was again executed through the statistical analysis GUI Gretl.',
            },
          ],
        },
      },
    ],
  },
  tileFive: {
    type: 'clear',
    heading: 'University Roles',
    subHeading: 'Extra-curricular',
    sections: [
      {
        component: 'body',
        content: {
          body: [
            {
              variant: 'h3',
              children: 'Strathclyde University Mountaineering Society',
            },
            {
              variant: 'body',
              children:
                'In 2021, at the start of my MSc course, I finally made the decision to join SUMC to unleash my passion for the hills to those alike at Strathclyde. Primarily however, the reason for my joining was to become more aware of some particular skills in anticipation of sending some harder terrain and winter routes on hills. The SUMC GCC and TCA sessions have been excellent. Not to mention, the battalion are some of the nicest people I’ve met in my uni career.',
            },
            {
              variant: 'h3',
              children: 'Student Ambassador',
            },
            {
              variant: 'body',
              children:
                'In 2019 I wanted to expand my reach in my university and dig deeper into their operations. I found an opportunity to aid the Student Ambassador team with the 2019 Undergraduate Open Days. My involvement in these open days subsequently led to me applying for and being accepted for enrolment upon a position as a permanent Student Ambassador, with responsibilities such as touring, giving talks, organising university events, and all things alike. Note that this is technically ‘employment’ as I’m on the payroll of my institution however, well... y’know.',
            },
            {
              variant: 'h3',
              children: 'Widening Access Team',
            },
            {
              variant: 'body',
              children:
                'In 2019 I also joined the Strathclyde Widening Access Team who aim to extend the reach of the university’s admissions and encourage lower progression rate schools to accelerate their achievements and efforts in school, in order to progress to university. This scheme exists to positively effect the university’s image and reputation, and has done an excellent job of this in previous years. In 2019/2020 I was head of logistics and had a large influence in other aspects of the One Step Forward Event. It was an event aimed at bringing low progression-rate-school students to the university, giving them an enhanced introductory view of what could be theirs; in anticipation of encouraging them to accelerate their effort and improve grades. This event was planned to 100% completion, with myself acquiring visitors such as Ernst & Young. The event was never executed however due to ‘COVID-19’.',
            },
            {
              variant: 'h3',
              children: 'Unibuddy Mentor & Advisor',
            },
            {
              variant: 'body',
              children:
                'As part of my Student Ambassador role, I accepted a Recruitment and International Office position which is designed to help prospective students make their decision regarding enrolment at an institution such as the University of Strathclyde. Much like the student ambassador role, my job is to inform and guide. It is an app or browser-based role, through an application named ‘Unibuddy’. Primarily, I answer questions regarding admissions, work style, work load, structure, university life, etc., through the integrated message service. I also provide blogs through my personal profile.',
            },
            {
              variant: 'h3',
              children: 'Team Leader',
            },
            {
              variant: 'body',
              children:
                'Through the majority of the group work at university, I have fallen into the role of team leader. Now, I hate the puffer-wearing douché who consistently elects himself leader just as much as you do however, I practice a completely different method of becoming a leader. From day one, I aim to primarily gain the respect of my teammates and also, to put across the idea that I am a suitable person to be in charge. The method follows: [1] engage in confident and charismatic chat with teammates and staff leaders to develop a human element to the work - diffusing tension, [2] make frequent suggestions directly to the staff leader instead of just the team, [3] treat the staff member(s) and the team collectively as equals, [4] be the first-responder to emails, messages etc., [5] always make the skeleton plans of proposed work, [6] at the beginning do most of the preliminary work yourself, and [7] begin to make suggestions of what work teammates are best fitted to and suggest deadlines and targets - which will likely be accepted considering the first sign of guidance is usually welcomed, [8] help people but don’t become their slaves - show them in practice and one-on-one how good your work is and give them a baseline to work from. [9] Lead!',
            },
          ],
        },
      },
    ],
  },
};
