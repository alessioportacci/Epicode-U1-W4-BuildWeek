const easy = [{"category":"Science: Computers","type":"multiple","difficulty":"easy","question":"What does CPU stand for?","correct_answer":"Central Processing Unit","incorrect_answers":["Central Process Unit","Computer Personal Unit","Central Processor Unit"]},
              {"category":"Science: Computers","type":"multiple","difficulty":"easy","question":"Which computer hardware device provides an interface for all other connected devices to communicate?","correct_answer":"Motherboard","incorrect_answers":["Central Processing Unit","Hard Disk Drive","Random Access Memory"]},
              {"category":"Science: Computers","type":"boolean","difficulty":"easy","question":"The logo for Snapchat is a Bell.","correct_answer":"False","incorrect_answers":["True"]},
              {"category":"Science: Computers","type":"multiple","difficulty":"easy","question":"The series of the Intel HD graphics generation succeeding that of the 5000 and 6000 series (Broadwell) is called:","correct_answer":"HD Graphics 500","incorrect_answers":["HD Graphics 700 ","HD Graphics 600","HD Graphics 7000"]},
              {"category":"Science: Computers","type":"multiple","difficulty":"easy","question":"On Twitter, what was the original character limit for a Tweet?","correct_answer":"140","incorrect_answers":["120","160","100"]},
              {"category":"Science: Computers","type":"boolean","difficulty":"easy","question":"&quot;HTML&quot; stands for Hypertext Markup Language.","correct_answer":"True","incorrect_answers":["False"]},
              {"category":"Science: Computers","type":"boolean","difficulty":"easy","question":"Linux was first created as an alternative to Windows XP.","correct_answer":"False","incorrect_answers":["True"]},
              {"category":"Science: Computers","type":"multiple","difficulty":"easy","question":"How many values can a single byte represent?","correct_answer":"256","incorrect_answers":["8","1","1024"]},
              {"category":"Science: Computers","type":"multiple","difficulty":"easy","question":"The C programming language was created by this American computer scientist. ","correct_answer":"Dennis Ritchie","incorrect_answers":["Tim Berners Lee","al-Khw\u0101rizm\u012b","Willis Ware"]},
              {"category":"Science: Computers","type":"multiple","difficulty":"easy","question":"What language does Node.js use?","correct_answer":"JavaScript","incorrect_answers":["Java","Java Source","Joomla Source Code"]}]

const medium = [{"category":"Science: Computers","type":"multiple","difficulty":"medium","question":"When was the programming language &quot;C#&quot; released?","correct_answer":"2000","incorrect_answers":["1998","1999","2001"]},
                {"category":"Science: Computers","type":"multiple","difficulty":"medium","question":"What did the name of the Tor Anonymity Network orignially stand for?","correct_answer":"The Onion Router","incorrect_answers":["The Only Router","The Orange Router","The Ominous Router"]},
                {"category":"Science: Computers","type":"boolean","difficulty":"medium","question":"To bypass US Munitions Export Laws, the creator of the PGP published all the source code in book form. ","correct_answer":"True","incorrect_answers":["False"]},
                {"category":"Science: Computers","type":"multiple","difficulty":"medium","question":"On which day did the World Wide Web go online?","correct_answer":"December 20, 1990","incorrect_answers":["December 17, 1996","November 12, 1990","November 24, 1995"]},
                {"category":"Science: Computers","type":"multiple","difficulty":"medium","question":"In the server hosting industry IaaS stands for...","correct_answer":"Infrastructure as a Service","incorrect_answers":["Internet as a Service","Internet and a Server","Infrastructure as a Server"]},
                {"category":"Science: Computers","type":"multiple","difficulty":"medium","question":"Which of the following is a personal computer made by the Japanese company Fujitsu?","correct_answer":"FM-7","incorrect_answers":["PC-9801","Xmillennium ","MSX"]},
                {"category":"Science: Computers","type":"multiple","difficulty":"medium","question":".at is the top-level domain for what country?","correct_answer":"Austria","incorrect_answers":["Argentina","Australia","Angola"]},
                {"category":"Science: Computers","type":"boolean","difficulty":"medium","question":"The last Windows operating system to be based on the Windows 9x kernel was Windows 98.","correct_answer":"False","incorrect_answers":["True"]},
                {"category":"Science: Computers","type":"multiple","difficulty":"medium","question":"What is known as &quot;the brain&quot; of the Computer?","correct_answer":"Central Processing Unit","incorrect_answers":["Motherboard","Graphics Processing Unit","Keyboard"]},
                {"category":"Science: Computers","type":"multiple","difficulty":"medium","question":"What does the term GPU stand for?","correct_answer":"Graphics Processing Unit","incorrect_answers":["Gaming Processor Unit","Graphite Producing Unit","Graphical Proprietary Unit"]}]

