
# TLDR

Input a link to a news article and retrieve summary
[DEMO](https://stark-gorge-51816.herokuapp.com/)

instructions:
1. `yarn install`
2. `yarn build`
3. go to `http://localhost:3000/` 

If you just want to use this in your command line, the code is in `auto.js` just set a shortcut in you `bash_profile` to point to it and pass the link as an argument. example: 

    alias summarize='node ~/path/to/tldr-articles/auto.js'
and in your terminal you would run:

    summarize http://linktoarticle.com/etc/etc/etc
