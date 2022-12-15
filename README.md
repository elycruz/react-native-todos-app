# react-native-todos-app

Multi-platform, react-native, Todos (example) app.

## Development

### Pre-requisites

The following environment variables are required for the app (can be auto-loaded by adding an '.env' file with the variables, and their values, in it):

```text
@todo
```

## Todos

### Stage 1 - Application Base

- [ ] Add `nextjs` connector to the app.
- [ ] Add apollo connector to next app.
- [ ] Add session management (iron-session, etc.).
- [ ] Add `uuid` usage, for model IDs.
- [x] Choose between LMDB or sqlite, for object store. - For MVP/base app we're going with one LMDB store for each entity table.

## Nice-to-haves

- [ ] Ability to add a parent todo from a todo (whether that todo is currently being edited, or whether from it's listing in an index list).
- [ ] Ability to choose text, html, and/or, markdown for 'description' TextAreas.

## LICENSE 

GPL v3.0+
