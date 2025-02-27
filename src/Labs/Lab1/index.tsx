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

            <div id="wd-tables">
                <h4>Table Tag</h4>
                <table border={1} width="100%">
                    <thead>
                        <tr>
                            <th>Quiz</th>
                            <th>Topic</th>
                            <th>Date</th>
                            <th>Grade</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Q1</td>
                            <td>HTML</td>
                            <td>09/19/24</td>
                            <td>85</td>
                        </tr>
                        <tr>
                            <td>Q2</td>
                            <td>CSS</td>
                            <td>09/26/24</td>
                            <td>90</td>
                        </tr>
                        <tr>
                            <td>Q3</td>
                            <td>JavaScript</td>
                            <td>10/03/24</td>
                            <td>95</td>
                        </tr>
                        <tr>
                            <td>Q4</td>
                            <td>JavaScript</td>
                            <td>10/10/24</td>
                            <td>95</td>
                        </tr>
                        <tr>
                            <td>Q5</td>
                            <td>All learned</td>
                            <td>10/17/24</td>
                            <td>90</td>
                        </tr>
                        <tr>
                            <td>Q6</td>
                            <td>Redux</td>
                            <td>10/31/24</td>
                            <td>100</td>
                        </tr>
                        <tr>
                            <td>Q7</td>
                            <td>Redux</td>
                            <td>11/07/24</td>
                            <td>100</td>
                        </tr>
                        <tr>
                            <td>Q8</td>
                            <td>Node</td>
                            <td>11/14/24</td>
                            <td>80</td>
                        </tr>
                        <tr>
                            <td>Q9</td>
                            <td>Node</td>
                            <td>11/21/24</td>
                            <td>95</td>
                        </tr>
                        <tr>
                            <td>Q10</td>
                            <td>Mongo</td>
                            <td>12/05/24</td>
                            <td>90</td>
                        </tr>
                    </tbody>
                    <tfoot>
                        <tr>
                            <td colSpan={3}>Average</td>
                            <td>92</td>
                        </tr>
                    </tfoot>
                </table>
            </div>

            <div id="wd-images">
                <h4>Image tag</h4>
                Loading an image from the internet:
                <br />
                <img id="wd-starship"
                width="400px" alt=""
                src="https://www.staradvertiser.com/wp-content/uploads/2021/08/web1_Starship-gap2.jpg"
                />
                <br />
                Loading a local image:
                <br />
                <img id="wd-teslabot" src="images/teslabot.jpg" height="200px" alt="" />
            </div>

            <div id="wd-forms">
                <h4>Form Elements</h4>
                <form id="wd-text-fileds">
                <h5>Text Fields</h5>
                <label htmlFor="wd-text-fields-username">Username:</label>
                <input id="wd-text-fields-username" placeholder="jdoe" /> <br />
                <label htmlFor="wd-text-fields-password">Password:</label>
                <input type="password" id="wd-text-fields-password" value="123@#$asd" />
                <br />
                <label htmlFor="wd-text-fields-first-name">First name:</label>
                <input type="text" id="wd-text-fields-first-name" title="John" /> <br />
                <label htmlFor="wd-text-fields-last-name">Last name:</label>
                <input type="text" id="wd-text-fields-last-name" placeholder="Doe"
                value="Wonderland" title="The last name" />
                </form>
            </div>

            <h5>Text boxes</h5>
            <label>Biography:</label><br/>
            <textarea id="wd-textarea" cols={30} rows={10}>"But I must explain to you how all 
                this mistaken idea of denouncing pleasure and praising pain was born 
                and I will give you a complete account of the system, and expound the 
                actual teachings of the great explorer of the truth, the 
                master-builder of human happiness. No one rejects, dislikes, or avoids 
                pleasure itself, because it is pleasure, but because those who do not 
                know how to pursue pleasure rationally encounter consequences that are 
                extremely painful. Nor again is there anyone who loves or pursues or 
                desires to obtain pain of itself, because it is pain, but because 
                occasionally circumstances occur in which toil and pain can procure him 
                some great pleasure. To take a trivial example, which of us ever 
                undertakes laborious physical exercise, except to obtain some advantage 
                from it? But who has any right to find fault with a man who chooses to 
                enjoy a pleasure that has no annoying consequences, or one who avoids a 
                pain that produces no resultant pleasure?"
            </textarea>

            <h5 id="wd-buttons">Buttons</h5>
            <button id="wd-all-good" onClick={() => alert("Life is Good!")} type="button">
            Hello World!
            </button>  

            <h5>File upload</h5>
            <input id="wd-upload" type="file"/>

            <h5 id="wd-radio-buttons">Radio buttons</h5>
            <label>Favorite movie genre:</label><br />
            <input type="radio" name="radio-genre" id="wd-radio-comedy"/>
            <label htmlFor="wd-radio-comedy">Comedy</label><br />
            <input type="radio" name="radio-genre" id="wd-radio-drama"/>
            <label htmlFor="wd-radio-drama">Drama</label><br />
            <input type="radio" name="radio-genre" id="wd-radio-scifi"/>
            <label htmlFor="wd-radio-scifi">Science Fiction</label><br />
            <input type="radio" name="radio-genre" id="wd-radio-fantasy"/>
            <label htmlFor="wd-radio-fantasy">Fantasy</label>

            <h5 id="wd-checkboxes">Checkboxes</h5>
            <label>Favorite movie genre:</label><br/>
            <input type="checkbox" name="check-genre" id="wd-chkbox-comedy"/>
            <label htmlFor="wd-chkbox-comedy">Comedy</label><br/>
            <input type="checkbox" name="check-genre" id="wd-chkbox-drama"/>
            <label htmlFor="wd-chkbox-drama">Drama</label><br/>
            <input type="checkbox" name="check-genre" id="wd-chkbox-scifi"/>
            <label htmlFor="wd-chkbox-scifi">Science Fiction</label><br/>
            <input type="checkbox" name="check-genre" id="wd-chkbox-fantasy"/>
            <label htmlFor="wd-chkbox-fantasy">Fantasy</label>

            <h4 id="wd-dropdowns">Dropdowns</h4>
            <h5>Select one</h5>
            <label htmlFor="wd-select-one-genre"> Favorite movie genre: </label><br/>
            <select id="wd-select-one-genre">
            <option value="COMEDY">Comedy</option>
            <option value="DRAMA">Drama</option>
            <option selected value="SCIFI">
                Science Fiction</option>
            <option value="FANTASY">Fantasy</option>
            </select>
            <h5>Select many</h5>
            <label htmlFor="wd-select-many-genre"> Favorite movie genres: </label><br/>
            <select id="wd-select-many-genre" multiple>
            <option selected value="COMEDY">Comedy</option>
            <option value="DRAMA">Drama</option>
            <option selected value="SCIFI">
                Science Fiction</option>
            <option value="FANTASY">Fantasy</option>
            </select>

            <h4>Other HTML field types</h4>
            <label htmlFor="wd-text-fields-email"> Email: </label>
            <input type="email"
                placeholder="jdoe@somewhere.com"
                id="wd-text-fields-email"/><br/>

            <label htmlFor="wd-text-fields-salary-start"> Starting salary:
            </label>
            <input type="number"
                id="wd-text-fields-salary-start"
                placeholder="1000"
                value="100000"/><br/>

            <label htmlFor="wd-text-fields-rating"> Rating: </label>
            <input type="range" id="wd-text-fields-rating"
                placeholder="Doe"
                max="5"
                value="4"/><br/>

            <label htmlFor="wd-text-fields-dob"> Date of birth: </label>
            <input type="date"
                id="wd-text-fields-dob"
                value="2000-01-21"/><br/>

            <h4>Anchor tag</h4>
            Please
            <a id="wd-lipsum" href="https://ww.lipsum.com">click here</a>
            to get dummy text<br/>

            Please
            <a id="wd-github" href="https://github.com"> click here </a>
            to the code repository on GitHub<br/>
            

        </div>
    );
}