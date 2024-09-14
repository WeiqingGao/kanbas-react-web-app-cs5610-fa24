export default function Lab1() {
    return (
        <div id="wd-lab1">
            <h2>Lab 1</h2>
            <h3>HTML Examples</h3>

            <div id="wd-h-tag">
                <h4>Heading Tags</h4>
                Text documents are often broken up into several sections and 
                subsections. Each section is usually prefaced with a short 
                title or heading that attempts to summarize the topic of the 
                section it precedes. For instance this paragraph is preceded 
                by the heading Heading Tags. The font of the section headings 
                are usually larger and bolder than the plain text and their 
                subsection headings. This document uses headings to introduce 
                topics such as HTML Documents, HTML Tags, Heading Tags, etc. 
                HTML heading tags can be used to format plain text so that it 
                renders in a browser as large headings. There are 6 heading 
                tags for different sizes: h1, h2, h3, h4, h5, and h6. 
                Tag h1 is the largest heading and h6 is the smallest heading.                
            </div>

            <div id="wd-p-tag">
                <h4>Paragraph Tag</h4>
                <p id="wd-p-1">
This is the first paragraph. The paragraph tag is used to format
vertical gaps between long pieces of text like this one.

This is the second paragraph. Even though there is a deliberate white
gap between the paragraph above and this paragraph, by default
browsers render them as one contiguous piece of text as shown here on
the right.                    

This is the third paragraph. Wrap each paragraph with the paragraph
tag to tell browsers to render the gaps.
                </p>
                
                <p id="wd-p-2">
This is the first paragraph. The paragraph tag is used to format
vertical gaps between long pieces of text like this one.                    
                </p>

                <p id="wd-p-3">
This is the second paragraph. Even though there is a deliberate white
gap between the paragraph above and this paragraph, by default
browsers render them as one contiguous piece of text as shown here on
the right.  
                </p>

                <p id="wd-p-4">
This is the third paragraph. Wrap each paragraph with the paragraph
tag to tell browsers to render the gaps.                    
                </p>
            </div>

            <div id="wd-lists">
                <h4>List Tags</h4>
                <h5>Ordered List Tag</h5>
                How to make pancakes:
                <ol id="wd-pancakes">
                    <li>Mix dry ingredient.</li>
                    <li>Add wet ingredients.</li>
                    <li>Stir to combine.</li>
                    <li>Heat a skillet or griddle.</li>
                    <li>Pour batter onto the skillet.</li>
                    <li>Cook until bubbly on top.</li>
                    <li>Flip and cook the other side.</li>
                    <li>Serve and enjoy!</li>
                </ol> 
                My favorite recipe:
                <ol id="wd-my-favorite-recipe">
                    <li>Cut the ribs into 4cm pieces.</li>
                    <li>Place them into a pot of cold water.</li>
                    <li>Add green onions, ginger, and cooking wine.</li>
                    <li>Heat to boil, wait for 3 minutes.</li>
                    <li>Turn off the heat and take the ribs out of the pot.</li>
                    <li>Crush the rock sugar and place into a clean pot.</li>
                    <li>Heat over low heat until the sugar melts and starts bubbling.</li>
                    <li>Add the ribs and stir-fry 30 seconds.</li>
                    <li>Add enough boiling water to cover all the ribs.</li>
                    <li>Add soy sauce, vinegar, granulated sugar, oyster sauce, bay leaves, and star anise.</li>
                    <li>Cover with a lid and simmer over low heat for 30 minutes.</li>
                    <li>Add salt, then increase the heat to high and reduce the sauce to desired consistency.</li>
                </ol>

                <h5>Unordered List Tag</h5>
                My favorite books (in no particular order)
                <ul id="wd-my-books">
                    <li>Dune</li>
                    <li>Lord of the Rings</li>
                    <li>Ender's Game</li>
                    <li>Red Mars</li>
                    <li>The Forever Var</li>
                </ul>
                Your favorite books (in no particular order)
                <ul id="wd-your-books">
                    <li>The Think Tank</li>
                    <li>Silent Spring</li>
                    <li>Romance of the Three Kingdoms</li>
                </ul>
            </div>
        </div>
    );
}