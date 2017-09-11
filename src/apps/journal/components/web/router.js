import React from 'react'
import { Route, Switch } from 'react-router'

import Journal from '.'
import JournalDetail from './Detail/'
import CreateEntryEditor from './Create/Editor'
export const JournalRouter = ({ match }) => (
    <div>
        <Switch>
        <Route exact path={match.url} component={Journal} />
        <Route exact path={`${match.url}/create`} component={CreateEntryEditor} />
        <Route path={`${match.url}/:journalId`} component={JournalDetail} />
        </Switch>
    </div>
)
