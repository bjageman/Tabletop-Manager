import React from 'react'
import { Route, Switch } from 'react-router'

import CampaignCharacters from '.'
import CharacterDetail from './Detail'

export const CharacterRouter = ({ match }) => (
    <div>
        <Switch>
            <Route exact path={match.url} component={CampaignCharacters} />
            <Route path={`${match.url}/:characterId`} component={CharacterDetail} />
        </Switch>
    </div>
)
