# Zendesk Support App

### Features:

- Search
- Highlight the top 2 similar problem tickets, and button to expand list to 5
- Highlight top 3 similar tickets

### Develop

1. [Install ruby](https://developer.zendesk.com/documentation/apps/getting-started/system-prep-for-app-developers/2-managing-ruby-versions/) and zat gem

### Test

**Manual testing**

1. In your terminal, type `npm run build && npm run dev:zendesk`
2. Open zendesk (at [d3v-daspu.zendesk.com](d3v-daspu.zendesk.com)) and open a ticket
3. Append `?zat=true` to url

**No automatic testing**

### Deploy

N/A
