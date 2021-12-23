import cm from './assets/images/CM.png'
import git from './assets/images/git.png'
import asm from './assets/images/asm.png'

let Projects = [
  {
    title: 'ClutterMine',
    image: `${cm}`,
    description: `ClutterMine is a mass garage sale
        business idea where people who want to get rid of, and maybe make a
        little money from items taking up room in their homes, but who lack
        the time/energy to go about posting ads, or even the means to take
        their "junk" to the dump, can put there items on consigment with
        ClutterMine who will do the rest.
        <br /><br />
        ClutterMine will take the "clutter" to
        thier storefront where these items will sit for sale. As soon as the
        items are sold, the customer will recieve the consigment percentage
        that was agreed upon during the onboarding process.
        <br /><br />
        The system behind this idea is being built with Node on the backend, 
        and React Native on the front end. The database is MySQL.`,
  },
  {
    title: `Assembler`,
    image: `${asm}`,
    description: `For my Advanced High Performance Architecture course at UVU we had 
        to build an assembler from the ground up using the language of our choice. 
        This included validation, execution and defining an assembly language. for this
        project I chose to write my assembler in C++.
        <br />
        <br />
        Throughout this course we wrote programs in a unique assembly language, adjusting
        the assembler to support different kinds of functionality as we went. Our final assembly program 
        had to produce the fibonacci sequence. The added challenge was to adjust our assembler to handle
        multithreading. As an end result you could enter in multiple numbers then execute the program which would
        list out the fibinocci sequence up to each entered number in a multithreaded manner. Click 
        <a href="https://github.com/jakepaul9/Assembler" target="_blank" >HERE</a> to see my code.
        `,
  },
]

export default Projects
