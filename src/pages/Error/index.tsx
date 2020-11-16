import React from 'react';
import { navigate } from 'hookrouter';
import s from './Error.module.scss';
import { Button } from '../../components/Button';
import { Layout } from '../../components/Layout';
import TeamRocket from './assets/teamRocket.png';
import { LinkEnum } from '../../routes';

export const ErrorPage = () => {
  return (
    <div className={s.root}>
      <Layout className={s.layout}>
        <div className={s.err}>
          <span className={s.errorText}> 404 </span>
          <div className={s.imagee}>
            <img src={TeamRocket} alt="Cloud PokeBall" />
          </div>
        </div>

        <div className={s.text}>
          <span className={s.errorWhiteText}>The rocket team</span> has won this time.
        </div>
        <Button color="yellow" onClick={() => navigate(LinkEnum.HOME)}>
          Return
        </Button>
      </Layout>
    </div>
  );
};
