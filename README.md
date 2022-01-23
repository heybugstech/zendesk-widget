# Zendesk Widget

heybugs interface in Zendesk. This interface will help users detect and resolve issues.

### Features:

- Highlight the top 3 similar problem tickets, and button to expand list to 5
- Highlight top 3 similar tickets

### Project structure

- `src` contains the Typescript application code, that will be transpiled into the widget folder
- `widget` contains the code that will be uploaded to Zendesk

### Installing

1. [Install ruby](https://developer.zendesk.com/documentation/apps/getting-started/system-prep-for-app-developers/2-managing-ruby-versions/) and zat gem
2. Install node modules, `npm i`

#### Test

**Manual testing**

1. In your terminal, type `npm run dev:zendesk`
2. Open zendesk (at [d3v-daspu.zendesk.com](d3v-daspu.zendesk.com)) and open a ticket
3. Go to a ticket and append `?zat=true` to url

**No automatic testing**

#### Deploy

N/A
