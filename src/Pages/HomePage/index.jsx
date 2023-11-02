import React from 'react';
import Navigation from '../../Components/Navigation';
import Banner from '../../Components/Banner';
import WorkPlanCards from '../../Components/WorkPlan';
import { Helmet } from 'react-helmet';
import Stylishly from '../../Components/Stylishly';


const HomePage = () => {
  return (
    <div>
      <Helmet>
        <title>Interno</title>
      </Helmet>
      <Navigation/>
      <Banner/>
      <WorkPlanCards/>
      <Stylishly/>
    </div>
  )
}

export default HomePage