const hard = [{"category":"Science: Computers","type":"multiple","difficulty":"hard","question":"How many Hz does the video standard PAL support?","correct_answer":"50","incorrect_answers":["59","60","25"]},
              {"category":"Science: Computers","type":"multiple","difficulty":"hard","question":"The internet domain .fm is the country-code top-level domain for which Pacific Ocean island nation?","correct_answer":"Micronesia","incorrect_answers":["Fiji","Tuvalu","Marshall Islands"]},
              {"category":"Science: Computers","type":"boolean","difficulty":"hard","question":"DHCP stands for Dynamic Host Configuration Port.","correct_answer":"False","incorrect_answers":["True"]},
              {"category":"Science: Computers","type":"multiple","difficulty":"hard","question":"Who is the original author of the realtime physics engine called PhysX?","correct_answer":"NovodeX","incorrect_answers":["Ageia","Nvidia","AMD"]},
              {"category":"Science: Computers","type":"multiple","difficulty":"hard","question":"Which of these is not a key value of Agile software development?","correct_answer":"Comprehensive documentation","incorrect_answers":["Individuals and interactions","Customer collaboration","Responding to change"]},
              {"category":"Science: Computers","type":"multiple","difficulty":"hard","question":"What does the International System of Quantities refer 1024 bytes as?","correct_answer":"Kibibyte","incorrect_answers":["Kylobyte","Kilobyte","Kelobyte"]},
              {"category":"Science: Computers","type":"multiple","difficulty":"hard","question":"What is the name given to layer 4 of the Open Systems Interconnection (ISO) model?","correct_answer":"Transport","incorrect_answers":["Session","Data link","Network"]},
              {"category":"Science: Computers","type":"multiple","difficulty":"hard","question":"Who invented the &quot;Spanning Tree Protocol&quot;?","correct_answer":"Radia Perlman","incorrect_answers":["Paul Vixie","Vint Cerf","Michael Roberts"]},
              {"category":"Science: Computers","type":"multiple","difficulty":"hard","question":"What type of sound chip does the Super Nintendo Entertainment System (SNES) have?","correct_answer":"ADPCM Sampler","incorrect_answers":["FM Synthesizer","Programmable Sound Generator (PSG)","PCM Sampler"]},
              {"category":"Science: Computers","type":"boolean","difficulty":"hard","question":"The T-Mobile Sidekick smartphone is a re-branded version of the Danger Hiptop.","correct_answer":"True","incorrect_answers":["False"]}]


let chosenDifficulty = []
const buttons = document.querySelectorAll(".difficulty")
buttons.forEach(button => {
button.addEventListener("click", function()
    {
        switch(button.id)
        {
            case "0":
                chosenDifficulty = [...easy] 
                break;
            case "1": 
                chosenDifficulty = [...medium] 
                break;
            case "2": 
                chosenDifficulty = [...hard]
                break;
            default: break;
        }

        sessionStorage.setItem('questions', JSON.stringify(chosenDifficulty));

        console.log(sessionStorage.getItem("questions"))
        window.location.href = "test.html"

    })
});