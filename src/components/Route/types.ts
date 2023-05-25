import { FC } from 'react';
import { Paths } from '@utils/constants/routes'

export interface IPrivateRouteProps {
  component: FC;
  redirect?: Paths;
}
