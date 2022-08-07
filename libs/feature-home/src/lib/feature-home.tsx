import { Fragment } from 'react';
import './feature-home.module.less';
import UiHeader from './ui-header/ui-header';
import UiMainContent from './ui-main-content/ui-main-content';

/* eslint-disable-next-line */
export interface FeatureHomeProps { }

export function FeatureHome(props: FeatureHomeProps) {
  return (<>
    <UiHeader></UiHeader>
    <UiMainContent></UiMainContent>
  </>);
}

export default FeatureHome;
