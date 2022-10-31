## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Basic Form

I created this form using React and Tailwind CSS. When the component first renders, the app makes a GET request to the API endpoint and fetches the occupations and states. The reason I did that was because, I needed to show occupations and states as a selectable option in the form.

Then once the form was filled and submitted, the app makes another call, but this time it's a POST request.
