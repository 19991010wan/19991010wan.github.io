var config = {
    /*Configure your basic information here, all data is given as a string*/
    name: "Zhijie Wan",
    sex: "mail",
    age: "22",
    phone: "13126925699",
    email: "2996808587@qq.com",
    address: "Currently living in Haidian, Beijing",
    qq: "2996808587",
    log: "Wan",
    github: "@19991010wan",
    twitter: "",
    blog: "Please look forward to",


    /*Configure the collection of mottos on the home page here*/
    motto: [
        "Tomorrow will not necessarily be better, but be confident that a better tomorrow will come.",
        "If I could, I surely would.",
        "Go For It!",
        "Those who are wise set a long will, and those who are not will set a long will.",
        "You must always have faith in who you are!",
        "Those tears of the past will eventually dry up in the memory.",
        "The truth, is to extinguish illusions.",
        "I want to turn my heart to the moon, but the moon shines in the ditch.",
        "The first thing you need to do is to look at all the flowers in Chang'an in one day.",
        "We must take what we have and exchange it for what we don't have.",
        "No pains, no gains.",
        "Don't cry because it is over, smile because it happened."
    ],


    /*Configure the meeting information of the home page here, you can inline HTML tags to adjust the format*/
    welcome: "I'm good at learning, like simplicity, and I'll definitely keep learning to improve my programming!<br>" +
             "Nice to see you!<br>" +
             "To learn more, scroll down! ^_^",


    /*Configure the about me information here, you can inline HTML tags to adjust the format*/
    about: "<p>Wan Zhijie, Male, Master in Beijing University of Posts and Telecommunications.</p>" +
        "<p>I have a solid grasp of computer basics, a passionate working attitude, strong teamwork ability, and the ability to develop independently. Meanwhile, I'm good at finding and solving problems. Besides, I have strong execution, high sense of responsibility, strong sense of collective honor, and courage to take charge.</p>" +
        "<p>Currently actively preparing a personal blog, look forward to it!</p>" +
        "<p>Looking forward to contacting you!</p>",



    /**
    * 在这里配置你的技能点
    * ["技能点", 掌握程度, "技能条颜色"]
    */
    skills: [
        ["Java", 75, "red"],
        ["python", 60, "blue"],
        ["C", 75, "#1abc9c"],
        ["C++", 70, "rgba(0,0,0)"],
        ["SQL", 60, "yellow"],
        ["html", 70, "pink"]
    ],


    /*这里填写你的技能描述，你可以内嵌HTML标签以调整格式*/
    skills_description: "<ul>" +
        "     <li>Good basic knowledge of operating systems, computer networks, databases and data structures.</li>" +
        "     <li>Good knowledge of Java, python and other language basics.</li>" +
        "     <li>Familiarity with basic frameworks such as multi-threading, collections, etc.</li>" +
        "     <li>Familiar with data structure algorithms such as queues, stacks, binary trees, etc.</li>" +
        "     <li>Familiar with SQL statement writing.</li>" +
        "     <li>Familiar with basic Linux command operations.</li>" +
        "     <li>Familiar with Spring, ibatis, struts and other basic framework knowledge.</li>" +
        "     <li>Familiar with caching, messaging and other mechanisms.</li>" +/*
        "     <li>了解分布式系统的设计与应用。</li>" +*/
        "     <li>Familiar with basic knowledge of HTML, CSS, JavaScript and corresponding front-end.</li>" +
        "     <li>Familiar with the use of Git and its principles.</li>" +
        "     <li>Familiar with Markdown writing.</li>" +
        " </ul>",


    /**
     * 这里填写你的个人作品展示
     * ["img"，"url", "ProjectName", "brief"]
     * img表示您的作品图片链接，url表示您的项目地址，ProjectName表示您的仓库或作品名称，brief是一句简短的介绍
     * 通过查看实际效果以调整字题长度
     */
    portfolio: [
        ["./images/pro-1.jpg", "https://github.com/19991010wan/Buu-Server", "Campus Forum", "A small program platform serving and students<br>Continuously updated"],
        ["./images/pro-2.jpg", "https://github.com/19991010wan/TriangleinNetwork", "GitHub TriangleinNetwork", "Build a network diagram of github project participants, find out the number of triangles, and discuss the relationship with project quality<br>Continuously updated"],
    ],


    /**
     * 这里填写您的工作经历
     * ["日期"， "工作"， "介绍"]
     * 你可以内嵌HTML标签以排版格式
     */
    work: [
        //如果您内有工作经历，您可以采取下列写法
        ["————————", "", "<p>No papers published yet, continuous update.</p>"]

        /*["2020/7/1 — 2021/8/10", "<br>阎王殿实习生",
            "<p><strong>阎王殿研发部</strong></p>" +
            "<p>随着阴历7月15中元节的到来，阎王殿的任务愈发庞大，我以及我所在小组主要负责阎王谱后台部分，拟在解决千万访问并发问题，经过不械努力，使得产品稳定、高效的运行。</p>" +
            "<p>随着阴历7月15中元节的到来，阎王殿的任务愈发庞大，我以及我所在小组主要负责阎王谱后台部分，拟在解决千万访问并发问题，经过不械努力，使得产品稳定、高效的运行。</p>"
        ],

        ["2020/7/1 — 2021/8/10", "<br>阎王殿实习生",
            "<p><strong>阎王殿研发部</strong></p>" +
            "<p>随着阴历7月15中元节的到来，阎王殿的任务愈发庞大，我以及我所在小组主要负责阎王谱后台部分，拟在解决千万访问并发问题，经过不械努力，使得产品稳定、高效的运行。</p>" +
            "<p>随着阴历7月15中元节的到来，阎王殿的任务愈发庞大，我以及我所在小组主要负责阎王谱后台部分，拟在解决千万访问并发问题，经过不械努力，使得产品稳定、高效的运行。</p>"
        ]*/
    ],

    award: [
        //如果您内有获奖经历，您可以采取下列写法
        // ["————————", "", "<p>暂无论文发表，后续持续更新。</p>"]
        ["<strong>National physics competition: </strong>won the national third prize in 2018"],
        ["<strong>American College Mathematical Modeling Competition: </strong>H award in 2019 and F award in 2020 in MCM/ICM"],
        ["<strong>National Student Mathematical Modeling Competition: </strong>Won the second prize in Beijing in 2019"],
        ["<strong>National University Student Mathematical Competition: </strong>National Third Prize in 2019, National First Prize in 2020"],
        ["<strong>Beijing Outstanding Graduate: </strong>Beijing Outstanding Graduates in 2021"],
        ["<strong>Graduate Student Mathematical Modeling Competition: </strong>Third prize in 2021"],
    ],

    /**
     * 在这里填写您的社交网络平台
     * ["img", "url", "desc"]
     * img是社交平台的图标，在./svg目录下我们已经准备好了 微博、简书、掘金、小红书、知乎、csdn、facebook、github、力扣、CF和qq的图标
     * url是您链接
     * desc是一段描述，将鼠标移入将会显示该描述
     * 建议您放置数量 <= 5
     */
    icon: [
        ["./svg/LeetCode.svg", "https://leetcode.cn/u/wu-xie-ge-tai/", "My LeetCode Home Page"],
        ["./svg/github.svg", "https://github.com/19991010Wan", "My GitHub Home Page"],
        ["./svg/博客.svg", "https://19991010wan.github.io/19991010wan-Blog/", "My Personal Blog"],
        ["./svg/csdn.svg", "https://blog.csdn.net/weixin_44883166?type=blog", "My CSDN Home Page"],
        ["./svg/知乎.svg", "https://www.zhihu.com/people/", "My ZhiHu Home Page"]
    ],



    //这是一些图片链接，建议您仅更改第二个头像图片
    url: [
        //背景图、头像、作品展示背景、其他经历背景
        "./images/home-bg.jpg",
        "./images/avatar.jpg",
    ]

}