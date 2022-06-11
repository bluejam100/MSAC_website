# McGill Student's Anime Club (MSAC) Website

The MSAC website is another medium through which potential members can get to know MSAC and through which current members can access bonus features.  It contains a :

1. FAQ page to answer any questions members may have. 

2. Contact Us page so that members can ask questions and send feedback, information or complaints to the Executive and Moderation team. Responses to the form are sent to a MSAC discord channel that is only visible to the Executive and Moderation team. 

3. Newsletter page so that new members will have access to an archive of previous newsletters. The newsletter page is linked to the club's mailchimp account.

4. Art page so that art pieces of our mascot can be shared to everyone. The art page function as an image gallery.




## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change. 


### How to edit 
#### Newsletter
For a newsletter link to show up in the "Most Recent e-mails" section, the newsletter needs to be manually added to the designated folder in the MSAC mailchimp account. The code for this section is set to show only the 5 most recent newsltetter. To change the number of newsletter being shown, search the comment 'Most recent mails', find the attribute 'show=5' and change the number to the desired one.

To create a new category or understand the process better, you can follow this tutorial : https://mailchimp.com/en-ca/help/add-an-email-campaign-archive-to-your-website/ 


#### Art-gallery
Art pieces are shown in chronological order. The most recent images are at the top, while the oldest are at the bottom of the webpage. The code follows the same logic. 

To add a recent image, search the id 'animated-thumbnails'. Add the code for the image under the comment. The code for images should follow this format. 

```
<a href=[add the code for your image here].png" class="gallery-item">  
        
        <img src="[add the code for your image here].png" alt="[Add the description as well as the name of the artist here]" class="img-responsive"  />
    
</a>  
    
```


## What I've learned 

This is my first coding project. I started it after finishing the html and basic css course on freecodecamp. I wanted to apply my knowledge on a real project in order to understand what I needed to focus on in my future learning.

I found websites I thought were well designed and tried to reproduce them. I wrote the html, css as well as simple javascript lines. Abu, my advisor for this project, wrote the rest of the javascript functions and provided me feedback on how to finetune the website. On that note, I want to thank Abu as well as the other more experienced coders who provided me with many feedback and guided me in this project.  

What I learned is that google and youtube tutorials are my best friend. On a more serious note, I now have a better idea on what I want to learn in order to improve.

1. Learn how to use a webdesign application such as Figma. Having a visual of what my website should look like, will help me plan the structure of my code.
2. Listen to the reasoning of more experienced coders as they code. This will help me develop my own reasoning and understand how to structure my coding in a more efficient way.
3. Learn Javascript in order to implement more complex features to my projects
4. Learn a library such as React in order to save time in the implementation of complex features.

All in all, this project took me three weeks to complete. I have been told that it is possible reproduce my website in 30 minutes. Thus, my goal and the marker of my improvement will be to reduce the time it takes for me to build a project.  


## License
[MIT](https://choosealicense.com/licenses/mit/)