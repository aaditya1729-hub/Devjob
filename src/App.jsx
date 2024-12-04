import React from 'react'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
// import Navbar from './Components/Navbar'
// import Hero from './Components/Hero'
// import HomeCards from './Components/HomeCards'
// import JobListings from './Components/JobListings'
// import ViewAllJobs from './Components/ViewAllJobs'
import MainLayout from './Layouts/MainLayout';
import HomePage from './Pages/HomePage';
import JobsPage from './Pages/JobsPage'
import NotFound from './Pages/NotFound'
import AddJobPage from './Pages/AddJobPage';
import EditJobPage from './Pages/EditJobPage';
import JobPage, {jobLoader} from './Pages/JobPage';


const App = () => {
  
  // ADD JOB
  const addJob = async (newJob) => {
    const res = await fetch('/api/jobs', {
      method: 'POST',
      headers: {
        'Content-type' : 'application/json'
      },
      body: JSON.stringify(newJob)
    });
    return;
  }

  // DELETE JOB
  const deleteJob = async (id) => {
    const res = await fetch(`/api/jobs/${id}`, {
      method: 'DELETE',
    });
    return;
  }

  // UPDATE JOB
  const updateJob = async (job) => {
    const res = await fetch(`/api/jobs/${job.id}`, {
      method: 'PUT',
      headers: {
        'Content-type' : 'application/json'
      },
      body: JSON.stringify(job)
    });
    return;
  }

  const router = createBrowserRouter(
    createRoutesFromElements(
      // every layout inside this will use it as well 
    <Route path='/' element={<MainLayout/>}>
      <Route index element={<HomePage />} />
      <Route path='/jobs' element={<JobsPage />} />
      <Route path='/add-job' element={<AddJobPage addJobSumbit={ addJob } />} />
      <Route path='/edit-job/:id' element={<EditJobPage updateJobSumbit={ updateJob } />} loader={jobLoader}/>
      <Route path='/jobs/:id' element={<JobPage deleteJob={ deleteJob }/>} loader={jobLoader}/>
      <Route path='*' element={<NotFound />} />
    </Route>
  )
  );
  
  return (
    <RouterProvider router = {router}/>
  );
};

export default App
