import React from 'react';
import Navigation from '../../Components/Navigation';
import Banner from '../../Components/Banner';
import WorkPlanCards from '../../Components/WorkPlan';
import { Helmet } from 'react-helmet';


const HomePage = () => {
  return (
    <div>
      <Helmet>
        <title>Interno</title>
      </Helmet>
      <Navigation/>
      <Banner/>
      <WorkPlanCards/>
    </div>
  )
}

export default HomePage